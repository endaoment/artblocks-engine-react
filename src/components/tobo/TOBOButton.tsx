import './toboButton.css';

const TOBOButton = (props: { text: string; viaEndaoment?: boolean | undefined; disabled?: boolean | undefined; action?: Function; }) => {
  const buttonClick = () => {
    props.action!();
  }

  return (
    <button onClick={ props.action ? buttonClick : () => null} className={ `toboButton ${ props.disabled && 'disabled' }` }>
      { props.text }
      { props.viaEndaoment && <span>via<img src="img/tobo/logo-endaoment.png" alt="Endaoment" /></span> }
    </button>
  );
}

export default TOBOButton;
