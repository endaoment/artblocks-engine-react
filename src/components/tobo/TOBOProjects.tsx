import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProjects from 'hooks/useProjects';
import { projectsPerPage } from 'config';
import { OrderDirection, Project } from 'utils/types';
import { mediaUrl } from 'config';
import PurchaseProject from '../PurchaseProject';
import useProject from 'hooks/useProject';
import TOBOMint from "./TOBOMint";
import "./toboProjects.css";

/* TOBOProject */

const TOBOProject = (props: { project: Project}) => {
  const { data } = useProject(props.project.id);
  const project = data?.project;
  const navigate = useNavigate();

  const ctaClick = () => {
    navigate(`/project/${ props.project.projectId }`);
  }

  return (
    <div className="toboProject">
      <TOBOMint invocation="0" live={ true } />
      <div className="projectCircle"></div>

      <div className="projectDetails">
        <h3>{ props.project.name }</h3>
        <h4>by <span>{ props.project.artistName }</span></h4>
        <p id="projectTime">This auction of 250 unique pieces is priced at 0.20Ξ each, beginning at 9pm ET November 15th, 2022. The first five pieces have been minted by the artist as a donation to Sostento, and as 1/1 pieces for auction on OpenSea in December.<br />
        <br />
        <span>price per token:</span> 0.20Ξ</p>
        <p>{ props.project.description }</p>
        <span className="projectMinted">{ `${ props.project.invocations } of ${ props.project.maxInvocations } minted` }</span>
        { project && <PurchaseProject project={project} /> }

        { /*<div className="projectLogos">
          <span>Proceeds go to:</span>
          <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="/img/tobo/logo-endaoment.png" alt="Endaoment" /></a>
          <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="/img/tobo/logo-endaoment.png" alt="Endaoment" /></a>
          <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="/img/tobo/logo-endaoment.png" alt="Endaoment" /></a>
          <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="/img/tobo/logo-endaoment.png" alt="Endaoment" /></a>
          <div className="clear"></div>
        </div> */}
      </div>

      <div className="clear"></div>
      <button className="projectMint" onClick={ ctaClick }>Learn more</button>
    </div>
  );
}

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
        <p>Proceeds will directly support programs that reduce burnout among frontline healthcare workers who provide services to families living in poverty.</p>
        <a href="https://www.artblocks.io/" target="_blank" rel="noreferrer" id="projectsArtBlocks"><img src="/img/tobo/logo-artblocks.png" alt="ArtBlocks" /><img src="/img/tobo/button-arrow.svg" alt="" id="artBlocksArrow" /></a>
      </div>

      <div className="clear"></div>
      { data?.projects && data.projects?.map((project: Project, i: number) => (<TOBOProject key={ i } project={ project } />)) }
    </div>
  );
};

export default TOBOProjects;