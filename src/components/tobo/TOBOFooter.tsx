import "./toboFooter.css";
import { useNavigate } from "react-router-dom";

/* TOBOFooter */

const TOBOFooter = () => {
  
const navigate = useNavigate();

const headingClick = () => {
  navigate(`/about`);
};

  return (
    <footer>
      
      <img onClick={headingClick}
        src="/img/tobo/logo-footer.svg"
        alt="TURNOUT FOR BURNOUT"
        id="footer-logo"
      />

      <div id="footerDetails">
        <div id="footerDetailsSocial">
          <h6>Social</h6>
          <a
            href="https://twitter.com/endaomentdotorg"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/company/endaoment/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/endaomentdotorg/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>

        <div id="footerDetailsDisclaimer">
          <h6>About</h6>
          <p>
            <em>The Colors That Heal</em> is a project in support of "Turnout for Burnout," a fundraising effort dedicated to finding
            solutions for burnout and combatting the resulting symptoms in local healthcare worker populations. To discover more ways 
            to support the "Turnout for Burnout" campaign, <a href="/about">click here.</a>
          </p>
          <span>(c) 2022</span>
        </div>
      </div>

      <div className="clear"></div>

      <div id="footerLogos">
        <span>A Project from</span>
        <a href="https://sostento.org/" target="_blank" rel="noreferrer">
          <img src="/img/tobo/logo-sostento.png" alt="Sostento" />
        </a>
        <a href="https://endaoment.org/" target="_blank" rel="noreferrer">
          <img src="/img/tobo/logo-endaoment.png" alt="Endaoment" />
        </a>
        <a href="https://www.artblocks.io/" target="_blank" rel="noreferrer">
          <img src="/img/tobo/logo-artblocks.png" alt="ArtBlocks" />
        </a>
      </div>
    </footer>
  );
};

export default TOBOFooter;
