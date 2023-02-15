import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Cursos({ data, tCurso }) {
  const tres = useMediaQuery("(max-width:1300px)");
  const dos = useMediaQuery("(max-width:1030px)");
  const uno = useMediaQuery("(max-width:600px)");
  const slidersView = () => {
    if (uno) {
      return 1;
    } else if (dos) {
      return 2;
    } else if (tres) {
      return 3;
    } else {
      return 4;
    }
  };
  return (
    <section id="cursos" className="bg-slate-100 pb-28">
      <h1 className="text-left mx-auto container p-4 font-semibold text-2xl tracking-wider">
        {tCurso}
      </h1>
      <Swiper
        className="bg-slate-100 container mx-auto prueba"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={slidersView()}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map((e) => (
          <SwiperSlide className="group">
            <div className="bg-white rounded-lg h-[30rem] flex justify-center items-center flex-col hover:shadow-2xl">
              <img
                src={e.imagen}
                alt=""
                className="h-3/5 w-full object-cover rounded-lg group-hover:scale-95 ease-in duration-300 cursor-pointer"
              />
              <div className="h-2/5  w-full flex justify-start items-center flex-col">
                <div className="h-3/5 w-full flex justify-start items-center flex-col pt-2">
                  <h2 className="text-center font-bold">{e.titulo}</h2>
                  <p className="p-2">{e.descripcion}</p>
                </div>
                <div className="h-2/5 w-full flex justify-around items-center ">
                  <button className=" p-3 border border-[#41bfb3]  rounded-lg hover:bg-[#41bfb3] hover:text-white easy-in duration-500">
                    <a href={e.verMas} target="_blank">
                      Ver mas
                    </a>
                  </button>
                  <button className=" p-3 bg-[#41bfb3] border border-[#41bfb3] rounded-lg text-white hover:bg-white hover:text-black easy-in duration-500">
                    <a href={e.link} target="_blank">
                      Comprar
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Cursos;
