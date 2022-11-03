import "./toboProjects.css";

/* TOBOProject */

const TOBOProject = () => {
  return (
    <div className="toboProject">
      <img src="img/tobo/project/project-hero.png" alt="" id="projectHero" />
      <div className="projectCircle"></div>

      <div className="projectDetails">
        <h3>JPEG 1</h3>
        <h4>by <span>istgalo</span></h4>
        <p>Dedicated a variety of causes finding solutions for burnout and combatting the resulting symptoms. Dedicated a variety of causes finding solutions for burnout and combatting the resulting symptoms. Dedicated a variety of causes finding solutions for burnout and combatting the resulting symptoms.</p>
      </div>

      <div className="clear"></div>
    </div>
  );
}

/* TOBOProjects*/

const TOBOProjects = () => {
  return (
    <div className="toboModule" id="toboProjects">
      <div className="moduleColumn">
        <h3>PROJECTS</h3>
        <p>Dedicated a variety of causes finding solutions for burnout and combatting the resulting symptoms.</p>
        <a href="https://www.artblocks.io/" target="_blank" rel="noreferrer" id="projectsArtBlocks"><img src="img/tobo/logo-artblocks.png" alt="ArtBlocks" /><img src="img/tobo/button-arrow.svg" alt="" id="artBlocksArrow" /></a>
      </div>

      <div className="clear"></div>
      <TOBOProject />
    </div>
  );
};

export default TOBOProjects;
