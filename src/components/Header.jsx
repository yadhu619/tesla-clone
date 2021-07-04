import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menubar>
                <div>model s</div>
                <div>model 3</div>
                <div>model x</div>
                <div>model y</div>
            </Menubar>
            <RightMenu>
                <a href="http://">Tesla</a>
                <a href="http://">Account</a>
            </RightMenu>
            <MenuContainer onClick={() => setBurgerStatus(true)}>
                <MenuIcon />
            </MenuContainer>
            <BurgerNav status = {burgerStatus}>
                <CloseContainer onClick = {() => setBurgerStatus(false)}>
                    <Close />
                </CloseContainer>
                <li><a href="http://">Model S</a></li>
                <li><a href="http://">Model 3</a></li>
                <li><a href="http://">Model X</a></li>
                <li><a href="http://">Model Y</a></li>
                <li><a href="http://">Existing Inventory</a></li>
                <li><a href="http://">Used Inventory</a></li>
                <li><a href="http://">Trade-In</a></li>
                <li><a href="http://">Test Drive</a></li>
                <li><a href="http://">Utilities</a></li>
                <li><a href="http://">Find Us</a></li>
                <li><a href="http://">Support</a></li>
            </BurgerNav>

        </Container>
    )
}

export default Header


const Container = styled.div`
    display: flex;
    min-height:60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;

`

const Menubar = styled.div`
    display: flex;
    text-transform: uppercase;
    div{
        font-weight: 600;
        padding: 0 10px;
        cursor: pointer;
    }

    @media(max-width:786px){
        display: none;
    }
    

`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    a {
        font-weight: 600;
        padding: 0 10px;
    }
    @media(max-width:786px){
        display: none;
    }
`


const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 300px;
    background-color: white;
    padding: 20px;
    list-style: none;
    opacity: 1;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    }
    a{
        font-weight: 500;
    }
    transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'};
    transition: all 0.5s ease ;


`

const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Close = styled(CloseIcon)`
    cursor: pointer;
`
