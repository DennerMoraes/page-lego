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
import ArchitectureIcon from '../../../assets/BrandIcon/Architecture.svg';
import ContentContainer from '../../ContentContainer/ContentContainer';

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
                        <ImageButton icone={ArchitectureIcon} />
                        <ImageButton icone={ArchitectureIcon} />
                        <ImageButton icone={ArchitectureIcon} />
                        <ImageButton icone={ArchitectureIcon} />
                        <ImageButton icone={ArchitectureIcon} />
                        <ImageButton icone={ArchitectureIcon} />
                        <ImageButton icone={ArchitectureIcon} />
                        <ImageButton icone={ArchitectureIcon} />
                        <ImageButton icone={ArchitectureIcon} />
                    </div>
                </div>
            </ContentContainer>
        </div>
    );
};

export default FullScreenMenu;
