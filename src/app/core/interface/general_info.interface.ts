export interface Child {
    url: string;
    name: string;
    external_url: boolean;
}

export interface Menu {
    url: string;
    name: string;
    external_url: boolean;
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
