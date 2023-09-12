import { LANGUAGE, ENGLISH } from '@/utils/constants';
import { useState, useEffect } from 'react'
import cn from "classnames"
const BerkarirBersamaKami = () => {

    const [language, setLanguage] = useState("")
    const [readMore, setReadMore] = useState(false)

    useEffect(() => {
        function setLanguageOnStorageChange() {
            setLanguage(localStorage.getItem(LANGUAGE))
        }
        setLanguageOnStorageChange()

        window.addEventListener('storage', setLanguageOnStorageChange)
        return () => {
            window.removeEventListener('storage', setLanguageOnStorageChange)
        }
    }, [])

    return (
        <div className="flex flex-col w-full px-[6.25rem] py-[1.25rem]">
            <div className="w-text-body-2 text-jet">
                Kami percaya bahwa pengembangan karyawan merupakan salah satu bentuk penghargaan perusahaan dalam meningkatkan produktivitas dan hubungan antara karyawan dengan perusahaan. Kami mempersiapkan program kerja HC (Human Capital) untuk mengembangkan kompentensi dan potensi karyawan, menjadikan kami sebagai perusahaan pilihan bagi para profesional terbaik.
            </div>
            <div className="flex flex-row overflow-x-auto mt-[2.5rem] gap-x-[2.5rem]">
                <img className="w-[17.5rem] h-[16.75rem] rounded rounded-lg" src="/images/dummy_news_2.webp" />
                <img className="w-[17.5rem] h-[16.75rem] rounded rounded-lg" src="/images/dummy_news_2.webp" />
                <img className="w-[17.5rem] h-[16.75rem] rounded rounded-lg" src="/images/dummy_news_2.webp" />
                <img className="w-[17.5rem] h-[16.75rem] rounded rounded-lg" src="/images/dummy_news_2.webp" />
            </div>
            <div className="w-text-headline-1 text-sooty mt-[7.5rem]">
                Belajar, bertumbuh, bersinergi, dan berkontribusi untuk Indonesia
            </div>
            <div className="flex flex-row gap-x-[2.5rem] my-[2.5rem]">
                <img className="w-[36.25rem] h-[20.25rem] rounded rounded-lg    " src="/images/dummy_news_2.webp" />
                <div className="flex flex-col">
                    <div className="h-[3.125rem] w-text-body-2 font-semibold text-sooty">1. Rekrutmen dan seleksi</div>
                    <div className={cn("leading-[2rem] w-text-body-2 text-jet", readMore ? "" : "line-clamp-6")}>Proses pemilihan calon karyawan melalui proses secara bertahap dimulai dari seleksi administrasi, tes psikologi, interview psikologi, interview teknis dan personalia, kemudian dilanjutkan dengan Program Management Trainee selama 6 bulan melalui program pengenalan perusahaan mulai dari on job training, pembentukan team building hingga ujian akhir.

                        Dalam Program Management Trainee, perusahaan berusaha menyiapkan benih terbaik melalui penanaman nilai-nilai WIKA Gedung dan kedisiplinan melalui pembentukan personel dan team building, dimana kandidat disiapkan untuk mejadi pemimpin WIKA Gedung di masa mendatang.</div>
                    <div className="mt-[1rem] cursor-pointer  flex flex-row items-center">
                        <span className="w-text-body-1 mr-[2.063rem] text-primary font-semibold" onClick={() => {
                            setReadMore(!readMore)
                        }}>{!readMore ? (language == ENGLISH ? "Read more" : "Lanjutkan membaca") : (language == ENGLISH ? "Read less" : "Tutup")} </span>
                        <img src="/icons/ic_dropdown.svg" className="w-[0.563rem] h-[0.938rem]" /></div>
                </div>
            </div>
            <div className="flex flex-col mt-[5rem] items-center">
                <div className="w-text-headline-1 font-semibold text-sooty h-[3.125rem]">Lowongan kerja yang tersedia saat ini</div>
                <div className="w-text-body-2 text-jet">Berikut ini posisi yang bisa anda lamar untuk bisa menjadi bagian dari Wika Gedung</div>
            </div>
        </div>
    )
}

export default BerkarirBersamaKami