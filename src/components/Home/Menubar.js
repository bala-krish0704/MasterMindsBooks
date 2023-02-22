
export function Menubar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">99 Stores </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Newly Added Books</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Graphic Comicd</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Tamil novel</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Merchandise</a>
                    </li>

                   
                </ul>

            </div>
        </nav>
    );
}