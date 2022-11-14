import { useNavigate } from 'react-router-dom';
import { generatorUrl, coreContractAddress, mediaUrl } from 'config';
import './toboMint.css';

const TOBOMint = (props: { invocation: string; live?: boolean; }) => {
  const navigate = useNavigate();

  const expandClick = () => {
    window.open(`${generatorUrl}/${coreContractAddress?.toLowerCase()}/${props.invocation}`);
  }

  const fullClick = () => {
    window.open(`${mediaUrl}/${props.invocation}.png`);
  }

  const linkClick = () => {
    navigate(`/token/${ coreContractAddress?.toLowerCase() }-${props.invocation}`);
  }

  return (
    <div className="toboMint" style={{ backgroundColor: props.live ? 'transparent' : '#FAFAFA'}}>
      { props.live &&
      <iframe
        title={props.invocation}
        src={`${generatorUrl}/${coreContractAddress?.toLowerCase()}/${props.invocation}`}
        width="900"
        height="1200"
        frameBorder="0"
        scrolling="no"
      />
      }
      { !props.live &&
      <>
        <img onClick={ linkClick } src={ `${ mediaUrl }/thumb/${ props.invocation }.png` } alt="" />
        <span onClick={ linkClick }>MINT #{ props.invocation }</span>
        <button onClick={ expandClick }><img src="/img/tobo/mint/icon-mint-expand.png" alt="" /></button>
        <button onClick={ fullClick }><img src="/img/tobo/mint/icon-mint-full.png" alt="" /></button>
        <button onClick={ linkClick }><img src="/img/tobo/mint/icon-mint-link.png" alt="" /></button>
        <div className="clear"></div>
      </>
      }
    </div>
  );
}

export default TOBOMint;