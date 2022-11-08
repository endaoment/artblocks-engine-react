import './toboMint.css';

const TOBOMint = (props: { file: string; num: string; }) => {
  const expandClick = () => {

  }

  const fullClick = () => {

  }

  const linkClick = () => {

  }

  return (
    <div className="toboMint">
      <img src={ props.file } alt="" />
      <span>MINT #{ props.num }</span>
      <button onClick={ expandClick }><img src="/img/tobo/mint/icon-mint-expand.png" alt="" /></button>
      <button onClick={ fullClick }><img src="/img/tobo/mint/icon-mint-full.png" alt="" /></button>
      <button onClick={ linkClick }><img src="/img/tobo/mint/icon-mint-link.png" alt="" /></button>
      <div className="clear"></div>
    </div>
  );
}

export default TOBOMint;
