import Link from 'next/link'

export function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">Koshkas</a>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navigation">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link href={"/"}><a className="nav-link">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/about"}><a className="nav-link">About</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/posts"}><a className="nav-link">Posts</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}