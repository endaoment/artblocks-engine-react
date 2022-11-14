import TOBOMint from "./TOBOMint";
import TOBOProjects from "./TOBOProjects";
import useProject from 'hooks/useProject';
import useToken from 'hooks/useToken';
import { mediaUrl } from 'config';
import "./toboToken.css";

/* OtherTokens */

function OtherTokens(props: {id: string}) {
  const { data } = useProject(props.id);
  const project = data?.project;
  const invocations = parseInt(project?.invocations);

  return (
    <div id="toboOtherTokens">
      <h3>MORE ARTWORK</h3>

      { project && [...Array(invocations < 10 ? invocations : 10)].map((_n, i: number) => (
        <div key={ i } className="otherTokensMint">
          <TOBOMint invocation={ i.toString() } />
        </div>
      ))}

      <div className="clear"></div>
    </div>
  );
}

/* TokenInfo */

function InfoItem(props: { feature: string; value: string; }) {
  return (
    <div className="toboInfoItem">
      <span className="itemFeature">{ props.feature }</span>
      <span className="itemValue" style={{ fontFamily: props.value === 'Value' ? '"anonymous-pro-b", serif' : "" }}>{ props.value }</span>
      <div className="clear"></div>
    </div>
  );
}

function TokenInfo(props: {token: any;}) {
  //console.log(props.token)
  return (
    <div id="toboTokenInfo">
      <div className="moduleColumn" id="infoDetails">
        <a href="https://linktr.ee/ryangreen8" target="_blank" rel="noreferrer"><span>https://linktr.ee/ryangreen8</span></a>
        <p>I find the patterns which emerge from the herding of sheep and the murmuration of starlings an apt metaphor for our own journeys of searching for truth, beauty and love while we're here. These pieces are best viewed live to witness how the path of these digital creatures' lives paint their tiny planet. ***<br />
        I behold the sleeping planet ​| Plucked from the sky | Rolled around in my hands. | “My Word formed it.” | Time worn, | Life stained, | Soil rinsed and washed. | “Our story in repose.” | Love lost, | Wanderlust, | Loud surrender. | “It must have been painful.” | Placed in my collection, | Delicate and beautiful, | When viewed from this distance. | Selah. | I return my gaze to the heavens. ***
        25% of sales above resting price will be used to fund The Playability Initiative whose mission is to design free, fun video games and creative digital tools to kids with disabilities.<br />
        <br />
        <br />
        <span>License:</span> CC-NC-SA 4.0<br />
        <br />
        <span>Library:</span> p5@1.0.0<br />
        <br />
        <br />
        <span>Owned by:</span> ryangreen8</p>
        <a href="#" target="_blank" rel="noreferrer" className="detailsFooterLink"><span>View on Etherscan</span> -&gt;</a>
        <a href="#" target="_blank" rel="noreferrer" className="detailsFooterLink"><span>View on OpenSea</span> -&gt;</a>
      </div>

      { /*<div className="moduleColumn" id="infoMeta">
        <InfoItem feature="Feature" value="Value" />
        <InfoItem feature="Rare?" value="Rare." />
        <InfoItem feature="Rare?" value="Rare." />
        <InfoItem feature="Rare?" value="Rare." />
        <InfoItem feature="Rare?" value="Rare." />
        <InfoItem feature="Rare?" value="Rare." />
      </div>*/ }

      <div className="clear"></div>
    </div>
  );
}

/* TokenPreview */

function TokenPreview(props: {token: any; invocation: string}) {
  return (
    <div id="toboTokenPreview">
      <TOBOMint invocation={ props.invocation } live={ true } />
      { /*<img src={ `${ mediaUrl }/thumb/${ props.invocation }.png` } alt="" />*/ }
      <h3>{ props.token.project.name }<span>by { props.token.project.artistName }</span></h3>
    </div>
  );
}

/* TOBOToken */

const TOBOToken = (props: {id: string | undefined}) => {
  const { data } = useToken(props.id ?? '');
  const token = data?.token;

  return (
    <div id="toboToken">
      { token &&
      <>
        <TokenPreview token={ token } invocation={ token.invocation } />
        <TokenInfo token={ token } />
        <OtherTokens id={ token.project.id } />
        <TOBOProjects />
      </>
      }
    </div>
  );
};

export default TOBOToken;