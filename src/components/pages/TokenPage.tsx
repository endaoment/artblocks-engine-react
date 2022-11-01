import Page from "components/Page";
import { useParams } from "react-router-dom";
import TokenDetails from "components/TokenDetails";
import ProjectList from "components/ProjectList";

const TokenPage = () => {
  const { id } = useParams();

  return (
    <Page>
      {id && <TokenDetails id={id} />}
      <ProjectList />
    </Page>
  );
};

export default TokenPage;
