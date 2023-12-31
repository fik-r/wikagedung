import Layout from "@/components/Layout/info-perusahaan"
import { getContact, getHomepageData, getMenuHeader, getMenuContentByAlias } from "@/api/wege-service"
import { headers } from "next/headers";
import { Template } from "@/components/common";
import { SiaranPers } from "@/components/media";
export const dynamic = 'force-dynamic'
export default async function Index() {
    const headersList = headers();
    const pathname = (headersList.get("x-invoke-path") || "").replace(/^\//, '');

    function getLastPathname() {
        const pathParts = pathname.split('/');
        const lastPart = pathParts[pathParts.length - 1];
        const words = lastPart.split('-');
        const result = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        return result == "E Book" ? "ebook" : result
    }

    const [dataMenuHeader, dataHomepage, dataContact, dataContent] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact(), getMenuContentByAlias(pathname)])

    const content = () => {
        return (
            <>
                {!getLastPathname().includes("Siaran Pers") && <Template data={dataContent.data[0]} />}
                {getLastPathname().includes("Siaran Pers") && <SiaranPers data={dataContent.data[0]} />}

            </>
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