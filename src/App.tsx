import Header from './Header';
import ProjectCard from './ProjectCard';
import projectList from './project_list';
import { Grid, Container, Typography } from '@mui/material';

function App() {
  return (
    <>
      <Header />
      <Container component="section">
        <Typography component="h2" variant="h2" color="slategrey">
          Experience
        </Typography>
        <Grid container justifyContent="center" marginY="50px" rowSpacing={5}>
          {projectList.map((project) => (
            <Grid item>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
