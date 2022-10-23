import TOBOButton from './TOBOButton';
import './toboSplash.css';

/* SplashModule3 */

function SplashModule3() {
  return (
    <div className="toboSplashModule" id="toboSplashModule3">
      <div className="splashModuleColumn splashModuleColumnL">
        <img src="img/tobo/splash/module-3-hero.png" alt="" />
      </div>

      <div className="splashModuleColumn splashModuleColumnR">
        <h3>SHARE THE CAUSE</h3>
        <p>Endaoment and Sostento are 501c3 charitable organizations. Proceeds will directly support programs that reduce burnout among frontline healthcare workers who provide services to families living in poverty.</p>

        <div id="splashModule3Social">
          <span>SHARE THE CAUSE</span>
          <a href="https://twitter.com/endaomentdotorg" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://www.linkedin.com/company/endaoment/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/endaomentdotorg/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://vimeo.com/" target="_blank" rel="noreferrer">Vimeo</a>
        </div>
      </div>

      <div className="clear"></div>
    </div>
  );
}

/* SplashModule2 */

function SplashModule2() {
  const spaceClick = () => {
    window.open('https://endaoment.org');
  }

  return (
    <div className="toboSplashModule" id="toboSplashModule2">
      <div className="splashModuleColumn splashModuleColumnL">
        <h3>THE COLORS THAT HEAL</h3>
        <p>This generative art collection is a box of memories,a garden of hope,and a beacon of encouragement via ArtBlocks Engine platform.</p>
        <TOBOButton text="Come to the Space" action={ spaceClick } />
      </div>

      <div className="splashModuleColumn splashModuleColumnR">
        <img src="img/tobo/splash/module-2-hero.jpg" alt="" />
        <div className="splashModule2Circle" id="splashModule2Circle1"></div>
        <div className="splashModule2Circle" id="splashModule2Circle2"></div>
      </div>

      <div className="clear"></div>
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
