import React, {useState} from "react";
import "./App.css";
import InputSection from "./components/input-section";
import Colors from "./components/colors-section";
import {Row, Col} from "react-bootstrap";
import ErrorMessage from "./components/error-message";
import Values from "values.js";

function App() {
  const initialColor = "green";
  const [colorList, setColorList] = useState(new Values(initialColor).all(10));
  const [showError, setShowError] = useState(false);
  const [colorValue, setColorValue] = useState(initialColor);
  const handleSubmit = (color) => {
    setColorValue(color);
    try {
      let newColorList = new Values(color).all(10);
      setColorList(newColorList);
      setShowError(false);
    } catch (error) {
      setShowError(true);
      console.error(error);
    }
  };

  const handleErrorClose = (value) => {
    setShowError(value);
  };

  return (
    <>
      <Row className="App">
        <Col md={3}>
          <h3>Pesquise uma cor</h3>
        </Col>
        <Col md={9} sm={12}>
          <InputSection onSubmit={handleSubmit} initialColor={initialColor} />
        </Col>
      </Row>
      <Row className="colors">
        <Colors colorList={colorList} />
      </Row>
      {showError && <ErrorMessage show={showError} color={colorValue} onCLose={handleErrorClose} />}
    </>
  );
}

export default App;
