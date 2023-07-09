import { Layout, Container } from "@/components/Layout"
import cn from "classnames"
export default function Index() {
    const SidebarItem = ({ number, text, active }) => {
        return (
            <div className="flex flex-row items-center cursor-pointer">
                <div className="ml-[1rem] text-silver_spoon w-text-caption">{number}</div>
                <div className={cn(active ? "underline text-sooty" : "", "ml-[0.875rem] hover:text-sooty w-text-title-1 text-more_than_a_week hover:underline")}>{text}</div>
            </div>
        )
    }

    const TimelineTransformasiItem = ({ title, text }) => {
        return (
            <div className="flex flex-col">
                <div className="w-text-subhead-1 font-semibold text-sooty">{title}</div>
                <div className="w-text-body-1 font-normal text-jet leading-7 mt-[0.75rem]">{text}</div>
            </div>
        )
    }
    return (
        <Layout showBreadcrumb={true}>
            <div className="w-full">
                
                {/* header, should change with dynamic data */}
                <div className="px-[6.25rem] relative flex flex-col">
                    <div className="w-text-subhead-2 text-secondary font-semibold mt-[2.5rem]">Info Perusahaan</div>
                    <div className="w-text-display-4 text-sooty font-semibold mt-[0.625rem] pb-[2.5rem]">Tentang Kami</div>
                </div>
                {/* sidebar */}
                <div className="px-[6.25rem] relative flex flex-row mt-[3.125rem] gap-x-[3.75rem] pb-[3.125rem]">
                    {/* sidebar */}
                    <div className="flex-none flex flex-col gap-y-[0.625rem]  border-l-4 border-l-secondary">
                        <SidebarItem active number={"01"} text={"Tentang Kami"} />
                        <SidebarItem number={"02"} text={"Penghargaan & Sertifikasi"} />
                        <SidebarItem number={"03"} text={"Sekretaris Perusahaan"} />
                        <SidebarItem number={"04"} text={"Organisasi"} />
                        <SidebarItem number={"05"} text={"Budaya Perusahaan"} />
                        <SidebarItem number={"06"} text={"Struktur Perusahaan"} />
                        <SidebarItem number={"07"} text={"Alamat & Informasi Kontak"} />
                    </div>
                    {/* sidebar content */}
                    <div className="flex-auto flex flex-col">
                        <div className="inline-block text-jet w-text-title-1 leading-10 font-medium">Lebih dari satu dekade berkarya,
                            PT Wijaya Karya Bangunan Gedung Tbk (WIKA Gedung dengan kode emiten WEGE), secara konsisten memberikan yang terbaik bagi setiap pemangku kepentingan dalam perannya sebagai Total Solution Contractor pada bidang konstruksi bangunan dan konsesi dengan mengedepankan safety & quality dalam menciptakan ruang (space) untuk kehidupan manusia yang lebih baik.
                        </div>
                        <div className="mt-[1rem] cursor-pointer  flex flex-row items-center">
                            <span className="w-text-title-1 mr-[2.063rem] text-primary font-semibold">Read more </span>
                            <img src="/icons/ic_dropdown.svg" className="w-[0.563rem] h-[0.938rem]" /></div>
                    </div>
                    <img className="absolute bottom-0 h-full right-0 z-[-1]" src="/images/bg_isolation_mode_sidebar_section.svg" />
                </div>
                {/* main content */}
                {/* Timeline Informasi */}

            </div>
            <Container className="py-[5rem] px-[2.5rem]">
                <div className="flex flex-row justify-center w-text-title-1 font-semibold">Timeline Transformasi</div>
                <div className="grid grid-cols-2 gap-x-[2.5rem] pt-[2.5rem]">
                    <div className="flex flex-col gap-y-[1.5rem]">
                        <TimelineTransformasiItem
                            title={"Didirikan sebagai Perusahaan Konstruksi Gedung"}
                            text={"WEGE, sebagai salah satu dari tujuh anak perusahaan PT Wijaya Karya (Persero) Tbk (WIKA), telah tumbuh dan berkembang secara konsisten melayani pasar pemerintah, BUMN/BUMD, loan dan swasta di Indonesia. Berdiri pada 24 Oktober 2008, WEGE memulai usaha di bidang konstruksi bangunan gedung dan memiliki reputasi sebagai perusahaan konstruksi terdepan di Indonesia."} />
                        <TimelineTransformasiItem
                            title={"Fokus pada Profitabilitas"}
                            text={"Pada tahun 2012, WEGE mencetak milestone bisnis pertamanya dengan berfokus pada profitabilitas melalui penerapan Blue Ocean Strategy, efisiensi biaya, serta peningkatan kapasitas sumber daya manusia (human capital) sebagai aset perusahaan."} />
                        <TimelineTransformasiItem
                            title={"Diversikasi SBU Properti"}
                            text={"Sebagai langkah inisiatif dalam mengembangkan inovasi jasa konstruksi, WEGE melanjutkan pengembangan ke bisnis properti pada 2014. Sejalan dengan arahan pemegang saham untuk melakukan transformasi, WEGE mulai mengembangkan bisnis properti ke arah konsesi untuk mendukung pertumbuhan perusahaan yang berkelanjutan dan memperoleh hasil dari recurring income."} />
                        <TimelineTransformasiItem
                            title={"Menjadi Perusahaan Terbuka"}
                            text={"Sebagai langkah inisiatif dalam mengembangkan inovasi jasa konstruksi, WEGE melanjutkan pengembangan ke bisnis properti pada 2014. Sejalan dengan arahan pemegang saham untuk melakukan transformasi, WEGE mulai mengembangkan bisnis properti ke arah konsesi untuk mendukung pertumbuhan perusahaan yang berkelanjutan dan memperoleh hasil dari recurring income."} />
                        <TimelineTransformasiItem
                            title={"Integrated Space Provider"}
                            text={'WEGE telah mencetak milestone bisnis dalam rangka mencapai sasaran yang ditetapkan dalam RJP (Rencana Jangka Panjang) maupun RKAP (Rencana Kerja dan Anggaran Perusahaan) untuk mampu beradaptasi terhadap perubahan lingkungan usaha. WEGE berpegang teguh dalam menjalankan visi dan misi perusahaan untuk mencapai target perusahaan menjadi Integrated Space Provider pada 2023. Inovasi perusahaan dalam meningkatkan pertumbuhan dan penciptaan nilai terus diterapkan. Selain itu,perusahaan senantiasa menjaga kualitas terbaik pada produk dan layanan yang diberikan dan menunjukkan kepedulian pada kehidupan. Hal ini tak lepas dengan penerapan tata kelola perusahaan dan prakik etika bisnis yang baik, serta upaya konsisten untuk menjaga keterikatan (engagement) dengan para pemangku kepentingan. Hal ini diterapkan kepada seluruh pemangku kepentingan, mulai dari mitra kerja, vendor, owner, hingga end user untuk bersama melakukan proses rantai usaha yang lebih ramah lingkungan. WEGE terus memperkuat kemampuannya dengan meningkatkan kapabilitas, sinergi, dan jumlah aset demi mendukung pertumbuhan pembangunan berkelanjutan bagi Perusahaan di masa mendatang.'} />
                    </div>
                    <div>
                        <img src="/images/illust_timeline_transformasi.png" />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}