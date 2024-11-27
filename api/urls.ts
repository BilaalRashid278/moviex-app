export const BASE_URL: string = "https://api.themoviedb.org/3/";

const TMDB_TOKEN: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDU2Mzg4N2ZjZDJlZThiNmJhZGU1MGIxNDNhYTQwMyIsInN1YiI6IjY1NDBlZjk3NDU1N2EwMTBhM2RiOThlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.caIG98AZSSLTJf3PmBJ4HalhUs0bwTwn1QZTokAjgz0";

export const getImageUri = (imageRef : string) : string => (`https://image.tmdb.org/t/p/original${imageRef}`);

export interface RequestInit {
    method?: string;
    body?: BodyInit | null;
    cache?: RequestCache;
    credentials?: RequestCredentials;
    integrity?: RequestInit;
    keepalive?: boolean;
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: ReferrerPolicy | string;
    referrerPolicy?: ReferrerPolicy;
    signal?: AbortSignal;
    size?: number;
    window?: WindowProxy;
}

export const headers = {
    Authorization: `Bearer ${TMDB_TOKEN}`
};

export const fetchDataFromApi = async (url: string, options: any) => {
    const opts = {
        ...options,
        headers : headers
    };
    try {
        const res = await fetch(BASE_URL + url, opts);
        const data = await res.json();
        return data;
    } catch (error: any) {
        return 'error';
    }
};