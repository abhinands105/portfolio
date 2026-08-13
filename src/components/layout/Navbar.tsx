import "./Navbar.css";

import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    const { pathname } = useLocation();

    const currentPage = useMemo(() => {

        return pathname === "/"
            ? "home"
            : pathname.slice(1);

    }, [pathname]);

    return (

        <header className="navbar">

            <div className="navbar-logo">

                <span
                    className="navbar-diamond"
                    aria-hidden="true"
                >
                    ◆
                </span>

                <span>
                    AI COMMAND CENTER
                </span>

            </div>

            <div className="navbar-terminal">

                {`> root@abhinand-portfolio:~/${currentPage}`}

            </div>

            <button
                className="navbar-button"
                aria-label="Open contact page"
                onClick={() => navigate("/contact")}
            >

                Let's Connect

                <span
                    className="navbar-status"
                    aria-hidden="true"
                />

            </button>

        </header>

    );

}