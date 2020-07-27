import Link from 'next/link';

function Menu (){
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
      <a className="navbar-brand" href="/">SMP MUTU</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/berita">Berita</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/eskul">Extrakulikuler</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/kontak">Kontak</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    );
}

export default Menu;