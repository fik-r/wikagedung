import Layout from "@/components/Layout/lini-bisnis"
import { getMenuHeader, getHomepageData, getContact, getMenuContentByAlias, getKategoriProyek } from "@/api/wege-service"
import { LiniBisnis } from "@/components/lini-bisnis"
import { headers } from "next/headers"
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
    const [dataMenuHeader, dataHomepage, dataContact, dataContent, dataProyekBerjalan, dataProyekSelesai, dataKategori] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact(),
            getMenuContentByAlias("lini-bisnis/konstruksi-off-site-pracetak-gedung/lingkup-usaha"),
            getMenuContentByAlias("lini-bisnis/pctk/proyek-berjalan"),
            getMenuContentByAlias("lini-bisnis/pctk/proyek-sebelumnya"),
            getKategoriProyek()
        ])


    const content = () => {
        return (
            <LiniBisnis 
            route={"/lini-bisnis/konstruksi-off-site-pracetak-gedung/"}
            dataProyekBerjalan={dataProyekBerjalan.data} dataProyekSelesai={dataProyekSelesai.data} dataKategori={dataKategori.data} />
        )
    }
    return (
        <Layout
            name={getLastPathname()}
            content={content()}
            dataHomepage={dataHomepage.data[0]}
            dataMenuHeader={dataMenuHeader.data}
            dataContact={dataContact.data[0]}
            dataContent={dataContent.data[0]}
        />
    )
}