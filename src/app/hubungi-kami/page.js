import { Layout, Container } from "@/components/Layout"
export default function Index() {
    const InformationItem = ({ title, description }) => {
        return (
            <div className="flex flex-row gap-x-[1.5rem] mt-[1.25rem]">
                <div className="min-w-[6.125rem] max-w-[6.125rem]  w-text-subhead-1 text-sooty">
                    {title}
                </div>
                <div className="w-text-body-2 font-normal text-sooty">
                    {description}
                </div>
            </div>
        )
    }

    const ContactInputForm = ({ title, placeholder, isTextArea }) => {
        return (
            <div className="flex flex-col">
                <div className="text-white w-text-caption font-semibold mb-[0.25rem]">{title}<span className="text-lifeguard">*</span></div>
                {!isTextArea && <input type="text" placeholder={placeholder} className="min-h-[2.5rem] input w-full input-sm w-text-body-1" />}
                {isTextArea && <textarea className="min-h-[7rem] w-text-body-1 textarea" placeholder={placeholder}></textarea>}
            </div>
        )
    }

    return (
        <Layout showBreadcrumb={true}>
            <div className="w-full pb-[5rem]">

                {/* header, should change with dynamic data */}
                <div className="px-[6.25rem] relative flex flex-col py-[3.75rem]">
                    <div className="w-text-display-4 text-jet font-semibold pb-[1.25rem]">Hubungi Kami</div>
                    <div className="w-text-title-1 text-jet font-normal">Harap isi formulir di bawah ini dan Tim kami akan dengan senang hati menjawab pertanyaan Anda.</div>
                </div>
                <div className="grid grid-cols-2 gap-x-[5rem] px-[6.25rem] pt-[1.25rem]">
                    {/* Form */}
                    <div className="flex flex-col bg-dire_wolf col-span-1 rounded-lg p-[2.5rem] gap-y-[1.25rem]">
                        <ContactInputForm title="Nama Lengkap" placeholder="Masukkan nama lengkap" />
                        <ContactInputForm title="Email" placeholder="Masukkan email" />
                        <ContactInputForm title="Subjek" placeholder="Masukkan subjek" />
                        <ContactInputForm title="Pesan Anda" placeholder="Masukkan pesan disini" isTextArea={true} />
                        <div className="flex flex-row gap-x-[0.5rem] items-center">
                            <input type="checkbox" className="checkbox checkbox-primary bg-white checkbox-xs border-0 rounded-sm" />
                            <div className="text-white w-text-body-1 font-normal">Agree to <span className="hover:cursor-pointer underline">terms and conditions</span><span className="text-lifeguard">*</span></div>
                        </div>
                        <div className="btn btn-warning px-0 capitalize text-white w-text-button">Lihat Selengkapnya</div>
                    </div>
                    {/* Information Contact */}
                    <div className="flex flex-col col-span-1">
                        <div className="w-text-headline-1 text-sooty">Lokasi Kantor dan Kontak</div>
                        <InformationItem
                            title="Kantor Pusat"
                            description="WIKA Tower 1, 7th-10th Floor, 
                            JL. D.I. Panjaitan Kav.9, Jakarta Timur 
                            13340"
                        />
                        <InformationItem
                            title="Email"
                            description="corsec@wikagedung.id"
                        />
                        <InformationItem
                            title="Phone"
                            description="+6221 8590 8862"
                        />
                        <InformationItem
                            title="Fax"
                            description="+6221 85904146"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}