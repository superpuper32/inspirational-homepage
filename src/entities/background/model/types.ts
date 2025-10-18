export interface BackgroundState {
    currentBackground: string;
    loading: boolean;
    error: string | null;
}

export interface BackgroundImage {
    url: string;
    id: string;
}
