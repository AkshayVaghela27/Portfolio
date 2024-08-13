// src/components/Experience.js
import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";
import dsa from "../assets/dsa.png";
import dbms from "../assets/dbms.png";

const Experience = () => {
  const techs = [
    { id: 1, src: c, title: "C Language", style: "shadow-blue-500" },
    { id: 2, src: cpp, title: "C++ Language", style: "shadow-blue-300" },
    { id: 3, src: java, title: "Java", style: "shadow-orange-500" },
    { id: 4, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 5, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 6, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 7, src: mongodb, title: "MongoDB", style: "shadow-green-500" },
    { id: 8, src: express, title: "Express", style: "shadow-white" },
    { id: 9, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 10, src: node, title: "NodeJs", style: "shadow-green-400" },
    { id: 11, src: tailwind, title: "TailwindCSS", style: "shadow-blue-600" },
    { id: 12, src: github, title: "GitHub", style: "shadow-sky-400" },
    { id: 13, src: mysql, title: "MySQL", style: "shadow-sky-400" },
    { id: 14, src: dsa, title: "DSA", style: "shadow-sky-400" },
    { id: 15, src: dbms, title: "DBMS", style: "shadow-sky-400" }
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline-block pb-2">
            Experience
          </p>
          <p className="py-6">
            These are the Technologies / Languages I've worked with and used
            in my projects.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center px-4 md:px-12">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-24 mx-auto" />
              <p className="mt-4 text-lg">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
