import Layout from "@/components/Layout/info-perusahaan"
import { getMenuHeader, getHomepageData, getContact, getLatestNews, getNewsContentByAlias } from "@/api/wege-service"
import { headers } from "next/headers";
import { ListNews } from "@/components/news";
export const dynamic = 'force-dynamic'
export default async function Index() {
    const headersList = headers();
    const pathname = (headersList.get("x-invoke-path") || "").replace(/^\//, '');
    function getLastPathname() {
        const pathParts = pathname.split('/');
        const lastPart = pathParts[pathParts.length - 1];
        const words = lastPart.split('-');
        const result = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return result
    }
    const [dataMenuHeader, dataHomepage, dataContact, dataNews] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact(), getLatestNews()])

    const detailFirstNews = await getNewsContentByAlias(dataNews.data[0].news_alias)
    const content = () => {
        return (
            <ListNews data={dataNews.data} firstNews={detailFirstNews.data[0]}/>
        )
    }

    return (
        <Layout
            name={getLastPathname()}
            showSidebar={false}
            showBreadcrumb={true}
            isOnDetailPage={false}
            dataHomepage={dataHomepage.data[0]}
            dataMenuHeader={dataMenuHeader.data}
            dataContact={dataContact.data[0]}
            content={content()}>
        </Layout>
    )
}