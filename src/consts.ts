import type { Site, Metadata } from "@types";

export type NavLink = {
    label: string;
    href: string;
};

export const SITE: Site = {
    NAME: "Abby Black Art",
    EMAIL: "abigail.erdman4@gmail.com",
    NUM_POSTS_ON_HOMEPAGE: 3,
    NUM_WORKS_ON_HOMEPAGE: 2,
    NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const NAV_LINKS: NavLink[] = [
    {
        label: "2025",
        href: "/years/2025",
    },
    {
        label: "Previous Work",
        href: "/previous-work",
    },
    {
        label: "Exhibitions",
        href: "/exhibitions",
    },
    {
        label: "About",
        href: "/about",
    },
] as const;

export const EXHIBITIONS: Metadata = {
    TITLE: "Exhibitions",
    DESCRIPTION: "A collection of exhibitions Abby Black has participated in.",
};

export const PREVIOUS_WORK: Metadata = {
    TITLE: "Previous Work",
    DESCRIPTION: "A collection of previous work Abby Black has done.",
};

export const HOME: Metadata = {
    TITLE: "Home",
    DESCRIPTION: "Abby Black Art",
};

export const ABOUT: Metadata = {
    TITLE: "About",
    DESCRIPTION: "Learn more about Abby Black and her artistic journey.",
};

export const PROJECTS: Metadata = {
    TITLE: "Projects",
    DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};
