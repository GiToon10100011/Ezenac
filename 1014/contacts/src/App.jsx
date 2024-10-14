import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 22px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Title>Contacts</Title>
        <Container>
          <Row>
            <Col>
              <ContactForm />
            </Col>
            <Col>
              <ContactList />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
