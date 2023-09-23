import ReCAPTCHA from "react-google-recaptcha"
import { verifyCaptcha } from "../../app/hubungi-kami/ServerActions"
import { useRef, useState, useEffect } from "react"
import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { postHubungiKami } from "@/api/wege-service"
import cn from "classnames"

const HubungiKami = () => {
    const recaptchaRef = useRef(null)
    const [isVerified, setIsverified] = useState(false)
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [subjek, setSubjek] = useState("")
    const [pesanAnda, setPesanAnda] = useState("")
    const [language, setLanguage] = useState("")
    const [errorMsg, setErrorMsg] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [successMsg, setSuccessMsg] = useState("")
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
    async function handleCaptchaSubmission(token) {
        // Server function to verify captcha
        await verifyCaptcha(token)
            .then(() => setIsverified(true))
            .catch(() => setIsverified(false))
    }
    const InformationItem = ({ title, description }) => {
        return (
            <div className="flex flex-row gap-x-[1.5rem] mt-[1.25rem]">
                <div className="min-w-[6.125rem] max-w-[6.125rem]  w-text-subhead-1 text-sooty">
                    {title}
                </div>
                <div className="w-text-body-2 font-normal text-sooty">
                    {description}
                </div>
            </div>
        )
    }

    return (
        <div className="w-full pb-[5rem]">

            {/* header, should change with dynamic data */}
            <div className="px-[6.25rem] relative flex flex-col py-[3.75rem]">
                <div className="w-text-display-4 text-jet font-semibold pb-[1.25rem]">{language == ENGLISH ? "Contact Us" : "Hubungi Kami"}</div>
                <div className="w-text-title-1 text-jet font-normal">{language == ENGLISH ? "Please fill in the form below and our Team will be happy to answer your questions." : "Harap isi formulir di bawah ini dan Tim kami akan dengan senang hati menjawab pertanyaan Anda."}</div>
            </div>
            <div className="grid grid-cols-2 gap-x-[5rem] px-[6.25rem] pt-[1.25rem]">
                {/* Form */}
                <div className="flex flex-col bg-dire_wolf col-span-1 rounded-lg p-[2.5rem] gap-y-[1.25rem]">
                    <div className="flex flex-col">
                        <div className="text-white w-text-caption font-semibold mb-[0.25rem]">{language == ENGLISH ? "Full Name" : "Nama Lengkap"}<span className="text-lifeguard">*</span></div>
                        <input type="text" value={nama} placeholder={language == ENGLISH ? "Enter full name" : "Masukkan nama lengkap"} className="min-h-[2.5rem] input w-full input-sm w-text-body-1" onChange={(e) => setNama(e.target.value)} />
                    </div>

                    <div className="flex flex-col">
                        <div className="text-white w-text-caption font-semibold mb-[0.25rem]">{language == ENGLISH ? "Email" : "Email"}<span className="text-lifeguard">*</span></div>
                        <input type="text" value={email} placeholder={language == ENGLISH ? "Enter email" : "Masukkan email"} className="min-h-[2.5rem] input w-full input-sm w-text-body-1" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="flex flex-col">
                        <div className="text-white w-text-caption font-semibold mb-[0.25rem]">{language == ENGLISH ? "Subject" : "Subjek"} <span className="text-lifeguard">*</span></div>
                        <input type="text" value={subjek} placeholder={language == ENGLISH ? "Enter subject" : "Masukkan subjek"} className="min-h-[2.5rem] input w-full input-sm w-text-body-1" onChange={(e) => setSubjek(e.target.value)} />
                    </div>

                    <div className="flex flex-col">
                        <div className="text-white w-text-caption font-semibold mb-[0.25rem]">{language == ENGLISH ? "Your Message" : "Pesan Anda"}<span className="text-lifeguard">*</span></div>
                        <textarea value={pesanAnda} className="min-h-[7rem] w-text-body-1 textarea" placeholder={language == ENGLISH ? "Enter your message" : "Masukkan pesan disini"} onChange={(e) => setPesanAnda(e.target.value)}></textarea>
                    </div>
                    <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        ref={recaptchaRef}
                        onChange={handleCaptchaSubmission}
                    />
                    <div className={cn("btn btn-warning px-0 capitalize text-white w-text-button", isLoading ? "loading" : "")}
                        onClick={async () => {
                            try {
                                if (nama != "" && email != "" && subjek != "" && pesanAnda != "") {
                                    setIsLoading(true)
                                    const response = await postHubungiKami(nama, email, subjek, pesanAnda)
                                    setIsLoading(false)
                                    if (response.status == 200) {
                                        setSuccessMsg(response.message)
                                    } else {
                                        setErrorMsg(response.message)
                                    }
                                }
                            } catch (error) {
                                setIsLoading(false)
                                setErrorMsg(error)
                            }
                        }}
                    >{language == ENGLISH ? "Submit Message" : "Kirim Pesan"}</div>
                </div>
                {/* Information Contact */}
                <div className="flex flex-col col-span-1">
                    <div className="w-text-headline-1 text-sooty">{language == ENGLISH ? "Office Locations and Contacts" : "Lokasi Kantor dan Kontak"}</div>
                    <InformationItem
                        title="Kantor Pusat"
                        description="WIKA Tower 1, 7th-10th Floor, 
                            JL. D.I. Panjaitan Kav.9, Jakarta Timur 
                            13340"
                    />
                    <InformationItem
                        title="Email"
                        description="corsec@wikagedung.id"
                    />
                    <InformationItem
                        title="Phone"
                        description="+6221 8590 8862"
                    />
                    <InformationItem
                        title="Fax"
                        description="+6221 85904146"
                    />
                </div>

                {errorMsg &&
                    <div class="alert alert-error mt-5 justify-start items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-white stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="text-white">{errorMsg}</span>
                    </div>}

                {successMsg &&
                    <div class="alert alert-success mt-5 justify-start items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-white stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="text-white">{successMsg}</span>
                    </div>}
            </div>
        </div>
    )
}

export default HubungiKami