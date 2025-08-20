export type Movie = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
}

/*export type MoviePage = {
    content: Movie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}*/

export type MoviePage = {
    content: Movie[];
    currentPage: number;
    totalElements: number;
    totalPages: number;
    first: boolean;
    last: boolean;
    size: number;
}