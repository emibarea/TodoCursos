import React from "react";
import data from "../../assets/info";
import Cursos from "../Cursos/Cursos";
import Footer from "../Footer/Footer";
function Main() {
  return (
    <>
      <section className="bg-slate-100">
        <div className="h-96 container mx-auto flex justify-center items-center ">
          <div className="h-56 w-[50rem] border  border-gray-200 rounded bg-[#f3f4f6] shadow-lg shadow-slate-300 flex flex-col justify-around items-center text-center p-5 mx-5 sm:flex-row">
            <h2 className="text-xl font-semibold tracking-wide text-[#373c4a]">
              Todos los cursos recomendados son de:
            </h2>
            <a href="https://app.hotmart.com/" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Logo_hotmart.png"
                className="w-52 object-contain border border-gray-200 rounded p-5 bg-slate-100 hover:bg-white ease-in duration-300"
              />
            </a>
          </div>
        </div>
      </section>
      <Cursos data={data} tCurso="Nuestros cursos" />
      <Footer />
    </>
  );
}

export default Main;
