import React from 'react'
import styled from 'styled-components'


const Section = (props) => {
    return (
        <Container bgImage={ props.backgroundImg }>
            <ItemText>
                <h1>{ props.title }</h1>
                <p>{ props.description }</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>
                    { props.leftButton }
                </LeftButton>
                <RightButton>
                    { props.rightButton }
                </RightButton>
            </ButtonGroup>
            <ArrowButton src="/images/down-arrow.svg" />
        </Container>
    )
}

export default Section


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    display: flex;
    flex-direction: column;
    align-items: center;

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    flex-grow: 1;
`


const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media(max-width:786px){
       flex-direction: column;
    }

`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.85;
    margin: 8px;
`

const RightButton = styled.div`
    background-color: white;
    height: 40px;
    width: 256px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.65;
    margin: 8px;
`

const ArrowButton = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    margin-bottom: 50px;
`