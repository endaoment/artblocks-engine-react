import { mediaUrl } from 'config';
import './toboMint.css';

const TOBOMint = (props: { id: string; }) => {
  const expandClick = () => {

  }

  const fullClick = () => {

  }

  const linkClick = () => {

  }

  return (
    <div className="toboMint">
      <img src={ `${ mediaUrl }/thumb/${ props.id }.png` } alt="" />
      <span>MINT #{ props.id }</span>
      <button onClick={ expandClick }><img src="/img/tobo/mint/icon-mint-expand.png" alt="" /></button>
      <button onClick={ fullClick }><img src="/img/tobo/mint/icon-mint-full.png" alt="" /></button>
      <button onClick={ linkClick }><img src="/img/tobo/mint/icon-mint-link.png" alt="" /></button>
      <div className="clear"></div>
    </div>
  );
}

export default TOBOMint;
