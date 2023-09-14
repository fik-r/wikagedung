import Layout from "@/components/Layout/info-perusahaan"
import { getContact, getHomepageData, getMenuHeader, getMenuContentByAlias } from "@/api/wege-service"
import { headers } from "next/headers";
import { StrukturPerusahaan } from "@/components/info-perusahaan";
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
    const [dataMenuHeader, dataHomepage, dataContact, dataGroupPerusahaan, dataOrganisasiPerusahaan] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact(), getMenuContentByAlias(pathname + "/struktur-group-perusahaan"), getMenuContentByAlias(pathname + "/struktur-organisasi-perusahaan")])



    const content = () => {
        return (
            <StrukturPerusahaan
                dataGroupPerusahaan={dataGroupPerusahaan.data[0]} dataOrgPerusahaan={dataOrganisasiPerusahaan.data[0]}
            />
        )
    }
    return (
        <Layout
            name={getLastPathname()}
            sidebarContent={content()}
            dataHomepage={dataHomepage.data[0]}
            dataMenuHeader={dataMenuHeader.data}
            dataContact={dataContact.data[0]}
        />
    )
}