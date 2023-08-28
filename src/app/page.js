import { Navbar, Container, Footer } from "@/components/Layout"
import { Hero, FocusBisnis, News, Sponsor, ProjectOverview, Awards, CompanyProfile } from "@/components/home"
import { SidebarMenu } from "@/components/common"

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
                <SidebarMenu/>
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