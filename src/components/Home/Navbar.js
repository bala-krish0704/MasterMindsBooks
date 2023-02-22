

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <a className="navbar-brand" href="#">
                <img src={require('../Home/Images/logo.png')} width="30" height="30" alt="" / > &nbsp;
                Master Minds Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search Books" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search </button>
                </form>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About us</a>
                    </li>
                   
                    <li className="nav-item">
                        <a className="nav-link ">Log in</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ">Sign up</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}