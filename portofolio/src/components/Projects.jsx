import React from "react"
import ProjectItem from "./ProjectItem"
import propertyImg from "../assets/placeholder.svg"

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
        eum? Eaque nam iusto commodi quae. Sunt velit quia modi dolorum?
        Reprehenderit ducimus impedit aliquid distinctio deserunt aut iste
        reiciendis laudantium.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={propertyImg} title="PlaceHolder" />
        <ProjectItem img={propertyImg} title="PlaceHolder"  />
        <ProjectItem img={propertyImg} title="PlaceHolder" />
        <ProjectItem img={propertyImg} title="PlaceHolder" />
      </div>
    </div>
  );
};

export default Projects;
