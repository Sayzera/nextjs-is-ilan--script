import Head from 'next/head';
import React from 'react';
import Script from 'next/script';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginModal from './Modals/LoginModal';
import RegisterModal from './Modals/registerModal';

function Layout({ children }) {
  React.useEffect(() => {
    setTimeout(() => {
      $(document).ready(function () {
        $('#navigation').navigation();
      });
    }, 200);
  }, []);

  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Eleman Tunçbilek | Türkiye nin eleman sitesi</title>
      </Head>

      <div className="blue-skin">
        {/*==============================================================*/}
        {/* Preloader - style you can find in spinners.css */}
        {/*==============================================================*/}
        {/* <div className="Loader"></div> */}

        {/*==============================================================*/}
        {/* Main wrapper - style you can find in pages.scss */}
        {/*==============================================================*/}
        <div id="main-wrapper">
          {/*==============================================================*/}
          {/* Top header  */}
          {/*==============================================================*/}
          {/* Start Navigation */}
          <div className="header header-light">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  {/* Navbar  */}
                  <Navbar />
                </div>
              </div>
            </div>
          </div>
          {/* End Navigation */}
          <div className="clearfix"></div>
          {/*==============================================================*/}
          {/* Top header  */}
          {/*==============================================================*/}

          {children}

          {/* =========================== Footer Start ========================================= */}
          <Footer />
          {/* =========================== Footer End ========================================= */}

          {/* Log In Modal */}
          <LoginModal />
          {/* End Modal */}

          {/* Register Modal */}
          <RegisterModal />
          {/* End Modal */}

          {/* Upload Resume */}
          {/* Upload Resume Modalı Buraya Gelecek */}
          {/* Upload Resume */}
        </div>
        {/*==============================================================*/}
        {/* End Wrapper */}
        {/*==============================================================*/}

        {/*==============================================================*/}
        {/* All Jquery */}
        {/*==============================================================*/}
      </div>
    </>
  );
}

export default Layout;
