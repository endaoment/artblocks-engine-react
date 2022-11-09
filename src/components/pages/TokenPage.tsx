//import Page from 'components/Page';
import TOBOPage from 'components/tobo/TOBOPage';
//import { useParams } from 'react-router-dom';
//import TokenDetails from 'components/TokenDetails';
import TOBOToken from 'components/tobo/TOBOToken';

const TokenPage = () => {
  //const { id } = useParams();

  return (
    <TOBOPage>
      {/* {
        id && <TokenDetails id={id} />
      } */}
      <TOBOToken />
    </TOBOPage>
  )
}

export default TokenPage;