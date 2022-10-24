import './toboFooter.css';

const TOBOFooter = () => {
  return (
    <footer>
      <img src="img/tobo/logo-footer.svg" alt="TURNOUT FOR BURNOUT" id="footer-logo" />

      <div id="footerDetails">
        <div id="footerDetailsSocial">
          <span className="footerDetailsHeading">Social</span>
          <a href="https://twitter.com/endaomentdotorg" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://www.linkedin.com/company/endaoment/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/endaomentdotorg/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://vimeo.com/" target="_blank" rel="noreferrer">Vimeo</a>
        </div>

        <div id="footerDetailsDisclaimer">
          <span className="footerDetailsHeading">Disclaimer</span>
          <p>Dedicated a variety of causes finding solutions for burnout and combatting the resulting symptoms. Dedicated a variety of causes finding solutions for burnout and combatting the resulting symptoms</p>
          <span id="footerDetailsCopy">(c) 2022</span>
        </div>
      </div>

      <div className="clear"></div>

      <div id="footerLogos">
        <span>A Project from</span>
        <a href="https://www.artblocks.io/" target="_blank" rel="noreferrer"><img src="img/tobo/logo-artblocks.png" alt="ArtBlocks" /></a>
        <a href="https://sostento.org/" target="_blank" rel="noreferrer"><img src="img/tobo/logo-sostento.png" alt="Sostento" /></a>
        <a href="https://endaoment.org/" target="_blank" rel="noreferrer"><img src="img/tobo/logo-endaoment.png" alt="Endaoment" /></a>
      </div>
    </footer>
  );
}

export default TOBOFooter;
