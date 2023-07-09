import cn from 'classnames';

const News = () => {
    const newsItems = [
        {
            thumbnail: "",
            location: "Jakarta",
            date: "27 Desember 2022",
            title: "WEGE Ground Breaking Sekolah Kedinasan Milik BMKG, Mengusung Konsep Smart dan Green Building"
        },
        {
            thumbnail: "",
            location: "Jakarta",
            date: "27 Desember 2022",
            title: "WEGE Turut Resmikan Revitalisasi PAUD Berbasis Modular yang Pertama di Indonesia"
        },
        {
            thumbnail: "",
            location: "Jakarta",
            date: "27 Desember 2022",
            title: "De Braga by Artotel Bandung, Sabet Penghargaan Industri Pariwisata Indonesia"
        },
        {
            thumbnail: "",
            location: "Jakarta",
            date: "27 Desember 2022",
            title: "WEGE Ground Breaking Sekolah Kedinasan Milik BMKG, Mengusung Konsep Smart dan Green Building"
        },

    ]

    const LargeNewsItem = ({ location, date, title, thumbnail }) => {
        return (
            <div className={cn("hover:cursor-pointer relative col-span-1 h-[20rem] bg-cover bg-center bg-no-repeat items-start rounded-lg")} style={{
                backgroundImage: `url("${thumbnail}")`
            }}>
                <div className="absolute pt-[1.375rem] px-[1.5rem] pb-[2rem] bottom-0">
                    <div className="flex flex-row gap-x-[0.875rem] items-center">
                        <div className="w-text-body text-white font-semibold">{location}</div>
                        <div className="w-text-body text-white">|</div>
                        <div className="w-text-body font-normal text-white">{date}</div>
                    </div>
                    <div className="mt-[1rem] w-text-title-1 font-semibold text-white">
                        {title}
                    </div>
                </div>
            </div>
        )
    }

    const SmallNewsItem = ({ location, date, title, thumbnail }) => {
        return (
            <div className="flex flex-row items-center gap-x-[1.5rem] hover:cursor-pointer">
                <img src={thumbnail} className="rounded-lg w-[8.375rem] h-[8.375rem]" />
                <div>
                    <div className="flex flex-row gap-x-[0.875rem] items-center">
                        <div className="w-text-caption text-jet font-semibold">{location}</div>
                        <div className="w-text-subhead-1 text-aria">|</div>
                        <div className="w-text-caption font-normal text-hard_coal">{date}</div>
                    </div>
                    <div className="mt-[0.875rem] w-text-body-1 font-semibold text-sooty">
                        {title}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="grid grid-cols-3 mx-[2.5rem]">
                <div className="col-span-1 flex flex-col">
                    <div className="text-orange w-text-body-1 font-bold">Berita</div>
                    <div className="text-sooty w-text-headline-1 leading-[3.125rem]">Berita terkini tentang<br />Wika Gedung</div>
                </div>
                <div className="col-span-2 flex flex-col">
                    <div className="text-jet w-text-body-2 font-normal leading-[2rem]">Stay up to date with the Wika Gedung, insights and articles from our expert editors, and advisors. Our professionals provide valuable perspective on a range of topics that can help inform your business decisions and keep you informed about industry trends.</div>
                    <div className="btn btn-outline btn-warning mt-[1.5rem] w-[10.75rem] px-0 capitalize">Lihat Selengkapnya</div>
                </div>
            </div>
            {/* card news */}
            <div className="flex flex-col mt-[6.938rem] justify-center mb-[8.75rem]">
                {/* <div className="flex-row flex gap-x-[1.25rem]">
                    {newsItems.map((item, index) => {
                        return (
                            <div key={index} class="card w-[15.125rem] h-[24.875rem] bg-base-100 shadow rounded-lg">
                                <figure><img src="https://picsum.photos/345/242" className="h-[15.125rem]" alt="Shoes" /></figure>
                                <div class="card-body pt-[1.375rem] px-[1.5rem] pb-[1.5rem]">
                                    <div className="flex flex-row gap-x-[0.875rem] items-center">
                                        <div className="w-text-caption text-jet font-semibold">{item.location}</div>
                                        <div className="w-text-subhead-1">|</div>
                                        <div className="w-text-caption font-normal text-hard_coal">{item.date}</div>
                                    </div>
                                    <div className="mt-[1rem] w-text-body-1 font-semibold text-sooty">
                                        {item.title}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div> */}
                <div className="grid grid-cols-2 gap-x-[1.313rem]">
                    <LargeNewsItem
                        date="24 Januari 2023"
                        title="WEGE Rampungkan Ikon Baru Purwakarta: Masjid Endan Andansih"
                        location="Tangerang"
                        thumbnail="/images/dummy_news_1.svg"
                    />
                    <LargeNewsItem
                        date="24 Januari 2023"
                        title="WEGE Rampungkan Ikon Baru Purwakarta: Masjid Endan Andansih"
                        location="Tangerang"
                        thumbnail="/images/dummy_news_2.svg"
                    />
                </div>
                <div className="grid grid-cols-3 gap-x-[2.5rem] mt-[2.5rem]">
                    <SmallNewsItem
                        date="24 Januari 2023"
                        title="WEGE Ground Breaking Sekolah Kedinasan Milik BMKG, Mengusung Konsep Smart dan Green..."
                        location="Jakarta"
                        thumbnail="/images/dummy_news_3.svg"
                    />
                     <SmallNewsItem
                        date="24 Januari 2023"
                        title="WEGE Turut Resmikan Revitalisasi PAUD Berbasis Modular yang Pertama di Indonesia"
                        location="Jakarta"
                        thumbnail="/images/dummy_news_4.svg"
                    />
                     <SmallNewsItem
                        date="24 Januari 2023"
                        title="De Braga by Artotel Bandung, Sabet Penghargaan Industri Pariwisata Indonesia"
                        location="Jakarta"
                        thumbnail="/images/dummy_news_5.svg"
                    />
                </div>
            </div>
        </>
    )
}

export default News