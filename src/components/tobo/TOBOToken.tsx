import { useState } from 'react';
import TOBOMint from "./TOBOMint";
import TOBOProjects from "./TOBOProjects";
import useProject from "hooks/useProject";
import useToken from "hooks/useToken";
import {
  coreContractAddress,
  etherscanBaseUrl,
  mediaUrl,
  openseaBaseUrl,
} from "config";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import "./toboToken.css";

/* OtherTokens */

function OtherTokens(props: { id: string }) {
  const { data } = useProject(props.id);
  const project = data?.project;
  const invocations = parseInt(project?.invocations);
  const [tokensShown, setTokensShown] = useState<number>(12);

  const moreClick = () => {
    if ((tokensShown + 12) >= invocations) {
      setTokensShown(invocations);
    } else {
      setTokensShown(tokensShown + 12);
    }
  };

  return (
    <div id="toboOtherTokens">
      <h3>MORE ARTWORK</h3>

      {project &&
        [...Array(tokensShown)].map((_n, i: number) => (
          <div key={i} className="otherTokensMint">
            <TOBOMint invocation={i.toString()} />
          </div>
        ))}

      <div className="clear"></div>
      { tokensShown < invocations && <button id="tokensViewMore" onClick={ moreClick }>VIEW MORE</button> }
    </div>
  );
}

/* TokenInfo */

function InfoItem(props: { feature: string; value: string }) {
  return (
    <div className="toboInfoItem">
      <span className="itemFeature">{props.feature}</span>
      <span
        className="itemValue"
        style={{
          fontFamily: props.value === "Value" ? '"anonymous-pro-b", serif' : "",
        }}
      >
        {props.value}
      </span>
      <div className="clear"></div>
    </div>
  );
}

function TokenInfo(props: { token: any }) {
  //console.log(props.token)
  return (
    <div id="toboTokenInfo">
      <div className="moduleColumn" id="infoDetails">
        <a href="https://linktr.ee/ryangreen8" target="_blank" rel="noreferrer">
          <span>https://linktr.ee/ryangreen8</span>
        </a>
        <p>
          {props.token && parse(props.token.project.description)}
          <br />
          <br />
          <br />
          <span>License:</span> CC-NC-SA 4.0
          <br />
          <br />
          <span>Library:</span> p5@1.0.0
          <br />
          <br />
          <br />
          <span>Owned by:</span>{" "}
          <a
            href={`${etherscanBaseUrl}/address/${props.token.owner.id}`}
            target="_blank"
            rel="noreferrer"
          >
            {props.token.owner.id}
          </a>
        </p>
        <a
          href={`${etherscanBaseUrl}/token/${coreContractAddress}?a=${props.token.tokenId}`}
          target="_blank"
          rel="noreferrer"
          className="detailsFooterLink"
        >
          <span>View on Etherscan</span> -&gt;
        </a>
        <a
          href={`${openseaBaseUrl}/${coreContractAddress}/${props.token.tokenId}`}
          target="_blank"
          rel="noreferrer"
          className="detailsFooterLink"
        >
          <span>View on OpenSea</span> -&gt;
        </a>
      </div>

      {/*<div className="moduleColumn" id="infoMeta">
        <InfoItem feature="Feature" value="Value" />
        <InfoItem feature="Rare?" value="Rare." />
        <InfoItem feature="Rare?" value="Rare." />
        <InfoItem feature="Rare?" value="Rare." />
        <InfoItem feature="Rare?" value="Rare." />
        <InfoItem feature="Rare?" value="Rare." />
      </div>*/}

      <div className="clear"></div>
    </div>
  );
}

/* TokenPreview */

function TokenPreview(props: { token: any; invocation: string }) {
  const navigate = useNavigate();

  const headingClick = () => {
    navigate(`/`);
  };

  return (
    <div id="toboTokenPreview">
      <TOBOMint invocation={props.invocation} live={true} />
      {/*<img src={ `${ mediaUrl }/thumb/${ props.invocation }.png` } alt="" />*/}
      <h4>
        <div>by {props.token.project.artistName}</div>
        <br />
        <a onClick={headingClick} style={{cursor:'pointer'}}><em>VIEW PROJECT</em></a>
      </h4>
    </div>
  );
}

/* TOBOToken */

const TOBOToken = (props: { id: string | undefined }) => {
  const { data } = useToken(props.id ?? "");
  const token = data?.token;

  return (
    <div id="toboToken">
      {token && (
        <>
          <TokenPreview token={token} invocation={token.invocation} />
          <TokenInfo token={token} />
          <OtherTokens id={token.project.id} />
          <TOBOProjects />
        </>
      )}
    </div>
  );
};

export default TOBOToken;
