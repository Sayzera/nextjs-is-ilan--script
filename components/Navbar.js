import React from 'react';

import Link from 'next/link';

function Navbar() {
  return (
    <div className="header header-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <nav id="navigation" className="navigation navigation-landscape">
              <div className="nav-header">
                <a className="nav-brand" href="/">
                  <img src="/assets/img/logo.png" className="logo" alt="" />
                </a>

                <div className="nav-toggle"></div>
              </div>
              <div className="nav-menus-wrapper">
                <ul className="nav-menu">
                  <Link href="/">
                    <li className="active">
                      <a>Anasayfa</a>
                    </li>
                  </Link>
                  <Link href="/jobs">
                    <li>
                      <a>İş Arama</a>
                    </li>
                  </Link>
                  <li>
                    <a href="#">
                      Kurumsal<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <Link href="/about">
                        <li>
                          <a>Hakkımızda</a>
                        </li>
                      </Link>
                      <Link href="/news">
                        <li>
                          <a>Duyurular</a>
                        </li>
                      </Link>
                      <Link href="/article">
                        <li>
                          <a>Makaleler</a>
                        </li>
                      </Link>

                      <Link href="/article">
                        <li>
                          <a>Makaleler</a>
                        </li>
                      </Link>
                      <Link href="/faq">
                        <li>
                          <a>SSS</a>
                        </li>
                      </Link>
                    </ul>
                  </li>
                  <Link href="/brands">
                    <li>
                      <a>Markalar</a>
                    </li>
                  </Link>
                  <Link href="/contact">
                    <li>
                      <a>İletişim</a>
                    </li>
                  </Link>
                </ul>

                <ul className="nav-menu nav-menu-social align-to-right">
                  <li className="add-listing">
                    <Link href="/member/login">
                      <a data-toggle="modal">
                        <i className="ti-user mr-1"></i> Üye Girişi
                      </a>
                    </Link>
                  </li>

                  <li
                    className="add-listing"
                    style={{ backgroundColor: '#4f01b7' }}
                  >
                    <Link href="/company/login">
                      <a data-toggle="modal">
                        <i className="ti-user mr-1"></i> Firma Girişi
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
