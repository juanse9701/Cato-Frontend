export interface Child {
    url: string;
    name: string;
}

export interface Menu {
    url: string;
    name: string;
    children: Child[];
}

export interface Header {
    logo: string;
    menu: Menu[];
}

export interface GeneralInfo {
    header: Header;
    footer: string;
}
