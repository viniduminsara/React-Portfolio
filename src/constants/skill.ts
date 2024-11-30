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
    Wind
} from "lucide-react";

export const AllSkills = {
    languages: [
        {name: 'Java', icon: Leaf},
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
        {name: 'Node.js', icon: Server},
        {name: 'Express', icon: Laptop},
        {name: 'MongoDB', icon: Database}
    ],
    tools: [
        {name: 'AWS', icon: LayoutGrid},
        {name: 'Figma', icon: Figma}
    ]
};
