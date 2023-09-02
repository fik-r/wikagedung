import { Layout } from "@/components/Layout"
import { getMenuHeader, getHomepageData, getContact, getNewsContentByAlias } from "@/api/wege-service"
import { headers } from "next/headers";
import NewsDetail from "@/components/media/NewsDetail";

export default async function Index() {
    const headersList = headers();
    const pathname = headersList.get("x-invoke-path") || "";
    const parts = pathname.split('/');
    const alias = parts.slice(3).join('/')
    const dataMenuHeader = await getMenuHeader()
    const dataHomepage = await getHomepageData()
    const dataContact = await getContact()
    const dataNewsByAlias = await getNewsContentByAlias(alias)

    return (
        <Layout
            showBreadcrumb={true}
            isOnDetailPage={true}
            dataHomepage={dataHomepage.data.data[0]}
            dataMenuHeader={dataMenuHeader.data.data}
            dataContact={dataContact.data.data[0]}>
            <NewsDetail data={dataNewsByAlias.data.data[0]} />
        </Layout>
    )
}