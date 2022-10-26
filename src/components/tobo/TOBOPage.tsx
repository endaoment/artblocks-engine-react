import TOBOHeader from 'components/tobo/TOBOHeader';
import TOBOFooter from 'components/tobo/TOBOFooter';
import './toboPage.css';

/* TOBOPage */

interface Props {
  children: React.ReactNode;
}

const TOBOPage = ({ children }: Props) => {
  return (
    <div id="toboPage">
      <main>
        { children }
      </main>

      <TOBOFooter />
      <TOBOHeader />
    </div>
  );
}

export default TOBOPage;
