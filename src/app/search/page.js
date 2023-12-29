import Layout from "@/components/Layout/info-perusahaan"
import { getContact, getHomepageData, getKarirData, getMenuHeader } from "@/api/wege-service"
import { headers } from "next/headers";
import Search from '@/components/search/Search';
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
    const [dataMenuHeader, dataHomepage, dataContact, dataKarir] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact(), getKarirData()])



    const content = () => {
        return (
            <Search />
        )
    }
    return (
        <Layout
            name={getLastPathname()}
            content={content()}
            dataHomepage={dataHomepage.data[0]}
            dataMenuHeader={dataMenuHeader.data}
            dataContact={dataContact.data[0]}
            showSidebar={false}
        />
    )
}