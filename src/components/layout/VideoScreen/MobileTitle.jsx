import React from 'react';
import './VideoScreen.css';
import ContentContainer from '../../common/ContentContainer/ContentContainer';

const MobileTitle = () => {
    return (
        <div className='Content Container-TitleMobile'>
            <ContentContainer>
                <div className='Title-h1-mobile'>
                    <h1>Welcome to the<br />Play Matters Interactive Lookbook</h1>
                </div>
            </ContentContainer>
        </div>
    );
};

export default MobileTitle;
