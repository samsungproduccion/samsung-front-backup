export interface state {
    id: string;
    name: string;
}

export interface city{
    id_state: string;
    id: string;
    name: string;
}

export interface district{
    codeState: string;
    codeCity: string;
    id: string;
    name: string;
}