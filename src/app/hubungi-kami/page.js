import { Layout } from "@/components/Layout"
import { getContact, getHomepageData, getMenuHeader } from "@/api/wege-service"
import { headers } from "next/headers";
import { HubungiKami } from "@/components/hubungi-kami";
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
    const [dataMenuHeader, dataHomepage, dataContact ] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact()])

    return (
        <Layout showBreadcrumb={true} name={getLastPathname()}
            dataHomepage={dataHomepage.data[0]}
            dataMenuHeader={dataMenuHeader.data}
            dataContact={dataContact.data[0]}
        >
            <HubungiKami/>
        </Layout>
    )
}