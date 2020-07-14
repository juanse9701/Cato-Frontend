export interface Tag {
    name: string;
    slug: string;
}

export interface Post {
    tags: Tag[];
    type: string;
    image: string;
    title: string;
    created: string;
    gallery: any[];
    updated: string;
    subtitle: string;
    description: string;
    external_url?: any;
}

export interface Section {
    color: string;
    posts: Post[];
    title: string;
    subtitle: string;
    created: string;
    updated: string;
    component: string;
}

export interface Page {
    menu?: any;
    slug: string;
    title: string;
    banner?: any;
    created: string;
    updated: string;
    sections: Section[];
}
