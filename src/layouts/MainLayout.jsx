import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import classNames from "classnames";
import NavbarTop from "../components/Navbar/NavbarTop";
import NavbarVertical from "../components/Navbar/NavbarVertical";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        setTimeout(() => {
            if (hash) {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({
                        block: "start",
                        behavior: "smooth"
                    });
                }
            }
        }, 0);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={"container"}>
            <NavbarVertical />
            <div className={classNames("content")}>
                <NavbarTop />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
