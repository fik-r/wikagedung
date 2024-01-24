import { getContact, getMenuHeader, getHomepageData } from "@/api/wege-service"
import { Footer, Navbar } from "@/components/Layout";
import Sitemap from "@/components/sitemap/Sitemap";
export const dynamic = 'force-dynamic'

export default async function Index() {
    const [dataMenuHeader, dataHomepage, dataContact] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact()])

    return (
        <>
            <Navbar theme="light" showBreadcrumb={true} isOnDetailPage={false} data={dataMenuHeader.data} dataHomepage={dataHomepage.data[0]} />
            <Sitemap menu={dataMenuHeader.data} />
            <Footer data={dataContact.data[0]} />
        </>
    )
}