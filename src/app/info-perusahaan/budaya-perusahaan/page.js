import Layout from "@/components/Layout/info-perusahaan"
import { getContact, getHomepageData, getMenuHeader, getMenuContentByAlias } from "@/api/wege-service"
import { headers } from "next/headers";
import { BudayaPerusahaan } from "@/components/info-perusahaan";

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
    const [dataMenuHeader, dataHomepage, dataContact, dataVisiMisi, dataNilaiPerusahaan] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact(), getMenuContentByAlias(pathname + "/visi-misi"), getMenuContentByAlias(pathname + "/nilai-perusahaan")])



    const content = () => {
        return (
            <BudayaPerusahaan dataVisiMisi={dataVisiMisi.data.data[0]} dataNilaiPerusahaan={dataNilaiPerusahaan.data.data[0]} />
        )
    }
    return (
        <Layout
            name={getLastPathname()}
            sidebarContent={content()}
            dataHomepage={dataHomepage.data.data[0]}
            dataMenuHeader={dataMenuHeader.data.data}
            dataContact={dataContact.data.data[0]}
        />
    )
}