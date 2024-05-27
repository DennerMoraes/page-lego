import Navbar from "../../layout/NavBar/NavBar";
import VideoScreen from "../../layout/VideoScreen/VideoScreen";
import MobileTitle from "../../layout/VideoScreen/MobileTitle";
import "./Home.css";
import AllSession from "../../layout/AllSession/AllSession";
import Footer from "../../layout/Footer/Footer";

const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <VideoScreen />
            <MobileTitle />
            <AllSession />
            <Footer />
        </div>
    );
};

export default HomePage;