import Layout from "@/components/Layout/info-perusahaan"
import { getContact, getHomepageData, getMenuHeader, getListAlamatDanKontak } from "@/api/wege-service"
import { headers } from "next/headers";
import { AlamatInformasiKontak } from "@/components/info-perusahaan";
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
    const [dataMenuHeader, dataHomepage, dataContact, dataAlamatAnakPerusahaan, dataAlamatKantorPusat, dataAlamatInvestasi] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact(), getListAlamatDanKontak("Anak Perusahaan"), getListAlamatDanKontak("Kantor Pusat"), getListAlamatDanKontak("Investasi dan Konsesi")])

    const content = () => {
        return (
            <AlamatInformasiKontak
                dataAlamatAnakPerusahaan={dataAlamatAnakPerusahaan.data}
                dataAlamatKantorPusat={dataAlamatKantorPusat.data}
                dataAlamatInvestasi={dataAlamatInvestasi.data}
            />
        )
    }
    return (
        <Layout
            name={getLastPathname()}
            sidebarContent={content()}
            dataContact={dataContact.data[0]}
            dataHomepage={dataHomepage.data[0]}
            dataMenuHeader={dataMenuHeader.data}
        />
    )
}