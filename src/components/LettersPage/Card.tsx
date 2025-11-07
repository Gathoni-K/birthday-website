interface CardProps{
    text: string,
}

const Card:React.FC<CardProps> = (
    { text }
) => {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            

            {/* card section */}
            <div
      className="bg-amber-100/80 border border-amber-200 rounded-xl p-6 shadow-md 
                 hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                 font-['Great_Vibes'] text-lg text-gray-800 leading-relaxed
                 rotate-[-1deg] hover:rotate-0"
    >
                {text}
            </div>


        </div>
    )
}

export default Card