import React from 'react';
import Layout from '../../../components/Layout';
import Link from 'next/link';

function index() {
  return (
    <div>
      <Layout>
        {/*============================ Main Section Start ================================== */}
        <section className="pt-0">
          <div className="container">
            <div className="row">
              {/*Item Wrap Start */}
              <div className="col-lg-12 col-md-12 col-sm-12">
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
                        <p>Üye girişi yapmak için aşağıdaki formu doldurunuz</p>
                      </div>
                    </div>
                    <div className="form_row_box_body">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>E-Posta Adresi</label>
                          <input
                            type="email"
                            className="form-control with-light"
                            placeholder="mail@mail.com"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Şifre</label>
                          <input
                            type="password"
                            className="form-control with-light"
                            placeholder="********"
                          />
                        </div>
                      </div>

                      <div className="modal-footer">
                        <div className="mf-link">
                          <i className="ti-user"></i>
                          <span>Hesabınız Yok Mu ?</span>
                          <Link href="/member/register">
                            <a> Üye Ol</a>
                          </Link>
                        </div>
                        <div className="mf-forget">
                          <a>
                            <i className="ti-help"></i>Şifremi Unuttum
                          </a>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <button type="button" className="btn dark-3 w-100">
                            Gönder
                          </button>
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
    </div>
  );
}

export default index;
