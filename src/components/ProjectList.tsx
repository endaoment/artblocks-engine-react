import { useState, useEffect } from "react";
import useProjects from "hooks/useProjects";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Masonry from "@mui/lab/Masonry";
import { OrderDirection, Project } from "utils/types";
import { useWindowSize } from "hooks/useWindowSize";
import useTheme from "@mui/material/styles/useTheme";
import ProjectSummary from "./ProjectSummary";
import Loading from "./Loading";
import { projectsPerPage } from "config";
import { Pagination } from "@mui/material";

const ProjectList = () => {
  const size = useWindowSize();
  const theme = useTheme();
  const [highestProjectId, setHighestProjectId] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const skip = currentPage * projectsPerPage;
  const first = projectsPerPage;
  const [orderDirection, setOrderDirection] = useState<OrderDirection>(
    OrderDirection.DESC
  );
  const { loading, error, data } = useProjects({ skip, first, orderDirection });

  useEffect(() => {
    if (data?.projects?.length) {
      const projectIds = data.projects.map((project: Project) =>
        Number(project.projectId)
      );
      const maxProjectId = Math.max(...projectIds);
      if (maxProjectId > highestProjectId) {
        setHighestProjectId(maxProjectId);
      }
    }
  }, [data, data?.projects, highestProjectId]);

  let width = 280;
  const maxColumns = 2;
  if (size && !isNaN(size.width)) {
    width =
      size.width > theme.breakpoints.values.md
        ? ((Math.min(size.width, 1200) - 96) * 1) / maxColumns
        : size.width > theme.breakpoints.values.sm
        ? size.width - 64
        : size.width - 48;
  }

  return (
    <Box
      sx={{
        background: "var(--tobo-yellow)",
        width: "100%",
        padding: "42px 100px",
        borderTopLeftRadius: "100px",
        borderTopRightRadius: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Typography variant="h3">Projects</Typography>

        {/* Turn off sort while limited number of projects  */}
        {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Sort
              </InputLabel>
              <NativeSelect
                value={orderDirection}
                sx={{ fontSize: '14px' }}
                onChange={(e) => {
                  setCurrentPage(0);
                  setOrderDirection(e.target.value as OrderDirection)
                }}
              >
                <option value={OrderDirection.DESC}>Latest</option>
                <option value={OrderDirection.ASC}>Earliest</option>
              </NativeSelect>
            </FormControl>
          </Box>
                
          <Typography fontSize="14px" pt={2} ml={3}>
            Showing  { data?.projects ? Math.min(projectsPerPage, data?.projects?.length) : '-' }
          </Typography>
        </Box> */}
      </Box>

      {loading ? (
        <Box sx={{ height: "480px", display: "flex", alignItems: "center" }}>
          <Loading />
        </Box>
      ) : error ? (
        <Alert severity="error">Error loading projects</Alert>
      ) : data?.projects?.length > 0 ? (
        <Masonry columns={[1, 1, 2]} spacing={3} sx={{ margin: "32px 0" }}>
          {data?.projects &&
            data.projects.map((project: Project) => (
              <ProjectSummary
                key={project.id}
                project={project}
                width={width}
                showDescription
              />
            ))}
        </Masonry>
      ) : data?.projects?.length === 0 ? (
        <Alert severity="info">No projects found</Alert>
      ) : null}

      {/* Remove pagination while small number of projects */}
      {/* <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
        <Pagination
          count={Math.ceil(highestProjectId / projectsPerPage)}
          color="primary"
          page={currentPage + 1}
          onChange={(event, page) => {
            window.scrollTo(0, 0);
            setCurrentPage(page - 1);
          }}
        />
      </Box> */}
    </Box>
  );
};

export default ProjectList;
