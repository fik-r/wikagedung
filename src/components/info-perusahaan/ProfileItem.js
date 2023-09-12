import { useRouter } from "next/navigation"
const ProfileItem = ({ job, name, image, index, isDireksi }) => {
    const router = useRouter()
    return (
        <div className="flex flex-col rounded-lg shadow-lg w-[22.5rem] cursor-pointer" onClick={() => {
            router.push(`/info-perusahaan/organisasi/${(index + 1)}?q=${isDireksi ? "Direksi" : "Komisaris"}`)
        }}>
            <img src={image} className="rounded-t-lg bg-white_smoke w-full h-[20.25rem]" />
            <div className="w-text-body-2 text-sooty mx-[1rem] mt-[1.25rem]">{job}</div>
            <div className="w-text-headline-1 text-primary mx-[1rem] mb-[1.25rem]">{name}</div>
        </div>
    )
}

export default ProfileItem