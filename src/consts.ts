import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
    NAME: "Abby Black Art",
    EMAIL: "abigail.erdman4@gmail.com",
    NUM_POSTS_ON_HOMEPAGE: 3,
    NUM_WORKS_ON_HOMEPAGE: 2,
    NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
    TITLE: "Home",
    DESCRIPTION: "Abby Black Art",
};

export const ABOUT: Metadata = {
    TITLE: "About",
    DESCRIPTION: "Learn more about Abby Black and her artistic journey.",
};

export const TWOD: Metadata = {
    TITLE: "2D Art",
    DESCRIPTION: "Explore the world of 2D art, including drawing, painting, and printmaking.",
};

export const THREED: Metadata = {
    TITLE: "3D Art",
    DESCRIPTION: "Discover the realm of 3D art, featuring sculpture, ceramics, and installations.",
};

export const BLOG: Metadata = {
    TITLE: "Blog",
    DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
    TITLE: "Work",
    DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
    TITLE: "Projects",
    DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
    {
        NAME: "twitter-x",
        HREF: "https://twitter.com/markhorn_dev",
    },
    {
        NAME: "github",
        HREF: "https://github.com/markhorn-dev",
    },
    {
        NAME: "linkedin",
        HREF: "https://www.linkedin.com/in/markhorn-dev",
    },
];
