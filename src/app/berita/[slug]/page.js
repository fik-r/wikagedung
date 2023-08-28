import { Layout } from "@/components/Layout"

export default function Index() {
    const SmallNewsItem = ({ location, date, title, thumbnail }) => {
        return (
            <div className="w-[21.938rem] h-[8.375rem] zoom flex flex-row items-center gap-x-[1.5rem] hover:cursor-pointer">
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
        <Layout showBreadcrumb={true} isOnDetailPage={true}>
            <div className="w-full mx-[6.25rem] flex flex-col border-l-secondary border-l pl-[3.75rem] pt-[5rem]">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-x-[0.875rem] items-center">
                            <div className="w-text-body-1 font-bold text-jet">Jakarta</div>
                            <div>|</div>
                            <div className="w-text-body-1 text-hard_coal">10 April 2023</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="w-text-display-2 text-sooty">
                                Kolaborasi WEGE dan WTON Gelar Buka Puasa Bersama Seraya Santuni Anak Yatim
                            </div>
                            {/* <div className="flex flex-col">
                                <div>Share</div>
                            </div> */}
                        </div>
                    </div>
                    <div className="flex flex-col mt-[2.5rem]">
                        <img src="/images/dummy_news_2.webp" className="w-[79rem] h-[34.375rem] rounded-lg"/>
                        <div className="grid grid-cols-2 pt-[2.5rem] gap-x-[3.125rem]">
                            <div className="w-text-body-1 text-jet leading-[1.5rem]">
                                Memasuki hari ke-19 di Bulan Ramadhan, PT Wijaya Karya Bangunan Gedung Tbk. (WEGE) berkolaborasi bersama PT Wijaya Karya Beton Tbk. (WTON) dalam menyelenggarakan pemberian santunan kepada 150 anak yatim yang bertempat di WIKA Tower I pada Senin, (10/04). Tak hanya itu, acara yang mengusung tema ‘Ramadhan Penuh Berkah’ ini juga diisi siraman rohani dan buka puasa bersama yang dilanjutkan dengan salat berjamaah bersama.

                                Pada kesempatan ini segenap Direksi WEGE dan WTON beserta tim manajemen menghadiri undangan buka bersama dan pemberian santunan bagi anak asuhan dari 3 (tiga) yayasan yakni Yayasan Sahabat Hujan Indonesia, Yayasan Dulur Salembur, dan Yayasan Rumah Yatim.

                                Direktur Keuangan, HC, dan Manajemen Risiko WEGE Syailendra Ogan, dalam sambutannya mengatakan bahwa kegiatan ini dapat terlaksana berkat dorongan dari pengurus.

                                “Alhamdulillah, kegiatan Buka Puasa bersama dan Santunan Anak Yatim dapat terlaksana kembali di bulan suci Ramadhan kali ini,” jelasnya. Ia juga mengucapkan terima kasih kepada semua pihak yang sudah mendukung terlaksananya kegiatan yang berjalan dengan khidmat ini.

                                “Sebelumnya kami ucapkan terima kasih kepada para donatur yang telah membantu terlaksananya kegiatan buka puasa bersama berikut santunan kepada anak yatim. Semoga apa yang sudah diberikan dibalas oleh Allah SWT,” ujar Ogan.

                                Sementara itu, Direktur Teknik dan Produksi WIKA Beton Sidiq Purnomo menjelaskan bahwa acara ini cukup istimewa karena mengusung semangat sinergi WIKA Grup.

                                “Semoga kolaborasi pertama ini menjadi pemantik berbagai berbagai kolaborasi berikutnya, sehingga skala dan manfaatnya menjadi lebih besar dan bisa dirasakan lebih banyak pihak,” sebut Sidiq, “Semoga niat baik kita untuk menjalin silaturahmi pada sore hari ini bisa menjadi manfaat bagi semua.”

                                Pada kesempatan tersebut, Direksi WEGE dan WTON secara langsung menyerahkan bantuan tersebut secara simbolis. Ratusan anak yatim yang berusia sekolah mulai dari TK hingga SMP tersebut diberikan santunan tali kasih dan peralatan sekolah.

                                Seluruh anak-anak dan tamu undangan antusias menyimak kajian yang disampaikan secara menarik dan menghibur oleh Ustadzah Lulu Susanti. Dengan terdengarnya kumandang azan Magrib, maka acara ditutup dan dilanjutkan dengan Buka Puasa Bersama dan salat Magrib berjamaah serta makan malam bersama.

                                Santunan anak yatim berlangsung dengan cukup kekeluargaan. Terlihat raut wajah ceria tampak di wajah anak-anak peserta saat mengikuti acara buka puasa bersama sekaligus pemberian santunan itu. Mereka juga ikut mendengarkan dan memperhatikan tausiah Ramadhan. Semoga kegiatan santunan Anak yatim dan Buka Puasa bersama kali ini membawa keberkahan bagi Perusahaan.

                                Kegiatan santunan anak yatim dan buka puasa bersama yang diinisiasi oleh organisasi internal BINTAL WEGE dan WTON merupakan bagian dari Program CSR sebagai wujud kepedulian perusahaan terhadap sesama, terutama kepada anak-anak yatim yang membutuhkan bantuan. Semoga kegiatan tersebut memberikan manfaat yang baik bagi seluruh pihak yang terlibat dan masyarakat luas.
                                Rekomendasi Berita
                                Jakarta
                                10 April 2023
                                Bahas Kinerja Perusahaan dan Strategi, WEGE Gelar Investor dan Analyst Meeting
                                Jakarta
                                10 April 2023
                                Bahas Kinerja Perusahaan dan Strategi, WEGE Gelar Investor dan Analyst Meeting
                                Jakarta
                                10 April 2023
                                Bahas Kinerja Perusahaan dan Strategi, WEGE Gelar Investor dan Analyst Meeting
                                Jakarta
                                10 April 2023
                                Bahas Kinerja Perusahaan dan Strategi, WEGE Gelar Investor dan Analyst Meeting</div>
                            <div className="flex flex-col">
                                <div className="w-text-title-1 font-bold text-sooty mb-[1.5rem]">Rekomendasi Berita</div>
                                <SmallNewsItem thumbnail={"/images/dummy_news_2.webp"} date="10 April 2023" location={"Jakarta"} title={"Bahas Kinerja Perusahaan dan Strategi, WEGE Gelar Investor dan Analyst Meeting"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}