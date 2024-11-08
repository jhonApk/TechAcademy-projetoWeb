import { Container, Row, Col } from "react-bootstrap";
import { allCursos } from "../data/index";
const CursosPage = () => {
  return (
    <div className="cursosPage">
      <div className="cursos min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Todos os Cursos</h1>
              <p className="text-center">TesteTesteTesteTesteTesteTesteTeste</p>
            </Col>
          </Row>
          
          <Row>
            {allCursos.map((cursos) => {
              return (
                <Col
                  key={cursos.id}
                  className="mb-5 rounded-bottom shadow rounded">
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
        </Container>
      </div>
      ;
    </div>
  );
};

export default CursosPage;
