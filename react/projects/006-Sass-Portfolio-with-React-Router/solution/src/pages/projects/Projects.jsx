import React, { Suspense, lazy } from "react";
import "./Projects.scss";
// import ProjectCards from "../../components/ProjectCards";
const ProjectCards = lazy(() => import("../../components/ProjectCards"));
const Projects = () => {
  return (
    <>
      <div className="project-bgImg-container">
        <div className="projects__bio-image">
          <h1>My Projects</h1>
        </div>
      </div>
      <main className="projects">
        <div className="projects__items">
          <Suspense fallback={<div>Loadings.....</div>}>
            <ProjectCards />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Projects;

