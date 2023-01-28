import React from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Botao = styled.button`
display:flex;
flex-direction:row;
align-items: center;
margin-left:45%;
position:relative;
`;

function ResetButton() {
  const onClickReset = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ewerton-moreira/clear"
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <Botao>
        <Button
          color="error"
          variant="contained"
          size="small"
          onClick={onClickReset}
        >
          ResetMatches
        </Button>
      </Botao>
    </div>
  );
}

export default ResetButton;
