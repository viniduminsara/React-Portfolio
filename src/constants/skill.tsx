import { ComponentType } from "react";
import {
    SiAngular,
    SiDocker,
    SiExpress,
    SiFigma,
    SiFlask,
    SiJavascript,
    SiJupyter,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNginx,
    SiPandas,
    SiPostgresql,
    SiPython,
    SiPytorch,
    SiReact,
    SiScikitlearn,
    SiSpringboot,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import {AWS, Java} from "developer-icons";

interface IconProps {
    size?: number;
    className?: string;
}

export const AllSkills = {
    languages: [
        {name: 'Java', icon: Java as ComponentType<IconProps>},
        {name: 'Python', icon: SiPython},
        {name: 'JavaScript', icon: SiJavascript},
        {name: 'TypeScript', icon: SiTypescript},
    ],
    frontend: [
        {name: 'React', icon: SiReact},
        {name: 'Angular', icon: SiAngular},
        {name: 'Next.js', icon: SiNextdotjs},
        {name: 'Tailwind CSS', icon: SiTailwindcss},
    ],
    backend: [
        {name: 'Spring Boot', icon: SiSpringboot},
        {name: 'Express', icon: SiExpress},
        {name: 'Flask', icon: SiFlask},
    ],
    database: [
        {name: 'MySQL', icon: SiMysql},
        {name: 'PostgreSQL', icon: SiPostgresql},
        {name: 'MongoDB', icon: SiMongodb},
    ],
    ml: [
        {name: 'PyTorch', icon: SiPytorch},
        {name: 'scikit-learn', icon: SiScikitlearn},
        {name: 'Pandas', icon: SiPandas},
        {name: 'Jupyter', icon: SiJupyter},
    ],
    cloud: [
        {name: 'AWS', icon: AWS as ComponentType<IconProps>},
        {name: 'Docker', icon: SiDocker},
        {name: 'NGINX', icon: SiNginx},
    ],
    Design: [
        {name: 'Figma', icon: SiFigma},
    ],
};
