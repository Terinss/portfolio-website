import { Card, Box, Typography, Grid, Tooltip } from '@mui/material';
import { GitHub, Language } from '@mui/icons-material';
import Project from './Interfaces/Project';

const ProjectCard: React.FC<{ project: Project }> = ({
  project: {
    title,
    picture,
    description,
    technlogies,
    github,
    dockerhub,
    website,
    live,
  },
}) => {
  return (
    <Card
      raised={true}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        justifyContent: 'space-between',
        width: { xs: '80vw', md: '750px' },
        maxWidth: { xs: '500px', md: '1000px' },
        fontSize: { xs: '.8rem', md: '1rem' },
        borderRadius: '10px',
        backgroundColor: 'slategrey',
      }}
    >
      <Box
        padding={2}
        sx={{
          flex: 2,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{ marginY: { sm: '5px', md: '10px' }, fontSize: '2em' }}
          component="div"
          variant="h3"
        >
          {title}
        </Typography>
        <Typography
          sx={{ flexGrow: 4, fontSize: '1.2em' }}
          component="div"
          variant="body1"
        >
          {description}
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Typography component="div" variant="h6" sx={{ fontSize: '1.5em' }}>
            Technologies:
          </Typography>
          <Grid container direction="row" rowSpacing={0} columnSpacing={1}>
            {technlogies.map((tech) => (
              <Grid item>
                <Typography component="div" variant="body2">
                  {`${tech}`}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ position: 'absolute', bottom: '10px', right: '10px' }}>
          <Tooltip title="Github">
            <GitHub href={github} />
          </Tooltip>
          {dockerhub ? (
            <Tooltip title={`Dockerhub`}>
              <Typography component="a" href={dockerhub} />
            </Tooltip>
          ) : null}
          {website ? (
            <Tooltip title={website}>
              <Language href={website} />
            </Tooltip>
          ) : null}
        </Box>
      </Box>
      <Box
        sx={{
          height: '100%',
        }}
      >
        <Tooltip title={`Visit ${website}`} placement="top">
          <a href="https://vaas.dev/" target="_blank">
            <img
              style={{
                width: 'auto',
                maxHeight: '350px',
              }}
              src={picture}
              alt={title}
            />
          </a>
        </Tooltip>
      </Box>
    </Card>
  );
};

export default ProjectCard;
