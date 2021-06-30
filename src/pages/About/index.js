import Menu from '../../components/MenuComponent';
import React from 'react';
import { Container, Style, StyleContent, StyleTittle, StyleHistory, StyleIMG, Tittle, TextHistory } from './styles';
import IMGabout from '../../assets/quem-somos 1 (1).png';
import Buttom from '../../components/Buttom';

const About = () => {
    return (
        <Container>
            <Style>
                    <StyleIMG>
                        <img src={IMGabout}></img>
                    </StyleIMG>
                    <StyleContent>
                        <StyleTittle>
                            <Tittle>CDG CONTABILIDADE</Tittle>
                            <Tittle>Quem somos</Tittle>
                            <Tittle>Nossa história</Tittle>
                        </StyleTittle>
                        <StyleHistory>
                            <TextHistory>A maneira mais fácil de começar é contando a história de como sua empresa nasceu. Isso funciona bem quando levou um tempo para acontecer, mesmo se é uma marca recente. Comece com os fundadores originais e as suas razões para começar o negócio.</TextHistory>
                            <div style={{marginTop:'10%'}}>
                                <Buttom text={'Saiba Mais'}>Saiba Mais</Buttom>
                            </div>
                        </StyleHistory>
                    </StyleContent>
            </Style>
        </Container>
    );
}

export default About;