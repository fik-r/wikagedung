'use client';
import Navbar from "./Navbar";
import Container from "./Container";
import Footer from "./Footer";

const Layout = ({ children, showBreadcrumb }) => {
    return (
        <>
            <Navbar theme="light" showBreadcrumb={showBreadcrumb} />
            {children}
            <Footer />
        </>
    )
}
export { Navbar, Container, Footer, Layout }