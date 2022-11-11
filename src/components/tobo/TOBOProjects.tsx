import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProjects from 'hooks/useProjects';
import { projectsPerPage } from 'config';
import { OrderDirection, Project } from 'utils/types';
import { mediaUrl } from 'config';
import "./toboProjects.css";

/* TOBOProject */

const TOBOProject = (props: { project: Project}) => {
  const navigate = useNavigate();
  const token = props.project?.tokens[0];

  const ctaClick = () => {
    navigate(`/project/${ props.project.projectId }`);
  }

  return (
    <div className="toboProject">
      <img src={ `${ mediaUrl }/thumb/${ token.tokenId }.png` } alt="" id="projectHero" />
      <div className="projectCircle"></div>

      <div className="projectDetails">
        <h3>{ props.project.name }</h3>
        <h4>by <span>{ props.project.artistName }</span></h4>
        <p>{ props.project.description }</p>
        <span className="projectMinted">{ `${ props.project.invocations } of ${ props.project.maxInvocations } minted` }</span>

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
      <button className="projectMint" onClick={ ctaClick }><span>Mint</span> / Learn more</button>
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
        <h3>PROJECTS</h3>
        <p>Dedicated a variety of causes finding solutions for burnout and combatting the resulting symptoms.</p>
        <a href="https://www.artblocks.io/" target="_blank" rel="noreferrer" id="projectsArtBlocks"><img src="/img/tobo/logo-artblocks.png" alt="ArtBlocks" /><img src="/img/tobo/button-arrow.svg" alt="" id="artBlocksArrow" /></a>
      </div>

      <div className="clear"></div>
      { data?.projects && data.projects?.map((project: Project, i: number) => (<TOBOProject key={ i } project={ project } />)) }
    </div>
  );
};

export default TOBOProjects;
