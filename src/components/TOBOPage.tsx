import TOBOHeader from 'components/TOBOHeader';
import './toboPage.css';

interface Props {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <div id="toboPage">
      <TOBOHeader />

      <main>
        { children }
      </main>
    </div>
  );
}

export default Page;
