import { Menu } from './general_info.interface';

export interface Tag {
    name: string;
    slug: string;
}

export interface Post {
    tags?: Tag[];
    type?: string;
    image?: string;
    title: string;
    menu?: Menu[];
    created?: string;
    gallery?: any[];
    updated?: string;
    subtitle?: string;
    description?: string;
    external_url?: any;
    extraposts?: Post[];
}

export interface Section {
    color?: string;
    posts: Post[];
    title: string;
    description?: string;
    created?: string;
    updated?: string;
    component: string;
    background_image?: string;
    slug: string;
}

export interface Page {
    menu?: any;
    slug: string;
    title: string;
    banner?: any;
    created: string;
    updated: string;
    sections: Section[];
    description?: string;
}
