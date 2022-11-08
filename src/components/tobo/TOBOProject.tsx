import TOBOButton from "./TOBOButton";
import TOBOMint from "./TOBOMint";
import TOBOProjects from "./TOBOProjects";
import "./toboProject.css";

/* Tokens */

function ProjectTokens() {
  return (
    <div id="toboProjectTokens">
      <h3>TOKENS</h3>

      <div className="projectTokensMint">
        <TOBOMint file="/img/tobo/project/project-hero.png" num="1" />
      </div>

      <div className="projectTokensMint">
        <TOBOMint file="/img/tobo/project/project-hero.png" num="2" />
      </div>

      <div className="projectTokensMint">
        <TOBOMint file="/img/tobo/project/project-hero.png" num="3" />
      </div>

      <div className="clear"></div>
    </div>
  );
}

/* Project Details */

function ProjectDetails() {
  const nftClick = () => {
    window.open("https://opensea.io/endaoment");
  };

  const cryptoClick = () => {
    window.open("https://app.endaoment.org/orgs/843739888");
  };

  return (
    <div id="toboProjectDetails">
      <div id="projectDetailsPreview">
        <TOBOMint file="/img/tobo/project/project-hero.png" num="1" />
      </div>

      <div id="projectDetailsInfo">
        <h3>JPEG 1</h3>
        <button id="infoMint">Mint</button>
        <div className="clear"></div>
        <h4>RYAN GREEN</h4>
        <h5><span>3</span> of <span>275</span> minted</h5>
        <p id="infoTime">This descending auction has a start time of Oct 31, 2022, 12:00 PM GMT-5 at the price of 1.5 Ξ and will exponentially decrease until the resting price of 0.15 Ξ is met.<br />
        <br />
        <span>price per token:</span> 1.5Ξ</p>
        <p id="infoNote">Compression has been the driving force behind the image-based internet since the early 90s. No compression, no Netscape, no social media, no NFTs. The JPEG compression has specifically enabled photography-based imagery on the net. It has always served that purpose and over time become the de facto default for showing high quality imagery online. But compression always leaves a trace, which has become the lens through which the network sees the world of uploaded images.<br />
        <br />
        "A painting is not a picture of an experience, but is the experience." ― Mark Rothko</p>

        <div id="infoLinks">
          <span id="linksHeading">Proceeds go to:</span>
          <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="/img/tobo/logo-endaoment.png" alt="Endaoment" /></a>
          <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="/img/tobo/logo-endaoment.png" alt="Endaoment" /></a>
          <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="/img/tobo/logo-endaoment.png" alt="Endaoment" /></a>
          <div className="clear"></div>
          <TOBOButton text="Donate NFTs" viaEndaoment={true} action={ nftClick } />
          <TOBOButton text="Donate Crypto" viaEndaoment={true} action={ cryptoClick } />
        </div>
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
      <ProjectTokens />
      <TOBOProjects />
    </div>
  );
};

export default TOBOProject;
