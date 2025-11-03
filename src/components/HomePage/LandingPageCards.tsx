import Rose from "../../assets/rose.jpg";
import Letter from "../../assets/letter.png";
import musicIcon from "../../assets/musicIcon.png";
import BirthdayLetter  from "../BirthdayLetter";
import SongsCard from "../SongsCard";
import LettersCard from "../LettersCard";


const LandingPageCards = () => {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mb-4">
            
            <BirthdayLetter to="/birthday" imageUrl={Letter} alt="Letter image"/>
            <SongsCard to="/anthems" imageUrl={musicIcon} alt="Music Icon" />
            <LettersCard to="/letters" imageUrl={Rose} alt="Rose image"/>

        </div>
    )
}

export default LandingPageCards