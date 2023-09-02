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
                    <ProjectOverview data={dataHomepage.data.data[0].project_ovw}/>
                </Container>
                <Container className="pt-[5rem] pb-[5.188rem]">
                    <FocusBisnis data={dataHomepage.data.data[0]} />
                </Container>
                <SidebarMenu />
                <Container className="pt-[3.75rem] pb-[5.188rem]">
                    <Awards data={dataHomepage.data.data[0].award}/>
                </Container>

                <Container className="pt-[7.5rem]">
                    <News data={dataHomepage.data.data[0]} news={dataNews.data.data}/>
                </Container>
                <CompanyProfile data={dataSustainability.data.data} />
                <Container className="pt-[2.75rem]">
                    <Sponsor data={dataMemberOfWika.data.data} dataHomepage={dataHomepage.data.data[0]}/>
                </Container>

                {/* footer */}
                <Footer data={dataContact.data.data[0]}/>
            </div>

            {/* content */}

        </>
    )
}