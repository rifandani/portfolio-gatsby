import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faLinkedin, faGithub, faNode, faGitAlt, faReact } from '@fortawesome/free-brands-svg-icons';
import {
  faCodeBranch,
  faCubes,
  faDatabase,
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(
  fab,
  faLinkedin,
  faGithub,
  faNode,
  faReact,
  faGitAlt,
  faCodeBranch,
  faCubes,
  faDatabase,
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane
);

export type IconProps = FontAwesomeIconProps['icon'];

const Icon: React.FC<FontAwesomeIconProps> = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;
