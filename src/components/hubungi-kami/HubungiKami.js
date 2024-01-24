import ReCAPTCHA from "react-google-recaptcha"
import { verifyCaptcha } from "../../app/hubungi-kami/ServerActions"
import { useRef, useState, useEffect } from "react"
import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { postHubungiKami } from "@/api/wege-service"
import cn from "classnames"
import useResponsive from "@/utils/media-query"

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
    const [isValid, setIsValid] = useState(false)
    const { isMobile } = useResponsive()
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
        await verifyCaptcha(token)
            .then(() => {
                setIsverified(true)
            })
            .catch(() => {
                setIsverified(false)
            })
    }
    const InformationItem = ({ title, description }) => {
        return (
            <div className={cn("flex", isMobile ? "flex-col gap-y-[0.5rem] mt-[0.5rem]" : "flex-row gap-x-[1.5rem] mt-[1.25rem]")}>
                <div className={cn("min-w-[6.125rem] max-w-[6.125rem] text-sooty", isMobile ? "w-text-body-1 font-medium" : "w-text-subhead-1")}>
                    {title}
                </div>
                <div className={cn("font-normal text-sooty", isMobile ? "w-text-body-1" : "w-text-body-2")}>
                    {description}
                </div>
            </div>
        )
    }

    useEffect(() => {
        setIsValid(nama != "" && email != "" && subjek != "" && pesanAnda != "" && isVerified)
    }, [nama, email, subjek, pesanAnda, isVerified])

    return (
        <div className={cn("w-full", isMobile ? "" : "pb-[5rem]")}>
            {/* header, should change with dynamic data */}
            <div className={cn(" relative flex flex-col ", isMobile ? "pt-[2.5rem] pb-[1.5rem] px-[1rem]" : "px-[6.25rem] py-[3.75rem]")}>
                <div className={cn("text-jet font-semibold", isMobile ? "w-text-body-2 pb-[1rem]" : "w-text-display-4 pb-[1.25rem]")}>{language == ENGLISH ? "Contact Us" : "Hubungi Kami"}</div>
                <div className={cn("text-jet font-normal", isMobile ? "w-text-body-1" : "w-text-title-1")}>{language == ENGLISH ? "Please fill in the form below and our Team will be happy to answer your questions." : "Harap isi formulir di bawah ini dan Tim kami akan dengan senang hati menjawab pertanyaan Anda."}</div>
            </div>
            <div className={cn(isMobile ? "flex flex-col px-[1rem] gap-y-[2rem]" : "grid grid-cols-2 gap-x-[5rem] px-[6.25rem] pt-[1.25rem]")}>
                {/* Form */}
                <div className={cn("flex flex-col bg-dire_wolf col-span-1 rounded-lg gap-y-[1.25rem]", isMobile ? "p-[1rem]" : "p-[2.5rem]")}>
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
                    <div className={cn("btn btn-warning px-0 capitalize text-white w-text-button", isLoading ? "loading" : "", isValid ? "" : "btn-disabled")}
                        onClick={async () => {
                            try {
                                if (nama != "" && email != "" && subjek != "" && pesanAnda != "" && isVerified) {
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
                    <div className={cn("text-sooty", isMobile ? "gap-y-[0.5rem] mb-[0.5rem] w-text-body-2 font-semibold" : "w-text-headline-1 ")}>{language == ENGLISH ? "Office Locations and Contacts" : "Lokasi Kantor dan Kontak"}</div>
                    <InformationItem
                        title={language == ENGLISH ? "Head Office" : "Kantor Pusat"}
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