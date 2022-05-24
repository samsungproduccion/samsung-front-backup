export interface HeadSwiper{
    image: string;
    image_mobile: string;
    title: string;
    category: string;
    icon: string;
    url? : string;
    alt: string;
    button?: {
        url: string;
        text: string;
    }
}

export interface cardElements {
    name: string;
    url: string;
    image: string;
    alt: string;
}