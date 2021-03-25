import React from 'react';
import { Container, View, StyleIcons, TelefoneText, DivWhats} from './styles';
import Logo from '../../icons/Logo'
import Faceicon from '../../assets/faceicon.png'
import Instaicon from '../../assets/instaicon.png'
import Whatsicon from '../../assets/whatsicon.png'


function NavBar() {
    return (

        <Container>
            <View>
            <Logo/>
            <StyleIcons>
            <img src={Faceicon} style={{width: 34,height: 34,}}></img>
            <img src={Instaicon} style={{width: 34,height: 34,}}></img>
            <DivWhats>
            <img src={Whatsicon} style={{width: 34,height: 34,}}></img>
            <TelefoneText>(19) 99999-9999</TelefoneText>
            </DivWhats>
            </StyleIcons>
            </View>
        </Container>
        
    )}
  
  export default NavBar;