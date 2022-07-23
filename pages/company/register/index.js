import React from 'react';
import Layout from '../../../components/Layout';

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
                        <p>
                          Firma kaydı yapmak için aşağıdaki formu doldurunuz.
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

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Telefon</label>
                            <input
                              type="text"
                              className="form-control with-light"
                              placeholder="Telefon"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Şehir</label>
                            {/* 81 ili listele */}
                            <select className="form-control with-light">
                              <option>İstanbul</option>
                              <option>Ankara</option>
                              <option>İzmir</option>
                              <option>Bursa</option>
                              <option>Bilecik</option>
                              <option>Kocaeli</option>
                              <option>Kırklareli</option>
                              <option>Kırşehir</option>
                              <option>Kayseri</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>İlçe</label>
                            {/* 81 ili listele */}
                            <select className="form-control with-light">
                              <option>İstanbul</option>
                              <option>Ankara</option>
                              <option>İzmir</option>
                              <option>Bursa</option>
                              <option>Bilecik</option>
                              <option>Kocaeli</option>
                              <option>Kırklareli</option>
                              <option>Kırşehir</option>
                              <option>Kayseri</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Adres</label>
                            <textarea
                              name=""
                              className="form-control with-light"
                              id=""
                              cols="1"
                              rows="2"
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Firmanın İş Konusu</label>
                            {/* 81 ili listele */}
                            <select className="form-control with-light">
                              <option>İstanbul</option>
                              <option>Ankara</option>
                              <option>İzmir</option>
                              <option>Bursa</option>
                              <option>Bilecik</option>
                              <option>Kocaeli</option>
                              <option>Kırklareli</option>
                              <option>Kırşehir</option>
                              <option>Kayseri</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Şifre</label>
                            <input
                              type="password"
                              className="form-control with-light"
                              placeholder="********"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Tekrar Şifre</label>
                            <input
                              type="password"
                              className="form-control with-light"
                              placeholder="********"
                            />
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
