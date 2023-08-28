'use client';
import Navbar from "./Navbar";
import Container from "./Container";
import Footer from "./Footer";

const Layout = ({ children, showBreadcrumb, isOnDetailPage }) => {
    return (
        <>
            <Navbar theme="light" showBreadcrumb={showBreadcrumb} isOnDetailPage={isOnDetailPage} />
            {children}
            <Footer />
        </>
    )
}
export { Navbar, Container, Footer, Layout }