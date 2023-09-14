import { Layout } from "@/components/Layout"
import { getMenuHeader, getContact, getHomepageData, getListOrganisasi } from "@/api/wege-service"
import { DetailOrganisasi } from "@/components/info-perusahaan"
import { headers } from "next/headers";

export default async function index({ searchParams }) {
    const headersList = headers();
    const pathname = (headersList.get("x-invoke-path") || "").replace(/^\//, '');
    function getLastPathname() {
        const pathParts = pathname.split('/');
        const lastPart = pathParts[pathParts.length - 1];
        const words = lastPart.split('-');
        const result = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return result
    }

    const [dataMenuHeader, dataHomepage, dataContact, dataKomisaris] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact(), getListOrganisasi(searchParams.q ? searchParams.q : "Komisaris")])
    return (
        <Layout showBreadcrumb={true} isOnDetailPage={true}
            dataContact={dataContact.data[0]}
            dataHomepage={dataHomepage.data[0]}
            dataMenuHeader={dataMenuHeader.data}>
            <DetailOrganisasi data={dataKomisaris.data} type={searchParams.q} index={getLastPathname() - 1} />
        </Layout>
    )
}