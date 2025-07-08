import React from "react";
import NavBar from "./NavBar";
import { albumsData } from "../assets/assets";
import Albumitem from "./Albumitem";
import { songsData } from "../assets/assets";
import Songitem from "./songitem";

const DisplayHome = () => {
  return (
    <>
      <NavBar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Feature charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <Albumitem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <Songitem
              key={index}
              name={item.name}
              desc={item.decs}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
