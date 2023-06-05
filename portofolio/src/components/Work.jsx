import React from "react";
import Workitem from "./Workitem";
const data = [
  {
    year: 2020,
    title: "Full stack developer",
    duration: "2 Years",
    details: "lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    year: 2018,
    title: "Front End Developer",
    duration: "2 Years",
    details: "lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[black]  ">Work</h1>
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
