import React from 'react';
import './FullScreenMenu.css';
import MenuIcon from '../../common/MenuIcon/MenuIcon';
import HomeIcon from '../../../assets/Icons/Home_Icon.svg';
import StoreIcon from '../../../assets/Icons/Store_Icon.svg';
import ContatoIcon from '../../../assets/Icons/Contato_Icon.svg';
import ThemeMenuText from '../../common/Text/ThemeMenuText/ThemeMenuText';
import NavIcon from '../../common/NavIcon/NavIcon';
import LegoLogo from '../../../assets/Icons/Lego_Icon.svg';
import CloseIcon from '../../../assets/Icons/Close_Icon.svg';
import ImageButton from '../../common/ImageButton/ImageButton';
import ContentContainer from '../../common/ContentContainer/ContentContainer';
import Icon1 from '../../../assets/BrandIcon/1.png';
import Icon2 from '../../../assets/BrandIcon/2.png';
import Icon3 from '../../../assets/BrandIcon/3.png';
import Icon4 from '../../../assets/BrandIcon/4.png';
import Icon5 from '../../../assets/BrandIcon/5.png';
import Icon6 from '../../../assets/BrandIcon/6.png';
import Icon7 from '../../../assets/BrandIcon/7.png';
import Icon8 from '../../../assets/BrandIcon/8.png';
import Icon9 from '../../../assets/BrandIcon/9.png';

const FullScreenMenu = ({ onClose, isClosing }) => {
    return (
        <div className={`fullscreen-menu ${isClosing ? 'closing' : ''}`}>
            <ContentContainer>
                <div className='Container-FullScreenMenu'>
                    <div className='Left-Side-Menu'>
                        <div className='Itens-LegoClose'>
                            <NavIcon icone={LegoLogo} zindex={1} />
                            <NavIcon icone={CloseIcon} zindex={1} onClick={onClose} />
                        </div>
                        <div className='Itens-MenuIcon'>
                            <MenuIcon text={'Home'} icone={HomeIcon} />
                            <MenuIcon text={'Requests'} icone={StoreIcon} />
                            <MenuIcon text={'Contact us'} icone={ContatoIcon} />
                        </div>
                        <p className='text-themes'>Themes</p>
                        <div className='Itens-MenuIconThemes'>
                            <ThemeMenuText text={'Gifting'} />
                            <ThemeMenuText text={'Travel'} />
                            <ThemeMenuText text={'Adults Welcome'} />
                            <ThemeMenuText text={'Art & Home Décor '} />
                            <ThemeMenuText text={'Space'} />
                            <ThemeMenuText text={'Pop Culture'} />
                            <ThemeMenuText text={'Toddlers'} />
                            <ThemeMenuText text={'Real World Role Playing'} />
                        </div>
                    </div>
                    <div className='Right-Side-Menu'>
                        <ImageButton icone={Icon1} />
                        <ImageButton icone={Icon2} />
                        <ImageButton icone={Icon3} />
                        <ImageButton icone={Icon4} />
                        <ImageButton icone={Icon5} />
                        <ImageButton icone={Icon6} />
                        <ImageButton icone={Icon7} />
                        <ImageButton icone={Icon8} />
                        <ImageButton icone={Icon9} />
                    </div>
                </div>
            </ContentContainer>
        </div>
    );
};

export default FullScreenMenu;
