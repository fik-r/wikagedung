import { useRouter } from 'next/navigation'
const Awards = () => {
    const router = useRouter()
    const AwardsItem = ({ logo, desc }) => {
        return (
            <div className="zoom hover:cursor-pointer flex flex-col items-center w-[8.75rem]" onClick={() => {
                router.push("/info-perusahaan/penghargaan-sertifikasi")
            }}>
                <img src={logo} className="w-[8.75rem] h-[8.75rem]" />
                <div className="w-text-subhead-1 text-sooty font-semibold mt-[1.625rem] text-center">{desc}</div>
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center">
            <div className="w-text-headline-1 text-sooty font-bold pb-[3rem]">Our Awards & Commitment</div>
            <div className="flex flex-row gap-x-[5rem]">
                <AwardsItem logo="/images/illust_awards.svg" desc="More than 50 Awards" />
                <AwardsItem logo="/images/illust_iso.svg" desc="More than 10 ISO Certified" />
                <AwardsItem logo="/images/illust_green_building.svg" desc="Green Building Award Indonesia" />
            </div>
        </div>
    )
}

export default Awards