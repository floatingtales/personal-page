interface LinkListObj {
  name: string;
  url: string;
}

interface ProjectDetailsProps {
  bgColor: string;
  imgSource: string;
  projTitle: string;
  projDesc: string;
  stackList: Array<string>;
  linkList: Array<LinkListObj>;
}

export default ProjectDetailsProps;
