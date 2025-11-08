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
                text="Happy Birthdayyyyy!!! 🎂
                Guess who we're celebrating todayyy? You my good sir!!😝😝 (Jokes on you, we have been celebrating your existence from the very first day.😔✌🏼)
                I hope you have an amazing day and as you enter your twenties (wow, okay grandpa😔🥀) may you experience your best year yet (I'm literally in here cooking up good luck, dw😝)
                and I hope today, you feel a fraction of the joy you give out without realising and also as good as you look every other day (which is criminally good, btw.Officer, arrest this man for being too sexy.🗣😔🙏🏼) 
                You really had the audacity to be born, grow up, and turn out this fine, huh? Like you woke up one day and chose giving us sleepless nights is something you'd do.
                I could say a bunch of soft things about how you’ve got the kindest eyes and a laugh that sticks in my head longer than it should, but let’s not.🌚
                Here's to many many more! 😝🎊
                Happy birthday, Eugene. Another year of you being ridiculously fine, dangerously smart, and unfairly charming.

                Yours truly, the ghost that haunts your life.
                (Ignore the 'undefined' after this, I couldn't get rid of it.💔🥀)
                "
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