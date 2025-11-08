import Card from "../components/LettersPage/Card";



const loves = [
  "Your laugh,it makes everything lighter.",
  "Your brains, Einstein who?! Clearly they haven't met you.",
  "How you're ever curious about my world, ",
  "Your handwriting, show-off, cause why you writing better than a typewriter.",
  "The way you think before you speak.",
  "The way you always listen, even when I ramble.",
  "I like it when you sing-along to songs, I have said this once and I'll say it again, I think I just found my favorite sound",
  "Your sense of style, walking around like you want me to get you pregnant, smh.",
  "How you smell good all the damn time, atp kijana panda kitanda.",
  "I love that you notice the little things",
  "The time and effort you put into grooming yourself, such a turn on tbh",
  "How you're patient with me and my poor texting habits,I am genuinely sorry for going ghost 90% of the time.",
  

  
];

const Letters = () => {
  return (

    <div
    className="bg-[url(/stars2.jpeg)] bg-cover bg-no-repeat pt-1 min-h-screen bg-center"
    >

      {/* header section */}
            <div className="flex relative justify-center items-center mt-5 md:mt-10">
                <div className="relative">

                    {/* overlay layer */}
                    <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

                <h2 className="font-['Satisfy'] text-center tracking-wide underline text-2xl md:text-3xl text-white p-4">
                    Things I Adore About You
                </h2>

                </div>
            </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 md:mt-12 md:grid-cols-3 gap-6 max-w-5xl">
        {loves.map((love, index) => (
          <Card key={index} text={love} />
        ))}

      </div>
    </div>
  )
}

export default Letters