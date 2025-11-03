

const Cake = () => {
    return (
        <div className="flex justify-center items-center py-12 ml-15 mt-11 md:mt-15">
        <div className="relative">
            {/* Candles for 2 and 0 */}
            <div className="absolute -top-16 md:-top-20 left-1/2 transform -translate-x-1/2 flex gap-4 md:gap-6">
            {/* Candle 2 */}
            <div className="relative">
                {/* Flame */}
                <div className="w-3 h-6 md:w-4 md:h-8 bg-gradient-to-t from-yellow-400 via-orange-500 to-red-500 rounded-full animate-flicker relative">
                <div className="absolute inset-0 bg-yellow-300 rounded-full blur-sm opacity-70"></div>
                </div>
                {/* Candle stick */}
                <div className="w-2 h-10 md:w-3 md:h-14 bg-gradient-to-b from-pink-300 to-pink-400 mx-auto rounded-sm shadow-md relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-pink-200 rounded-t-sm"></div>
                </div>
                {/* Number 2 */}
                <div className="absolute top-3 md:top-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-base md:text-xl">
                2
                </div>
            </div>

            {/* Candle 0 */}
            <div className="relative">
                {/* Flame */}
                <div className="w-3 h-6 md:w-4 md:h-8 bg-gradient-to-t from-yellow-400 via-orange-500 to-red-500 rounded-full animate-flicker relative" style={{ animationDelay: '0.2s' }}>
                <div className="absolute inset-0 bg-yellow-300 rounded-full blur-sm opacity-70"></div>
                </div>
                {/* Candle stick */}
                <div className="w-2 h-10 md:w-3 md:h-14 bg-gradient-to-b from-pink-300 to-pink-400 mx-auto rounded-sm shadow-md relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-pink-200 rounded-t-sm"></div>
                </div>
                {/* Number 0 */}
                <div className="absolute top-3 md:top-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-base md:text-xl">
                0
                </div>
            </div>
            </div>

            {/* Single cake layer */}
            <div className="relative animate-hover">
            {/* Cake */}
            <div className="w-80 h-32 bg-gradient-to-b from-pink-400 to-pink-500 rounded-2xl relative overflow-hidden shadow-2xl">
                {/* Frosting top */}
                <div className="absolute top-0 left-0 w-full h-4 bg-pink-300"></div>
                
                {/* Frosting drips */}
                {[...Array(10)].map((_, i) => (
                <div
                    key={i}
                    className="absolute top-4 w-8 h-6 bg-pink-300 rounded-b-full"
                    style={{ left: `${i * 32}px` }}
                ></div>
                ))}
                
                {/* Decorative sprinkles */}
                {[...Array(25)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-3 rounded-full"
                    style={{
                    backgroundColor: ['#ff6b9d', '#c084fc', '#60a5fa', '#fbbf24', '#34d399'][i % 5],
                    left: `${10 + Math.random() * 90}%`,
                    top: `${30 + Math.random() * 50}%`,
                    transform: `rotate(${Math.random() * 360}deg)`
                    }}
                ></div>
                ))}
            </div>
            </div>

            {/* Plate */}
            <div className="w-96 h-4 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full shadow-lg mt-2"></div>
        </div>

        <style>{`
            @keyframes flicker {
            0%, 100% { transform: scale(1) translateY(0); opacity: 1; }
            50% { transform: scale(1.1) translateY(-2px); opacity: 0.85; }
            }
            
            @keyframes hover {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            }
            
            .animate-flicker {
            animation: flicker 1.5s ease-in-out infinite;
            }
            
            .animate-hover {
            animation: hover 3s ease-in-out infinite;
            }
        `}</style>
        </div>
    );
};

export default Cake;