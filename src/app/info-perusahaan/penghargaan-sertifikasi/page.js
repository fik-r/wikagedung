import Layout from "@/components/Layout/info-perusahaan"
import { getContact, getHomepageData, getMenuHeader, getMenuContentByAlias, getListSertikasiDanPenghargaan } from "@/api/wege-service"
import { PenghargaanSertifikat } from "@/components/info-perusahaan"
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
    const [dataMenuHeader, dataHomepage, dataContact, dataContent, dataPenghargaan, dataSertifikat] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact(), getMenuContentByAlias(pathname),
            getListSertikasiDanPenghargaan("Penghargaan"), getListSertikasiDanPenghargaan("Sertifikat")])

    const content = () => {
        return (
            <PenghargaanSertifikat penghargaan={dataPenghargaan.data} sertifikat={dataSertifikat.data} />
        )
    }

    return (
        <Layout
            name={getLastPathname()}
            sidebarContent={content()}
            dataContent={dataContent.data[0]}
            dataHomepage={dataHomepage.data[0]}
            dataMenuHeader={dataMenuHeader.data}
            dataContact={dataContact.data[0]}
        />
    )
}