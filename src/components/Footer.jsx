import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Tech Academy</h3>
            <p className="desc">
              Escola teste Escola testeEscola testeEscola testeEscola
              testeEscola testeEscola testeEscola testeEscola testeEscola
              testeEscola testeEscola testeEscola testeEscola testeEscola
              testeEscola testeEscola testeEscola teste
            </p>
            <div className="contato mb-1 mt-4">
              <Link className="text-decoration-none">
              <i className="fa-brands fa-whatsapp" ></i>
              <p className="mb-0">(98)00000-0000</p>
              </Link>
            </div>

            <div className="email">
              <Link className="text-decoration-none">
              <i className="fa-regular fa-envelope" ></i>
              <p className="mb-0">teste@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="cursos">Cursos</Link>
            <Link to="faq">FAQ</Link>
            <Link to="termos">Termos</Link>
          </Col>

          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">NewsLetter</h5>
            <div className="subscribes">
              <input type="text" placeholder= "Subscribe..."/>
              <button className="btn btn-danger rounded-end rounded-0 block">Inscrever-se</button>
            </div>

            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
            </Col>
        </Row>
        <Row>
            <Col>
              <p className="text-center px-md-0 px-2">&copy; Copyright {new Date().getFullYear()} Tech Academy, Todos os Direitos Reservados</p>
            </Col>
          </Row>
      </Container>
    </div>
  );
};

export default Footer;
