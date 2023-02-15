import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <section className="animation w-screen min-h-[30rem] flex flex-col justify-center items-center">
      <div className="container text-center max-w-3xl mt-32 flex flex-col justify-center items-center p-10">
        <span className="texto text-white text-4xl font-medium">
          Compra cursos online e invierte en tu conocimiento.
        </span>
        <p className="text-slate-100 text-lg mt-5">
          Aprende desde cualquier lugar, potenciá tu aprendizaje con clases
          dinámicas y participativas, contenidos y metodologías de clase mundial
          y profesores líderes en su campo de enseñanza.
        </p>
        <div class="arrow mt-5 sm:mt-10 md:mt-5">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
