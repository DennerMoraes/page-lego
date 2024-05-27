import './LeftSession.css';
import ImageTitle from '../../common/Text/ImageTitle/ImageTitle';
import ImageDescription from '../../common/Text/ImageDescription/ImageDescription';
import DetailsButton from '../../common/DetailsButton/DetailsButton';

const LeftSession = ({ title, borderColor, image, padding }) => {
    return (
        <div className="Container-Text-Img" style={{borderColor: borderColor, padding: padding}}>
            <div className="Container-ImageTexts">
                <ImageTitle text={title} />
                <ImageDescription text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'} />
                <DetailsButton text={'View details'} />
            </div>
            <div className="Container-Image">
                <img src={image} alt="lego" />
            </div>
        </div>
    );
};

export default LeftSession;