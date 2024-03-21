export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="krysta_lestico">Krysta Lestico</a>
        <ul>
            <li>
                <a href="about">About</a>
            </li>
            <li>
                <a href="/current_projects">Current Projects</a>
            </li>
            <li>
                <a href="/finished_projects">Finished Projects</a>
            </li>
        </ul>
    </nav>
}