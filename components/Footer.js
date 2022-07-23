import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="dark-footer skin-dark-footer">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget">
                  <img
                    src="/assets/img/logo.png"
                    className="img-fluid f-logo"
                    width="60"
                    alt=""
                  />
                  <p>
                    Adres Bilgisi Yer Alacak
                    <br />
                    İlçe / Şehir
                  </p>
                  <ul className="footer-bottom-social">
                    <li>
                      <a>
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="ti-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="ti-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="ti-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 row">
                <div className="col-lg-4 col-md-4">
                  <div className="footer-widget">
                    <h4 className="widget-title">Kurumsal</h4>
                    <ul className="footer-menu">
                      <li>
                        <a href="/about">Hakkımızda</a>
                      </li>
                      <li>
                        <a href="/faq">SSS</a>
                      </li>
                      <li>
                        <a href="/news">Duyurular</a>
                      </li>
                      <li>
                        <a href="/article">Makaleler</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4">
                  <div className="footer-widget">
                    <h4 className="widget-title">Linkler</h4>
                    <ul className="footer-menu">
                      <li>
                        <a href="/jobs">İş Ara</a>
                      </li>
                      <li>
                        <a href="/faq">SSS</a>
                      </li>
                      <li>
                        <a href="/brands">Markalar</a>
                      </li>
                      <li>
                        <a href="/contact">İletişim</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4">
                  <div className="footer-widget">
                    <h4 className="widget-title">Sözleşmeler</h4>
                    <ul className="footer-menu">
                      <li>
                        <a href="/news/detail">Gizlilik Sözleşmesi</a>
                      </li>
                      <li>
                        <a href="/news/detail">
                          Uzak Mesafeli Satış Sözleşmesi
                        </a>
                      </li>
                      <li>
                        <a href="/news/detail">Çerez Politikası</a>
                      </li>
                      <li>
                        <a href="/news/detail">Kullanım Koşulları</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 text-center">
                <p className="mb-0">© 2022 Tüm Hakları Saklıdır</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
