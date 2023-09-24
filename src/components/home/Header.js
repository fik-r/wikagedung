'use client'
import { useState } from "react";
import Hero from "./Hero";
import useResponsive from "@/utils/media-query"
import Image from "next/image";

const Header = ({ dataMenuHeader, dataBanner, dataHomepage }) => {
    const { isMobile } = useResponsive()
    const [index, setIndex] = useState(0);
    const totalBanner = dataBanner.length;
    const handleIndexChange = newIndex => {
        if (newIndex < 0) {
            setIndex(totalBanner - 1); // Reset to last item if going back from the first
        } else if (newIndex >= totalBanner) {
            setIndex(0); // Reset to first item if going forward from the last
        } else {
            setIndex(newIndex);
        }
    };
    return (
        <div className="flex flex-col relative" style={{
        }}>
            <Image placeholder="blur"
                quality={50}
                blurDataURL={dataBanner[index][`banner${index + 1}_image_url`]}
                src={dataBanner[index][`banner${index + 1}_image_url`]}
                className="z-[-2]" fill
                style={{
                    objectFit: 'cover',
                }} />
            <Image src="/images/overlay.png" fill className="z-[-1]" />
            {/* navbar */}

            {/* hero content */}
            <Hero data={dataBanner} onIndexChange={handleIndexChange} index={index} />
        </div>
    )
}

export default Header;