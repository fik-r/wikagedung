import Layout from "@/components/Layout/info-perusahaan"
import { CircleTab } from "@/components/common"
import { getContact, getHomepageData, getMenuHeader } from "@/api/wege-service"
import { ProfileItem } from "@/components/info-perusahaan"
export default async function Index() {
    const dataMenuHeader = await getMenuHeader()
    const dataHomepage = await getHomepageData()
    const dataContact = await getContact()

    const content = () => {
        return (
            <div className="border-t border-secondary flex flex-col items-center pt-[4.375rem] pb-[15.625rem]">
                <div className="w-text-display-2 mb-[2rem]">Profil Dewan Komisaris dan Direksi</div>
                <div className="flex flex-row gap-x-[1.25rem]">
                    <CircleTab active text={"Komisaris"} />
                    <CircleTab text={"Direksi"} />
                </div>
                <div className="px-[6.25rem] mt-[2.625rem] w-full flex flex-col">
                    <div className="border-t border-silver_spoon pb-[2.5rem]"></div>
                    <div className="flex flex-row flex-wrap justify-center gap-x-[2.5rem] gap-y-[2.5rem]">
                        <ProfileItem name="Hananto Aji" job="Komisaris Utama" />
                        <ProfileItem name="Sumadi" job="Komisaris" />
                        <ProfileItem name="Bambang Pramujo" job="Komisaris" />
                        <ProfileItem name="Joseph Prajogo" job="Komisaris Independen" />
                        <ProfileItem name="Ance" job="Komisaris Independen" />
                    </div>
                    <div className="border-t border-silver_spoon mt-[2.5rem]"></div>
                </div>
            </div>
        )
    }
    return (
        <Layout
            heading={"Info Perusahaan"}
            subHeading={"Organisasi"}
            titlePage={"Sambutan Direktur Utama"}
            descriptionPage={"Pada tahun 2021, kebijakan strategis yang diimplementasikan berhasil membawa Perusahaan mewujudkan pencapaian yang menggembiraka. Kinerja finansial Perusahaan tercatat mengalami pertumbuhan seiring dengan sentimen positif yang tercermin pada berbagai apresiasi yang diraih, diantaranya yaitu rekor MURI untuk proyek Jakarta International Stadium dan Pit Building Mandalika."}
            content={content()}
            dataContact={dataContact.data.data[0]}
            dataHomepage={dataHomepage.data.data[0]}
            dataMenuHeader={dataMenuHeader.data.data}
        />
    )
}