import React from 'react';
import Layout from '../../components/Layout';

function detail() {
  return (
    <Layout>
      {/* ============================ Page Title Start================================== */}
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2 className="ipt-title">Makale Detay</h2>
              <span className="ipn-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ============================ Page Title End ================================== */}

      {/* ========================== Blog Detail Elements ============================= */}
      <section className="gray-light">
        <div className="container">
          <div className="row">
            {/* Blog Detail */}
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-details single-post-item format-standard">
                <div className="post-details">
                  <div className="post-featured-img">
                    <img
                      className="img-fluid"
                      src="https://via.placeholder.com/600x400"
                      alt=""
                    />
                  </div>

                  <h2 className="post-title">
                    Lorem ipsum dolor sit amet, cons pisicing elit, sed do.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem.
                    <br />
                    <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem.
                  </p>
                  <blockquote>
                    <span className="icon">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod temut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud ullamco laboris nisi ut
                      aliquip ex ea commodo onsequat.
                    </p>
                    <h5 className="name">- Rosalina Pong</h5>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem.
                    <br />
                    <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem.
                  </p>
                </div>
              </div>
            </div>

            {/* Single blog Grid */}
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              {/* Searchbard */}
              <div className="single-widgets widget_search">
                <h4 className="title">Arama</h4>
                <form action="#" className="sidebar-search-form">
                  <input type="search" name="search" placeholder="Arama.." />
                  <button type="submit">
                    <i className="ti-search"></i>
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className="single-widgets widget_category">
                <h4 className="title">Kategoriler</h4>
                <ul>
                  <li>
                    <a href="/article">
                      Kategori 1 <span>09</span>
                    </a>
                  </li>
                  <li>
                    <a href="/article">
                      Kategori 2 <span>12</span>
                    </a>
                  </li>
                  <li>
                    <a href="/article">
                      Kategori 3 <span>19</span>
                    </a>
                  </li>
                  <li>
                    <a href="/article">
                      Kategori 4 <span>17</span>
                    </a>
                  </li>
                  <li>
                    <a href="/article">
                      Kategori 5 <span>10</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========================== Blog Detail Elements ============================= */}
    </Layout>
  );
}

export default detail;
