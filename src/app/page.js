import { Container, Footer, Navbar } from "@/components/Layout"
import { Header, FocusBisnis, News, Sponsor, ProjectOverview, Awards, CompanyProfile } from "@/components/home"
import { SidebarMenu } from "@/components/common"
import { getBanner, getMenuHeader, getMemberOfWika, getSustainability, getContact, getHomepageData, getLatestNews } from "@/api/wege-service"
export const dynamic = 'force-dynamic'
export default async function Index() {

    const [dataMenuHeader, dataHomepage, dataContact,
        dataSustainability, dataMemberOfWika, dataBanner, dataNews] =
        await Promise.all([
            getMenuHeader(), getHomepageData(), getContact(),
            getSustainability(),
            getMemberOfWika(),
            getBanner(),
            getLatestNews(5)

        ])


    return (
        <>
            {/* hero */}
            <div className="relative flex flex-col">
                <Navbar theme="dark" data={dataMenuHeader.data} dataHomepage={dataHomepage.data} />
                <Header dataMenuHeader={dataMenuHeader.data} dataBanner={dataBanner.data} dataHomepage={dataHomepage.data[0]} />
                <Container className="relative bg-primary">
                    <ProjectOverview data={dataHomepage.data[0].project_ovw} />
                </Container>
                <FocusBisnis data={dataHomepage.data[0]} />
                <SidebarMenu />
                <Awards data={dataHomepage.data[0].award} />
                <News data={dataHomepage.data[0]} news={dataNews.data} />
                <CompanyProfile data={dataSustainability.data} />
                <Sponsor data={dataMemberOfWika.data} dataHomepage={dataHomepage.data[0]} />
                {/* footer */}
                <Footer data={dataContact.data[0]} />
            </div>
            {/* content */}
        </>
    )
}