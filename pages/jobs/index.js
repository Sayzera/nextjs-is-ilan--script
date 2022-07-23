import React from 'react';
import Layout from '../../components/Layout';

function index() {
  return (
    <Layout>
      {/* ============================ Page Title Start================================== */}
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2 className="ipt-title">İş İlanları</h2>
              <span className="ipn-subtitle">Tüm İşlere Gözat </span>
            </div>
          </div>
        </div>
      </div>
      {/* ============================ Page Title End ================================== */}

      {/* ============================ Main Section Start ================================== */}
      <section className="gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="simple-sidebar sm-sidebar">
                <div className="search-sidebar_header">
                  <h4 className="ssh_heading">Arama Filtresi</h4>
                  <a href="javascript:void(0);" className="clear_all">
                    Hepsini temizle
                  </a>
                  <a
                    href="#search_open"
                    data-toggle="collapse"
                    aria-expanded="false"
                    role="button"
                    className="collapsed _filter-ico"
                  >
                    <i className="fa fa-sliders"></i>
                  </a>
                </div>

                {/* Find New Property */}
                <div
                  className="sidebar-widgets collapse miz_show"
                  id="search_open"
                  data-parent="#search_open"
                >
                  <div className="search-inner p-0">
                    <div className="filter-search-box pb-0">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Aranacak Kelime"
                        />
                      </div>
                      {/* <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Location, Zip.."
                        />
                      </div> */}
                    </div>

                    <div className="filter_wraps">
                      {/* Job categories Search */}
                      <div className="single_search_boxed">
                        <div className="widget-boxed-header">
                          <h4>
                            <a
                              href="#categories"
                              data-toggle="collapse"
                              aria-expanded="true"
                              role="button"
                            >
                              İş Kategorileri
                            </a>
                          </h4>
                        </div>
                        <div
                          className="widget-boxed-body collapse show"
                          id="categories"
                          data-parent="#categories"
                        >
                          <div className="side-list no-border">
                            {/* Single Filter Card */}
                            <div className="single_filter_card">
                              <div className="card-body pt-0">
                                <div className="inner_widget_link">
                                  <ul className="no-ul-list filter-list">
                                    <li>
                                      <input
                                        id="a1"
                                        className="checkbox-custom"
                                        name="ADA"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="a1"
                                        className="checkbox-custom-label"
                                      >
                                        BT Bilgisayarları (62)
                                      </label>
                                      <ul className="no-ul-list filter-list">
                                        <li>
                                          <input
                                            id="aa1"
                                            className="checkbox-custom"
                                            name="ADA"
                                            type="checkbox"
                                          />
                                          <label
                                            htmlFor="aa1"
                                            className="checkbox-custom-label"
                                          >
                                            Web Tasarımı (31)
                                          </label>
                                        </li>
                                        <li>
                                          <input
                                            id="aa2"
                                            className="checkbox-custom"
                                            name="Parking"
                                            type="checkbox"
                                          />
                                          <label
                                            htmlFor="aa2"
                                            className="checkbox-custom-label"
                                          >
                                            Web development (20)
                                          </label>
                                        </li>
                                        <li>
                                          <input
                                            id="aa3"
                                            className="checkbox-custom"
                                            name="Coffee"
                                            type="checkbox"
                                          />
                                          <label
                                            htmlFor="aa3"
                                            className="checkbox-custom-label"
                                          >
                                            SEO Services (43)
                                          </label>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <input
                                        id="a2"
                                        className="checkbox-custom"
                                        name="Parking"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="a2"
                                        className="checkbox-custom-label"
                                      >
                                        Financial Service (16)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="a3"
                                        className="checkbox-custom"
                                        name="Coffee"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="a3"
                                        className="checkbox-custom-label"
                                      >
                                        Art, Design, Media (22)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="a4"
                                        className="checkbox-custom"
                                        name="Mother"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="a4"
                                        className="checkbox-custom-label"
                                      >
                                        Coach & Education (21)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="a5"
                                        className="checkbox-custom"
                                        name="Outdoor"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="a5"
                                        className="checkbox-custom-label"
                                      >
                                        Apps Developements (17)
                                      </label>
                                      <ul className="no-ul-list filter-list">
                                        <li>
                                          <input
                                            id="ab1"
                                            className="checkbox-custom"
                                            name="ADA"
                                            type="checkbox"
                                          />
                                          <label
                                            htmlFor="ab1"
                                            className="checkbox-custom-label"
                                          >
                                            IOS Development (12)
                                          </label>
                                        </li>
                                        <li>
                                          <input
                                            id="ab2"
                                            className="checkbox-custom"
                                            name="Parking"
                                            type="checkbox"
                                          />
                                          <label
                                            htmlFor="ab2"
                                            className="checkbox-custom-label"
                                          >
                                            Android Development (04)
                                          </label>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <input
                                        id="a6"
                                        className="checkbox-custom"
                                        name="Pet"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="a6"
                                        className="checkbox-custom-label"
                                      >
                                        Writing & Translation (04)
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Job Locations Search */}
                      <div className="single_search_boxed">
                        <div className="widget-boxed-header">
                          <h4>
                            <a
                              href="#locations"
                              data-toggle="collapse"
                              aria-expanded="false"
                              role="button"
                              className="collapsed"
                            >
                              Lokasyon
                            </a>
                          </h4>
                        </div>
                        <div
                          className="widget-boxed-body collapse"
                          id="locations"
                          data-parent="#locations"
                        >
                          <div className="side-list no-border">
                            {/* Single Filter Card */}
                            <div className="single_filter_card">
                              <div className="card-body pt-0">
                                <div className="inner_widget_link">
                                  <ul className="no-ul-list filter-list">
                                    <li>
                                      <input
                                        id="b1"
                                        className="checkbox-custom"
                                        name="ADA"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="b1"
                                        className="checkbox-custom-label"
                                      >
                                        Australia (21)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="b2"
                                        className="checkbox-custom"
                                        name="Parking"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="b2"
                                        className="checkbox-custom-label"
                                      >
                                        New Zeland (12)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="b3"
                                        className="checkbox-custom"
                                        name="Coffee"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="b3"
                                        className="checkbox-custom-label"
                                      >
                                        United Kingdom (21)
                                      </label>
                                      <ul className="no-ul-list filter-list">
                                        <li>
                                          <input
                                            id="ac1"
                                            className="checkbox-custom"
                                            name="ADA"
                                            type="checkbox"
                                          />
                                          <label
                                            htmlFor="ac1"
                                            className="checkbox-custom-label"
                                          >
                                            London (06)
                                          </label>
                                        </li>
                                        <li>
                                          <input
                                            id="ac2"
                                            className="checkbox-custom"
                                            name="Parking"
                                            type="checkbox"
                                          />
                                          <label
                                            htmlFor="ac2"
                                            className="checkbox-custom-label"
                                          >
                                            Manchester (07)
                                          </label>
                                        </li>
                                        <li>
                                          <input
                                            id="ac3"
                                            className="checkbox-custom"
                                            name="Coffee"
                                            type="checkbox"
                                          />
                                          <label
                                            htmlFor="ac3"
                                            className="checkbox-custom-label"
                                          >
                                            Birmingham (08)
                                          </label>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <input
                                        id="b4"
                                        className="checkbox-custom"
                                        name="Mother"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="b4"
                                        className="checkbox-custom-label"
                                      >
                                        United State (04)
                                      </label>
                                      <ul className="no-ul-list filter-list">
                                        <li>
                                          <input
                                            id="ad1"
                                            className="checkbox-custom"
                                            name="ADA"
                                            type="checkbox"
                                          />
                                          <label
                                            htmlFor="ad1"
                                            className="checkbox-custom-label"
                                          >
                                            New York (32)
                                          </label>
                                        </li>
                                        <li>
                                          <input
                                            id="ad2"
                                            className="checkbox-custom"
                                            name="Parking"
                                            type="checkbox"
                                          />
                                          <label
                                            htmlFor="ad2"
                                            className="checkbox-custom-label"
                                          >
                                            Washington (42)
                                          </label>
                                        </li>
                                        <li>
                                          <input
                                            id="ad3"
                                            className="checkbox-custom"
                                            name="Coffee"
                                            type="checkbox"
                                          />
                                          <label
                                            htmlFor="ad3"
                                            className="checkbox-custom-label"
                                          >
                                            Los Angeles (22)
                                          </label>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <input
                                        id="b5"
                                        className="checkbox-custom"
                                        name="Outdoor"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="b5"
                                        className="checkbox-custom-label"
                                      >
                                        India (15)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="b6"
                                        className="checkbox-custom"
                                        name="Pet"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="b6"
                                        className="checkbox-custom-label"
                                      >
                                        Singapore (09)
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Job Skills Search */}
                      <div className="single_search_boxed">
                        <div className="widget-boxed-header">
                          <h4>
                            <a
                              href="#skills"
                              data-toggle="collapse"
                              aria-expanded="false"
                              role="button"
                              className="collapsed"
                            >
                              Yetenekler
                            </a>
                          </h4>
                        </div>
                        <div
                          className="widget-boxed-body collapse"
                          id="skills"
                          data-parent="#skills"
                        >
                          <div className="side-list no-border">
                            {/* Single Filter Card */}
                            <div className="single_filter_card">
                              <div className="card-body pt-0">
                                <div className="inner_widget_link">
                                  <ul className="no-ul-list filter-list">
                                    <li>
                                      <input
                                        id="c1"
                                        className="checkbox-custom"
                                        name="ADA"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="c1"
                                        className="checkbox-custom-label"
                                      >
                                        Administrative (15)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c2"
                                        className="checkbox-custom"
                                        name="Parking"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="c2"
                                        className="checkbox-custom-label"
                                      >
                                        iPhone & Android (33)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c3"
                                        className="checkbox-custom"
                                        name="Coffee"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="c3"
                                        className="checkbox-custom-label"
                                      >
                                        Java & AJAX (32)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c4"
                                        className="checkbox-custom"
                                        name="Mother"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="c4"
                                        className="checkbox-custom-label"
                                      >
                                        Account Manager (21)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c5"
                                        className="checkbox-custom"
                                        name="Outdoor"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="c5"
                                        className="checkbox-custom-label"
                                      >
                                        WordPress (32)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c6"
                                        className="checkbox-custom"
                                        name="Pet"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="c6"
                                        className="checkbox-custom-label"
                                      >
                                        Magento (42)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c7"
                                        className="checkbox-custom"
                                        name="Beauty"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="c7"
                                        className="checkbox-custom-label"
                                      >
                                        Shopify (12)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c8"
                                        className="checkbox-custom"
                                        name="Bike"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="c8"
                                        className="checkbox-custom-label"
                                      >
                                        PHP Script (08)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c9"
                                        className="checkbox-custom"
                                        name="Phone"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="c9"
                                        className="checkbox-custom-label"
                                      >
                                        Drupal (32)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c11"
                                        className="checkbox-custom"
                                        name="Private"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="c11"
                                        className="checkbox-custom-label"
                                      >
                                        Joomla (50)
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Experience Search */}
                      <div className="single_search_boxed">
                        <div className="widget-boxed-header">
                          <h4>
                            <a
                              href="#experience"
                              data-toggle="collapse"
                              aria-expanded="false"
                              role="button"
                              className="collapsed"
                            >
                              Deneyim
                            </a>
                          </h4>
                        </div>
                        <div
                          className="widget-boxed-body collapse"
                          id="experience"
                          data-parent="#experience"
                        >
                          <div className="side-list no-border">
                            {/* Single Filter Card */}
                            <div className="single_filter_card">
                              <div className="card-body pt-0">
                                <div className="inner_widget_link">
                                  <ul className="no-ul-list filter-list">
                                    <li>
                                      <input
                                        id="d1"
                                        className="checkbox-custom"
                                        name="ADA"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="d1"
                                        className="checkbox-custom-label"
                                      >
                                        Beginner (54)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="d2"
                                        className="checkbox-custom"
                                        name="Parking"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="d2"
                                        className="checkbox-custom-label"
                                      >
                                        1+ Year (32)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="d3"
                                        className="checkbox-custom"
                                        name="Coffee"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="d3"
                                        className="checkbox-custom-label"
                                      >
                                        2 Year (09)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="d4"
                                        className="checkbox-custom"
                                        name="Mother"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="d4"
                                        className="checkbox-custom-label"
                                      >
                                        3+ Year (16)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="d5"
                                        className="checkbox-custom"
                                        name="Outdoor"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="d5"
                                        className="checkbox-custom-label"
                                      >
                                        4+ Year (17)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="d6"
                                        className="checkbox-custom"
                                        name="Pet"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="d6"
                                        className="checkbox-custom-label"
                                      >
                                        5+ Year (22)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="d7"
                                        className="checkbox-custom"
                                        name="Beauty"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="d7"
                                        className="checkbox-custom-label"
                                      >
                                        10+ Year (32)
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Job types Search */}
                      <div className="single_search_boxed">
                        <div className="widget-boxed-header">
                          <h4>
                            <a
                              href="#jbtypes"
                              data-toggle="collapse"
                              aria-expanded="false"
                              role="button"
                              className="collapsed"
                            >
                              Meslek Türü
                            </a>
                          </h4>
                        </div>
                        <div
                          className="widget-boxed-body collapse"
                          id="jbtypes"
                          data-parent="#jbtypes"
                        >
                          <div className="side-list no-border">
                            {/* Single Filter Card */}
                            <div className="single_filter_card">
                              <div className="card-body pt-0">
                                <div className="inner_widget_link">
                                  <ul className="no-ul-list filter-list">
                                    <li>
                                      <input
                                        id="e2"
                                        className="radio-custom"
                                        name="jtype"
                                        type="radio"
                                      />
                                      <label
                                        htmlFor="e2"
                                        className="radio-custom-label"
                                      >
                                        Full time
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="e3"
                                        className="radio-custom"
                                        name="jtype"
                                        type="radio"
                                      />
                                      <label
                                        htmlFor="e3"
                                        className="radio-custom-label"
                                      >
                                        Part Time
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="e4"
                                        className="radio-custom"
                                        name="jtype"
                                        type="radio"
                                      />
                                      <label
                                        htmlFor="e4"
                                        className="radio-custom-label"
                                      >
                                        Contract Base
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="e5"
                                        className="radio-custom"
                                        name="jtype"
                                        type="radio"
                                      />
                                      <label
                                        htmlFor="e5"
                                        className="radio-custom-label"
                                      >
                                        Internship
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="e6"
                                        className="radio-custom"
                                        name="jtype"
                                        type="radio"
                                      />
                                      <label
                                        htmlFor="e6"
                                        className="radio-custom-label"
                                      >
                                        Regular
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Job Level Search */}
                      <div className="single_search_boxed">
                        <div className="widget-boxed-header">
                          <h4>
                            <a
                              href="#jblevel"
                              data-toggle="collapse"
                              aria-expanded="false"
                              role="button"
                              className="collapsed"
                            >
                              Meslek Seviyesi
                            </a>
                          </h4>
                        </div>
                        <div
                          className="widget-boxed-body collapse"
                          id="jblevel"
                          data-parent="#jblevel"
                        >
                          <div className="side-list no-border">
                            {/* Single Filter Card */}
                            <div className="single_filter_card">
                              <div className="card-body pt-0">
                                <div className="inner_widget_link">
                                  <ul className="no-ul-list filter-list">
                                    <li>
                                      <input
                                        id="f1"
                                        className="checkbox-custom"
                                        name="ADA"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="f1"
                                        className="checkbox-custom-label"
                                      >
                                        Team Leader
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="f2"
                                        className="checkbox-custom"
                                        name="Parking"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="f2"
                                        className="checkbox-custom-label"
                                      >
                                        Manager
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="f3"
                                        className="checkbox-custom"
                                        name="Coffee"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="f3"
                                        className="checkbox-custom-label"
                                      >
                                        Junior
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="f4"
                                        className="checkbox-custom"
                                        name="Coffee"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="f4"
                                        className="checkbox-custom-label"
                                      >
                                        Senior
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Expected Salary Search */}
                      <div className="single_search_boxed">
                        <div className="widget-boxed-header">
                          <h4>
                            <a
                              href="#salary"
                              data-toggle="collapse"
                              aria-expanded="false"
                              role="button"
                              className="collapsed"
                            >
                              Beklenen Maaş
                            </a>
                          </h4>
                        </div>
                        <div
                          className="widget-boxed-body collapse"
                          id="salary"
                          data-parent="#salary"
                        >
                          <div className="side-list no-border">
                            {/* Single Filter Card */}
                            <div className="single_filter_card">
                              <div className="card-body pt-0">
                                <div className="inner_widget_link">
                                  <ul className="no-ul-list filter-list">
                                    <li>
                                      <input
                                        id="g1"
                                        className="checkbox-custom"
                                        name="ADA"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="g1"
                                        className="checkbox-custom-label"
                                      >
                                        $120k - $140k PA
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="g2"
                                        className="checkbox-custom"
                                        name="Parking"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="g2"
                                        className="checkbox-custom-label"
                                      >
                                        $140k - $150k PA
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="g3"
                                        className="checkbox-custom"
                                        name="Coffee"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="g3"
                                        className="checkbox-custom-label"
                                      >
                                        $150k - $170k PA
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="g4"
                                        className="checkbox-custom"
                                        name="Mother"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="g4"
                                        className="checkbox-custom-label"
                                      >
                                        $170k - $190k PA
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="g5"
                                        className="checkbox-custom"
                                        name="Outdoor"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="g5"
                                        className="checkbox-custom-label"
                                      >
                                        $200k - $250k PA
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="g6"
                                        className="checkbox-custom"
                                        name="Pet"
                                        type="checkbox"
                                      />
                                      <label
                                        htmlFor="g6"
                                        className="checkbox-custom-label"
                                      >
                                        $250k - $300k PA
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group filter_button pt-2">
                      <button
                        type="submit"
                        className="btn btn btn-theme-2 rounded full-width"
                      >
                        22 Sonuç Bulundu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar End */}
            </div>

            {/* Item Wrap Start */}
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  {/* Filter Search */}
                  <div className="_filt_tag786">
                    <div className="_tag782">
                      <div className="_tag780">32 Öğe bulundu</div>
                    </div>
                    <div className="_tag785">
                      <div className="__g72juy">
                        <a
                          href="search-job-grid-1.html"
                          className="_ujh_tyr active"
                        >
                          <i className="ti-layout-grid2"></i>
                        </a>
                        <a href="search-job-list-1.html" className="_ujh_tyr">
                          <i className="ti-view-list"></i>
                        </a>
                      </div>
                      <div className="_g78juy">
                        <select className="form-control">
                          <option defaultValue={''}>En iyi eşleşme</option>
                          <option defaultValue={''}>En yeni ilanlar</option>
                          <option defaultValue={''}>En eski ilanlar</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {/* Single Item */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="job_grid_02 shadow_0">
                    <img
                      src="assets/img/job-featured.png"
                      className="_featured_jbs"
                      alt=""
                    />
                    <div className="jobs-like">
                      <label className="toggler toggler-danger">
                        <input type="checkbox" />
                        <i className="fa fa-heart"></i>
                      </label>
                    </div>
                    <div className="jb_types fulltime">Tam Zamanlı</div>
                    <div className="jb_grid_01_thumb">
                      <a href="/jobs/detail">
                        <img
                          src="https://via.placeholder.com/100x100"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="jb_grid_01_caption">
                      <h4 className="_jb_title">
                        <a href="/jobs/detail">WordPress Web Developer</a>
                      </h4>
                      <div className="_emp_jb">
                        A.K Infra & Reality Developers Pvt. Ltd.
                      </div>
                    </div>
                    <div className="jb_grid_01_footer">
                      <a href="/jobs/detail" className="_jb_apply">
                        İlana Git
                      </a>
                    </div>
                  </div>
                </div>

                {/* Single Item */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="job_grid_02 shadow_0">
                    <div className="jobs-like">
                      <label className="toggler toggler-danger">
                        <input type="checkbox" />
                        <i className="fa fa-heart"></i>
                      </label>
                    </div>
                    <div className="jb_types parttime">Yarı Zamanlı</div>
                    <div className="jb_grid_01_thumb">
                      <a href="employer-detail.html">
                        <img
                          src="https://via.placeholder.com/100x100"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="jb_grid_01_caption">
                      <h4 className="_jb_title">
                        <a href="/jobs/detail">Data Management System</a>
                      </h4>
                      <div className="_emp_jb">A.K Infra Developers</div>
                    </div>
                    <div className="jb_grid_01_footer">
                      <a href="/jobs/detail" className="_jb_apply">
                        İlana Git
                      </a>
                    </div>
                  </div>
                </div>

                {/* Single Item */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="job_grid_02 shadow_0">
                    <div className="jobs-like">
                      <label className="toggler toggler-danger">
                        <input type="checkbox" />
                        <i className="fa fa-heart"></i>
                      </label>
                    </div>
                    <div className="jb_types internship">Stajyer</div>
                    <div className="jb_grid_01_thumb">
                      <a href="employer-detail.html">
                        <img
                          src="https://via.placeholder.com/100x100"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="jb_grid_01_caption">
                      <h4 className="_jb_title">
                        <a href="/jobs/detail">Graphics Web Designer</a>
                      </h4>
                      <div className="_emp_jb">A.K. Infra Technology</div>
                    </div>
                    <div className="jb_grid_01_footer">
                      <a href="/jobs/detail" className="_jb_apply">
                        İlana Git
                      </a>
                    </div>
                  </div>
                </div>

                {/* Single Item */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="job_grid_02 shadow_0">
                    <img
                      src="assets/img/job-featured.png"
                      className="_featured_jbs"
                      alt=""
                    />
                    <div className="jobs-like">
                      <label className="toggler toggler-danger">
                        <input type="checkbox" />
                        <i className="fa fa-heart"></i>
                      </label>
                    </div>
                    <div className="jb_types fulltime">Tam Zamanlı</div>
                    <div className="jb_grid_01_thumb">
                      <a href="employer-detail.html">
                        <img
                          src="https://via.placeholder.com/100x100"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="jb_grid_01_caption">
                      <h4 className="_jb_title">
                        <a href="/jobs/detail">Games & UI Developer</a>
                      </h4>
                      <div className="_emp_jb">Waft Technologies</div>
                    </div>
                    <div className="jb_grid_01_footer">
                      <a href="/jobs/detail" className="_jb_apply">
                        İlana Git
                      </a>
                    </div>
                  </div>
                </div>

                {/* Single Item */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="job_grid_02 shadow_0">
                    <div className="jobs-like">
                      <label className="toggler toggler-danger">
                        <input type="checkbox" />
                        <i className="fa fa-heart"></i>
                      </label>
                    </div>
                    <div className="jb_types contract">Sözleşmeli</div>
                    <div className="jb_grid_01_thumb">
                      <a href="employer-detail.html">
                        <img
                          src="https://via.placeholder.com/100x100"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="jb_grid_01_caption">
                      <h4 className="_jb_title">
                        <a href="/jobs/detail">Core PHP Developer</a>
                      </h4>
                      <div className="_emp_jb">Themezhub Infotech</div>
                    </div>
                    <div className="jb_grid_01_footer">
                      <a href="/jobs/detail" className="_jb_apply">
                        İlana Git
                      </a>
                    </div>
                  </div>
                </div>

                {/* Single Item */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="job_grid_02 shadow_0">
                    <div className="jobs-like">
                      <label className="toggler toggler-danger">
                        <input type="checkbox" />
                        <i className="fa fa-heart"></i>
                      </label>
                    </div>
                    <div className="jb_types parttime">Yarı Zamanlı</div>
                    <div className="jb_grid_01_thumb">
                      <a href="employer-detail.html">
                        <img
                          src="https://via.placeholder.com/100x100"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="jb_grid_01_caption">
                      <h4 className="_jb_title">
                        <a href="/jobs/detail">Drupal Web Developer</a>
                      </h4>
                      <div className="_emp_jb">Simran Web Soft</div>
                    </div>
                    <div className="jb_grid_01_footer">
                      <a href="/jobs/detail" className="_jb_apply">
                        İlana Git
                      </a>
                    </div>
                  </div>
                </div>

                {/* Single Item */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="job_grid_02 shadow_0">
                    <div className="jobs-like">
                      <label className="toggler toggler-danger">
                        <input type="checkbox" />
                        <i className="fa fa-heart"></i>
                      </label>
                    </div>
                    <div className="jb_types internship">Stajyer</div>
                    <div className="jb_grid_01_thumb">
                      <a href="employer-detail.html">
                        <img
                          src="https://via.placeholder.com/100x100"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="jb_grid_01_caption">
                      <h4 className="_jb_title">
                        <a href="/jobs/detail">Sr. Products Designer</a>
                      </h4>
                      <div className="_emp_jb">Shai Web Infotech</div>
                    </div>
                    <div className="jb_grid_01_footer">
                      <a href="/jobs/detail" className="_jb_apply">
                        İlana Git
                      </a>
                    </div>
                  </div>
                </div>

                {/* Single Item */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="job_grid_02 shadow_0">
                    <img
                      src="assets/img/job-featured.png"
                      className="_featured_jbs"
                      alt=""
                    />
                    <div className="jobs-like">
                      <label className="toggler toggler-danger">
                        <input type="checkbox" />
                        <i className="fa fa-heart"></i>
                      </label>
                    </div>
                    <div className="jb_types contract">Sözleşmeli</div>
                    <div className="jb_grid_01_thumb">
                      <a href="employer-detail.html">
                        <img
                          src="https://via.placeholder.com/100x100"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="jb_grid_01_caption">
                      <h4 className="_jb_title">
                        <a href="/jobs/detail">Magento Web Developer</a>
                      </h4>
                      <div className="_emp_jb">Hello Inductries</div>
                    </div>
                    <div className="jb_grid_01_footer">
                      <a href="/jobs/detail" className="_jb_apply">
                        İlana Git
                      </a>
                    </div>
                  </div>
                </div>

                {/* Single Item */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="job_grid_02 shadow_0">
                    <div className="jobs-like">
                      <label className="toggler toggler-danger">
                        <input type="checkbox" />
                        <i className="fa fa-heart"></i>
                      </label>
                    </div>
                    <div className="jb_types fulltime">Tam Zamanlı</div>
                    <div className="jb_grid_01_thumb">
                      <a href="employer-detail.html">
                        <img
                          src="https://via.placeholder.com/100x100"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="jb_grid_01_caption">
                      <h4 className="_jb_title">
                        <a href="/jobs/detail">Jr. UI/UX Designer</a>
                      </h4>
                      <div className="_emp_jb">Reality Info Group</div>
                    </div>
                    <div className="jb_grid_01_footer">
                      <a href="/jobs/detail" className="_jb_apply">
                        İlana Git
                      </a>
                    </div>
                  </div>
                </div>

                {/* Single Item */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="job_grid_02 shadow_0">
                    <div className="jobs-like">
                      <label className="toggler toggler-danger">
                        <input type="checkbox" />
                        <i className="fa fa-heart"></i>
                      </label>
                    </div>
                    <div className="jb_types parttime">Yarı Zamanlı</div>
                    <div className="jb_grid_01_thumb">
                      <a href="employer-detail.html">
                        <img
                          src="https://via.placeholder.com/100x100"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="jb_grid_01_caption">
                      <h4 className="_jb_title">
                        <a href="/jobs/detail">Sr. Web Developer</a>
                      </h4>
                      <div className="_emp_jb">Shaurya Infoteck</div>
                    </div>
                    <div className="jb_grid_01_footer">
                      <a href="/jobs/detail" className="_jb_apply">
                        İlana Git
                      </a>
                    </div>
                  </div>
                </div>

                {/* Single Item */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="job_grid_02 shadow_0">
                    <div className="jobs-like">
                      <label className="toggler toggler-danger">
                        <input type="checkbox" />
                        <i className="fa fa-heart"></i>
                      </label>
                    </div>
                    <div className="jb_types fulltime">Tam Zamanlı</div>
                    <div className="jb_grid_01_thumb">
                      <a href="employer-detail.html">
                        <img
                          src="https://via.placeholder.com/100x100"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="jb_grid_01_caption">
                      <h4 className="_jb_title">
                        <a href="/jobs/detail">Full-Stack Developer</a>
                      </h4>
                      <div className="_emp_jb">RK Technologies</div>
                    </div>
                    <div className="jb_grid_01_footer">
                      <a href="/jobs/detail" className="_jb_apply">
                        İlana Git
                      </a>
                    </div>
                  </div>
                </div>

                {/* Single Item */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="job_grid_02 shadow_0">
                    <img
                      src="assets/img/job-featured.png"
                      className="_featured_jbs"
                      alt=""
                    />
                    <div className="jobs-like">
                      <label className="toggler toggler-danger">
                        <input type="checkbox" />
                        <i className="fa fa-heart"></i>
                      </label>
                    </div>
                    <div className="jb_types contract">Sözleşmeli</div>
                    <div className="jb_grid_01_thumb">
                      <a href="employer-detail.html">
                        <img
                          src="https://via.placeholder.com/100x100"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="jb_grid_01_caption">
                      <h4 className="_jb_title">
                        <a href="/jobs/detail">Web and Graphics Designer</a>
                      </h4>
                      <div className="_emp_jb">Megri Tech</div>
                    </div>
                    <div className="jb_grid_01_footer">
                      <a href="/jobs/detail" className="_jb_apply">
                        İlana Git
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span className="ti-arrow-left"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        18
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span className="ti-arrow-right"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================ Main Section End ================================== */}
    </Layout>
  );
}

export default index;
