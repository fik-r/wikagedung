import cn from "classnames"
const Sponsor = () => {
    const sponsorItems = [
        {
            label: "Member of WIKA Gedung",
            sponsor: ["/images/ic_wika_solusi_proklamasi.svg", "/images/ic_wika_pracetak_gedung.svg", "/images/ic_pwr.svg", "/images/ic_wika_bitomen.svg", "/images/ic_tamansari_prospero.svg", "/images/ic_tamansari_tera.svg"],
            widthClass: "w-[13.75rem]"
        },
    ]
    return (
        <div className="flex flex-col mt-[3.75rem] px-[4.75rem] gap-y-[1.875rem]">
            {
                sponsorItems.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col mx-[4.75rem]">
                            <div className="self-center w-text-headline-1 font-bold text-sooty">{item.label}</div>
                            <div className="flex flex-row flex-wrap self-center mt-[0.875rem] gap-x-[0.875rem] justify-center">
                                {
                                    item.sponsor.map((sponsor, index) => {
                                        return (
                                            <img key={index} src={sponsor} className={cn(item.widthClass, "h-[6.125rem]")} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
            <div className="btn btn-outline btn-warning mt-[1.5rem] w-[10.75rem] px-0 capitalize self-center">Lihat Selengkapnya</div>
        </div>
    )
}

export default Sponsor