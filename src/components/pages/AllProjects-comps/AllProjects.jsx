import React from "react";
import { Link } from "react-router-dom";

import Shopping from "/images/projectsImages/shopping.png";
import DashboardProductos from "/images/projectsImages/curso-profecional-d-next.verce.png";
import pokedex from "/images/projectsImages/pokedex.webp";
import ReactTask from "/images/projectsImages/ReactTareas.png";
import reactCalculator from "/images/projectsImages/react-calculator.png";
import ClickCounter from "/images/projectsImages/Click counter.png";
import ReactTodos from "/images/projectsImages/ReactTodos.png";
import crud from "/images/projectsImages/crud.webp";
import moviepedia from "/images/projectsImages/moviepedia.webp";
import tictactoe from "/images/projectsImages/tictactoe.webp";
import soccerquotes from "/images/projectsImages/soccerquotes.webp";
import fortunecookies from "/images/projectsImages/fortunecookies.webp";
import todomachine from "/images/projectsImages/todomachine.webp";

const AllProjects = () => {
  const projects = [
    {
      id: 1,
      src: Shopping,
      demo: "https://reynald0sw-pages.netlify.app/",
      code: "https://github.com/reynald0Sw/react-vite-y-tailwind",
    },
    {
      id: 2,
      src: DashboardProductos,
      demo: "https://curso-profecional-d-next.vercel.app/dashboard",
      code: "https://github.com/reynald0Sw/cursoProfecional-D-Next",
    },
    {
      id: 3,
      src: ReactTodos,
      demo: "https://reynald0sw.github.io/TodosReact/",
      code: "https://github.com/reynald0Sw/TodosReact/tree/gh-pages",
    },
    {
      id: 4,
      src: reactCalculator,
      demo: "hhttps://reynald0sw.github.io/react-calculator/",
      code: "https://github.com/reynald0Sw/react-calculator/tree/gh-pages",
    },
    {
      id: 5,
      src: ClickCounter,
      demo: "https://reynald0sw.github.io/clicks-counter/",
      code: "https://github.com/reynald0Sw/clicks-counter/tree/gh-pages",
    },
    {
      id: 6,
      src: ReactTask,
      demo: "https://reynald0sw.netlify.app/",
      code: "https://github.com/reynald0Sw/ReactTareas",
    },
    {
      id: 7,
      src: todomachine,
      demo: "https://diegotellezc.github.io/toDoMachine/",
      code: "https://github.com/diegotellezc/toDoMachine",
    },
    {
      id: 8,
      src: crud,
      demo: "https://users-crud-bydt.netlify.app/",
      code: "https://github.com/diegotellezc/Users-CRUD",
    },
    {
      id: 9,
      src: moviepedia,
      demo: "https://diegotellezc.github.io/Moviepedia/",
      code: "https://github.com/diegotellezc/Moviepedia",
    },
    {
      id: 10,
      src: pokedex,
      demo: "https://pokedex-bydt.netlify.app/",
      code: "https://github.com/diegotellezc/pokedex",
    },
    {
      id: 11,
      src: tictactoe,
      demo: "https://tictactoebydt.netlify.app/",
      code: "https://github.com/diegotellezc/Tictactoebydt",
    },
    {
      id: 12,
      src: fortunecookies,
      demo: "https://fortunecookiesapp.netlify.app/",
      code: "https://github.com/diegotellezc/fortuneCookies",
    },
    {
      id: 13,
      src: soccerquotes,
      demo: "https://soccerquotes.netlify.app/",
      code: "https://github.com/diegotellezc/soccerQuotes",
    },
  ];

  const handleClickDemo = (demoUrl) => {
    const newWindow = window.open(demoUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  const handleClickCode = (codeUrl) => {
    const newWindow = window.open(codeUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  return (
    <section
      name="Projects"
      className="relative w-full text-white md:min-h-screen mt-24 mb-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl">
            Projects
          </h2>
          <p className="py-6">Check out my best web applications here.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(({ id, src, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto"
            >
              <img
                loading="lazy"
                src={src}
                alt="project card"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleClickDemo(demo)}
                  className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleClickCode(code)}
                  className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          to="/"
          className="text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300"
        >
          <span className="">
            <i className="bx bx-home-heart mr-2"></i>
          </span>
          Go back
        </Link>
      </div>
    </section>
  );
};

export default AllProjects;
