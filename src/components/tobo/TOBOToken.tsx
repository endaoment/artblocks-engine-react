import TOBOMint from "./TOBOMint";
import TOBOProjects from "./TOBOProjects";
import "./toboToken.css";

/* OtherTokens */

function OtherTokens() {
  return (
    <div id="toboOtherTokens">
      <h3>OTHER JPEG TOKENS</h3>

      <div className="otherTokensMint">
        <TOBOMint id="1" />
      </div>

      <div className="otherTokensMint">
        <TOBOMint id="1" />
      </div>

      <div className="otherTokensMint">
        <TOBOMint id="1" />
      </div>

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

function TokenInfo() {
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
        <a href="https://endaoment.org/" target="_blank" rel="noreferrer" className="detailsFooterLink"><span>View on Archipelego</span> -&gt;</a>
        <a href="https://endaoment.org/" target="_blank" rel="noreferrer" className="detailsFooterLink"><span>View on OpenSea</span> -&gt;</a>
        <a href="https://endaoment.org/" target="_blank" rel="noreferrer" className="detailsFooterLink"><span>View on Etherscan</span> -&gt;</a>
        <a href="https://endaoment.org/" target="_blank" rel="noreferrer" className="detailsFooterLink"><span>View on LooksRare</span> -&gt;</a>
      </div>

      <div className="moduleColumn" id="infoMeta">
        <InfoItem feature="Feature" value="Value" />
        <InfoItem feature="Rare?" value="Rare." />
        <InfoItem feature="Rare?" value="Rare." />
        <InfoItem feature="Rare?" value="Rare." />
        <InfoItem feature="Rare?" value="Rare." />
        <InfoItem feature="Rare?" value="Rare." />
      </div>

      <div className="clear"></div>
    </div>
  );
}

/* TokenPreview */

function TokenPreview() {
  return (
    <div id="toboTokenPreview">
      <img src="/img/tobo/project/project-hero.png" alt="" />
      <h3>JPEG #2<span>by RYAN GREEN</span></h3>
    </div>
  );
}

/* TOBOToken */

const TOBOToken = () => {
  return (
    <div id="toboToken">
      <TokenPreview />
      <TokenInfo />
      <OtherTokens />
      <TOBOProjects />
    </div>
  );
};

export default TOBOToken;
