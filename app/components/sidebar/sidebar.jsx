/* SPDX-FileCopyrightText: 2026 Benjamin Ray Blaszczak */

import "./sidebar.css";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <img id="profile-pic" src="images/profile-pic.jpg" />

            <h2>Benjamin Ray Blaszczak</h2>
            <p>Senior Software Engineer</p>
        </aside>
    );
}