//import TOBOButton from "./TOBOButton";
import TOBOMint from "./TOBOMint";
import TOBOProjects from "./TOBOProjects";
import "./toboProject.css";

/* Project Details */

function ProjectDetails() {
  return (
    <div id="toboProjectDetails">
      <div id="projectDetailsPreview">
        <TOBOMint file="" />
      </div>

      <div id="projectDetailsInfo">
        <h3>JPEG 1</h3>
        <h4>RYAN GREEN</h4>
      </div>

      <div className="clear"></div>
    </div>
  );
}

/* TOBOProject */

const TOBOProject = () => {
  return (
    <div id="toboProject">
      <ProjectDetails />
      <TOBOProjects />
    </div>
  );
};

export default TOBOProject;
