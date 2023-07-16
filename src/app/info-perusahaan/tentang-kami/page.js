import Layout from "@/components/Layout/info-perusahaan"
import { Container } from "@/components/Layout"
export default function index() {
    const content = () => {
        return (
            <Container className="py-[5rem] px-[2.5rem]">
                <div className="flex flex-row justify-center w-text-title-1 font-semibold">Timeline Transformasi</div>
                <div className="grid grid-cols-2 gap-x-[2.5rem] pt-[2.5rem]">
                    <div className="flex flex-col gap-y-[1.5rem]">
                        {/* <TimelineTransformasiItem
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
                            text={'WEGE telah mencetak milestone bisnis dalam rangka mencapai sasaran yang ditetapkan dalam RJP (Rencana Jangka Panjang) maupun RKAP (Rencana Kerja dan Anggaran Perusahaan) untuk mampu beradaptasi terhadap perubahan lingkungan usaha. WEGE berpegang teguh dalam menjalankan visi dan misi perusahaan untuk mencapai target perusahaan menjadi Integrated Space Provider pada 2023. Inovasi perusahaan dalam meningkatkan pertumbuhan dan penciptaan nilai terus diterapkan. Selain itu,perusahaan senantiasa menjaga kualitas terbaik pada produk dan layanan yang diberikan dan menunjukkan kepedulian pada kehidupan. Hal ini tak lepas dengan penerapan tata kelola perusahaan dan prakik etika bisnis yang baik, serta upaya konsisten untuk menjaga keterikatan (engagement) dengan para pemangku kepentingan. Hal ini diterapkan kepada seluruh pemangku kepentingan, mulai dari mitra kerja, vendor, owner, hingga end user untuk bersama melakukan proses rantai usaha yang lebih ramah lingkungan. WEGE terus memperkuat kemampuannya dengan meningkatkan kapabilitas, sinergi, dan jumlah aset demi mendukung pertumbuhan pembangunan berkelanjutan bagi Perusahaan di masa mendatang.'} /> */}
                    </div>
                    <div>
                        {/* <img src="/images/illust_timeline_transformasi.png" /> */}
                    </div>
                </div>
            </Container>
        )
    }
    return (
        <Layout
            heading={"Info Perusahaan"}
            subHeading={"Tentang Kami"}
            activeSidebar={"Tentang Kami"}
            descriptionPage={"Lebih dari satu dekade berkarya, PT Wijaya Karya Bangunan Gedung Tbk (WIKA Gedung dengan kode emiten WEGE), secara konsisten memberikan yang terbaik bagi setiap pemangku kepentingan dalam perannya sebagai Total Solution Contractor pada bidang konstruksi bangunan dan konsesi dengan mengedepankan safety & quality dalam menciptakan ruang (space) untuk kehidupan manusia yang lebih baik."}
            content={content()}
        />
    )
}