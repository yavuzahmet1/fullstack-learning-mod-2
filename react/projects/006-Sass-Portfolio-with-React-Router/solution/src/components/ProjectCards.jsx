import { imageData } from "../helper/imageData";

const ProjectCards = () => {
  return (
    <>
      {imageData?.map((item, i) => {
        return (
          <div key={i} className="projects__item">
            <img src={item.image} alt="My Project" />
          </div>
        );
      })}
    </>
  );
}

export default ProjectCards