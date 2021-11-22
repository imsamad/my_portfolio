import SvgIcon from "@mui/material/SvgIcon";

import ProjectSvgIcon from "./Icons/project";
import ServiceSvgIcon from "./Icons/service";
import SkillsSvgIcon from "./Icons/skills";

const ProjectIcon = (props) => (
  <SvgIcon {...props}>
    <ServiceSvgIcon />
    {/* <ProjectSvgIcon /> */}
  </SvgIcon>
);
const ServiceIcon = (props) => (
  <SvgIcon {...props}>
    <ServiceSvgIcon />
  </SvgIcon>
);
const SkillsIcon = (props) => (
  <SvgIcon {...props}>
    <SkillsSvgIcon />
  </SvgIcon>
);

export { ProjectIcon, ServiceIcon, SkillsIcon };
