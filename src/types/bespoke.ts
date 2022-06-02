export interface art{
    id: string;
    name: string;
    alt: string;
    img: string;
}

export interface feature{
    title: string;
    description: string;
    img: string;
    alt: string;
    info?: string;
}

export interface simpleCard{
    title: string;
    image: string;
    alt: string;
    url: string;
}