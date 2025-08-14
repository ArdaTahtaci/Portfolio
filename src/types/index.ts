export type ProjectLink = {
    github?: string | null;
    live?: string | null;
    website?: string | null;
};

export type Project = {
    id: string;
    title: string;
    description: string;
    tech: string[];
    image?: string | null;
    links?: ProjectLink;
    featured?: boolean;
};

export type SocialLink = {
    id: string;
    label: string;
    url: string;
    icon: 'github' | 'linkedin' | 'x' | 'globe' | 'mail' | 'telegram';
};

export type Skill = {
    id: string;
    label: string;
    level?: string;
};

export type Profile = {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    email: string;
    location: string;
};

export type Experience = {
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
    technologies: string[];
};

export type Education = {
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    status?: string;
};

export type Hackathon = {
    id: string;
    name: string;
    location: string;
    type: 'hackathon' | 'ecosystem-event';
    achievement?: string;
    description?: string;
    highlight?: boolean;
};

export type Article = {
    id: string;
    title: string;
    description: string;
    publishedDate: string;
    readTime: string;
    url: string;
    tags: string[];
    featured?: boolean;
}; 