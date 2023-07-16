const Hero = (className) => {
    const navigationItems = ["Leading Solution", "Safety & Quality", "Innovative", "Sustainable", "Care", "Commitment", "Honesty", "Futuristic"]
    return (
        <div className={"flex flex-col mt-[28.75rem] w-full px-[7.5rem] " + className}>
            <div className="flex flex-col">
                <div className="w-text-display-4 text-white">World-Class Total Solution Contractor</div>
                <div className="flex flex-row justify-between mt-[0.688rem]">
                    <div className="text-white w-text-title-1 font-normal self-center">New modern ideas and better solutions are our specialities</div>
                    <div className="flex flex-row">
                        <img src="/icons/ic_arrow_left.svg" className="cursor-pointer" />
                        <img src="/icons/ic_arrow_right.svg" className="cursor-pointer ml-[1.25rem]" />
                    </div>
                </div>
            </div>
            <div className="relative pt-[3.438rem] items-end">
                <div className="absolute w-full border border-radiant_yellow top-[3.625rem]"></div>
                <div className="grid grid-cols-8 items-stretch h-[7.5rem]">
                    {
                        navigationItems.map((item, index) => {
                            return <div key={index}
                                className="text-white hover:text-radiant_yellow font-semibold w-text-subhead-1 pt-[1.875rem]
                            hover:border-t-4 hover:border-t-radiant_yellow cursor-pointer text-center">{item}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Hero;