import React from "react";

const Experiences = () => {
  return (
    <section
      name="Experiences"
      className="relative text-white p-4 py-10 grid gap-10 sm:grid-cols-1 max-w-[1000px] mx-auto"
    >
      <section className="grid gap-10">
        <div>
          <h3 className="text-sm text-gray-400">
            Systems Engineer | Electronics technician
          </h3>
          <h2 className="text-5xl font-semibold text-center mt-6">
            Work Experiences
          </h2>
        </div>

        {/* totes */}
        <article className="bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden">
          <div>
            <video
              autoPlay
              muted
              loop
              // controls
              width="100%"
              poster="/images/videosImages/reel-rey-poster.jpg"
            >
              <source
                src="/public/images/videosImages/Systems Support Engineer.mp4"
                type="video/mp4"
              />
              Tu navegador no admite la reproducción de videos.
            </video>
          </div>

          <section className="p-6">
            <h4>
              TOTES LTDA-Ingeniero en Sistemas de Soporte/Electronica (2022)
            </h4>
            <p className="text-gray-400 text-md mt-2">
              Experto en Resolución de Problemas de Maquinaria Industrial |
              Soporte en Sistemas y Redes | VoIP Supervisión y asistencia
              técnica en diversas áreas. Resolución de problemas técnicos,
              gestión de infraestructura de TI, y garantía de operatividad y
              seguridad. Especialización en mantenimiento de software y
              hardware, incluyendo dispositivos móviles corporativos. Destacado
              por informes detallados que documentan procesos y logros.
              Orientación en mantenimiento de sistemas de software para
              optimizar rendimiento. Especialista en cuidado preciso de
              computadoras y dispositivos móviles corporativos.
            </p>
          </section>
        </article>

        {/* CENTRO CELULAR */}
        <article className="bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden">
          <div>
            <video
              autoPlay
              muted
              loop
              // controls
              width="100%"
              poster="/images/videosImages/reel-rey-poster.jpg"
            >
              <source
                src="/public/images/videosImages/Cellphone repair.mp4"
                type="video/mp4"
              />
              Tu navegador no admite la reproducción de videos.
            </video>
          </div>

          <section className="p-6">
            <h4>Centro Celular - Tec. Electronico (2011-2021)</h4>
            <p className="text-gray-400 text-md mt-2">
              Reparación de teléfonos celulares y dispositivos electrónicos,
              tanto de uso doméstico como industrial. Actualizaciones de
              software y recuperación de datos, incluyendo sistemas Android e
              iOS. Especialización en reparación de componentes SMD y
              nanoelectrónica, con habilidades avanzadas de soldadura utilizando
              microscopio. Atención al cliente excepcional, garantizando
              soluciones efectivas y satisfactorias. Mi enfoque es brindar
              soluciones técnicas de calidad y servicio excepcional, asegurando
              que los dispositivos funcionen de manera óptima y satisfaciendo
              las necesidades de los clientes.
            </p>
          </section>
        </article>
        {/* SEITEL */}
        <article className="bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden">
          <div>
            <video
              autoPlay
              muted
              loop
              // controls
              width="100%"
              poster="/images/videosImages/reel-rey-poster.jpg"
            >
              <source
                src="/public/images/videosImages/redes.mp4"
                type="video/mp4"
              />
              Tu navegador no admite la reproducción de videos.
            </video>
          </div>

          <section className="p-6">
            <h4>SEITEL ENTEL (2010 - 2011)</h4>
            <p className="text-gray-400 text-md mt-2">
              Cableado de redes de telefonía multipares y configuración de redes
              domiciliarias para acceso a internet. Verificación y optimización
              de servidores de redes WLAN y LAN. Control de calidad y
              supervisión de instalaciones, así como control de velocidades de
              conexión a internet. Gestión de la división de la Planta Externa y
              mantenimiento de redes. Elaboración de informes detallados para
              documentar procesos y resultados.
            </p>
          </section>
        </article>

        
      </section>

      {/* Seccion derecha */}
      {/* <section className="grid gap-10">
        <article className="bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden">
          <div>
            <img
              src="/images/videosImages/macroeconomics.webp"
              alt="macroeconomics"
              loading="lazy"
            />
          </div>
          <section className="p-6">
            <h4>Macroeconomics - The Project is Colombia</h4>
            <p className="text-gray-400 text-md mt-2">
              Chronicle edited for the Project is Colombia from Noticias
              Caracol. Journalist: Victor Grosso. Editing and coloring: Diego
              Téllez. Language: spanish. December 2020.
            </p>
            <a
              href="https://youtu.be/-MCSBxC_a6M"
              target="_blank"
              className="bg-gradient-to-t from-green-400 to-primary-color p-1 absolute bottom-0 right-0 text-lg"
            >
              <i className="bx bx-link text-black"></i>
            </a>
          </section>
        </article>

        <article className="bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden">
          <div>
            <img
              src="/images/videosImages/burger.webp"
              alt="burger day"
              loading="lazy"
            />
          </div>
          <section className="p-6">
            <h4>Burger Day - 2022</h4>
            <p className="text-gray-400 text-md mt-2">
              Video edited for Fedegán on International Hamburger Day 2022 where
              Hector Horacio Hernandez, manager of Alimont Food Service Sas, is
              interviewed. Language: spanish. May 2022.
            </p>
            <a
              href="https://youtu.be/gAcZh8c1Pa4"
              target="_blank"
              className="bg-gradient-to-t from-green-400 to-primary-color p-1 absolute bottom-0 right-0 text-lg"
            >
              <i className="bx bx-link text-black"></i>
            </a>
          </section>
        </article>

        <div className="grid place-items-center">
          <a
            href="https://www.youtube.com/channel/UCjtCZzmhh8fafKo5L-YbSyg"
            target="_blank"
            className="text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end max-w-max"
          >
            <i className="bx bxl-youtube mr-2 text-2xl"></i>
            Youtube channel
          </a>
        </div>
      </section> */}
    </section>
  );
};

export default Experiences;
