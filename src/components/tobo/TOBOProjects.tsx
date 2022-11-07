import "./toboProjects.css";

/* TOBOProject */

const TOBOProject = () => {
  return (
    <div className="toboProject">
      <img src="/img/tobo/project/project-hero.png" alt="" id="projectHero" />
      <div className="projectCircle"></div>

      <div className="projectDetails">
        <h3>JPEG 1</h3>
        <h4>by <span>istgalo</span></h4>
        <p>Dedicated a variety of causes finding solutions for burnout and combatting the resulting symptoms. Dedicated a variety of causes finding solutions for burnout and combatting the resulting symptoms. Dedicated a variety of causes finding solutions for burnout and combatting the resulting symptoms.</p>
        <span className="projectMinted">1 of 400 minted</span>

        <div className="projectLogos">
          <span>Proceeds go to:</span>
          <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="/img/tobo/logo-endaoment.png" alt="Endaoment" /></a>
          <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="/img/tobo/logo-endaoment.png" alt="Endaoment" /></a>
          <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="/img/tobo/logo-endaoment.png" alt="Endaoment" /></a>
          <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="/img/tobo/logo-endaoment.png" alt="Endaoment" /></a>
          <div className="clear"></div>
        </div>
      </div>

      <div className="clear"></div>
      <button className="projectMint"><span>Mint</span> / Learn more</button>
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
        <a href="https://www.artblocks.io/" target="_blank" rel="noreferrer" id="projectsArtBlocks"><img src="/img/tobo/logo-artblocks.png" alt="ArtBlocks" /><img src="/img/tobo/button-arrow.svg" alt="" id="artBlocksArrow" /></a>
      </div>

      <div className="clear"></div>
      <TOBOProject />
    </div>
  );
};

export default TOBOProjects;
