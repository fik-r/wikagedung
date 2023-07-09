
import cn from 'classnames'
const FocusBisnis = ({ }) => {
    const cardItems = [
        {
            bg: "bg-konstruksi_gedung",
            icon: "/icons/ic_konstruksi.svg",
            title: "Konstruksi Gedung"
        },
        {
            bg: "bg-offsite_modular",
            icon: "/icons/ic_offsite.svg",
            title: "Konstruksi Off Site Modular"
        },
        {

            bg: "bg-offsite_pracetak",
            icon: "/icons/ic_offsite.svg",
            title: "Konstruksi Off Site Pracetak Gedung"
        },
        {
            bg: "bg-konsensi",
            icon: "/icons/ic_konsensi.svg",
            title: "Konsensi & Investasi"
        }
    ]

    return (
        <>
            <div className="flex flex-row justify-between px-[2.5rem] gap-x-[6.25rem] mb-[5.688rem]">
                <div className="flex flex-col">
                    <div className="w-text-title-1 text-sooty font-semibold">Lini Bisnis yang menjadi fokus utama kami</div>
                    <div className="w-text-body-2 text-jet font-normal mt-[24px]">
                        WIKA Gedung senantiasa memberikan solusi bernilai tambah, pelayanan terbaik dalam quality & safety dengan menciptakan dan meningkatkan keunggulan kompetitif perusahaan dalam bidang konstruksi, meliputi feasibility study, perencanaan, engineering design, konstruksi bangunan gedung, manajemen proyek, pendanaan, serta operation & maintenance.
                    </div>
                </div>
                <img src="/images/illustration-ondernemingen.svg" />
            </div>
            {/* card lini bisnis */}
            <div className="grid grid-cols-4 mt-[1.938rem] gap-x-[0.188rem]">
                {
                    cardItems.map((item, index) => {
                        return (
                            <div key={index} className={cn(item.bg, "hover:cursor-pointer relative col-span-1 h-[30.75rem] bg-cover bg-center bg-no-repeat items-start rounded-lg")}>
                                <div className="absolute w-full h-full rounded-lg" style={{
                                    "background": "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 26.12%, rgba(249, 160, 27, 0) 84.35%)"
                                }} />
                                <div className="absolute w-full h-full rounded-lg" style={{
                                    "background": "rgba(249, 160, 27, 0.3)"
                                }} />
                                <img src={item.icon} className="pt-[19.063rem] px-[2.5rem] relative z-[100]" />
                                <div className="text-neutral w-text-headline-1 mt-[1.5rem] px-[2.5rem] relative z-[100]">{item.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default FocusBisnis