import { Layout, Container } from "@/components/Layout"
export default function index() {
    return (
        <Layout showBreadcrumb={true} isOnDetailPage={true}>
            <div className="w-full px-[6.25rem]">
                <div className="relative flex flex-col">
                    <div className="w-text-display-2 text-sooty] mt-[2.5rem]">Profil Dewan Komisaris</div>
                </div>
                <div className="flex flex-row mt-[3.75rem] gap-x-[2.5rem]">
                    <img className="w-[26.25rem] h-[34.375rem] bg-[#F5F5F5]" src="/images/dummy_komisaris.png" />
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <div className="w-text-display-3 text-primary">Hananto Aji</div>
                            <div className="flex flex-row">
                                <img src="/icons/ic_circle_left_disabled.svg" className="cursor-pointer w-[2.5rem] h-[2.5rem]" />
                                <img src="/icons/ic_circle_right_black.svg" className="cursor-pointer ml-[1.25rem] w-[2.5rem] h-[2.5rem]" />
                            </div>
                        </div>
                        <div className="w-text-title-1 text-sooty font-normal mt-[0.5rem]">Komisaris Utama</div>
                        <div className="w-text-body-2 text-jet mt-[2.5rem]">Lahir di Surakarta pada tanggal 5 April 1974, Hananto Aji diangkat sebagai Komisaris Utama PT Wijaya Karya Bangunan Gedung Tbk. melalui Rapat Umum Pemegang Saham Luar Biasa (RUPSLB) pada tanggal 9 September 2021. Beliau memperoleh gelar Sarjana di Universitas Sebelas Maret Surakarta jurusan Teknik Sipil pada tahun 1997. Saat ini Beliau juga menjabat sebagai Direktur Operasi I di PT Wijaya Karya (Persero) Tbk (2010-sekarang). Sebelumnya beliau menjabat sebagai General Manager Departemen Sinergi Bisnis WIKA sejak tahun 2019 hingga 2020, Manajer Divisi 5 Departemen Sipil Umum 3 periode 2017-2019 dan Manajer Divisi Korporasi Divisi 2 Departemen Sipil Umum 1 pada tahun 2015. Beliau tidak memiliki hubungan afiliasi baik kepada anggota Direksi dan/atau Anggota Komisaris lainnya, maupun dengan Pemegang Saham.</div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}