import Layout from '../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { setThemeColor, setThemeMainColor } from '../redux/mainSlice';

export default function Home() {
  const dispatch = useDispatch();

  const { themeColor } = useSelector((state) => state.main);

  console.log(themeColor);
  React.useEffect(() => {
    setTimeout(async () => {
      dispatch(setThemeColor('#Hello world'));
      setThemeMainColor('#Hello world2')(dispatch);
    }, 1000);
  }, []);

  console.log('loc', process.env.NEXT_DB_HOST);

  return (
    <Layout>
      {/* ============================ Hero Banner  Start================================== */}
      <div
        className="hero-banner full jumbo-banner"
        style={{
          background: '#f4f9fd url(assets/img/bg2.png)',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-8">
              {/* <a className="header-promo light w-inline-block">
                    <div className="label bg-success">NEW</div>
                    <div className="header-promo-text">
                      Klioeo is now UK-Wide
                    </div>
                  </a> */}
              <h1>
                Hedeflerinize Göre <span className="text-info">İşinizi</span>{' '}
                Bulun
              </h1>
              <p className="lead">Rüyalarınızdaki iş sizi bekliyor</p>
              <form className="search-big-form banner-search shadow mt-3">
                <div className="row m-0">
                  <div className="col-lg-5 col-md-5 col-sm-12 p-0">
                    <div className="form-group">
                      <i className="ti-search"></i>
                      <input
                        type="text"
                        className="form-control b-0 b-r l-radius"
                        placeholder="İş veya Anahtar Kelime"
                      />
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-4 col-sm-12 p-0">
                    <div className="form-group">
                      <select
                        id="jb-category"
                        className="js-states form-control b-0"
                      >
                        <option value="">Kategori Seçin</option>
                        <option value="2" selected="">
                          Bilgisayar - Bilişim
                        </option>
                        <option value="61">Akaryakıt istasyonları</option>
                        <option value="136">Ambalaj- Karton- Kağıtcılık</option>
                        <option value="28">Anketörlük</option>
                        <option value="59">Asansör İşleri</option>
                        <option value="103">Atık (Geri Dönüşüm)</option>
                        <option value="42">Avukatlık</option>
                        <option value="122">Bahçe işleri</option>
                        <option value="34">Balıkçılık</option>
                        <option value="102">Basın Yayın</option>
                        <option value="43">Bayilik - Franchise</option>
                        <option value="50">Beyaz Eşya</option>
                        <option value="144">Bilgisayar</option>
                        <option value="123">Bulaşıkcı</option>
                        <option value="19">Cafe- Bar- Restaurant</option>
                        <option value="29">Çağrı Merkezi</option>
                        <option value="124">Çelik Kapı</option>
                        <option value="3">Çeşitli Eleman</option>
                        <option value="135">Çiçekcilik</option>
                        <option value="35">Çocuk veya Hasta bakımı</option>
                        <option value="120">Danışmanlık</option>
                        <option value="73">Dekorasyon</option>
                        <option value="38">Demir Doğrama İşleri</option>
                        <option value="48">Denizcilik</option>
                        <option value="121">Dernek</option>
                        <option value="80">Dersane</option>
                        <option value="131">Dış Ticaret</option>
                        <option value="107">Diğer</option>
                        <option value="106">Diş Hekimi</option>
                        <option value="130">Düğün Salonu</option>
                        <option value="127">Eczane</option>
                        <option value="6">Elektrik - Elektronik </option>
                        <option value="67">Emlakcılık</option>
                        <option value="64">Factoring- Leasing</option>
                        <option value="83">Fotoğrafçılık</option>
                        <option value="105">Fuarcılık</option>
                        <option value="95">Gemicilik</option>
                        <option value="56">Gıda</option>
                        <option value="96">Grafik-Yazılım</option>
                        <option value="75">Gümrük Müşavirliği</option>
                        <option value="51">Güvenlik Hizmetleri</option>
                        <option value="65">Güzellik Salonları</option>
                        <option value="133">Halı Yıkama</option>
                        <option value="10">Halkla İlişkiler</option>
                        <option value="89">Hastane</option>
                        <option value="39">Hırdavat İşleri</option>
                        <option value="87">Hurdacılar</option>
                        <option value="118">İlgili Uygun Her Sektör</option>
                        <option value="11">İnşaat İşleri</option>
                        <option value="41">İş Makinaları</option>
                        <option value="100">İş Sağlığı ve Güvenliği</option>
                        <option value="139">Kantin</option>
                        <option value="125">Kimyager</option>
                        <option value="45">Kooperatif</option>
                        <option value="109">Kozmetik</option>
                        <option value="142">Kreş</option>
                        <option value="27">Kuaförlük</option>
                        <option value="84">Kurye- Kargo</option>
                        <option value="58">Kuyumculuk</option>
                        <option value="91">Laboratuar</option>
                        <option value="93">Lokanta- Restaurant</option>
                        <option value="116">Madencilik</option>
                        <option value="97">Mağaza - Konfeksiyon</option>
                        <option value="52">Makina sanayi</option>
                        <option value="148">Manikürist</option>
                        <option value="8">Market</option>
                        <option value="12">Matbaacılık - Baskı</option>
                        <option value="86">Medikal</option>
                        <option value="55">Medya</option>
                        <option value="115">Metal Sanayi</option>
                        <option value="66">Mobilya</option>
                        <option value="14">Muhasebe - Finans</option>
                        <option value="137">Mukavva Karton Kağıtçılık</option>
                        <option value="147">Müdür</option>
                        <option value="13">Mühendislik Hizmetleri</option>
                        <option value="26">Müzik</option>
                        <option value="15">Nakliyat</option>
                        <option value="30">Optik Hizmetler</option>
                        <option value="25">Otel</option>
                        <option value="47">Oto Galeri</option>
                        <option value="72">Oto tamirat - Bakım</option>
                        <option value="16">Otomotiv</option>
                        <option value="114">Oyuncakcı</option>
                        <option value="94">Öğretmen</option>
                        <option value="40">Özel İstihdam Bürosu</option>
                        <option value="4">Özel Okul</option>
                        <option value="113">Pastane</option>
                        <option value="17">Pazarlama - Satış</option>
                        <option value="145">petshop</option>
                        <option value="92">Piknik</option>
                        <option value="111">Poliklinik</option>
                        <option value="44">Pvc-Pimapen-Alüminyum</option>
                        <option value="18">Reklam - Tanıtım</option>
                        <option value="132">Rentacar</option>
                        <option value="20">Sağlık- Tıp</option>
                        <option value="88">Sanayi</option>
                        <option value="119">sekreter</option>
                        <option value="90">Sıhhi Tesist İşleri</option>
                        <option value="22">Sigortacılık</option>
                        <option value="101">Spor</option>
                        <option value="99">Stok Sevkiyat İşleri</option>
                        <option value="112">Su Dağıtım Pazarlama</option>
                        <option value="79">Sürücü Kursu</option>
                        <option value="23">Şoför</option>
                        <option value="146">Tabela- Levha İşleri</option>
                        <option value="63">Tarım- Hayvancılık</option>
                        <option value="129">Taşımacılık- Servis</option>
                        <option value="78">Teknik Servis</option>
                        <option value="24">Tekstil</option>
                        <option value="141">Telekomünikasyon</option>
                        <option value="36">Temizlik Hizmetleri</option>
                        <option value="110">Tıp Merkezi</option>
                        <option value="143">Tiyatro</option>
                        <option value="108">Tuhafiye</option>
                        <option value="128">Turizm</option>
                        <option value="134">Unlu Mamuller</option>
                        <option value="126">Yapı Denetim</option>
                        <option value="70">Yayınevi-Yayıncılık</option>
                        <option value="117">Yemekhane</option>
                        <option value="138">Yurt</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-3 col-sm-12 p-0">
                    <a href="/jobs" className="btn dark-3 full-width r-radius">
                      Ara
                    </a>
                  </div>
                </div>
              </form>
              <div className="featured-category dark">
                <ul>
                  <li>Kategorileri Keşfet</li>
                  <li>
                    <a
                      href="/jobs"
                      data-toggle="tooltip"
                      data-original-title="Banking"
                    >
                      Kategori 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="/jobs"
                      data-toggle="tooltip"
                      data-original-title="Healthcare"
                    >
                      Kategori 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="/jobs"
                      data-toggle="tooltip"
                      data-original-title="Software"
                    >
                      Kategori 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="/jobs"
                      data-toggle="tooltip"
                      data-original-title="Automotive"
                    >
                      Kategori 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-5 col-md-4">
              <img
                src="assets/img/a-2.png"
                alt="latest property"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ============================ Hero Banner End ================================== */}

      {/* ============================ Newest Designs Start ==================================== */}
      <section className="min-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="sec-heading">
                <h2>
                  Son Eklenen <span className="theme-cl-2">İlanlar</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {/* Single Item */}
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
              <div className="job_grid_02">
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
                    A.K Infra &amp; Reality Developers Pvt. Ltd.
                  </div>
                </div>
                <div className="jb_grid_01_footer">
                  <a href="/jobs/detail">İlana Git</a>
                </div>
              </div>
            </div>

            {/* Single Item */}
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
              <div className="job_grid_02">
                <div className="jobs-like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" />
                    <i className="fa fa-heart"></i>
                  </label>
                </div>
                <div className="jb_types parttime">Yarı Zamanlı</div>
                <div className="jb_grid_01_thumb">
                  <a>
                    <img
                      src="https://via.placeholder.com/100x100"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="jb_grid_01_caption">
                  <h4 className="_jb_title">
                    <a>Data Management System</a>
                  </h4>
                  <div className="_emp_jb">A.K Infra Developers</div>
                </div>
                <div className="jb_grid_01_footer">
                  <a>İlana Git</a>
                </div>
              </div>
            </div>

            {/* Single Item */}
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
              <div className="job_grid_02">
                <div className="jobs-like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" />
                    <i className="fa fa-heart"></i>
                  </label>
                </div>
                <div className="jb_types internship">Stajyer</div>
                <div className="jb_grid_01_thumb">
                  <a>
                    <img
                      src="https://via.placeholder.com/100x100"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="jb_grid_01_caption">
                  <h4 className="_jb_title">
                    <a>Graphics Web Designer</a>
                  </h4>
                  <div className="_emp_jb">A.K. Infra Technology</div>
                </div>
                <div className="jb_grid_01_footer">
                  <a>İlana Git</a>
                </div>
              </div>
            </div>

            {/* Single Item */}
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
              <div className="job_grid_02">
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
                  <a>
                    <img
                      src="https://via.placeholder.com/100x100"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="jb_grid_01_caption">
                  <h4 className="_jb_title">
                    <a>Games &amp; UI Developer</a>
                  </h4>
                  <div className="_emp_jb">Waft Technologies</div>
                </div>
                <div className="jb_grid_01_footer">
                  <a>İlana Git</a>
                </div>
              </div>
            </div>

            {/* Single Item */}
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
              <div className="job_grid_02">
                <div className="jobs-like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" />
                    <i className="fa fa-heart"></i>
                  </label>
                </div>
                <div className="jb_types contract">Sözleşmeli</div>
                <div className="jb_grid_01_thumb">
                  <a>
                    <img
                      src="https://via.placeholder.com/100x100"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="jb_grid_01_caption">
                  <h4 className="_jb_title">
                    <a>Core PHP Developer</a>
                  </h4>
                  <div className="_emp_jb">Themezhub Infotech</div>
                </div>
                <div className="jb_grid_01_footer">
                  <a>İlana Git</a>
                </div>
              </div>
            </div>

            {/* Single Item */}
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
              <div className="job_grid_02">
                <div className="jobs-like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" />
                    <i className="fa fa-heart"></i>
                  </label>
                </div>
                <div className="jb_types parttime">Yarı Zamanlı</div>
                <div className="jb_grid_01_thumb">
                  <a>
                    <img
                      src="https://via.placeholder.com/100x100"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="jb_grid_01_caption">
                  <h4 className="_jb_title">
                    <a>Drupal Web Developer</a>
                  </h4>
                  <div className="_emp_jb">Simran Web Soft</div>
                </div>
                <div className="jb_grid_01_footer">
                  <a>İlana Git</a>
                </div>
              </div>
            </div>

            {/* Single Item */}
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
              <div className="job_grid_02">
                <div className="jobs-like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" />
                    <i className="fa fa-heart"></i>
                  </label>
                </div>
                <div className="jb_types internship">Stajyer</div>
                <div className="jb_grid_01_thumb">
                  <a>
                    <img
                      src="https://via.placeholder.com/100x100"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="jb_grid_01_caption">
                  <h4 className="_jb_title">
                    <a>Sr. Products Designer</a>
                  </h4>
                  <div className="_emp_jb">Shai Web Infotech</div>
                </div>
                <div className="jb_grid_01_footer">
                  <a>İlana Git</a>
                </div>
              </div>
            </div>

            {/* Single Item */}
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
              <div className="job_grid_02">
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
                  <a>
                    <img
                      src="https://via.placeholder.com/100x100"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="jb_grid_01_caption">
                  <h4 className="_jb_title">
                    <a>Magento Web Developer</a>
                  </h4>
                  <div className="_emp_jb">Hello Inductries</div>
                </div>
                <div className="jb_grid_01_footer">
                  <a>İlana Git</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="mt-3 text-center">
                <a className="_browse_more-2 light" href="/jobs">
                  Tüm İş İlanları
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================ Newest Designs End ==================================== */}

      {/* ============================ Category Section Start ==================================== */}

      {/* Popular Jobs Category Bu Araya Gelir */}

      {/* ============================ Category Section End ==================================== */}

      {/* ============================ Candidates Section Start ==================================== */}

      {/* High Qualifed Candidates Bu Araya Gelir */}

      {/* ============================ Candidates Section End ==================================== */}

      {/* ============================ Featured Themes Start ==================================== */}

      {/* What People Saying Bu Araya Gelir */}

      {/* ============================ Featured Themes End ==================================== */}

      {/* ============================ News Updates Start ==================================== */}
      {/* Latest Updates & News Bu Araya Gelecek */}
      {/* ============================ News Updates End ==================================== */}

      {/* ============================ Call To Action Start ================================== */}
      {/* Subscribe Now Bu Araya Gelecek */}
      {/* ============================ Call To Action End ================================== */}
    </Layout>
  );
}
