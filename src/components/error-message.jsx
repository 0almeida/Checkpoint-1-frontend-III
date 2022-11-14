import React, {useEffect} from "react";
import {ToastContainer, Alert} from "react-bootstrap";

const ErrorMessage = ({show, color, onCLose}) => {
  useEffect(() => {
    setTimeout(() => {
      onCLose(false);
    }, 4000);
  });
  return (
    <ToastContainer className="p-3" position="bottom-center">
      <Alert
        variant="danger"
        onClose={() => {
          onCLose(false);
        }}
        dismissible
        show={show}
      >
        <Alert.Heading>{"Error".toUpperCase()}</Alert.Heading>
        <p>
          Falha ao gerar cores para <b style={{color: "rgb(204 205 246)"}}>{color}</b>
        </p>
        <p className="sub-text-error">Por favor, insira uma cor válida</p>
      </Alert>
    </ToastContainer>
  );
};

export default ErrorMessage;
