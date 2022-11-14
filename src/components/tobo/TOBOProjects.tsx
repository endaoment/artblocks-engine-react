import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProjects from "hooks/useProjects";
import { projectsPerPage } from "config";
import { OrderDirection, Project } from "utils/types";
import { mediaUrl } from "config";
import "./toboProjects.css";
import TOBOLiveMint from "./TOBOLiveMint";
import PurchaseProject from "components/PurchaseProject";

/* TOBOProject */

const TOBOProject = (props: { project: Project }) => {
  const navigate = useNavigate();
  const token = props.project?.tokens[0];

  const ctaClick = () => {
    navigate(`/project/${props.project.projectId}`);
  };

  return (
    <div className="toboProject">
      <div id="projectHero">
        <TOBOLiveMint invocation={"0"} />
      </div>
      {/* <img src={`${mediaUrl}/thumb/0.png`} alt="" id="projectHero" /> */}
      <div className="projectCircle"></div>

      <div className="projectDetails">
        <h3>{props.project.name}</h3>
        <h4>
          by <span>{props.project.artistName}</span>
        </h4>
        <span className="projectMinted">{`${props.project.invocations} of ${props.project.maxInvocations} minted`}</span>

        <p id="infoTime">
          This auction of 250 unique pieces is priced at 0.20 Ξ each, beginning
          at 9pm ET November 15th, 2022. The first five pieces have been minted
          by the artist as a donation to Sostento, and as 1/1 pieces for auction
          on OpenSea in December.
          <br />
          <br />
          <span>price per token:</span> 0.20Ξ
        </p>
        <p id="infoNote">{props.project && props.project.description}</p>

        <div id="infoLinks">
          {/* <span id="linksHeading">Proceeds go to:</span>
          <a href="https://endaoment.org/" target="_blank" rel="noreferrer">
          <img src="/img/tobo/logo-endaoment.png" alt="Endaoment" />
        </a> */}
          <div className="clear"></div>
          <div id="infoMint">
            {props.project && <PurchaseProject project={props.project} />}
          </div>
          {/* <TOBOButton
            text="Donate NFTs"
            viaEndaoment={false}
            action={nftClick}
          />
          <TOBOButton
            text="Donate Crypto"
            viaEndaoment={true}
            action={cryptoClick}
          /> */}
        </div>
      </div>

      <div className="clear"></div>
      <button className="projectMint" onClick={ctaClick}>
        <span>Mint</span> / Learn more
      </button>
    </div>
  );
};

/* TOBOProjects*/

const TOBOProjects = () => {
  const [currentPage] = useState(0);
  const skip = currentPage * projectsPerPage;
  const first = projectsPerPage;
  const [orderDirection] = useState<OrderDirection>(OrderDirection.DESC);
  const { data } = useProjects({ skip, first, orderDirection });

  return (
    <div className="toboModule" id="toboProjects">
      <div className="moduleColumn">
        <h3>GENERATIVE ART FUNDRAISER</h3>
        <p>
          Proceeds will directly support programs that reduce burnout among
          frontline healthcare workers who provide services to families living
          in poverty.
        </p>
        <a
          href="https://www.artblocks.io/"
          target="_blank"
          rel="noreferrer"
          id="projectsArtBlocks"
        >
          <img src="/img/tobo/logo-artblocks.png" alt="ArtBlocks" />
          <img src="/img/tobo/button-arrow.svg" alt="" id="artBlocksArrow" />
        </a>
      </div>

      <div className="clear"></div>
      {data?.projects &&
        data.projects?.map((project: Project, i: number) => (
          <TOBOProject key={i} project={project} />
        ))}
    </div>
  );
};

export default TOBOProjects;
