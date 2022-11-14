import React, {useState, useEffect} from "react";
import {Col, Alert} from "react-bootstrap";
import hex from "../utils/hex";
import "../css/single-color.css";

const SingleColor = ({rgb, weight, index}) => {
  const [hexValue, setHexValue] = useState("");
  const [showCopyToClipboard, setShowCopyToClipboard] = useState(false);
  const [textColor, setTextColor] = useState("lightgray");
  useEffect(() => {

    let red = rgb[0];
    let green = rgb[1];
    let blue = rgb[2];
    setHexValue(hex(red, green, blue));
    let brightness = (red * 299 + green * 587 + blue * 114) / 1000;
    setTextColor(brightness >= 128 ? "black" : "lightgray");

    setTimeout(() => {
      setShowCopyToClipboard(false);
    }, 3000);
  }, [rgb, showCopyToClipboard]);

  return (
    <Col
      lg={2}
      md={4}
      sm={6}
      xs={12}
      key={`box_${weight}`}
      className="color-box"
      style={{backgroundColor: hexValue}}
      onClick={() => {
        setShowCopyToClipboard(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percentage" style={{color: textColor}}>
        {weight}%
      </p>
      <p className="color-code" id="color-code" style={{color: textColor}}>
        {hexValue.toUpperCase()}
      </p>
      {showCopyToClipboard && <Alert style={{color: textColor}}>Copiado para a área de transferência
        </Alert>}
    </Col>
  );
};

export default SingleColor;
