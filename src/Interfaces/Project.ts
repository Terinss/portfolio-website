export default interface Project {
  title: string;
  picture: string;
  description: string;
  technlogies: string[];
  github: string;
  dockerhub: string | null;
  website: string | null;
  live: boolean;
}
