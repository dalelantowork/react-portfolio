export interface MemberData {
    name: string;
    img: string;
    github?: string;
    linkedin?: string;
}

export interface Project {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    github: string;
    webapp: string;
    member?: MemberData[];
}
