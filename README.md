# Data Dashboard

## Preámbulo

En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la
mayor cantidad de datos posibles respecto al progreso de las estudiantes para
apoyarlas en su aprendizaje.

La principal medida de progreso de una estudiante en Laboratoria es su avance
completando los proyectos de la [Ruta de Aprendizaje](https://docs.google.com/spreadsheets/d/1AoXQjZnZ5MTPwJPNEGDyvn5vksiOUoPr932TjAldTE4/edit#gid=536983970)
y su desempeño en función a la [Rúbrica de Niveles Esperados](https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQy1waRpQ-16sn7VogiDTy-Fz5e7OSZSYUCiHC_bkLAKYewr4L8pWJ_BG210PeULe-TjLScNQQT_x/pubhtml).
Sin embargo, para completar estos proyectos las estudiantes acceden a contenidos
de aprendizaje (lecturas, videos, ejercicios y quizzes) en un sistema que
llamamos LMS (Learning Management System). El LMS acumula data sobre quién
leyó qué, qué ejercicios se han completado, los resultados de los quizzes, etc.

A pesar de que la data de progreso del LMS (ej. lecturas leídas, ejercicios
  completados, nota en quizzes, etc.) no impacta directamente en la evaluación
  de una estudiante, sí es una pieza de información relevante que las TMs
  quisieran visualizar para tener un mejor entendimiento de cómo va cada
  estudiante en su proceso de aprendizaje.

Así, el reto de este proyecto es crear una interfaz donde las TMs puedan
_ver_ y _usar_ la data de progreso del LMS. Para ello, proponemos crear un
**data dashboard** (_tablero de visualización de datos_).



### User Experience Design

#### 1) Definición del producto


* **Quiénes son los principales usuarios de producto:**
Los principales usuarios son lo training manager de Laboratoria, usuarios secundarios serían el resto de personal de entrenamiento como los coaches, jedis, etc.

* **Cuáles son los objetivos de estos usuarios en relación con el producto:**
Los objetivos de los usuarios respecto al producto es que puedan visualizar de una manera más sencilla los datos de las alumnas como su nombre, los cursos que llevan (respecto al cohort en el cual se encuentran), cuánto han avanzado en cada uno de los cursos, sus puntajes en los quizzes, etc. De tal manera que puedan obtener información relevante sobre el avance de cada una de las alumnas de un determinado cohort, así como también tener información general de un cohort seleccionado; es decir, el avance general de todas las alumnas. 

* **Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué:**
Los datos más relevantes para el usuario principal son el promedio total de cada una de las alumnas pertenecientes a un cohort, la cantidad de ejercicios, quizzes y lecturas completadas de cada una de ellas; así como también, si puntuación total en los quizzes.

La primera semana del desarrollo del proyecto, la training manager (la usuaria principal) conversó con todas las alumnas de laboratoria y mencionó que lo más relevante era no solo ver el promedio general, promedio de ejercicios, quizzes y lecturas de cada una de las alumnas sino también ver los promedios generales del cohort puesto que su interés principal era ver el avance general de todas las alumnas. 
Esa misma semana se entrevistó a la usuaria principal, por lo cual se pudieron hacer preguntas más detalladas sobre los requerimientos principales. Durante la entrevista la usuaria indicó nuevamente que el promedio general de avances por cohort le era muy relevante al igual que los promedios generales de ejercicios, quizzes y lecturas. 

* **Cuándo revisan normalmente estos datos los usuarios:**
Ambos tipos de usuario (principal y secundarios) revisan el dashboard en horarios de trabajo eso implica que el dispositivo principal para revisar sería una laptop o desktop. Esta información se sabe de entrevistas que le hicimos a dos usuarios (uno principal y otro secundario).

* **Cómo creen que el producto les está resolviendo sus problemas:**
Tanto en la conversación que tuvimos entre la usuaria principal y todas las alumnas de laboratoria como en la entrevista personal se llegó a la conclusión de que el problema principal es que los datos que le llegan al usuario son tediosos, muy descriptivos pero sin un orden en el cual se pueda obtener información de una manera fácil y sencilla.
Por lo que se pensó primero en diseñar una interfaz en la cual el usuario en un primer momento seleccionara el cohort que desee visualizar y luego se le mostraría de una manera más sencilla toda la información relevante de ese cohort seleccionado.

* **Cómo fue el proceso de diseño:**
Después de  la conversación que tuvimos entre la usuaria principal y todas las alumnas de laboratoria , se procedió a hacer un primer sketch de baja fidelidad (papel)  y se formularon las preguntas para la entrevista personalizada.

Debido a que los principales usuarios son trabajadores de Laboratoria, el diseño debe seguir la linea general de laboratoria; es decir, utilizar los mismos colores que Laboratoria usa en sus diseños; así como también las mismas tipografias. Por otro lado, nos pareció relevante que la interfaz contenga un menú principal para un mejor manejo por parte del usuario de este.


#### 2) Sketch de la solución (prototipo de baja fidelidad)

El primer Sketch de la interfaz está dividido en dos partes. Como se mencionó anteriormente se pensó primero en diseñar una interfaz en la cual el usuario en un primer momento seleccionara el cohort que desee visualizar para que luego se le mostrase de una manera más sencilla toda la información relevante de ese cohort seleccionado. Por lo que la primera parte de la interfaz tendrá en la parte central un área donde el usuario deberá seleccionar el cohort de la siguiente manera: Primero deberá seleccionar a qué sede (Lima, Ciudad de Mexico, Santiago de Chile, etc) pertenece el cohort al que quiere acceder, luego seleccionaría el tipo de producto del cohort (esta información sobre el tipo de "producto" se supo a partir de la entrevista que se tuvo con la usuaria principal) de los cuales puede ser "bootcamp", "pre-selección", etc. El usuario también tendría que escoger la promoción y por último el turno. Todo esto con la finalidad de que llegue al cohort que quiera seleccionar y poder acceder a la información de este.

![PrimerPrototipo](Imagenes%20Readme/primerprototipobajafidelidad.jpg)

La segunda parte de la interfaz vendría a ser ya el datadashboard el cual tendría un menú al lado izquierdo con información relevante del usuario (foto referencial del usuario y su nombre). En la parte central de la interfaz de la datadashboard se visualizará la información requerida por el usuario. Cabe resaltar que en la parte superior de la interfaz hay 3 pestañas, las cuales el usuario podrá escoger si quiere visualizar la información por alumna, por curso y de manera general. 

![PrimerPrototipoparteDatadashboard](Imagenes%20Readme/sketch2Bajafidelidad2.jpg)

Luego de haber diseñado el primer sketch de baja fidelidad, se realizaron entrevistas a dos usuarias y testing a una. Se recibieron observaciones relevantes y feedback interesante por lo que se hizo un cambio en la interfaz de la datadashboard.

![SegundoPrototipoparteDatadashboard](Imagenes%20Readme/segundoprototipobajafidelidad.jpg)

Se recibió un segundo feedback y se realizó un tercer cambio más relevante en el diseño puesto que nuestro primer y segundo sketch de baja fidelidad estaba pensada para la hacker edition (contendría graficos). Así que se diseñó nuevamente de tal forma que se centrara en lo minimo requerido por el proyecto, es decir, mostrar la información relevante de cada alumna perteneciente a un cohort.  

![TercerPrototipoparteDatadashboard](Imagenes%20Readme/tercerprototipobajafidelidad.jpg)



#### 3) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

Luego de diseñar el tercer y final prototipo de baja fidelidad, se procedió a pasarlo a alta fidelidad en Figma. 

![figma1](Imagenes%20Readme/altafidelidadfigma.png)

![figma2](Imagenes%20Readme/altafidelidadfigma2.png)



Sin embargo, en la segunda semana se decidió modificar la primera interfaz donde se seleccionaba el cohort. Se optó a que el usuario seleccionara solamente la sede del cohort y luego le cargaría una lista de los cohorts pertenecientes a esa sede, de tal forma el usuario terminaria escogiendo el cohort de esa manera y luego para acceder a la información de este, solo tendría que apretar el boton de ingreso. Esta nueva implementación se realizó directamente en el CSS y HTML puesto que el prototipo de alta fidelidad y el diseño de la interfaz estática se realizaron en la primera semana del proyecto.



<!-- ### Habilidades blandas

Para completar este proyecto deberás realizar una planificación general del
proyecto, donde esperamos que generes un plan paso a paso de cómo resolverás
el proyecto. Deberás considerar las distintas secciones del data dashboard, los
recursos y el tiempo que dispones.

Para lograrlo, deberás trabajar de manera colaborativa con tu compañera, para
esto tienen que coordinarse en la construcción del producto, viendo de qué
manera quieren trabajar y qué responsabilidades tendrá cada una para que así
cumplan con los tiempos de entrega y ejecución.

Para este proyecto busca instancias de code review, donde deberás buscar
feedback de tu código con otro dupla, para que puedas mejorar el producto.
Mientras más feedback recibas, mejor será su producto.

Nos interesa ver tu capacidad de autoaprendizaje, por lo que esperamos que
logren realizar el hacker edition, de esta manera podrás llevar tu producto al
siguiente nivel.

Para finalizar, deberás presentar su data dashboard al resto del curso, para
esto necesitarás que tu demo tenga acceso desde cualquier computador y que
puedas realizar una presentación que permita a todos comprender lo realizado.
Sabemos que puede ser una instancia difícil, esperamos que logres mostrar su
trabajo y los demás lo comprendan. -->

## Hacker edition

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data del [Live API de Laboratoria](https://api.laboratoria.la/).
  Lee la [documentación aquí](https://laboratoria.github.io/api.laboratoria.la/).
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas.
* Brindar el detalle de progreso de cada estudiante _por curso_
* Proveer estadísticas de progreso de todo el cohort

## Evaluación

Recuerda revisar la [rúbrica](https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQy1waRpQ-16sn7VogiDTy-Fz5e7OSZSYUCiHC_bkLAKYewr4L8pWJ_BG210PeULe-TjLScNQQT_x/pubhtml#)
para ver la descripción detallada de cada _habilidad_ y cada _nivel_. A
continuación presentamos los niveles esperados para cada habilidad:

### General

| Característica/Habilidad | Nivel esperado |
|--------------------------|----------------|
| Completitud | 3
| Investigación | 3
| Documentación | 2

### Tech

| Habilidad | Nivel esperado |
|-----------|----------------|
| **JavaScript** | |
| Estilo | 2
| Nomenclatura/semántica | 3
| Funciones/modularidad | 2
| Estructuras de datos | 2
| Tests | 2
| **HTML** | |
| Validación | 3
| Estilo | 3
| Semántica | 2
| SEO | 0
| **CSS** | |
| DRY | 2
| Responsive | 2
| **SCM** | |
| Git | 3
| GitHub | 2
| **CS** | |
| Lógica | 1
| Arquitectura | 2
| Patrones/paradigmas | 0

### UX

| Habilidad | Nivel esperado |
|-----------|----------------|
| User Centricity | 3 |
| Entrevistas | 2 |
| Contraste | 3 |
| Alineación | 3 |
| Jerarquía | 2 |
| Tipografía | 2 |
| Color | 2 |

### Habilidades Blandas
Esperamos que alcances al menos el nivel 2 en todas tus habilidades blandas.

| Habilidad | Nivel esperado |
|-----------|----------------|
| Planificación y organización | 2
| Autoaprendizaje | 2
| Solución de problemas | 2
| Dar y recibir feedback | 2
| Adaptabilidad | 2
| Trabajo en equipo (trabajo colaborativo y responsabilidad) | 2
| Comunicación eficaz | 2
| Presentaciones | 2

***

## Puntos de experiencia

* Completando los requerimientos mínimos de este proyecto ganarás 250 XPs.
* Completando el hacker edition de este proyecto ganarás 100 XPs adicionales.
* Completando los ejercicios de manipulación de arreglos en el LMS (https://lms.laboratoria.la/cohorts/lim-2018-05-bc-core-am/courses/javascript/04-arrays/06-practice)
  ganarás otros 25 XPs.
* Completando los ejercicios de manipulación de objetos en el LMS (https://lms.laboratoria.la/cohorts/lim-2018-05-bc-core-am/courses/javascript/05-objects/06-practice)
  ganarás otros 25 XPs.



## Tips / Pistas

* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [XMLHttpRequest en MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)
