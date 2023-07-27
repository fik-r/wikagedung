import { Navbar, Container, Footer } from "@/components/Layout"
import { Hero, FocusBisnis, News, Sponsor, ProjectOverview, Awards, CompanyProfile } from "@/components/Home"

export default function Index() {
    return (
        <>
            {/* hero */}
            <div className="relative flex flex-col">
                <img
                    src="/images/hero.jpg"
                    className="absolute w-full z-[-1] h-[60.5rem]"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="flex flex-col bg-dark_blue rounded-tl-lg rounded-bl-lg fixed top-0 mt-[18.75rem] right-0 z-[999] p-4">
                    <img src="/icons/ic_newspaper.svg" className="w-8 h-8 my-2 hover:cursor-pointer zoom" />
                    <hr className="my-2" />
                    <img src="/icons/ic_focus-target.svg" className="w-8 h-8 my-2 hover:cursor-pointer zoom" />
                    <hr className="my-2" />
                    <img src="/icons/ic_building.svg" className="w-8 h-8 my-2 hover:cursor-pointer zoom" />
                </div>
                {/* navbar */}
                <Navbar theme="dark" />
                {/* hero content */}
                <Hero />
                <Container className="relative bg-primary">
                    <ProjectOverview />
                </Container>
                <Container className="pt-[5rem] pb-[5.188rem]">
                    <FocusBisnis />
                </Container>
                <Container className="pt-[3.75rem] pb-[5.188rem]">
                    <Awards />
                </Container>

                <Container className="pt-[7.5rem]">
                    <News />
                </Container>
                <CompanyProfile />
                <Container className="pt-[2.75rem]">
                    <Sponsor />
                </Container>

                {/* footer */}
                <Footer />
            </div>

            {/* content */}

        </>
    )
}