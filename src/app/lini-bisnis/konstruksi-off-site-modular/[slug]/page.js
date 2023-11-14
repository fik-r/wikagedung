import { Layout } from "@/components/Layout"
import { getContact, getHomepageData, getMenuContentByAlias, getMenuHeader, getDetailProyek } from "@/api/wege-service"
import { DetailProyek } from "@/components/lini-bisnis"
import { headers } from "next/headers";
export const dynamic = 'force-dynamic'
export default async function Index({ searchParams }) {
    const headersList = headers();
    const pathname = (headersList.get("x-invoke-path") || "").replace(/^\//, '');
    function getLastPathname() {
        const pathParts = pathname.split('/');
        const lastPart = pathParts[pathParts.length - 1];
        const words = lastPart.split('-');
        const result = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return result
    }

    const [dataMenuHeader, dataHomepage, dataContact, dataProyek] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact(), getMenuContentByAlias(`lini-bisnis/mdlr/${searchParams.q ? searchParams.q : "proyek-sebelumnya"}`)])

    function getRequestDataProyek() {
        const requestDataProyek = []
        dataProyek.data.map((item, index) => {
            requestDataProyek.push(getDetailProyek(item.id))
        })
        return requestDataProyek
    }

    const dataDetailProyeks = await Promise.all(getRequestDataProyek())

    return (
        <Layout showBreadcrumb={true} isOnDetailPage={true} dataHomepage={dataHomepage.data[0]}
            dataMenuHeader={dataMenuHeader.data}
            dataContact={dataContact.data[0]}>
            <DetailProyek index={getLastPathname()} detail={dataDetailProyeks} />
        </Layout>
    )
}