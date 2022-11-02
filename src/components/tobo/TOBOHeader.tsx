import ConnectWallet from '../ConnectWallet';
import './toboHeader.css';

/* TOBOHeader */

const TOBOHeader = () => {
  return (
    <header>
      <h1>
        <img src="img/tobo/logo.svg" alt="TURNOUT FOR BURNOUT" id="toboLogo" />
        <img src="img/tobo/logo-footer.svg" alt="TURNOUT FOR BURNOUT" id="toboMobileLogo" />
      </h1>

      <ConnectWallet />
    </header>
  );
}

export default TOBOHeader;
