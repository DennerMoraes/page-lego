import './SessionTitle.css';

const SessionTitle = ({text, color}) => {
    return (
        <div className='Title-Session' style={{ '--border-color': color }}>
            <h2 className='h2-session' >{text}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

    );
};

export default SessionTitle;