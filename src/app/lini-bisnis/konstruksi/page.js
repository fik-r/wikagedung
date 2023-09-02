import Layout from "@/components/Layout/lini-bisnis"
import { CircleTab } from "@/components/common"
import { getMenuHeader, getHomepageData, getContact } from "@/api/wege-service"
import { KonstruksiItem } from "@/components/lini-bisnis"
export default async function Index() {
    const dataMenuHeader = await getMenuHeader()
    const dataHomepage = await getHomepageData()
    const dataContact = await getContact()

    const content = () => {
        return (
            <div className="border-t border-secondary flex flex-col items-center pt-[4.375rem] pb-[15.625rem] px-[6.25rem]">
                <div className="w-text-display-2 mb-[2rem]">Proyek Konstruksi</div>
                <div className="flex flex-row gap-x-[1.25rem]">
                    <CircleTab active text={"Proyek Berjalan"} />
                    <CircleTab text={"Proyek Selesai"} />
                </div>
                <div className="w-full flex flex-col border-t border-[#D2D2D2] mt-[2.625rem] p-[2.5rem]">
                    <div className="flex justify-center">
                        <div className="flex flex-row flex-wrap">
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Semua</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Fasilitas Akademi</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Bandara</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Apartemen</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Komersial</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Rumah Sakit</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Hotel</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Perkantoran</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Fasilitas Olahraga</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Fasilitas Umum</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem] items-start">Fasilitas Umum</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem] items-start">Fasilitas Umum</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row flex-wrap gap-[2.5rem] px-[2.5rem]">
                    <KonstruksiItem type="Apartemen" name="The Grandstand Apartemen" />
                    <KonstruksiItem type="Apartemen" name="The Grandstand Apartemen" />
                    <KonstruksiItem type="Apartemen" name="The Grandstand Apartemen" />
                    <KonstruksiItem type="Apartemen" name="The Grandstand Apartemen" />
                    <KonstruksiItem type="Apartemen" name="The Grandstand Apartemen" />
                    <KonstruksiItem type="Apartemen" name="The Grandstand Apartemen" />
                    <KonstruksiItem type="Apartemen" name="The Grandstand Apartemen" />
                </div>
            </div>
        )
    }
    return (
        <Layout
            heading={"Lini Bisnis"}
            titlePage={"Lingkup Usaha Konstruksi"}
            descriptionPage={"WIKA Gedung menyediakan layanan konstruksi terintegrasi dengan dukungan teknologi terdepan dalam memberikan solusi pekerjaan konstruksi secara menyeluruh dengan mengutamakan quality & safety untuk melayani pasar pemerintah, BUMN/BUMD dan swasta di Indonesia."}
            content={content()}
            dataHomepage={dataHomepage.data.data[0]}
            dataMenuHeader={dataMenuHeader.data.data}
            dataContact={dataContact.data.data[0]}
        />
    )
}