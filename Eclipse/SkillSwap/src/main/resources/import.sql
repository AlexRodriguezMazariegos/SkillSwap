--Usuarios
INSERT INTO usuario (nombre, apellido, email, foto_de_perfil, contrasena, url_git_hub, enabled, puesto_empresa) VALUES ('Juan', 'Perez', 'juan@eviden.com', 'user1', '1111', 'https://github.com/juan', true, 'Ingeniero');
INSERT INTO usuario (nombre, apellido, email, foto_de_perfil, contrasena, url_git_hub, enabled, puesto_empresa) VALUES ('Maria', 'Lopez', 'maria@eviden.com', 'user2', '2222', 'https://github.com/maria', true, 'Diseñador');
INSERT INTO usuario (nombre, apellido, email, foto_de_perfil, contrasena, url_git_hub, enabled, puesto_empresa) VALUES ('Luisa', 'Gomez', 'luisa@eviden.com', 'user3', '3333', 'https://github.com/luisa', true, 'Analista');
INSERT INTO usuario (nombre, apellido, email, foto_de_perfil, contrasena, url_git_hub, enabled, puesto_empresa) VALUES ('Laura', 'Martinez', 'laura@eviden.com', 'user4', '4444', 'https://github.com/laura', true, 'Ingeniero');
INSERT INTO usuario (nombre, apellido, email, foto_de_perfil, contrasena, url_git_hub, enabled, puesto_empresa) VALUES ('Sofia', 'Gonzalez', 'sofia@eviden.com', 'user5', '5555', 'https://github.com/sofia', true, 'Programador');
INSERT INTO usuario (nombre, apellido, email, foto_de_perfil, contrasena, url_git_hub, enabled, puesto_empresa) VALUES ('Pedro', 'Hernandez', 'pedro@eviden.com', 'user6', '6666', 'https://github.com/pedro', true, 'Analista');
INSERT INTO usuario (nombre, apellido, email, foto_de_perfil, contrasena, url_git_hub, enabled, puesto_empresa) VALUES ('Ana', 'Rodriguez', 'ana@eviden.com', 'user7', '7777', 'https://github.com/ana', true, 'Desarrollador');
INSERT INTO usuario (nombre, apellido, email, foto_de_perfil, contrasena, url_git_hub, enabled, puesto_empresa) VALUES ('Marta', 'Fernandez', 'marta@eviden.com', 'user8', '8888', 'https://github.com/marta', true, 'Diseñador');
INSERT INTO usuario (nombre, apellido, email, foto_de_perfil, contrasena, url_git_hub, enabled, puesto_empresa) VALUES ('Elena', 'Perez', 'elena@eviden.com', 'user9', '9999', 'https://github.com/elena', true, 'Analista');
INSERT INTO usuario (nombre, apellido, email, foto_de_perfil, contrasena, url_git_hub, enabled, puesto_empresa) VALUES ('Carmen', 'Ruiz', 'carmen@eviden.com', 'user10', '2020', 'https://github.com/carmen', true, 'Programador');
INSERT INTO usuario (nombre, apellido, email, foto_de_perfil, contrasena, url_git_hub, enabled, puesto_empresa) VALUES ('Sara', 'Sanchez', 'sara@eviden.com', 'user11', '3030', 'https://github.com/sara', true, 'Analista');
INSERT INTO usuario (nombre, apellido, email, foto_de_perfil, contrasena, url_git_hub, enabled, puesto_empresa) VALUES ('Lucia', 'Torres', 'lucia@eviden.com', 'user12', '4040', 'https://github.com/lucia', true, 'Desarrollador');
INSERT INTO usuario (nombre, apellido, email, foto_de_perfil, contrasena, url_git_hub, enabled, puesto_empresa) VALUES ('Paula', 'Diaz', 'paula@eviden.com', 'user13', '5050', 'https://github.com/paula', true, 'Diseñador');
INSERT INTO usuario (nombre, apellido, email, foto_de_perfil, contrasena, url_git_hub, enabled, puesto_empresa) VALUES ('Eva', 'Gutierrez', 'eva@eviden.com', 'user14', '6060', 'https://github.com/eva', true, 'Analista');
INSERT INTO usuario (nombre, apellido, email, foto_de_perfil, contrasena, url_git_hub, enabled, puesto_empresa) VALUES ('Juana', 'Gutierrez', 'juana@eviden.com', 'user15', '6060', 'https://github.com/juana', true, 'Analista');


--Rol
INSERT INTO rol (id, name) VALUES (NULL, 'ROLE_USER');
INSERT INTO rol (id, name) VALUES (NULL, 'ROLE_ADMIN');


--Articulos

-- Usuario 1
INSERT INTO `articulo` (`id`, `usuario`, `contenido`, `titulo`, `fecha_publicacion`, `descripcion`) VALUES (NULL, '1', 'Cómo funciona Blackbox AI. Qué es BlackboxBlackbox es una herramienta de inteligencia artificial que te ayuda a encontrar y usar fragmentos de código de una manera eficiente. Así, según un programador está trabajando, tendrá sugerencias para poder completar las tareas que está realizando. Por lo tanto, esta IA no va a escribir código por ti. Simplemente va a hacer un seguimiento de lo que estás programando, y te lanzará ejemplos y sugerencias para ayudarte a terminar los fragmentos de código del programa en el que estás trabajando. Esta herramienta ofrece distintas funciones para programadores. Por lo tanto, no es tanto un programa dirigido a una finalidad completa, sino una navaja suiza con varias soluciones basadas en inteligencia artificial para ayudar a programadores. Blackbox tiene soporte para más de 20 lenguajes de programación. Entre ellos se incluyen los más populares, como Python, JavaScript, TypeScript, Go o Ruby entre otros. Esto te da bastante flexibilidad a la hora de usarlo, y con sus funciones te ayudará tanto a aprender a programar como a agilizar tus procesos. Por último, debes saber que Blackbox es una herramienta de pago, que ofrece tres suscripciones diferentes. La primera es la de estudiantes, que cuesta 4 dólares al mes con 1.000 autocompletados y 1.000 preguntas al chat. Luego, tienes la versión PRO de 8 dólares al mes, y la de equipos de 10 dólares al mes. Qué herramientas ofrece Chat IA La primera de las herramientas que ofrece Blackbox es la del autocompletado de código. Con esta herramienta, tendrás las sugerencias para completar el código que estés realizando, sugiriéndote maneras de autocompletar el elemento en el que estás. Blackbox también tiene un chat de inteligencia artificial. Se trata de una especie de ChatGPT al que le puedes hacer preguntas relacionadas con programación y código. Vamos, que en vez de buscar cosas en Internet para el código en el que estás trabajando, puedes hacerle preguntas o pedirle ejemplos a una IA. También tienes sus Readme generator y AI Commit. Estos te ayudan en primer lugar a crear un archivo Readme para tu código, y también a generar mensajes en los que explicas qué cambios has hecho en un código en el caso de que estés trabajando de forma colaborativa. Otra de las herramientas es el Diff. Lo que hace es monitorizar a nivel local todos los cambios que haces en el código. A nivel local quiere decir que no se envía información a los servidores de la empresa. ¿Y para qué? Pues para poder deshacer los cambios que quieras y volver a versiones anteriores de tu código. Cómo funciona Blackbox Lo primero que tienes que hacer para usar Blackbox es registrarte en su página web, que es useblackbox.io. Una vez dentro, verás los distintos planes que ofrece, y elegirás uno de ellos pudiendo recurrir a su prueba gratuita. Luego, la función de chat puedes utilizarla directamente desde la web, por lo que la experiencia en este caso es similar a ChatGPT. Para lo demás, vas a poder descargar su extensión para el navegador que quieras, o integrarlo en tu IDE favorito, como Visual Studio Code. Cuando tengas bajada la extensión y configurada su integración con la IDE que hayas elegido, entonces ya podrás empezar a utilizar los recursos de esta plataforma. Cuando estés programando, podrás usar su cuadro de búsqueda para ver recomendaciones y sugerencias de código, y con solo pulsar en uno se copiará en el portapapeles.', 'Blackbox AI: qué es y qué herramientas ofrece esta inteligencia artificial que te ayuda a programar completando código 1', CURRENT_TIMESTAMP(), 'Te explicamos cómo funciona esta herramienta basada en inteligencia artificial que te ofrece varios recursos para ayudarte a programar.');
-- Usuario 2
INSERT INTO `articulo` (`id`, `usuario`, `contenido`, `titulo`, `fecha_publicacion`, `descripcion`) VALUES (NULL, '2', 'React (también llamada React.js o ReactJS) es una biblioteca JavaScript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Mantenida por Facebook y la comunidad de software libre, React es utilizada por una amplia gama de empresas y proyectos para construir interfaces de usuario dinámicas y eficientes. Desde su lanzamiento inicial en mayo de 2013, React ha experimentado una evolución constante, introduciendo características como React Native para el desarrollo de aplicaciones móviles nativas, y React Fiber, una nueva arquitectura interna para la renderización más eficiente. Su crecimiento ha sido impulsado por una comunidad activa de desarrolladores y una serie de conferencias y eventos centrados en su adopción y mejora continua.', 'React: Una visión general y su evolución', CURRENT_TIMESTAMP(), 'Explora el viaje de React desde su creación hasta su estado actual como una de las bibliotecas JavaScript más influyentes en el desarrollo web moderno.');
-- Usuario 
INSERT INTO `articulo` (`id`, `usuario`, `contenido`, `titulo`, `fecha_publicacion`, `descripcion`) VALUES (NULL, '3', 'Angular (también conocido como Angular 2+ o Angular 2) es un framework de aplicaciones web desarrollado en TypeScript y mantenido por Google. Se destaca por su capacidad para crear y mantener aplicaciones de una sola página de manera eficiente y escalable. Con características como la generación de código optimizado, la división de código para cargas rápidas y las herramientas de productividad como Angular CLI, se ha convertido en una opción popular para desarrolladores en todo el mundo. Además, Angular ofrece soporte para pruebas unitarias y end-to-end, lo que facilita la creación de aplicaciones robustas y fiables. Su arquitectura modular y su enfoque en el rendimiento lo hacen ideal para proyectos de cualquier tamaño. Descubre en este artículo las principales características y ventajas que hacen de Angular una opción atractiva para el desarrollo web moderno.', 'Angular: Características y ventajas', CURRENT_TIMESTAMP(), 'Explora las características esenciales y las ventajas destacadas de Angular, el framework de aplicaciones web desarrollado por Google, que ofrece una solución poderosa y escalable para el desarrollo de aplicaciones web modernas.');
-- Usuario 4
INSERT INTO `articulo` (`id`, `usuario`, `contenido`, `titulo`, `fecha_publicacion`, `descripcion`) VALUES (NULL, '4', 'SQL (Structured Query Language) es un lenguaje específico de dominio para administrar y recuperar información de sistemas de gestión de bases de datos relacionales. Su diseño está basado en el álgebra y el cálculo relacional, permitiendo realizar consultas de forma sencilla. Desde su creación en 1974, SQL se ha convertido en el estándar para interactuar con bases de datos, siendo revisado y ampliado a lo largo del tiempo con nuevas versiones como SQL:2016. Su sintaxis incluye comandos para la definición, manipulación y control de datos, ofreciendo también optimización para mejorar el rendimiento de las consultas.', 'SQL: Lenguaje de consulta estructurada', '2024-05-16', 'Exploración concisa del lenguaje SQL, desde su concepción en 1974 hasta su evolución como estándar para la gestión de bases de datos relacionales.');
-- Usuario 5
INSERT INTO `articulo` (`id`, `usuario`, `contenido`, `titulo`, `fecha_publicacion`, `descripcion`) VALUES (NULL, '5', 'MongoDB (del inglés humongous, "enorme") es un sistema de base de datos NoSQL, orientado a documentos y de código abierto. En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales, MongoDB guarda estructuras de datos BSON (una especificación similar a JSON) con un esquema dinámico, haciendo que la integración de los datos en ciertas aplicaciones sea más fácil y rápida. MongoDB es una base de datos adecuada para su uso en producción y con múltiples funcionalidades. Esta base de datos se utiliza mucho en la industria, contando con implementaciones en empresas como MTV Network, Craigslist, Foursquare. El código fuente está disponible para los sistemas operativos Windows, GNU/Linux, OS X y Solaris.', 'MongoDB: Sistema de base de datos NoSQL', '2024-05-16', 'Exploración del sistema de base de datos NoSQL MongoDB, destacando su enfoque en documentos y su amplia adopción en la industria.');
-- Usuario 6
INSERT INTO `articulo` (`id`, `usuario`, `contenido`, `titulo`, `fecha_publicacion`, `descripcion`) VALUES (NULL, '6', 'Testing con JUnit:## Introducción al testing con JUnitJUnit es un framework de testing para Java que permite crear y ejecutar pruebas unitarias de forma automatizada. Fue creado por Kent Beck y Erich Gamma en 1997 y se ha convertido en uno de los frameworks de testing más populares y utilizados en el mundo del desarrollo de software en Java.Las pruebas unitarias son una parte fundamental del desarrollo de software, ya que permiten verificar el correcto funcionamiento de pequeñas unidades de código (métodos o clases) de forma aislada. Esto ayuda a detectar y corregir errores de manera temprana en el proceso de desarrollo, lo que se traduce en un código más robusto y confiable.JUnit proporciona una estructura clara y sencilla para escribir y ejecutar pruebas unitarias, lo que facilita su adopción y uso en proyectos de desarrollo de software de cualquier tamaño.## Conceptos básicos de JUnit### AnotacionesJUnit utiliza anotaciones para marcar los métodos que se consideran pruebas unitarias. Las anotaciones más comunes son:- `@Test`: Indica que el método es una prueba unitaria.- `@Before` y `@After`: Se utilizan para marcar métodos que se ejecutan antes y después de cada prueba, respectivamente. Estos métodos suelen utilizarse para configurar y limpiar el entorno de pruebas.- `@BeforeClass` y `@AfterClass`: Similares a `@Before` y `@After`, pero se ejecutan una sola vez antes y después de todas las pruebas de la clase, respectivamente.- `@Ignore`: Permite ignorar una prueba unitaria sin eliminarla del código.### AsercionesLas aserciones son declaraciones que verifican si una condición es verdadera o falsa. JUnit proporciona una serie de métodos estáticos para realizar aserciones, como `assertEquals()`, `assertTrue()`, `assertFalse()`, `assertNull()`, entre otros. Si una aserción falla, JUnit lanza una excepción y la prueba se considera fallida.### Ciclo de vida de una pruebaCada prueba unitaria en JUnit sigue un ciclo de vida predefinido:1. Configuración: Se ejecuta el método marcado con `@Before` o `@BeforeClass`.2. Ejecución de la prueba: Se ejecuta el método marcado con `@Test`.3. Verificación: Se ejecutan las aserciones para verificar el resultado esperado.4. Limpieza: Se ejecuta el método marcado con `@After` o `@AfterClass`.### RunnersLos runners en JUnit son clases que se encargan de ejecutar las pruebas unitarias. JUnit proporciona varios runners predefinidos, como `BlockJUnit4ClassRunner`, `JUnit4` y `Suite`. También es posible crear runners personalizados para adaptarlos a necesidades específicas.## Escribiendo pruebas con JUnit### Estructura de una prueba unitariaUna prueba unitaria típica en JUnit tiene la siguiente estructura:```javapublic class MiClaseTest {@Testpublic void testMiMetodo() {// Configuración// Ejecución del método a probar// Verificación del resultado esperado}}```En este ejemplo, `MiClaseTest` es la clase de prueba que contiene una prueba unitaria llamada `testMiMetodo()`. La anotación `@Test` indica que este método es una prueba.### Configuración y limpiezaPara configurar el entorno de pruebas y limpiar después de cada prueba, se utilizan los métodos marcados con `@Before` y `@After`, respectivamente:```javapublic class MiClaseTest {private MiClase objeto;@Beforepublic void setUp() {objeto = new MiClase();}@Testpublic void testMiMetodo() {// Ejecución del método a probar// Verificación del resultado esperado}@Afterpublic void tearDown() {objeto = null;}}```En este ejemplo, el método `setUp()` se ejecuta antes de cada prueba para crear una instancia de `MiClase`, y el método `tearDown()` se ejecuta después de cada prueba para limpiar el objeto.### AsercionesLas aserciones se utilizan para verificar el resultado esperado de una prueba. JUnit proporciona varios métodos estáticos para realizar aserciones, como `assertEquals()`, `assertTrue()`, `assertFalse()`, `assertNull()`, entre otros:```javapublic class MiClaseTest {@Testpublic void testMiMetodo() {// Ejecución del método a probarint resultado = objeto.miMetodo();// Verificación del resultado esperadoassertEquals(10, resultado);}}```En este ejemplo, se utiliza `assertEquals()` para verificar que el resultado del método `miMetodo()` es igual a 10.### Pruebas parametrizadasJUnit permite crear pruebas parametrizadas, donde se ejecuta la misma prueba con diferentes conjuntos de datos. Esto se logra utilizando la anotación `@RunWith(Parameterized.class)` y creando un método que devuelva los parámetros de prueba:```javapublic class MiClaseTest {private int entrada;private int resultadoEsperado;public MiClaseTest(int entrada, int resultadoEsperado) {this.entrada = entrada;this.resultadoEsperado = resultadoEsperado;}@Parameterized.Parameterspublic static Collection<Object[]> datos() {return Arrays.asList(new Object[][] {{1, 2}, {2, 4}, {3, 6}});}@Testpublic void testMiMetodo() {// Ejecución del método a probarint resultado = objeto.miMetodo(entrada);// Verificación del resultado esperadoassertEquals(resultadoEsperado, resultado);}}```En este ejemplo, la prueba `testMiMetodo()` se ejecutará tres veces, una vez con cada conjunto de datos definido en el método `datos()`.## Ejecutando pruebas con JUnit### Desde un IDELa mayoría de los IDEs populares, como Eclipse e IntelliJ IDEA, tienen soporte integrado para JUnit. Esto permite ejecutar pruebas unitarias directamente desde el IDE, ver los resultados y depurar fácilmente en caso de fallas.### Desde la línea de comandosJUnit también puede ejecutarse desde la línea de comandos utilizando el comando `java -jar junit-platform-console-standalone.jar`. Este comando permite ejecutar pruebas unitarias y generar informes de resultados.### Integración con herramientas de construcciónJUnit se integra fácilmente con herramientas de construcción como Maven y Gradle. Estas herramientas permiten configurar y ejecutar pruebas unitarias como parte del proceso de construcción del proyecto.## Buenas prácticas para escribir pruebas con JUnit- Mantén las pruebas simples y enfocadas en una sola funcionalidad.- Utiliza nombres descriptivos para las pruebas que indiquen claramente lo que se está probando.- Escribe pruebas antes de implementar la funcionalidad (desarrollo guiado por pruebas o TDD).- Asegúrate de que cada prueba sea independiente y no dependa de otras pruebas.- Utiliza datos de prueba realistas y cubre casos de prueba relevantes.- Mantén las pruebas actualizadas a medida que el código evoluciona.- Ejecuta las pruebas regularmente durante el desarrollo para detectar regresiones temprano.- Integra las pruebas unitarias con otras técnicas de testing, como pruebas de integración y pruebas de sistema.## ConclusiónJUnit es una herramienta poderosa y flexible para escribir y ejecutar pruebas unitarias en proyectos de desarrollo de software en Java. Su estructura clara y sencilla, junto con su amplia adopción en la comunidad de desarrolladores Java, lo convierten en una opción ideal para implementar una estrategia de testing efectiva.Al escribir pruebas unitarias con JUnit, se pueden detectar y corregir errores de manera temprana, mejorar la calidad del código y facilitar el mantenimiento a largo plazo de los proyectos de software. Además, JUnit se integra fácilmente con otras herramientas y flujos de trabajo de desarrollo, lo que lo convierte en una pieza fundamental en el ecosistema de testing de Java.', 'Texto sobre testing con JUnit', '2024-05-16', 'Artículo sobre testing con JUnit en Java.')-- Usuario 7
-- Usuario 7
INSERT INTO `articulo` (`id`, `usuario`, `contenido`, `titulo`, `fecha_publicacion`, `descripcion`) VALUES (NULL, '7', 'Spring Framework\n\nInformación general\nTipo de programa\tmarco de referencia para aplicaciónes móviles web\nDesarrollador\tSpringSource\nLanzamiento inicial\t16 de noviembre de 2002\nLicencia\tApache License 2.0\nEstado actual\tActivo\nInformación técnica\nProgramado en\t\nJava\nKotlin\nGroovy\nPlataformas admitidas\tMáquina virtual java\nVersiones\nÚltima versión estable\t6.0.2 ( 24 de noviembre de 2022 (1 año, 5 meses y 21 días)1​)\nEnlaces\nSitio web oficial\nRepositorio de código\n[editar datos en Wikidata]\nSpring es un framework para el desarrollo de aplicaciones y contenedor de inversión de control, de código abierto para la plataforma Java.2​\n\nLa primera versión fue escrita por Rod Johnson, quien lo lanzó junto a la publicación de su libro Expert One-on-One J2EE Design and Development (Wrox Press, octubre de 2002). El framework fue lanzado inicialmente bajo la licencia Apache 2.0 en junio de 2003. El primer gran lanzamiento fue la versión 1.0, que apareció en marzo de 2004 y fue seguida por otros hitos en septiembre de 2004 y marzo de 2005. La versión 1.2.6 de Spring Framework obtuvo reconocimientos Jolt Awards y Jax Innovation Awards en 2006.3​4​ Spring Framework 2.0 fue lanzada en 2006, la versión 2.5 en noviembre de 2007, Spring 3.0 en diciembre de 2009 y Spring 3.1 dos años más tarde.5​ El inicio del desarrollo de la versión 4.0 fue anunciado en enero de 2013.6​ La versión actual es la 5.1.6.1​\n\nSi bien las características fundamentales de Spring Framework pueden ser usadas en cualquier aplicación desarrollada en Java, existen variadas extensiones para la construcción de aplicaciones web sobre la plataforma Java EE. A pesar de que no impone ningún modelo de programación en particular, este framework se ha vuelto popular en la comunidad al ser considerado un complemento al modelo EJB (Enterprise JavaBean).\n\nHistoria\nLos primeros componentes de lo que se ha convertido en Spring Framework fueron escritos por Rod Johnson en el año 2000, mientras trabajaba como consultor independiente para sus clientes en la industria financiera en Londres. Mientras escribía el libro Expert One-on-one J2EE Design And Development (Programmer to programmer), Rod amplió su código para sintetizar su visión acerca de cómo las aplicaciones que trabajan con varias partes de la plataforma J2EE podían llegar a ser más simples y más consistentes que aquellas que los desarrolladores y compañías estaban usando por aquel entonces.\n\nEn el año 2001 los modelos dominantes de programación para aplicaciones basadas en web eran ofrecidas por el API Java Servlet y los Enterprise JavaBeans, ambas especificaciones creadas por Sun Microsystems en colaboración con otros distribuidores y partes interesadas que disfrutaban de gran popularidad en la comunidad Java. Las aplicaciones que no eran basadas en web, como las aplicaciones basadas en cliente o aplicaciones en batch, podían ser escritas con base en herramientas y proyectos de código abierto o comerciales que proveyeran las características requeridas para aquellos desarrollos.\n\nFinalmente, tras publicar su libro en 2002, Rod Johnson presentó por primera vez su código del framework de Java Interface 21 que vendría siendo la base de framework spring7​. Se formó un pequeño equipo de desarrolladores que esperaba trabajar en extender el framework y un proyecto fue creado en Sourceforge en febrero de 2003. Después de trabajar en su desarrollo durante más de un año lanzaron una primera versión (versión 1.0) en marzo de 2004. Después de este lanzamiento, Spring ganó mucha popularidad en la comunidad Java, debido en parte al uso de Javadoc y de una documentación de referencia por encima del promedio de un proyecto de código abierto.\n\nSin embargo, Spring Framework también fue duramente criticado en 2004 y sigue siendo el tema de acalorados debates. Al tiempo en que se daba su primer gran lanzamiento muchos desarrolladores y líderes de opinión vieron a Spring como un gran paso con respecto al modelo de programación tradicional; esto era especialmente cierto con respecto a Enterprise JavaBeans. Una de las metas de diseño de Spring Framework es su facilidad de integración con los estándares J2EE y herramientas comerciales existentes. Esto quita en parte la necesidad de definir sus características en un documento de especificación elaborado por un comité oficial y que podría ser criticado.\n\nSpring Framework hizo que aquellas técnicas que resultaban desconocidas para la mayoría de programadores se volvieran populares en un periodo muy corto de tiempo. El ejemplo más notable es la inversión de control. En el año 2004, Spring disfrutó de unas altísimas tasas de adopción y al ofrecer su propio framework de programación orientada a aspectos (aspect-oriented programming, AOP) consiguió hacer más popular su paradigma de programación en la comunidad Java.[cita requerida]\n\nEn 2005 Spring superó las tasas de adopción del año anterior como resultado de nuevos lanzamientos y más características fueron añadidas. El foro de la comunidad formada alrededor de Spring Framework (The Spring Forum) que arrancó a finales de 2004 también ayudó a incrementar la popularidad del framework y desde entonces ha crecido hasta llegar a ser la más importante fuente de información y ayuda para sus usuarios.\n\nMódulos\nSpring Framework comprende diversos módulos que proveen un rango de servicios:\n\nContenedor de inversión de control: permite la configuración de los componentes de aplicación y la administración del ciclo de vida de los objetos Java, se lleva a cabo principalmente a través de la inyección de dependencias.\nProgramación orientada a aspectos: habilita la implementación de rutinas transversales.\nAcceso a datos: se trabaja con RDBMS en la plataforma java, usando Java Database Connectivity y herramientas de Mapeo objeto relacional con bases de datos NoSQL.\nGestión de transacciones: unifica distintas APIs de gestión y coordina las transacciones para los objetos Java.\nModelo vista controlador: Un framework basado en HTTP y servlets, que provee herramientas para la extensión y personalización de aplicaciones web y servicios web REST.\nFramework de acceso remoto: Permite la importación y exportación estilo RPC, de objetos Java a través de redes que soporten RMI, CORBA y protocolos basados en HTTP incluyendo servicios web (SOAP).\nConvención sobre Configuración: el módulo Spring Roo ofrece una solución rápida para el desarrollo de aplicaciones basadas en Spring Framework, privilegiando la simplicidad sin perder flexibilidad.\nProcesamiento por lotes: un framework para procesamiento de mucho volumen que como características incluye funciones de registro/trazado, manejo de transacciones, estadísticas de procesamiento de tareas, reinicio de tareas, y manejo de recursos.\nAutenticación y Autorización: procesos de seguridad configurables que soportan un rango de estándares, protocolos, herramientas y prácticas a través del subproyecto Spring Security (antiguamente Acegi).\nAdministración Remota: Configuración de visibilidad y gestión de objetos Java para la configuración local o remota vía JMX.\nMensajes: Registro configurable de objetos receptores de mensajes, para el consumo transparente desde la a través de JMS, una mejora del envío de mensajes sobre las API JMS estándar.\nTesting: Soporte de clases para desarrollo de unidades de prueba e integración.\nContenedor de inversión de control\nEl corazón de Spring Framework es su contenedor de inversión de control (IoC). Su trabajo es instanciar, inicializar y conectar objetos de la aplicación, además de proveer una serie de características adicionales disponibles en Spring a través del tiempo de vida de los objetos.8​\n\nLos objetos creados y gestionados por el contenedor se denominan objetos gestionados o beans. Estos objetos son del tipo POJO. Para realizar su tarea el contenedor necesita información indicando como instanciar y conectar entre sí los beans. A esta información se la llama metadatos de configuración. Hay distintas formas de proporcionar esta información: basándose en XML, basándose en anotaciones o basándose en objetos Java (desde Spring 3.0). El contenedor es independiente del formato de los metadatos de configuración. El usuario puede usar el formato que desee e incluso mezclarlos en la misma aplicación.8​\n\nLos objetos pueden ser obtenidos por búsqueda de dependencias o por inyección de dependencias.9​ búsqueda de dependencias es un modelo donde se pide al objeto contenedor un objeto con un nombre específico o de un tipo específico. inyección de dependencias es un modelo en el que el contenedor pasa objetos por nombre a otros objetos, ya sea a través de métodos constructores, propiedades, o métodos de la fábrica.\n\nEn muchos casos cuando se utilizan otras partes del Spring Framework no necesita utilizar el Contenedor, aunque probablemente su uso le permita hacer una aplicación más fácil de configurar y personalizar. El Contenedor de Spring le proporciona un mecanismo consistente para configurar las aplicaciones, y se integra con casi todos los entornos Java, desde aplicaciones de pequeñas a grandes aplicaciones empresariales.\n\nEl contenedor se puede convertir en un contenedor EJB 3.0 parcialmente por medio del proyecto Pitchfork. Algunos critican al Spring Framework por no cumplir los estándares.10​ Sin embargo, SpringSource no ve el cumplimiento EJB 3 como un objetivo importante, y afirma que el Spring Framework y el contenedor permiten modelos de programación más potentes.11​No creas un objeto, sino describes la forma en que deben crearse, definiéndolo en el archivo de configuración de Spring. No llamas a los servicios y componentes, sino dices que servicios y componentes deben ser llamados, definiéndolos en los archivos de configuración de Spring. Esto hace el código fácil de mantener y más fácil de probar mediante la Inyección de Dependencia (IoC).', 'Spring Framework', '2024-05-16', 'Artículo sobre Spring Framework.')-- Usuario 8
-- Usuario 8
INSERT INTO `articulo` (`id`, `usuario`, `contenido`, `titulo`, `fecha_publicacion`, `descripcion`) VALUES (NULL, '8', 'Esquema de .NET Framework\nInformación general\nTipo de programa\tFramework\nDesarrollador\tMicrosoft\nLanzamiento inicial\t13 de febrero de 2002\nLicencia\tDual MIT/Propietaria\nVersiones\nÚltima versión estable\t4.8.1 ( 9 de agosto de 2022 (1 año, 9 meses y 6 días))\nLanzamientos\nMicrosoft .NET\t.NET\nArchivos legibles\tvarios[mostrar]\nArchivos editables\tvarios[mostrar]\nEnlaces\nSitio web oficial\n[editar datos en Wikidata]\n.NET es un framework de Microsoft que hace un énfasis en la transparencia de redes, con independencia de plataforma de hardware y que permite un rápido desarrollo de aplicaciones. Basada en ella, la empresa intenta desarrollar una estrategia horizontal que integre sus productos, desde el sistema operativo hasta las herramientas de mercado.\n\n.NET podría considerarse una respuesta de Microsoft al creciente mercado de los negocios en entornos Web, como competencia a la plataforma Java de Oracle Corporation y a los diversos framework de desarrollo web basados en PHP. Su propuesta es ofrecer una manera rápida y económica, a la vez que segura y robusta, de desarrollar aplicaciones –o como la misma plataforma las denomina, soluciones– permitiendo una integración más rápida y ágil entre empresas y un acceso más simple y universal a todo tipo de información desde cualquier tipo de dispositivo.\n\nConsideraciones\nLa plataforma .NET de Microsoft es un componente de software que puede ser añadido al sistema operativo Windows. Provee un extenso conjunto de soluciones predefinidas para necesidades generales de la programación de aplicaciones, y administra la ejecución de los programas escritos específicamente con la plataforma. Esta solución es el producto principal en la oferta de Microsoft, y pretende ser utilizada por la mayoría de las aplicaciones creadas para la plataforma Windows.\n\n.NET Framework se incluye en Windows Server 2008, Windows Vista y Windows 7. De igual manera, la versión actual de dicho componente puede ser instalada en Windows XP, y en la familia de sistemas operativos Windows Server 2003. Una versión "reducida" de .NET Framework está disponible para la plataforma Windows Mobile, incluyendo teléfonos inteligentes.\n\nLa norma (incluido en ECMA-335, ISO/IEC 23271) que define el conjunto de funciones que debe implementar la biblioteca de clases base (BCL por sus siglas en inglés, tal vez el más importante de los componentes de la plataforma), define un conjunto funcional mínimo que debe implementarse para que el marco de trabajo sea soportado por un sistema operativo. Aunque Microsoft implementó esta norma para su sistema operativo Windows, la publicación de la norma abre la posibilidad de que sea implementada para cualquier otro sistema operativo existente o futuro, permitiendo que las aplicaciones corran sobre la plataforma independientemente del sistema operativo para el cual haya sido implementada. El Proyecto Mono emprendido por Ximian pretende realizar la implementación de la norma para varios sistemas operativos adicionales bajo el marco del código abierto.\n\nComponentes\nLos principales componentes del marco de trabajo son:\n\nEl conjunto de lenguajes de programación.\nLa biblioteca de clases base o BCL.\nEl entorno común de ejecución para lenguajes, o CLR (Common Language Runtime) por sus siglas en inglés.\nDebido a la publicación de la norma para la infraestructura común de lenguajes (CLI por sus siglas en inglés), el desarrollo de lenguajes se facilita, por lo que el marco de trabajo .NET soporta ya más de 20 lenguajes de programación y es posible desarrollar cualquiera de los tipos de aplicaciones soportados en la plataforma con cualquiera de ellos, lo que elimina las diferencias que existían entre lo que era posible hacer con uno u otro lenguaje.\n\nAlgunos de los lenguajes desarrollados para el marco de trabajo .NET son: C#, Visual Basic .NET, Delphi (Object Pascal), C++, F#, J#, Perl, Python, Fortran, Prolog (existen al menos dos implementaciones, el P#1​ y el Prolog.NET2​), Cobol y PowerBuilder.\n\nCommon Language Runtime\nArtículo principal: Common Language Runtime\n\nEstructura interna del entorno de ejecución en lenguaje común.\nEl CLR es el verdadero núcleo del framework de .NET, entorno de ejecución en el que se cargan las aplicaciones desarrolladas en los distintos lenguajes, ampliando el conjunto de servicios del sistema operativo (W2k y W2003). Permite integrar proyectos en distintos lenguajes soportados por la plataforma .Net, como C++, Visual Basic, C#, entre otros.\n\nLa herramienta de desarrollo compila el código fuente de cualquiera de los lenguajes soportados por .NET en un código intermedio, el CIL (Common Intermediate Language) antes conocido como MSIL (Microsoft Intermediate Language), similar al BYTECODE de Java. Para generarlo, el compilador se basa en la especificación CLS (Common Language Specification) que determina las reglas necesarias para crear el código MSIL compatible con el CLR.\n\nPara ejecutarse se necesita un segundo paso, un compilador JIT (Just-In-Time) es el que genera el código máquina real que se ejecuta en la plataforma del cliente. De esta forma se consigue con .NET independencia de la plataforma de hardware. La compilación JIT la realiza el CLR a medida que el programa invoca métodos. El código ejecutable obtenido se almacena en la memoria caché del ordenador, siendo recompilado de nuevo sólo en el caso de producirse algún cambio en el código fuente.\n\nCaracterísticas\nEs el encargado de proveer lo que se llama código administrado, es decir, un entorno que provee servicios automáticos al código que se ejecuta. Los servicios son variados:\n\nCargador de clases: permite cargar en memoria las clases.\nCompilador MSIL a nativo: transforma código intermedio de alto nivel independiente del hardware que lo ejecuta a código de máquina propio del dispositivo que lo ejecuta.\nAdministrador de código: coordina toda la operación de los distintos subsistemas del Common Language Runtime.\nRecolector de basura: elimina automáticamente de memoria objetos no utilizados.\nMotor de seguridad: administra la seguridad del código que se ejecuta.\nMotor de depuración: permite hacer un seguimiento de la ejecución del código aun cuando se utilicen lenguajes distintos.\nVerificador de tipos: controla que las variables de la aplicación usen el área de memoria que tienen asignado.\nAdministrador de excepciones: maneja los errores que se producen durante la ejecución del código.\nSoporte de multiproceso (hilos): permite desarrollar aplicaciones que ejecuten código en forma paralela.\nEmpaquetador de COM: coordina la comunicación con los componentes COM para que puedan ser usados por el .NET Framework.\nBiblioteca de Clases Base que incluye soporte para muchas funcionalidades comunes en las aplicaciones.\nEstandarización y licenciamiento\nEn agosto de 2000, Microsoft, Hewlett-Packard e Intel trabajaron conjuntamente para estandarizar el lenguaje de programación C# y una Infraestructura de Lenguaje Común (CLI por sus siglas en inglés). Para diciembre de 2001, ambos fueron ratificados por los estándares Internacionales ECMA.3​4​ ISO también siguió los pasos para abril de 2003.\n\nMientras Microsoft y sus socios de negocios ganaban patentes para los lenguajes CLI y C#, ECMA e ISO solicitaron que era esencial que la implementación estuviera disponible bajo “términos no discriminatorios”. Además de alcanzar estos términos, las compañías también accedían a dejar estas patentes disponibles. Sin embargo, esto no aplicó para la parte del .NET Framework, que no está cubierto por los estándares ECMA/ISO. Esto incluye Windows Forms, ADO.NET y ASP.NET.\n\n.NET Core\nArtículo principal: .NET Core\nHasta 2015, .NET brindaba únicamente soporte para Windows, además de que su código tenía una licencia patentada. Ello derivó en la creación de implementaciones libres, tales como Mono. No obstante, Mono seguía teniendo limitaciones frente a .NET, sobre todo en lo relacionado con WinForms (herramienta para interfaces gráficas de Windows), además de ciertos problemas de patentes. Por ello, Microsoft decidió liberar parte del framework .NET bajo el nombre de .NET Core. Posteriormente, se le añadió soporte para ASP .NET, ML .NET y WinForms. Se espera que .NET Core reemplace a .NET Framework en un futuro.\n\nEl futuro de .NET\nA largo plazo Microsoft pretende reemplazar el API Win32 o Windows API con la plataforma .NET. Esto debido a que el API Win32 o Windows API fue desarrollada sobre la marcha, careciendo de documentación detallada, uniformidad y cohesión entre sus distintos componentes, provocando múltiples problemas en el desarrollo de aplicaciones para el sistema operativo Windows. La plataforma .NET pretende solventar la mayoría de estos problemas proveyendo un conjunto único y expandible con facilidad de bloques interconectados, diseñados de forma uniforme y bien documentados, que permitan a los desarrolladores tener a mano todo lo que necesitan para producir aplicaciones sólidas.\n\nDebido a las ventajas que la disponibilidad de una plataforma de este tipo puede darle a las empresas de tecnología y al público en general, muchas otras empresas e instituciones se han unido a Microsoft en el desarrollo y fortalecimiento de la plataforma .NET, ya sea por medio de la implementación de la plataforma para otros sistemas operativos aparte de Windows (Proyecto Mono de Ximian/Novell para GNU/Linux/Mac OS X/BSD/Solaris), el desarrollo de lenguajes de programación adicionales para la plataforma (Lexico para hispanoparlantes, ANSI C de la Universidad de Princeton, NetCOBOL de Fujitsu, Delphi de Borland, PowerBuilder de Sybase entre otros) o la creación de bloques adicionales para la plataforma (como controles, componentes y bibliotecas de clases adicionales); siendo algunas de ellas software libre, distribuibles bajo la licencia GPL.\n\nCon esta plataforma, Microsoft incursiona de lleno en el campo de los Servicios Web y establece el XML como norma en el transporte de información en sus productos y lo promociona como tal en los sistemas desarrollados utilizando sus herramientas.\n\nBiblioteca de clases base de .NET\n\nDiagrama básico de la Biblioteca de Clases Base.\nLa biblioteca de clases base (BCL por sus siglas en inglés) maneja la mayoría de las operaciones básicas que se encuentran involucradas en el desarrollo de aplicaciones, incluyendo entre otras:\n\nInteracción con los dispositivos periféricos\nManejo de datos (ADO.NET)\nAdministración de memoria\nCifrado de datos\nTransmisión y recepción de datos por distintos medios (XML, TCP/IP)\nAdministración de componentes Web que corren tanto en el servidor como en el cliente (ASP.NET)\nManejo y administración de excepciones\nManejo del sistema de ventanas\nHerramientas de despliegue de gráficos (GDI+)\nHerramientas de seguridad e integración con la seguridad del sistema operativo\nManejo de tipos de datos unificado\nInteracción con otras aplicaciones\nManejo de cadenas de caracteres y expresiones regulares\nOperaciones aritméticas\nManipulación de fechas, zonas horarias y periodos de tiempo\nManejo de arreglos de datos y colecciones\nManipulación de archivos de imágenes\nAleatoriedad\nGeneración de código\nManejo de idiomas\nAuto descripción de código\nInteracción con el API Win32 o Windows API.\nCompilación de código\nEsta funcionalidad se encuentra organizada por medio de espacios de nombres jerárquicos.\n\nLa Biblioteca de Clases Base se clasifica, en cuatro grupos clave:\n\nASP.NET y Servicios Web XML\nWindows Forms\nADO.NET\n.NET\nEnsamblados\nArtículo principal: Ensamblado (Microsoft .NET)\n\nDiagrama interno de un Ensamble .NET.\nUn ensamblado es un compilado EXE o DLL que contiene código CIL que se genera desde los diferentes lenguajes .NET, y que es ejecutado por el CLR. Puede contener una o varias clases al igual que uno o varios namespaces.5​\n\nLos ensamblados pueden tener diferentes decoradores que definen el entorno de ejecución de los mismos COM+, DCOM, Remoting, etc.', 'Microsoft .NET', '2024-05-16', 'Artículo sobre Microsoft .NET Framework.')-- Usuario 9

--Chats
-- Chat entre Usuario 1 y Usuario 2
INSERT INTO `chat` (`id`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '1', '2');
-- Chat entre Usuario 3 y Usuario 4
INSERT INTO `chat` (`id`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '3', '4');
-- Chat entre Usuario 5 y Usuario 6
INSERT INTO `chat` (`id`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '5', '6');
-- Chat entre Usuario 7 y Usuario 8
INSERT INTO `chat` (`id`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '7', '8');
-- Chat entre Usuario 9 y Usuario 10
INSERT INTO `chat` (`id`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '9', '10');
-- Chat entre Usuario 11 y Usuario 12
INSERT INTO `chat` (`id`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '11', '12');
-- Chat entre Usuario 13 y Usuario 14
INSERT INTO `chat` (`id`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '13', '14');
-- Chat entre Usuario 15 y Usuario 1
INSERT INTO `chat` (`id`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '15', '1');
-- Chat entre Usuario 2 y Usuario 3
INSERT INTO `chat` (`id`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '2', '3');
-- Chat entre Usuario 4 y Usuario 5
INSERT INTO `chat` (`id`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '4', '5');
-- Chat entre Usuario 6 y Usuario 7
INSERT INTO `chat` (`id`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '6', '7');
-- Chat entre Usuario 8 y Usuario 9
INSERT INTO `chat` (`id`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '8', '9');
-- Chat entre Usuario 10 y Usuario 11
INSERT INTO `chat` (`id`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '10', '11');
-- Chat entre Usuario 12 y Usuario 13
INSERT INTO `chat` (`id`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '12', '13');
-- Chat entre Usuario 14 y Usuario 15
INSERT INTO `chat` (`id`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '14', '15');


-- Comentarios

-- Comentario en el artículo 1 por el usuario 1
INSERT INTO `comentario` (`fecha`, `articulo`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '1', NULL, '1', 'Contenido del comentario 1');
-- Comentario en el artículo 2 por el usuario 2
INSERT INTO `comentario` (`fecha`, `articulo`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '2', NULL, '2', 'Contenido del comentario 2');
-- Comentario en el artículo 3 por el usuario 3
INSERT INTO `comentario` (`fecha`, `articulo`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '3', NULL, '3', 'Contenido del comentario 3');
-- Comentario en el artículo 1 por el usuario 4
INSERT INTO `comentario` (`fecha`, `articulo`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '1', NULL, '4', 'Contenido del comentario 4');
-- Comentario en el artículo 2 por el usuario 5
INSERT INTO `comentario` (`fecha`, `articulo`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '2', NULL, '5', 'Contenido del comentario 5');
-- Comentario en el artículo 3 por el usuario 6
INSERT INTO `comentario` (`fecha`, `articulo`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '3', NULL, '6', 'Contenido del comentario 6');
-- Comentario en el artículo 4 por el usuario 7
INSERT INTO `comentario` (`fecha`, `articulo`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '4', NULL, '7', 'Contenido del comentario 7');
-- Comentario en el artículo 5 por el usuario 8
INSERT INTO `comentario` (`fecha`, `articulo`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '5', NULL, '8', 'Contenido del comentario 8');

-- Mensajes

-- Mensaje en el chat 1 por el usuario 1
INSERT INTO `mensaje` (`fecha`, `chat`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '1', NULL, '1', 'Ejemplo de mensaje 1');
-- Mensaje en el chat 2 por el usuario 2
INSERT INTO `mensaje` (`fecha`, `chat`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '2', NULL, '2', 'Ejemplo de mensaje 2');
-- Mensaje en el chat 3 por el usuario 3
INSERT INTO `mensaje` (`fecha`, `chat`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '3', NULL, '3', 'Ejemplo de mensaje 3');
-- Mensaje en el chat 4 por el usuario 4
INSERT INTO `mensaje` (`fecha`, `chat`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '4', NULL, '4', 'Ejemplo de mensaje 4');
-- Mensaje en el chat 5 por el usuario 5
INSERT INTO `mensaje` (`fecha`, `chat`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '5', NULL, '5', 'Ejemplo de mensaje 5');
-- Mensaje en el chat 6 por el usuario 6
INSERT INTO `mensaje` (`fecha`, `chat`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '6', NULL, '6', 'Ejemplo de mensaje 6');
-- Mensaje en el chat 7 por el usuario 7
INSERT INTO `mensaje` (`fecha`, `chat`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '7', NULL, '7', 'Ejemplo de mensaje 7');
-- Mensaje en el chat 8 por el usuario 8
INSERT INTO `mensaje` (`fecha`, `chat`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '8', NULL, '8', 'Ejemplo de mensaje 8');
-- Mensaje en el chat 9 por el usuario 9
INSERT INTO `mensaje` (`fecha`, `chat`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '9', NULL, '9', 'Ejemplo de mensaje 9');
-- Mensaje en el chat 10 por el usuario 10
INSERT INTO `mensaje` (`fecha`, `chat`, `id`, `usuario`, `texto`) VALUES (CURRENT_TIME(), '10', NULL, '10', 'Ejemplo de mensaje 10');


--Seguimiento
-- Usuario 3 sigue al usuario 1
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('1', '3');
-- Usuario 2 sigue al usuario 4
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('4', '2');
-- Usuario 5 sigue al usuario 1
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('1', '5');
-- Usuario 3 sigue al usuario 6
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('6', '3');
-- Usuario 7 sigue al usuario 2
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('2', '7');
-- Usuario 4 sigue al usuario 6
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('6', '4');
-- Usuario 8 sigue al usuario 5
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('5', '8');
-- Usuario 9 sigue al usuario 7
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('7', '9');
-- Usuario 10 sigue al usuario 1
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('1', '10');
-- Usuario 6 sigue al usuario 2
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('2', '6');


--Skills
-- Lenguajes de Programación
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Java');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Python');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'JavaScript');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'C++');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Ruby');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Go');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Swift');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'C#');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'PHP');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'TypeScript');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Kotlin');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'R');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Scala');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Objective-C');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Shell');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Perl');
-- Frameworks
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'React');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Angular');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Vue.js');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Spring');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Django');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Flask');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Ruby on Rails');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Laravel');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'ASP.NET');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Express.js');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Symfony');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Hibernate');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'jQuery');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Bootstrap');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'TensorFlow');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Keras');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'PyTorch');
-- Lenguajes de Bases de Datos
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'SQL');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'PL/SQL');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'T-SQL');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'MySQL');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'PostgreSQL');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'MongoDB');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Cassandra');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Redis');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'SQLite');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'MariaDB');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Oracle');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'DB2');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'Firebase');
INSERT INTO `skill` (`id`, `nombre`) VALUES (NULL, 'DynamoDB');

--Usuario_skill
-- Usuario 1 
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('31', '1');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('2', '1');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('7', '1');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('11', '1');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('20', '1');
-- Usuario 2 
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('17', '2');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('18', '2');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('20', '2');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('1', '2');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('6', '2');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('3', '2');
-- Usuario 3 
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('4', '3');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('5', '3');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('38', '3');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('34', '3');
-- Usuario 4 
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('20', '4');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('41', '4');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('44', '4');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('3', '4');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('1', '4');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('2', '4');
-- Usuario 5 
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('5', '5');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('3', '5');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('44', '5');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('22', '5');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('43', '5');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('32', '5');
-- Usuario 6 
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('1', '6');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('43', '6');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('20', '6');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('24', '6');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('25', '6');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('23', '6');
-- Usuario 7 
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('1', '7');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('7', '7');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('15', '7');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('18', '7');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('44', '7');
-- Usuario 8
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('1', '8');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('34', '8');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('43', '8');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('40', '8');
-- Usuario 9 
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('4', '9');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('47', '9');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('46', '9');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('5', '9');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('8', '9');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('11', '9');
-- Usuario 10 
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('1', '10');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('2', '10');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('7', '10');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('22', '10');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('40', '10');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('3', '10');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('33', '10');
-- Usuario 11
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('3', '11');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('4', '11');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('10', '11');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('11', '11');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('15', '11');
-- Usuario 12
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('2', '12');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('24', '12');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('6', '12');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('26', '12');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('5', '12');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('19', '12');
-- Usuario 13
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('2', '13');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('18', '13');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('4', '13');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('13', '13');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('40', '13');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('46', '13');
-- Usuario 14
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('1', '14');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('3', '14');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('4', '14');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('17', '14');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('18', '14');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('34', '14');
-- Usuario 15
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('39', '15');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('46', '15');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('3', '15');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('2', '15');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('20', '15');
INSERT INTO `usuario_skills` (`skills_id`, `usuarios_id`) VALUES ('37', '15');


-- Valoraciones
INSERT INTO `valoracion` (`id`, `puntuacion`, `usuario`, `articulo`) VALUES (NULL, '4', '1', '1')
INSERT INTO `valoracion` (`id`, `puntuacion`, `usuario`, `articulo`) VALUES (NULL, '2', '1', '2')
INSERT INTO `valoracion` (`id`, `puntuacion`, `usuario`, `articulo`) VALUES (NULL, '3', '1', '3')
INSERT INTO `valoracion` (`id`, `puntuacion`, `usuario`, `articulo`) VALUES (NULL, '5', '1', '4')

--Articulo_Skill
INSERT INTO `articulo_skill` (`articulo`, `skill`) VALUES ('1', '1')
INSERT INTO `articulo_skill` (`articulo`, `skill`) VALUES ('1', '2')
INSERT INTO `articulo_skill` (`articulo`, `skill`) VALUES ('1', '3')
INSERT INTO `articulo_skill` (`articulo`, `skill`) VALUES ('2', '1')
INSERT INTO `articulo_skill` (`articulo`, `skill`) VALUES ('1', '10')
