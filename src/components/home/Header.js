'use client'
import { useState } from "react";
import { Navbar } from "../Layout";
import Hero from "./Hero";

const Header = ({ dataMenuHeader, dataBanner, dataHomepage }) => {
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
        <>
            <img
                src={process.env.NEXT_PUBLIC_BASE_URL + dataBanner[index][`banner${index + 1}_image_url`]}
                className="absolute w-full z-[-1] h-[60.5rem] max-h-[60.5rem]"
                style={{ objectFit: "cover", objectPosition: "center" }}
            />

            {/* navbar */}
            <Navbar theme="dark" data={dataMenuHeader} dataHomepage={dataHomepage}/>
            {/* hero content */}
            <Hero data={dataBanner} onIndexChange={handleIndexChange} index={index} />
        </>
    )
}

export default Header;