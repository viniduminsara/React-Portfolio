export const fetchMediumBlogs = async () => {
    try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@viniduminsara');
        if (!response.ok) {
            throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        return data.items;
    } catch (error: any) {
        console.log(error.message);
    }
}
