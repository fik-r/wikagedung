import { News } from "../media"
const ListNews = () => {
    return (
        <div className="w-full">
            <div className="flex flex-row gap-x-[2.5rem] mt-[3.125rem] items-center mx-[6.25rem]">
                <img src="/images/dummy_news_2.webp" className="rounded-xl w-[42.5rem] h-[30rem]" />
                <div className="flex flex-col">
                    <div className="flex flex-row gap-x-[0.875rem] items-center">
                        <div className="w-text-body-1 font-bold text-jet">Jakarta</div>
                        <div>|</div>
                        <div className="w-text-body-1 text-hard_coal">10 April 2023</div>
                    </div>
                    <div className="mt-[0.875rem] w-text-display-2 text-sooty">Kolaborasi WEGE dan WTON Gelar Buka Puasa Bersama Seraya Santuni Anak Yatim</div>
                    <div className="mt-[1.5rem] leading-[2rem] w-text-body-2 text-jet">WIKA Gedung menyediakan layanan konstruksi terintegrasi dengan dukungan teknologi terdepan dalam memberikan solusi pekerjaan konstruksi secara menyeluruh dengan mengutamakan quality & safety untuk melayani pasar pemerintah, BUMN/BUMD dan swasta di Indonesia.</div>
                    <button className="mt-[1.5rem] btn btn-warning px-0 capitalize text-white w-text-button btn-outline w-[9.813rem]">Baca selengkapnya</button>
                </div>
            </div>

            <div className="flex flex-col border-t border-t-secondary mt-[3.938rem] pt-[5rem] px-[6.25rem]">
                <div className="flex flex-row justify-between mb-[2.75rem]">
                    <div className="w-text-title-1 font-bold text-sooty">Berita Lainnya</div>
                    <div className="flex flex-row">
                        {/* <div>Urutkan Berdasarkan</div>
                            <div>Cari</div> */}
                    </div>
                </div>
                {/* news */}
                <div className="grid grid-cols-4 gap-[2.5rem]">
                    <News />
                    <News />
                    <News />
                </div>
            </div>

        </div>
    )
}

export default ListNews