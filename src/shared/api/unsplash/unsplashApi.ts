const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const unsplashApi = {
    async getRandomBackground(): Promise<string> {
        try {
            const response = await fetch(
                `https://api.unsplash.com/photos/random?query=nature&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`
            );
            const data = await response.json();
            return data.urls.full;
        } catch (error) {
            console.error('Error fetching background:', error);
            return 'default_background_url';
        }
    }
};
