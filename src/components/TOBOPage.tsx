import TOBOHeader from 'components/TOBOHeader';
import './toboPage.css';

interface Props {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <div id="toboPage">
      <main>
        { children }
      </main>

      <TOBOHeader />
    </div>
  );
}

export default Page;
