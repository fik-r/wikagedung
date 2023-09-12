import Layout from "@/components/Layout/info-perusahaan"
import { getContact, getHomepageData, getMenuHeader, getMenuContentByAlias, getListOrganisasi } from "@/api/wege-service"
import { headers } from "next/headers";
import { SekretarisPerusahaan } from "@/components/info-perusahaan";

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
    const [dataMenuHeader, dataHomepage, dataContact, dataSekretaris] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact(), getListOrganisasi("Sekretaris Perusahaan")])



    const content = () => {
        return (
            <SekretarisPerusahaan data={dataSekretaris.data.data[0]} />
        )
    }
    return (
        <Layout
            name={getLastPathname()}
            content={content()}
            dataHomepage={dataHomepage.data.data[0]}
            dataMenuHeader={dataMenuHeader.data.data}
            dataContact={dataContact.data.data[0]}
            showSidebar={false}
        />
    )
}