import ConnectWallet from "../ConnectWallet";
import { useNavigate } from "react-router-dom";
import "./toboHeader.css";

/* TOBOHeader */

const TOBOHeader = () => {
  const navigate = useNavigate();

  const logoClick = () => {
    navigate("/");
  };

  return (
    <header>
      <h1 onClick={logoClick}>
        <img src="/img/tobo/logo.svg" alt="TURNOUT FOR BURNOUT" id="toboLogo" />
        <img
          src="/img/tobo/logo-footer.svg"
          alt="TURNOUT FOR BURNOUT"
          id="toboMobileLogo"
        />
      </h1>
    </header>
  );
};

export default TOBOHeader;
