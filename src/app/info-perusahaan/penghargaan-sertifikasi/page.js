import Layout from "@/components/Layout/info-perusahaan"
import { CircleTab } from "@/components/common"
import { getContact, getHomepageData, getMenuHeader } from "@/api/wege-service"
import { DocumentItem } from "@/components/info-perusahaan"

export default async function Index() {
    const dataMenuHeader = await getMenuHeader()
    const dataHomepage = await getHomepageData()
    const dataContact = await getContact()

    const content = () => {
        return (
            <div className="flex flex-col w-full">
                <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row gap-x-[1.25rem]">
                        <CircleTab active text="Penghargaan" />
                        <CircleTab text="Sertifikasi" />
                    </div>
                    <div className="rounded-full bg-white border border-silver_spoon flex items-center px-[0.875rem] h-[2.75rem] gap-x-[0.875rem]">
                        <img src="/icons/ic_search_black.svg" />
                        <input
                            type="text"
                            placeholder="Cari"
                            className="w-text-body-2 placeholder-robo_master bg-transparent border-none focus:ring-0 outline-none flex-grow"
                        />
                    </div>
                </div>
                <div className="w-full border border-aria rounded-lg mt-[1.25rem] py-[1.25rem] px-[1.875rem] flex flex-col">
                    <div className="grid grid-cols-4 gap-x-[1.5rem] gap-y-[3.125rem]">
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <Layout
            heading={"Info Perusahaan"}
            subHeading={"Penghargaan dan Sertifikasi"}
            sidebarContent={content()}
            dataContact={dataContact.data.data[0]}
            dataHomepage={dataHomepage.data.data[0]}
            dataMenuHeader={dataMenuHeader.data.data}
        />
    )
}