/* SPDX-FileCopyrightText: 2026 Benjamin Ray Blaszczak */

import "./layout.css";

import Sidebar from "../sidebar/sidebar";

export default function Layout({ children }) {
    return (
        <div className="layout-root">
            <Sidebar />
            <main>
                {children}
            </main>
        </div>
    )
}