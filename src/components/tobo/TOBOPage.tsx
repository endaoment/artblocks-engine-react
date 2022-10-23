import TOBOHeader from 'components/tobo/TOBOHeader';
import './toboPage.css';

interface Props {
  children: React.ReactNode;
}

const TOBOPage = ({ children }: Props) => {
  return (
    <div id="toboPage">
      <main>
        { children }
      </main>

      <TOBOHeader />
    </div>
  );
}

export default TOBOPage;
