import { Container, Row, Col } from "react-bootstrap";
import HomeImage from "../assets/imagens/amico.png";
import { homeCursos, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComp from "../components/FaqComp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div className="homePage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">
                <span>A TechAcademy</span> <br /> é um novo começo
                <br />
                para a sua carreira
              </h1>
              <p className="mb-4">
                Somos uma escola online com tudo que você precisa para
                conquistar profissões em alta no mercado de trabalho
              </p>
              <button className="btn btn-danger btn-lg reunded-1 me-2 mb-xs-0 mb-2" onClick={() => navigate("/Cursos")}>
                Cursos
              </button>
              <button className="btn btn-outline-danger btn-lg reunded-1 mb-xs-0 mb-2">
                Promoções
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HomeImage} alt="hero-image" className="animate_animated animate_fadeInUp" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="cursos w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Cursos Mais populares</h1>
              <p className="text-center">
                Esse é um teste do paragrafo do curso page home
              </p>
            </Col>
          </Row>
          <Row>
            {homeCursos.map((cursos) => {
              return (
                <Col key={cursos.id} className="mb-5 rounded-bottom shadow rounded">
                  <img src={cursos.image} alt="teste.com" className="w-100 mb-5 rounded-top"/>
                  <div className=" star mb-2 px-3">
                    <i className={cursos.star1}></i>
                    <i className={cursos.star2}></i>
                    <i className={cursos.star3}></i>
                    <i className={cursos.star4}></i>
                    <i className={cursos.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{cursos.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{cursos.price}</p>
                    <button className="btn btn-danger rounded-1">
                      {cursos.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>

          <Row>
            <Col className="text-center">
              <button
                className="btn btn-success rounded-5 btn-lg"
                onClick={() => navigate("/cursos")}
              >
                Ver Todos os Cursos
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testemunhas py-5">
        <Container>
          <Row>
            <Col>
              <h1>Feedbacks</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1000: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm">
                    <p className="desc">{data.desc}</p>
                    <div className="pessoas">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/*Seção Faq*/}
      <FaqComp />
      {/*Seção Faq*/}
    </div>
    
  );
};

export default HomePage;
