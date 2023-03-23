import Project from './Interfaces/Project';

const projectList: Project[] = [
  {
    title: 'VaaS',
    picture: '../../public/vaas-grafana.gif',
    description:
      'A monitoring and metric visualization tool for Kubernetes clusters',
    technlogies: [
      'React',
      'Node',
      'Express',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'Grafana',
      'Prometheus',
    ],
    github: 'https://github.com/oslabs-beta/VaaS',
    dockerhub: 'https://hub.docker.com/r/vaasofficial/vaas_official_image',
    website: 'https://vaas.dev/',
    live: true,
  },
];

export default projectList;
