import React, { useState } from 'react';
import './VideoScreen.css';
import ContentContainer from '../../common/ContentContainer/ContentContainer';
import { ReactComponent as SoundXIcon } from '../../../assets/Icons/VolumeX_Icon.svg';
import { ReactComponent as Sound2Icon } from '../../../assets/Icons/Volume2_Icon.svg';
import { ReactComponent as VideoDownloadIcon } from '../../../assets/Icons/VideoDownload_Icon.svg';
import ChevronsDownIcon from '../../../assets/Icons/ChevronsDown_Icon.svg';

const VideoScreen = () => {

    const [isSoundX, setIsSoundX] = useState(true);

    const handleClick = () => {
        setIsSoundX(!isSoundX);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'videoUrl';
        link.download = 'video.mp4';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='Content Container-VideoScreen'>
            <ContentContainer>
                <div className='Title-h1'>
                    <h1>Welcome to the<br />Play Matters Interactive Lookbook</h1>
                </div>
            </ContentContainer>
            <div className='ControlVideoIcons'>
                <button className='SoundIcon' onClick={handleClick}>
                    {isSoundX ? <SoundXIcon className="SoundIconImage" /> : <Sound2Icon className="SoundIconImage" />}
                </button>
                <button className='DownloadIcon' onClick={handleDownload}>
                    <VideoDownloadIcon className='DonwloadIconImage' />
                </button>
            </div>
            <div className='ScrollIcon'>
                <p>Scroll down</p><img src={ChevronsDownIcon} alt="" />
            </div>
        </div>
    );
};

export default VideoScreen;
