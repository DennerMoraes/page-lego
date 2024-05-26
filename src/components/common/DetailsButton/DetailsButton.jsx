import './DetailsButton.css';
import { ReactComponent as ArrowRight } from '../../../assets/Icons/ArrowRight_icon.svg';

const DetailsButton = ({ href, text }) => {
  return (
    <button href={href} className='Continer-DetailsButton'>
      <p>{text}</p>
      <ArrowRight className='ArrowRight' />
    </button>
  );
};

export default DetailsButton;