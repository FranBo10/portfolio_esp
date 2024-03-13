import React from "react";

const About = () => {
  return (
    <div id="about" class="text-center">
      <h3 class="text-3xl inline-block mt-10 mb-3 border-b-2 border-teal-500 dark:text-white">
        Portfolio
      </h3>

      <p class="text-md py-2 mb-3 leading-8 text-gray-800 dark:text-gray-200">
        Desde mis inicios como diseñador y desarrollador independiente, he
        trabajado de manera autónoma en la realización de proyectos
        profesionales. Además, he colaborado estrechamente con individuos
        talentosos para crear productos digitales destinados tanto al ámbito
        profesional como al público en general. Pongo a disposición mis sólidos
        conocimientos en programación para ayudar a las empresas en la búsqueda
        de profesionales con experiencia probada en el desarrollo de proyectos
        individuales.
      </p>

      <h3 class="text-3xl inline-block my-3 border-b-2 border-teal-500 dark:text-white">
        Desarrollador y Diseñador.
      </h3>
      <p class="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        En el área de <span class="text-orange-500">Frontend</span>, tengo un
        sólido dominio de los lenguajes fundamentales como{" "}
        <span class="text-teal-500">HTML</span>,{" "}
        <span class="text-teal-500">CSS</span> (Bootstrap, TailwindCSS, SaSS) y{" "}
        <span class="text-teal-500">JavaScript</span>. Utilizo el framework{" "}
        <span class="text-teal-500">ReactJS</span> para proyectos codificados
        completamente en JavaScript, y el framework{" "}
        <span class="text-teal-500">Symfony</span>, donde principalmente uso{" "}
        <span class="text-teal-500">TWIG</span> como lenguaje frontend en
        proyectos codificados en <span class="text-teal-500">PHP</span>.
      </p>
      <p class="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        En cuanto al <span class="text-orange-500">Backend</span>, adapto mis
        enfoques según el lenguaje utilizado en el proyecto.
        <br></br>Si trabajo en un proyecto de{" "}
        <span class="text-teal-500">JavaScript</span>, suelo elegir el framework{" "}
        <span class="text-teal-500">NextJS</span>. En esta configuración,
        utilizo <span class="text-teal-500">NodeJs</span> y{" "}
        <span class="text-teal-500">ExpressJS</span> para gestionar las
        conexiones a las bases de datos, y{" "}
        <span class="text-teal-500">Mongoose</span> para organizar la estructura
        de la aplicación.<br></br>
        Por otro lado, si el proyecto está codificado en{" "}
        <span class="text-teal-500">PHP</span>, me inclino por el framework{" "}
        <span class="text-teal-500">Symfony</span>, que proporciona un marco
        sólido para administrar la aplicación a través de un sistema MVC. En
        esta arquitectura, defino las rutas y la lógica mediante los
        controladores.<br></br> El acceso a la base de datos, ya sea{" "}
        <span class="text-teal-500">MySQL, MariaDB, PostgreSQL, MongoDB</span>
        ..., se realiza a través del modelo, facilitando la comunicación con la
        base de datos y la realización de las consultas necesarias para
        recuperar los datos de manera estructurada.
      </p>
    </div>
  );
};

export default About;
