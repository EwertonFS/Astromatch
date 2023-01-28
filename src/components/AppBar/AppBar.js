import React from "react";
import { AppBarContainer } from "./styled";
import { Botoes } from "./styled";
import Button from "@mui/material/Button";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import HomeIcon from "@mui/icons-material/Home";

function AppBar(props) {
  return (
    <AppBarContainer>
      <HomeIcon
        size="small"
        variant="contained"
        onClick={props.goChooseProfilePage}
      >
        Escolher />
      </HomeIcon>

      <p>Astromatch</p>

      <PlaylistAddCheckIcon
        size="small"
        variant="contained"
        onClick={props.goToMatchesListPages}
      >
        Lista
      </PlaylistAddCheckIcon>
    </AppBarContainer>
  );
}

export default AppBar;
