import { useNavigate } from "react-router-dom";
import { generatorUrl, coreContractAddress, mediaUrl } from "config";
import "./toboMint.css";
import { useWindowSize } from "hooks/useWindowSize";
import { useTheme } from "@mui/material";
import useToken from "hooks/useToken";
import { parseAspectRatio } from "utils/scriptJSON";

const TOBOLiveMint = (props: { invocation: string }) => {
  const navigate = useNavigate();
  const size = useWindowSize();
  const theme = useTheme();
  const { data } = useToken(props.invocation);
  const token = data?.token;

  const width =
    size.width > theme.breakpoints.values.md
      ? (Math.min(size.width, 1200) - 48) * 0.66666
      : size.width > theme.breakpoints.values.sm
      ? size.width - 48
      : size.width - 32;

  const aspectRatio = parseAspectRatio(token?.project.scriptJSON);
  const height = width / aspectRatio;

  const expandClick = () => {
    window.open(
      `${generatorUrl}/${coreContractAddress?.toLowerCase()}/${
        props.invocation
      }`
    );
  };

  const fullClick = () => {
    window.open(`${mediaUrl}/${props.invocation}.png`);
  };

  const linkClick = () => {
    navigate(
      `/token/${coreContractAddress?.toLowerCase()}-${props.invocation}`
    );
  };

  return (
    <div className="toboMint">
      <iframe
        title={props.invocation}
        src={`${generatorUrl}/${coreContractAddress?.toLowerCase()}/${
          props.invocation
        }`}
        width={"100%"}
        height={height}
        frameBorder="0"
        style={{ marginBottom: "-7px" }}
      />
      {/* <img
        onClick={linkClick}
        src={`${mediaUrl}/thumb/${props.invocation}.png`}
        alt=""
      /> */}
      <span onClick={linkClick}>MINT #{props.invocation}</span>
      <button onClick={expandClick}>
        <img src="/img/tobo/mint/icon-mint-expand.png" alt="" />
      </button>
      <button onClick={fullClick}>
        <img src="/img/tobo/mint/icon-mint-full.png" alt="" />
      </button>
      <button onClick={linkClick}>
        <img src="/img/tobo/mint/icon-mint-link.png" alt="" />
      </button>
      <div className="clear"></div>
    </div>
  );
};

export default TOBOLiveMint;
