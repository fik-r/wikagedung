'use client'
import cn from "classnames"
import { useState, useEffect } from "react"
const TimelineInformasi = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [contentOpacity, setContentOpacity] = useState(0);
    useEffect(() => {
        // Trigger fade-in animation every time activeIndex changes
        setContentOpacity(0);
        setTimeout(() => {
            setContentOpacity(1);
        }, 200);
    }, [activeIndex]);


    const timelineItems = [{
        image: "/images/illust_timeline.png",
        year: "2008",
        title: "Didirikan sebagai Perusahaan Konstruksi Gedung",
        description: "WEGE, sebagai salah satu dari tujuh anak perusahaan PT Wijaya Karya (Persero) Tbk (WIKA), telah tumbuh dan berkembang secara konsisten melayani pasar pemerintah, BUMN/BUMD, loan dan swasta di Indonesia. Berdiri pada 24 Oktober 2008, WEGE memulai usaha di bidang konstruksi bangunan gedung dan memiliki reputasi sebagai perusahaan konstruksi terdepan di Indonesia."
    }, {
        image: "/images/illust_timeline.png",
        year: "2012",
        title: "Fokus pada Profitabilitas",
        description: "Pada tahun 2012, WEGE mencetak milestone bisnis pertamanya dengan berfokus pada profitabilitas melalui penerapan Blue Ocean Strategy, efisiensi biaya, serta peningkatan kapasitas sumber daya manusia (human capital) sebagai aset perusahaan."
    }, {
        image: "/images/illust_timeline.png",
        year: "2014",
        title: "Diversikasi SBU Properti",
        description: "Sebagai langkah inisiatif dalam mengembangkan inovasi jasa konstruksi, WEGE melanjutkan pengembangan ke bisnis properti pada 2014. Sejalan dengan arahan pemegang saham untuk melakukan transformasi, WEGE mulai mengembangkan bisnis properti ke arah konsesi untuk mendukung pertumbuhan perusahaan yang berkelanjutan dan memperoleh hasil dari recurring income."
    }, {
        image: "/images/illust_timeline.png",
        year: "2016",
        title: "Menjadi Perusahaan Terbuka",
        description: "Sebagai langkah inisiatif dalam mengembangkan inovasi jasa konstruksi, WEGE melanjutkan pengembangan ke bisnis properti pada 2014. Sejalan dengan arahan pemegang saham untuk melakukan transformasi, WEGE mulai mengembangkan bisnis properti ke arah konsesi untuk mendukung pertumbuhan perusahaan yang berkelanjutan dan memperoleh hasil dari recurring income."
    }, {
        image: "/images/illust_timeline.png",
        year: "2017",
        title: "Integrated Space Provider",
        description: "WEGE telah mencetak milestone bisnis dalam rangka mencapai sasaran yang ditetapkan dalam RJP (Rencana Jangka Panjang) maupun RKAP (Rencana Kerja dan Anggaran Perusahaan) untuk mampu beradaptasi terhadap perubahan lingkungan usaha. WEGE berpegang teguh dalam menjalankan visi dan misi perusahaan untuk mencapai target perusahaan menjadi Integrated Space Provider pada 2023. Inovasi perusahaan dalam meningkatkan pertumbuhan dan penciptaan nilai terus diterapkan. Selain itu,perusahaan senantiasa menjaga kualitas terbaik pada produk dan layanan yang diberikan dan menunjukkan kepedulian pada kehidupan. Hal ini tak lepas dengan penerapan tata kelola perusahaan dan prakik etika bisnis yang baik, serta upaya konsisten untuk menjaga keterikatan (engagement) dengan para pemangku kepentingan. Hal ini diterapkan kepada seluruh pemangku kepentingan, mulai dari mitra kerja, vendor, owner, hingga end user untuk bersama melakukan proses rantai usaha yang lebih ramah lingkungan. WEGE terus memperkuat kemampuannya dengan meningkatkan kapabilitas, sinergi, dan jumlah aset demi mendukung pertumbuhan pembangunan berkelanjutan bagi Perusahaan di masa mendatang."
    }, {
        image: "/images/illust_timeline.png",
        year: "2023",
        title: "Integrated Space Provider",
        description: "WEGE telah mencetak milestone bisnis dalam rangka mencapai sasaran yang ditetapkan dalam RJP (Rencana Jangka Panjang) maupun RKAP (Rencana Kerja dan Anggaran Perusahaan) untuk mampu beradaptasi terhadap perubahan lingkungan usaha. WEGE berpegang teguh dalam menjalankan visi dan misi perusahaan untuk mencapai target perusahaan menjadi Integrated Space Provider pada 2023. Inovasi perusahaan dalam meningkatkan pertumbuhan dan penciptaan nilai terus diterapkan. Selain itu,perusahaan senantiasa menjaga kualitas terbaik pada produk dan layanan yang diberikan dan menunjukkan kepedulian pada kehidupan. Hal ini tak lepas dengan penerapan tata kelola perusahaan dan prakik etika bisnis yang baik, serta upaya konsisten untuk menjaga keterikatan (engagement) dengan para pemangku kepentingan. Hal ini diterapkan kepada seluruh pemangku kepentingan, mulai dari mitra kerja, vendor, owner, hingga end user untuk bersama melakukan proses rantai usaha yang lebih ramah lingkungan. WEGE terus memperkuat kemampuannya dengan meningkatkan kapabilitas, sinergi, dan jumlah aset demi mendukung pertumbuhan pembangunan berkelanjutan bagi Perusahaan di masa mendatang."
    }]

    const Timeline = ({ items }) => {
        return (
            <div className="flex flex-row w-full z-10">
                {
                    items.map((item, index) => {
                        return (
                            <div className={cn("flex flex-col", index < items.length - 1 ? "flex-1" : "flex-none")} key={index}>
                                <div className="flex flex-row items-center">
                                    <img className="w-[2rem] h-[2rem] hover:cursor-pointer zoom" src={activeIndex == index ? "/icons/ic_timeline_active.svg" : "/icons/ic_timeline_default.svg"} onClick={() => {
                                        setActiveIndex(index)
                                    }} />
                                    {index < items.length - 1 ? <div className="line"></div> : <></>}
                                </div>
                                <div className="w-text-button text-white mt-[0.438rem] w-max">{item.year}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-row justify-center w-text-title-1 font-semibold">Timeline Transformasi</div>
            <div className="relative mx-[6.25rem] my-[3.75rem] bg-primary px-[6.938rem] py-[3.125rem] rounded-lg min-h-[27.688rem]">
                <div className="flex flex-col z-10">
                    {/* timeline */}
                    <Timeline items={timelineItems} />
                    <div className={cn("flex flex-row gap-x-[2.5rem] mt-[2.313rem] z-10", contentOpacity == 1 ? "fade-in" : "hidden")}>
                        <img src={timelineItems[activeIndex].image} className="w-[13.125rem] h-[16.688rem] rounded-lg mt-[1.25rem]" />
                        <div className="flex flex-col">
                            <div className="w-text-display-4 text-white mb-[0.25rem]">{timelineItems[activeIndex].year}</div>
                            <div className="w-text-title-1 text-white font-bold mb-[1.875rem]">{timelineItems[activeIndex].title}</div>
                            <div className="w-text-body-2 text-white leading-[1.175rem]">{timelineItems[activeIndex].description}</div>
                        </div>
                    </div>
                </div>
                <img className="absolute full right-0 bottom-0 h-[15.5rem]" src="/images/bg_project_overview.svg" />
            </div>
        </>
    )
}

export default TimelineInformasi