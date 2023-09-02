'use client'
import Navbar from "./Navbar";
import Container from "./Container";
import Footer from "./Footer";

const Layout = ({ children, showBreadcrumb, isOnDetailPage, dataMenuHeader, dataHomepage, dataContact }) => {
    return (
        <>
            <Navbar theme="light" showBreadcrumb={showBreadcrumb} isOnDetailPage={isOnDetailPage} data={dataMenuHeader} dataHomepage={dataHomepage} />
            {children}
            <Footer data={dataContact} />
        </>
    )
}
export { Navbar, Container, Footer, Layout }