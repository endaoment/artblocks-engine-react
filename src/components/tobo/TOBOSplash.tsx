import TOBOButton from './TOBOButton';
import './toboSplash.css';

/* SplashModule3 */

function SplashModule3() {
  return (
    <div className="toboSplashModule" id="toboSplashModule3">
    </div>
  );
}

/* SplashModule2 */

function SplashModule2() {
  return (
    <div className="toboSplashModule" id="toboSplashModule2">
    </div>
  );
}

/* SplashModule1 */

function SplashModule1() {
  const nftClick = () => {
    window.open('https://endaoment.org');
  }

  const cryptoClick = () => {
    window.open('https://endaoment.org');
  }

  return (
    <div className="toboSplashModule" id="toboSplashModule1">
      <img src="img/tobo/splash/module-1-shape.png" alt="" id="splashModule1Shape" />

      <div className="splashModuleColumn splashModuleColumnL">
        <img src="img/tobo/splash/module-1-hero.jpg" alt="" />
        <div id="splashModule1Circle"></div>
      </div>

      <div className="splashModuleColumn splashModuleColumnR">
        <img src="img/tobo/splash/module-1-logo.svg" alt="TURNOUT FOR BURNOUT" id="splashModule1Logo" />
        <p>Raising funds to reduce burnout among hard working health workers through an NFT charity mining event & auction.</p>
        <TOBOButton text="Donate NFT" viaEndaoment={ true } action={ nftClick } />
        <TOBOButton text="Donate Crypto" viaEndaoment={ true } action={ cryptoClick } />

        <div id="splashModule1Mint">
          <TOBOButton text="Mint a Charity Piece" disabled={ true } />
          <span>Minting November X, 2022</span>
        </div>
      </div>

      <div className="clear"></div>
      <div id="splashModule1Banner">Art Blocks Mint + <span>&nbsp;Charity Fundraiser</span></div>
    </div>
  );
}

/* SplashHeader */

function SplashHeader() {
  return (
    <div id="toboSplashHeader">
      <img src="img/tobo/splash/header.jpg" alt="" id="splashHeaderBg" />
      <div id="splashHeaderBgOverlay"></div>
      <div className="splashHeaderLine" id="splashHeaderLineXL"></div>
      <div className="splashHeaderLine" id="splashHeaderLineXR"></div>
      <div className="splashHeaderLine" id="splashHeaderLineYT"></div>
      <div className="splashHeaderLine" id="splashHeaderLineYB"></div>

      <h2>
        Wellness through
        <br />
        Collective Action
      </h2>

      <div id="splashHeaderLogos">
        <span>POWERED BY</span>
        <a href="https://www.artblocks.io/" target="_blank" rel="noreferrer"><img src="img/tobo/logo-artblocks.png" alt="ArtBlocks" /></a>
        <a href="https://sostento.org/" target="_blank" rel="noreferrer"><img src="img/tobo/logo-sostento.png" alt="Sostento" /></a>
        <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="img/tobo/logo-endaoment.png" alt="Endaoment" /></a>
      </div>
    </div>
  );
}

const TOBOSplash = () => {
  return (
    <>
      <SplashHeader />
      <SplashModule1 />
      <SplashModule2 />
      <SplashModule3 />
    </>
  )
}

export default TOBOSplash;
