import {
    Code2,
    Database,
    Figma,
    FileJson,
    Globe,
    Laptop,
    LayoutGrid,
    Leaf,
    Server,
    Shapes,
    Share2,
    Wind,
    Cpu,
    Coffee,
    ShipWheel,
    HardDrive
} from "lucide-react";

export const AllSkills = {
    languages: [
        {name: 'Java', icon: Coffee},
        {name: 'Python', icon: Cpu},
        {name: 'JavaScript', icon: FileJson},
        {name: 'TypeScript', icon: Code2}
    ],
    frontend: [
        {name: 'React', icon: Globe},
        {name: 'Next.js', icon: Share2},
        {name: 'Tailwind CSS', icon: Wind},
        {name: 'Redux', icon: Shapes}
    ],
    backend: [
        {name: 'Spring Boot', icon: Leaf},
        {name: 'Express', icon: Laptop},
        {name: 'Flask', icon: Server},
    ],
    database: [
        {name: 'MySQL', icon: HardDrive},
        {name: 'MongoDB', icon: Database},
    ],
    cloud: [
        {name: 'AWS', icon: LayoutGrid},
        {name: 'Docker', icon: ShipWheel},
        {name: 'NGINX', icon: Server},
    ],
    Design: [
        {name: 'Figma', icon: Figma},
    ]
};
