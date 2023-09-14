import Layout from "@/components/Layout/info-perusahaan"
import { getContact, getHomepageData, getMenuHeader, getMenuContentByAlias, getListOrganisasi } from "@/api/wege-service"
import { Organisasi, ProfileItem } from "@/components/info-perusahaan"
import { headers } from "next/headers";
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
    const [dataMenuHeader, dataHomepage, dataContact, dataContent, dataDireksi, dataKomisaris] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact(), getMenuContentByAlias(pathname + "/sambutan-direktur-utama"),
            getListOrganisasi("Direksi"), getListOrganisasi("Komisaris")])

    const content = () => {
        return (
            <Organisasi direksi={dataDireksi.data} komisaris={dataKomisaris.data} />
        )
    }
    return (
        <Layout
            name={getLastPathname()}
            dataContent={dataContent.data[0]}
            content={content()}
            dataHomepage={dataHomepage.data[0]}
            dataMenuHeader={dataMenuHeader.data}
            dataContact={dataContact.data[0]}
        />
    )
}