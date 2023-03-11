interface NavbarProps {
  scrollToAbout: Function;
  scrollToContact: Function;
  scrollToProjects: Function;
  opened: boolean;
  close?: () => void;
  toggle?: () => void;
}

export default NavbarProps;
