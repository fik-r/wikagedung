import Layout from "@/components/Layout/info-perusahaan"
import { Container } from "@/components/Layout"
import { getContact, getHomepageData, getMenuHeader, getMenuContentByAlias, getTimelinePerusahaan } from "@/api/wege-service"
import { TimelineInformasi } from "@/components/info-perusahaan"
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

    const [dataMenuHeader, dataHomepage, dataContact, dataContent, dataTimeline] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact(), getMenuContentByAlias(pathname), getTimelinePerusahaan()])


    const content = () => {
        return (
            <Container className="py-[5rem] px-[2.5rem]">
                <TimelineInformasi data={dataTimeline.data.data} />
            </Container>
        )
    }
    return (
        <Layout
            name={getLastPathname()}
            dataContent={dataContent.data.data[0]}
            content={content()}
            dataHomepage={dataHomepage.data.data[0]}
            dataMenuHeader={dataMenuHeader.data.data}
            dataContact={dataContact.data.data[0]}
        />
    )
}