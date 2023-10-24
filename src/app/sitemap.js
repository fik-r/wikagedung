import { getLatestNews } from "@/api/wege-service";
export default async function sitemap() {
    const dataNews = await getLatestNews()
    const posts = dataNews.data.map(({ news_alias, news_date }) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL_WIKA}/news/${news_alias}`,
        lastModified: news_date,
    }));

    return [...posts];
}