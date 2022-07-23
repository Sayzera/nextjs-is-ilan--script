import React from 'react';

function LoginModal() {
  return (
    <div
      className="modal fade"
      id="login"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="loginModal"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered login-pop-form"
        role="document"
      >
        <div className="modal-content" id="loginModal">
          <div className="modal-header">
            <h4>Giriş</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="ti-close"></i>
              </span>
            </button>
          </div>
          <div className="modal-body">
            <div className="login-form">
              <form>
                <div className="form-group">
                  <label>E-Posta</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="E-Posta"
                  />
                </div>

                <div className="form-group">
                  <label>Şifre</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="*******"
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn dark-2 btn-md full-width pop-login"
                  >
                    Giriş
                  </button>
                </div>
              </form>
            </div>

            {/* <div className="form-group text-center">
                <span>Diğer Giriş Seçenekleri</span>
              </div> */}

            {/* <div className="social_logs mb-4">
                <ul className="shares_jobs text-center">
                  <li>
                    <a>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div> */}
          </div>
          <div className="modal-footer">
            <div className="mf-link">
              <i className="ti-user"></i>
              <span>Hesabınız Yok Mu ?</span>
              <a> Üye Ol</a>
            </div>
            <div className="mf-forget">
              <a>
                <i className="ti-help"></i>Şifremi Unuttum
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
