import Layout from "@/components/Layout/info-perusahaan"
import { Container } from "@/components/Layout"
import { getContact, getHomepageData, getMenuHeader } from "@/api/wege-service"
import { TimelineInformasi } from "@/components/info-perusahaan"

export default async function Index() {
    const dataMenuHeader = await getMenuHeader()
    const dataHomepage = await getHomepageData()
    const dataContact = await getContact()

    const content = () => {
        return (
            <Container className="py-[5rem] px-[2.5rem]">
                <TimelineInformasi />
            </Container>
        )
    }
    return (
        <Layout
            heading={"Info Perusahaan"}
            subHeading={"Tentang Kami"}
            descriptionPage={"Lebih dari satu dekade berkarya, PT Wijaya Karya Bangunan Gedung Tbk (WIKA Gedung dengan kode emiten WEGE), secara konsisten memberikan yang terbaik bagi setiap pemangku kepentingan dalam perannya sebagai Total Solution Contractor pada bidang konstruksi bangunan dan konsesi dengan mengedepankan safety & quality dalam menciptakan ruang (space) untuk kehidupan manusia yang lebih baik."}
            content={content()}
            dataHomepage={dataHomepage.data.data[0]}
            dataMenuHeader={dataMenuHeader.data.data}
            dataContact={dataContact.data.data[0]}
        />
    )
}