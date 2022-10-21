import './toboSplash.css';

function SplashModule3() {
  return (
    <>
    </>
  );
}

function SplashModule2() {
  return (
    <>
    </>
  );
}

function SplashModule1() {
  return (
    <>
    </>
  );
}

function SplashHeader() {
  return (
    <div id="toboSplashHeader">
      <img src="img/splash-header.jpg" alt="" id="splashHeaderBg" />
      <div id="splashHeaderBgOverlay"></div>
      <div className="splashHeaderLine" id="splashHeaderLineXL"></div><div className="splashHeaderLine" id="splashHeaderLineXR"></div><div className="splashHeaderLine" id="splashHeaderLineYT"></div><div className="splashHeaderLine" id="splashHeaderLineYB"></div>
      <h2>Wellness through<br />Collective Action</h2>

      <div id="splashHeaderLogos">
        <span>POWERED BY</span>
        <a href="https://www.artblocks.io/" target="_blank" rel="noreferrer"><img src="img/logo-artblocks.svg" alt="ArtBlocks" /></a>
        <a href="https://sostento.org/" target="_blank" rel="noreferrer"><img src="img/logo-sostento.svg" alt="Sostento" /></a>
        <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="img/logo-endaoment.svg" alt="Endaoment" /></a>
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
