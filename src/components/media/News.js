import { useRouter } from "next/navigation"
const News = () => {
    const router = useRouter()
    return (
        <div onClick={() => {
            router.push("/media/berita/detail")
        }} className="rounded-xl shadow-md zoom flex flex-col items-center gap-x-[1.5rem] hover:cursor-pointer w-[17.5rem] h-[24.875rem]">
            <img src="/images/dummy_news_2.webp" className="rounded-t-lg w-[17.5rem] h-[14.938rem]" />
            <div className="p-[1.5rem]">
                <div className="flex flex-row gap-x-[0.875rem] items-center">
                    <div className="w-text-caption text-jet font-semibold">Jakarta</div>
                    <div className="w-text-subhead-1 text-aria">|</div>
                    <div className="w-text-caption font-normal text-hard_coal">April 1 2023</div>
                </div>
                <div className="mt-[0.875rem] w-text-body-1 font-semibold text-sooty">
                    Bahas Kinerja Perusahaan dan Strategi, WEGE Gelar Investor dan Analyst Meeting

                </div>
            </div>

        </div>
    )
}

export default News