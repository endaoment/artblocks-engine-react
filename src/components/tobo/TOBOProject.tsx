import TOBOButton from "./TOBOButton";
import TOBOMint from "./TOBOMint";
import TOBOProjects from "./TOBOProjects";
import useProject from 'hooks/useProject';
import "./toboProject.css";

/* Tokens */

function ProjectTokens(props: { id: string }) {
  const { data } = useProject(props.id);
  const project = data?.project;
  const invocations = parseInt(project?.invocations);

  return (
    <div id="toboProjectTokens">
      <h3>TOKENS</h3>

      { project && [...Array(invocations < 10 ? invocations : 10)].map((_n, i: number) => (
      <div key={ i } className="projectTokensMint">
        <TOBOMint invocation={ i.toString() } />
      </div>
    ))}

      <div className="clear"></div>
    </div>
  );
}

/* Project Details */

function ProjectDetails(props: { id: string }) {
  const { data } = useProject(props.id);
  const project = data?.project;
  const token = project?.tokens[0];

  const nftClick = () => {
    window.open("https://opensea.io/endaoment");
  };

  const cryptoClick = () => {
    window.open("https://app.endaoment.org/orgs/843739888");
  };

  return (
    <div id="toboProjectDetails">
      <div id="projectDetailsPreview">
        { token && <TOBOMint invocation={ token.tokenId } /> }
      </div>

      <div id="projectDetailsInfo">
        <h3>{ project && project.name }</h3>
        <button id="infoMint">Mint</button>
        <div className="clear"></div>
        <h4>{ project && project.artistName }</h4>
        <h5><span>{ project && project.invocations }</span> of <span>{ project && project.maxInvocations }</span> minted</h5>
        <p id="infoTime">This descending auction has a start time of Oct 31, 2022, 12:00 PM GMT-5 at the price of 1.5 Ξ and will exponentially decrease until the resting price of 0.15 Ξ is met.<br />
        <br />
        <span>price per token:</span> 1.5Ξ</p>
        <p id="infoNote">{ project && project.description }</p>

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

const TOBOProject = (props: { id: string | undefined }) => {
  return (
    <div id="toboProject">
      { props.id &&
        <>
          <ProjectDetails id={ props.id } />
          <ProjectTokens id={ props.id } />
        </>
      }
      <TOBOProjects />
    </div>
  );
};

export default TOBOProject;
