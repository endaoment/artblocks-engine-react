//import Page from 'components/Page';
import TOBOPage from 'components/tobo/TOBOPage';
import { useParams } from 'react-router-dom';
//import TokenDetails from 'components/TokenDetails';
import TOBOToken from 'components/tobo/TOBOToken';

const TokenPage = () => {
  const { contract,id } = useParams();
  let nid = id;
  if(contract)
  {
    nid = contract+id;
  }

  return (
    <TOBOPage>
      {/* {
        id && <TokenDetails id={id} />
      } */}
      <TOBOToken id={nid} />
    </TOBOPage>
  )
}

export default TokenPage;