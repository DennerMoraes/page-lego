import React, { useState } from 'react';
import './NavBar.css';
import NavIcon from '../../common/NavIcon/NavIcon';
import NavText from '../../common/Text/NavText/NavText';
import LegoLogo from '../../../assets/Icons/Lego_Icon.svg';
import HamburgerLego from '../../../assets/Icons/HamburgerLego_icon.svg';
import HamburgerLegoHover from '../../../assets/Icons/HamburgerLegoHover_icon.svg';
import SearchLogo from '../../../assets/Icons/Search_Icon.svg';
import StoreLogo from '../../../assets/Icons/Store_Icon.svg';
import ContatoLogo from '../../../assets/Icons/Contato_Icon.svg';
import FullScreenMenu from './FullScreenMenu';
import ContentContainer from '../../common/ContentContainer/ContentContainer';

const Navbar = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const openMenu = () => {
        setMenuVisible(true);
    };

    const closeMenu = () => {
        setIsClosing(true);
        setTimeout(() => {
            setMenuVisible(false);
            setIsClosing(false);
        }, 500);
    };

    return (
        <>
        <nav>
            <ContentContainer>
                <div className='Conteiner-Nav'>
                    <div className='Container-NavIcon'>
                        <NavIcon icone={LegoLogo} zindex={1} />
                        <NavIcon
                            text='Categories'
                            icone={isHovered ? HamburgerLegoHover : HamburgerLego}
                            onClick={openMenu}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        />
                    </div>
                    <div className='Container-NavText'>
                        <NavText text='Gifting' href='#' />
                        <NavText text='Travel' href='#' />
                        <NavText text='Adults Welcome' href='#' />
                        <NavText text='Art & Home Décor ' href='#' />
                        <NavText text='Pop Culture' href='#' />
                        <NavText text='Toddlers' href='#' />
                        <NavText text='Real World Role Playing' href='#' />
                    </div>
                    <div className='Container-NavIcon row-reverse'>
                        <NavIcon text='Contact us' icone={ContatoLogo} id={'display-none'}/>
                        <NavIcon text='Request' icone={StoreLogo} />
                        <NavIcon text='Search' icone={SearchLogo} />
                    </div>
                    
                </div>

            </ContentContainer>
        </nav>
        {isMenuVisible && <FullScreenMenu onClose={closeMenu} isClosing={isClosing} />}
        </>
    );
};

export default Navbar;
