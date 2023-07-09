const Footer = () => {
    return (
        <div className="mt-[5rem]">
            <div className="w-full px-[6.25rem] py-[4.969rem] bg-primary">
                <div className="flex justify-between items-center px-0">
                    <img src="/images/ic_wika_gedung_white.svg" className="w-[15rem] h-[3.875rem]" />
                    <div className='text-white mt-[1.125rem]'>© 2023 Wika Gedung. All Rights Reserved.</div>
                </div>
                <div className="w-full h-[0.5px] bg-white my-[1.5rem]"></div>
                <div className="grid grid-cols-4">
                    <div className="col-span-1 flex flex-col">
                        <div className="text-white w-text-subhead-2">Kantor Pusat</div>
                        <div className="text-white w-text-body-2 font-normal w-[17.188rem] mt-[0.625rem]">WIKA Tower 1, 7th-10th Floor,
                            JL. D.I. Panjaitan Kav.9, Jakarta Timur
                            13340</div>
                    </div>
                    <div className="col-span-1 flex flex-col">
                        <div className="grid grid-cols-3">
                            <div className="text-white w-text-subhead-1">Email</div>
                            <div className="col-span-2 text-white w-text-body-2">corsec@wikagedung.id</div>
                        </div>
                        <div className="grid grid-cols-3 mt-[0.625rem]">
                            <div className="text-white w-text-subhead-1">Phone</div>
                            <div className="col-span-2 text-white w-text-body-2">+6221 8590 8862</div>
                        </div>
                        <div className="grid grid-cols-3 mt-[0.625rem]">
                            <div className="text-white w-text-subhead-1">Fax</div>
                            <div className="col-span-2 text-white w-text-body-2 grow">+6221 8590 4146</div>
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-row gap-[0.625rem] h-[1.875rem] justify-end">
                        <img src="/icons/linkedin.svg" className="cursor-pointer" />
                        <img src="/icons/facebook.svg" className="cursor-pointer" />
                        <img src="/icons/youtube.svg" className="cursor-pointer" />
                        <img src="/icons/twitter.svg" className="cursor-pointer" />
                        <img src="/icons/instagram.svg" className="cursor-pointer" />
                        <img src="/icons/_TikTok.svg" className="cursor-pointer" />
                        <img src="/icons/_Spotify.svg" className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;