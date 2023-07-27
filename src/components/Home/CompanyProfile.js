const CompanyProfile = () => {
    return (
        <div className="relative">
            <img className="absolute left-0 top-6 bottom-0 z-[3] h-[25.438rem] ml-[8.75rem] w-[17.813rem]" src="/images/illust_company_profile.svg" />
            <div className="relative bg-primary w-100 mt-[3.75rem] py-[2.125rem] h-[20.938rem]">
                <div className="relative flex flex-col z-[2] ml-[30.375rem]">
                    <div className="w-text-title-1 text-white h-[1.5rem]">2022</div>
                    <div className="w-text-display-3 text-white h-[1.688rem] mt-[-5px]">Company Profile</div>
                    <div className="w-text-subhead-1 text-white mt-[2rem]">As part of BUMN Karya, WIKA Gedung is known as a company that has a good track record of the Company’s success in completing various major projects throughout Indonesia.</div>
                    <div className="btn btn-warning px-0 capitalize text-white w-text-button w-[12.5rem] mt-[1rem]">Lihat Selengkapnya</div>
                    <div className="flex flex-row gap-x-[1.25rem] mt-[2rem]">
                        <img className="hover:cursor-pointer" src="/icons/ic_circle_left.svg" />
                        <img className="hover:cursor-pointer" src="/icons/ic_circle_right.svg" />
                    </div>
                </div>
                <img src="/images/bg_slider_home.svg" className="absolute top-0 left-0 z-[1]" />
            </div>
        </div>
    )
}

export default CompanyProfile