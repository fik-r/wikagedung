import { Layout } from "@/components/Layout"
import { getContact, getHomepageData, getMenuContentByAlias, getMenuHeader } from "@/api/wege-service"
import { DetailProyek } from "@/components/lini-bisnis"
import { headers } from "next/headers";
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
            getMenuHeader(), getHomepageData(), getContact(), getMenuContentByAlias(`lini-bisnis/knst/${searchParams.q ? searchParams.q : "proyek-sebelumnya"}`)])

    return (
        <Layout showBreadcrumb={true} isOnDetailPage={true} dataHomepage={dataHomepage.data[0]}
            dataMenuHeader={dataMenuHeader.data}
            dataContact={dataContact.data[0]}>
            <DetailProyek data={dataProyek.data} index={getLastPathname()} />
        </Layout>
    )
}