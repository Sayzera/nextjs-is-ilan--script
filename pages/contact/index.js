import React from 'react';
import Layout from '../../components/Layout';

function index() {
  return (
    <Layout>
      {/*============================ Page Title Start================================== */}
      <div className="page-title inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2 className="ipt-title">İletişim</h2>
              <span className="ipn-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
        </div>
        <div className="ht-80"></div>
      </div>
      {/*============================ Page Title End ================================== */}

      {/*============================ Main Section Start ================================== */}
      <section className="pt-0">
        <div className="container overlio-top">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="contact_side overlio-top">
                <div className="ct_cmp_social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="ct_cmp_caption">
                  <h4 className="mb-0">İletişim Bilgileri</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <div className="ct_cmp_address">
                  <div className="ct_cmp_single">
                    <div className="ct_cmp_single_icon">
                      <i className="ti-location-pin"></i>
                    </div>
                    <div className="ct_cmp_brief">
                      <h5>Adres:</h5>
                      <span>Adres Bilgisi</span>
                    </div>
                  </div>
                  <div className="ct_cmp_single">
                    <div className="ct_cmp_single_icon">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <div className="ct_cmp_brief">
                      <h5>E-Posta:</h5>
                      <span>mail@mail.com</span>
                    </div>
                  </div>
                  <div className="ct_cmp_single">
                    <div className="ct_cmp_single_icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="ct_cmp_brief">
                      <h5>Telefon:</h5>
                      <span>+90 1231234</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Item Wrap Start */}
            <div className="col-lg-8 col-md-8 col-sm-12">
              <form className="contact_row">
                <div className="form_row_box">
                  <div className="form_row_header">
                    <div className="form_row_header_flex">
                      <img
                        src="assets/img/email.svg"
                        className="img-fluid"
                        width="52"
                        alt=""
                      />
                    </div>
                    <div className="form_row_header_right">
                      <p>
                        Bizimle iletişim kurmak için lütfen aşağıdaki formu
                        doldurun.
                      </p>
                    </div>
                  </div>
                  <div className="form_row_box_body">
                    <div className="form-row">
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label>Ad Soyad</label>
                          <input
                            type="text"
                            className="form-control with-light"
                            placeholder="Ad Soyad"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label>E-Posta Adresi</label>
                          <input
                            type="email"
                            className="form-control with-light"
                            placeholder="mail@mail.com"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label>Telefon</label>
                          <input
                            type="text"
                            className="form-control with-light"
                            placeholder="Telefon"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label>Konu</label>
                          <input
                            type="text"
                            className="form-control with-light"
                            placeholder="Konu"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Mesajınız</label>
                          <textarea className="form-control with-light"></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <button type="button" className="btn dark-3">
                            Gönder
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*============================ Main Section End ================================== */}
    </Layout>
  );
}

export default index;
