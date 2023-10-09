import ConnectWallet from "../ConnectWallet";
import { useNavigate } from "react-router-dom";
import "./toboHeader.css";
import { useWeb3React } from "@web3-react/core";
import Typography from '@mui/material/Typography';

/* TOBOHeader */

const TOBOHeader = () => {
  const navigate = useNavigate();
  const { isActive } = useWeb3React();

  const logoClick = () => {
    navigate("/");
  };
/*<h1 onClick={logoClick}>
        <img src="/img/tobo/logo.svg" alt="TURNOUT FOR BURNOUT" id="toboLogo" />
        <img
          src="/img/tobo/logo-footer.svg"
          alt="TURNOUT FOR BURNOUT"
          id="toboMobileLogo"
        />
      </h1>
*/
  return (
    <header>
      <h3 onClick={logoClick} className="masthead">The Colors That Heal</h3>
      <ConnectWallet className={!isActive ? "hide" : ""} />
    </header>
  );
};

export default TOBOHeader;
