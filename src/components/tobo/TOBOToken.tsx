import TOBOMint from "./TOBOMint";
import TOBOProjects from "./TOBOProjects";
import useProject from "hooks/useProject";
import useToken from "hooks/useToken";
import { coreContractAddress, generatorUrl, mediaUrl, tokenUrl } from "config";
import "./toboToken.css";
import { useWindowSize } from "hooks/useWindowSize";
import useTheme from "@mui/material/styles/useTheme";
import { parseAspectRatio } from "utils/scriptJSON";
import TokenPreview from "../TokenPreview";
import { Box } from "@mui/system";
import Link from "@mui/material/Link";
import TOBOLiveMint from "./TOBOLiveMint";

/* OtherTokens */

function OtherTokens(props: { id: string }) {
  const { data } = useProject(props.id);
  const project = data?.project;
  const invocations = parseInt(project?.invocations);

  return (
    <div id="toboOtherTokens">
      <h3>MORE ARTWORK</h3>

      {project &&
        [...Array(invocations < 10 ? invocations : 10)].map((_n, i: number) => (
          <div key={i} className="otherTokensMint">
            <TOBOMint invocation={i.toString()} />
          </div>
        ))}

      <div className="clear"></div>
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
          Our marquee generative art collection is a box of memories,a garden of
          hope,and a beacon of encouragement from generative artist Ryan Green.
          <br />
          <br />
          "Having someone that will say 'I see you, let me go with you' is a
          simple gesture that is profoundly encouraging.” - Ryan Green
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
          <span>Owned by:</span> ryangreen8
        </p>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="detailsFooterLink"
        >
          <span>View on Etherscan</span> -&gt;
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="detailsFooterLink"
        >
          <span>View on OpenSea</span> -&gt;
        </a>
      </div>

      <div className="clear"></div>
    </div>
  );
}

/* TokenPreview */

function TokenPreviewBlock(props: { token: any; invocation: string }) {
  return (
    <div id="toboTokenPreview">
      <TOBOLiveMint invocation={props.invocation} />
      <h3>
        {props.token.project.name}
        <span>by {props.token.project.artistName}</span>
      </h3>
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
          <TokenPreviewBlock token={token} invocation={token.invocation} />
          <TokenInfo token={token} />
          <OtherTokens id={token.project.id} />
          <TOBOProjects />
        </>
      )}
    </div>
  );
};

export default TOBOToken;
