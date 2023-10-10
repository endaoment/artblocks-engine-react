import ConnectWallet from "../ConnectWallet";
import { useNavigate } from "react-router-dom";
import "./toboHeader.css";
import { useWeb3React } from "@web3-react/core";

/* TOBOHeader */

const TOBOHeader = () => {
  const navigate = useNavigate();
  const { isActive } = useWeb3React();

  const logoClick = () => {
    navigate("/");
  };

  return (
    <header>
      <h3 onClick={logoClick} className="masthead">The <span style={{color:"#7ac4e2"}}>Colors</span> That Heal</h3>
      <ConnectWallet />
    </header>
  );
};

export default TOBOHeader;
