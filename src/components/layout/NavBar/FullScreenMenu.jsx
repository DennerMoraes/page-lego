import React from 'react';
import './FullScreenMenu.css';

const FullScreenMenu = ({ onClose, isClosing }) => {
    return (
        <div className={`fullscreen-menu ${isClosing ? 'closing' : ''}`}>
            <button className="close-button" onClick={onClose}>X</button>
            {/* Conteúdo do menu aqui */}
        </div>
    );
};

export default FullScreenMenu;
