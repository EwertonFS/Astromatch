import React from 'react'
import styled from "styled-components"
import axios from "axios"
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

const ButtonsContainer = styled.div`
display:flex;
justify-content:space-around;
`

function ChooseButtons(props){

   
    return(
        <ButtonsContainer>
            <HeartBrokenIcon color="secondary" fontSize="large" onClick={props.onclickNo}>Não</HeartBrokenIcon>
            <FavoriteIcon color="secondary" fontSize="large" onClick={props.onclickYes} >Sim</FavoriteIcon>
        </ButtonsContainer>
    )
}

export default ChooseButtons