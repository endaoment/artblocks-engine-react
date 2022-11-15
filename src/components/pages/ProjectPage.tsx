//import Page from 'components/Page';
import TOBOPage from 'components/tobo/TOBOPage';
//import Alert from '@mui/material/Alert';
//import ProjectDetails from 'components/ProjectDetails';
import { useParams } from 'react-router-dom';
import { coreContractAddress } from 'config';
import TOBOProject from 'components/tobo/TOBOProject';

const ProjectPage = () => {
  const { projectId } = useParams();

  return (
    <TOBOPage>
      {/* {
        projectId ? (
          <ProjectDetails id={coreContractAddress?.toLowerCase() + '-' + projectId} />
        ) : (
          <Alert severity="info">
            Project not found
          </Alert>
        )
      } */}
      <TOBOProject id={ coreContractAddress?.toLowerCase() + '-' + projectId } />
    </TOBOPage>
  )
}

export default ProjectPage;