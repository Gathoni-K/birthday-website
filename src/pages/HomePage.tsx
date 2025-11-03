import LandingPageHeader from "../components/HomePage/LandingPageHeader";
import LandingPageCards from "../components/HomePage/LandingPageCards";
import Cake from "../components/HomePage/Cake";

const HomePage = () => {
    return (
        <div className="relative min-h-screen">
        {/* Blurred background layer */}
        <div 
            className="absolute inset-0"
            style={{
            backgroundImage: 'url(/Background.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: 'blur(2.5px)',
            zIndex: -1
            }}>
        </div>
        
        {/* Content layer */}
        <div className="relative z-10 pt-9">
            <LandingPageHeader />
            <Cake />
            <LandingPageCards />
        </div>
        </div>
    )
}

export default HomePage