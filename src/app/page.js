import { Container, Footer } from "@/components/Layout"
import { Header, FocusBisnis, News, Sponsor, ProjectOverview, Awards, CompanyProfile } from "@/components/home"
import { SidebarMenu } from "@/components/common"
import { getBanner, getMenuHeader, getMemberOfWika, getSustainability, getContact, getHomepageData, getLatestNews } from "@/api/wege-service"

export default async function Index() {
    const dataMenuHeader = await getMenuHeader()
    const dataBanner = await getBanner()
    const dataMemberOfWika = await getMemberOfWika()
    const dataSustainability = await getSustainability()
    const dataContact = await getContact()
    const dataHomepage = await getHomepageData()
    const dataNews = await getLatestNews()

    return (
        <>
            {/* hero */}
            <div className="relative flex flex-col">
                <Header dataMenuHeader={dataMenuHeader.data.data} dataBanner={dataBanner.data.data} dataHomepage={dataHomepage.data.data[0]} />
                <Container className="relative bg-primary">
                    <ProjectOverview data={dataHomepage.data.data[0].project_ovw} />
                </Container>
                <FocusBisnis data={dataHomepage.data.data[0]} />
                <SidebarMenu />
                <Awards data={dataHomepage.data.data[0].award} />
                <News data={dataHomepage.data.data[0]} news={dataNews.data.data} />
                <CompanyProfile data={dataSustainability.data.data} />
                <Sponsor data={dataMemberOfWika.data.data} dataHomepage={dataHomepage.data.data[0]} />


                {/* footer */}
                <Footer data={dataContact.data.data[0]} />
            </div>

            {/* content */}

        </>
    )
}