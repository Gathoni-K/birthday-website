import childVersion from "../../assets/letterPageImages/prettyBoyChild-version.jpeg";
import TypeWriter from "./TypeWriter";

const Letter = () => {
    return (
        <div className="bg-linear-to-br from-amber-50 via-amber-100 to-amber-50
        container mx-auto px-4 md:px-6 lg:px-8 mt-20 relative
        rounded-lg border border-amber-200 shadow-inner p-6 w-80 md:w-200"
        >
            {/* letter section */}
            <div>

                {/* header section */}
                <div className="relative flex gap-6 md:gap-8 pt-40">

                <img src={childVersion} className="absolute top-4 left-4 w-32 h-32 rounded-full shadow-lg" />
                <h2 className="flex justify-center text-xl items-center font-['Dancing_Script'] ml-20 md:ml-70">
                    To the Fairest of Them All,
                </h2>
                </div>

                <TypeWriter
                text="Happy Birthdayyyyy I hope you have an amazing day"
                speed={100}
                delay={1500}
                cursor={true}
                className="font-['Great_Vibes']"
            >
                </TypeWriter>

                
            </div>

            
        </div>
    
    
)
}

export default Letter