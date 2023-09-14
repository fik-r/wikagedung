import { Layout } from "@/components/Layout"
import { getMenuHeader, getHomepageData, getContact, getNewsContentByAlias, getLatestNews } from "@/api/wege-service"
import { headers } from "next/headers";
import NewsDetail from "@/components/media/NewsDetail";

export default async function Index() {
    const headersList = headers();
    const pathname = headersList.get("x-invoke-path") || "";
    const parts = pathname.split('/');
    const alias = parts.slice(2).join('/')

    const [dataMenuHeader, dataHomepage, dataContact, dataNewsByAlias, dataNews] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact(), getNewsContentByAlias(alias), getLatestNews(4)])


    return (
        <Layout
            showBreadcrumb={true}
            isOnDetailPage={true}
            dataHomepage={dataHomepage.data[0]}
            dataMenuHeader={dataMenuHeader.data}
            dataContact={dataContact.data[0]}>
            <NewsDetail data={dataNewsByAlias.data[0]} news={dataNews.data} />
        </Layout>
    )
}