package com.skill_swap.seguridad.filtro;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.skill_swap.seguridad.SimpleGrantedAuthorityJsonCreator;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import static com.skill_swap.seguridad.TokenJwtConfig.*;

public class JwtValidationFilter extends BasicAuthenticationFilter {

    public JwtValidationFilter(AuthenticationManager authenticationManager) {
        super(authenticationManager);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        String header = request.getHeader(HEADER_AUTHORIZATION);
        if (header == null || !header.startsWith(PREFIX_TOKEN)) {
            chain.doFilter(request, response);
            return;
        }

        String token = header.replace(PREFIX_TOKEN, "");

        try {
            System.out.println("TRY - Start");

            // Imprimir token antes de procesarlo
            System.out.println("Token: " + token);

            // Intentar analizar el token
            Claims claims = Jwts.parser().verifyWith(SECRET_KEY).build().parseSignedClaims(token).getPayload();
            System.out.println("Claims parsed successfully");
            System.out.println(claims);

            // Obtener y imprimir el correo electrónico del token
            String email = claims.getSubject();
            System.out.println("Email: " + email);

            // Obtener y imprimir la reclamación de autoridades
            Object authoritiesClaim = claims.get("authorities");
            System.out.println("Authorities Claim: " + authoritiesClaim);

            // Procesar autoridades
            Collection<? extends GrantedAuthority> authorities = Arrays.asList(
                new ObjectMapper()
                        .addMixIn(SimpleGrantedAuthority.class, SimpleGrantedAuthorityJsonCreator.class)
                        .readValue(authoritiesClaim.toString().getBytes(), SimpleGrantedAuthority[].class)
            );
            System.out.println("Authorities: " + authorities);

            // Crear el token de autenticación y establecer el contexto de seguridad
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                email, null, authorities
            );
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            System.out.println("Authentication token set successfully");

            // Continuar con el filtro de la cadena
            chain.doFilter(request, response);
            System.out.println("TRY - End");
        } catch (JwtException e) {
            System.out.println("CATCH");

            // Imprimir el mensaje de excepción
            System.out.println("JwtException: " + e.getMessage());

            Map<String, String> body = new HashMap<>();
            body.put("error", e.getMessage());
            body.put("message", "El Token JWT no es válido");

            response.getWriter().write(new ObjectMapper().writeValueAsString(body));
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        }




    }
}
