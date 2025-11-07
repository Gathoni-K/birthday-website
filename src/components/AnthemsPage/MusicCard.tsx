import { useEffect, useState } from "react";

interface CardData {
    id: number;
    image: string;
    caption?: string;
}

interface PositionedCard extends CardData {
    top: string;
    left: string;
    rotate: string;
    zIndex: number; 
  // stacking order
}

const MusicCard = () => {
    const [cards, setCards] = useState<PositionedCard[]>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // hovered/tapped index

    const cardData: CardData[] = [
        { id: 1, image: "/images/avenoir.jpeg" },
        { id: 2, image: "/images/blessedDaniel.jpeg", caption: "Blessed - Daniel Caesar" },
        { id: 3, image: "/images/breakingBadReference.jpeg", caption: "Los Pollos Hermanos - Knucks" },
        { id: 4, image: "/images/brentPoster.jpeg" },
        { id: 5, image: "/images/CASposter.jpeg" },
        { id: 6, image: "/images/cryCAS.jpeg", caption: "CRY - Cigarettes After Sex" },
        { id: 7, image: "/images/CASposter2.jpeg" },
        { id: 8, image: "/images/favourAvenoir.jpeg", caption: "Favour - Avenoir" },
        { id: 9, image: "/images/K.jpeg", caption: "K - Cigarettes After Sex" },
        { id: 10, image: "/images/linkUpAvenoir.jpeg", caption: "Link Up - Avenoir" },
        { id: 11, image: "/images/logo.jpeg" },
        { id: 12, image: "/images/mercedesBrent.jpeg", caption: "Mercedes - Brent Faiyaz" },
        { id: 13, image: "/images/oneNIghtOnly.jpeg", caption: "One Night Only - Sonder" },
        { id: 14, image: "/images/pistachiosBrent.jpeg", caption: "Pistachios - Brent Faiyaz" },
        { id: 15, image: "/images/redemptionNemmz.jpeg", caption: "Redemption - Nemmz" },
        { id: 16, image: "/images/scientistColdplay.jpeg", caption: "The Scientist - Coldplay" },
        { id: 17, image: "/images/shamelessAvenoir.jpeg", caption: "Shameless - Avenoir" },
        { id: 18, image: "/images/TMW.jpeg", caption: "TMW - Avenoir" },
    ];

    useEffect(() => {
        // Controlled scatter logic (grid + jitter) + assign a zIndex
        const numCards = cardData.length;
        const screenWidth = window.innerWidth;
        let cols = 6;
        if (screenWidth < 640) cols = 3;
        else if (screenWidth < 1024) cols = 4;

        const rows = Math.ceil(numCards / cols);

        const generated: PositionedCard[] = cardData.map((card, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);

        const baseTop = (row / rows) * 80; // percent of container height
        const baseLeft = (col / cols) * 80; // percent of container width
        const jitterTop = Math.random() * 8; // jitter inside cell
        const jitterLeft = Math.random() * 8;

        // assign stacking order (lower number = rendered below)
        const zIndex = i; 
        // deterministic: later items are "above" earlier items

        return {
            ...card,
            top: `${baseTop + jitterTop}%`,
            left: `${baseLeft + jitterLeft}%`,
            rotate: `${(Math.random() * 40 - 20).toFixed(2)}`,
            zIndex,
        };
        });

        setCards(generated);
    }, []);

  // helpers for touch support: toggle active on tap for mobile
    const handleClick = (index: number) => {
        // If tapped again, close
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="relative w-screen min-h-screen bg-transparent overflow-y-auto overflow-x-hidden">
        {/* header */}
        <div className="flex justify-center items-center mt-5 md:mt-10 relative z-20 pointer-events-none">
            <div className="relative">
            <div className="absolute inset-0 bg-black/60 rounded-lg"></div>
            <h1 className="relative text-center underline uppercase font-['Cinzel_Decorative'] text-white font-bold tracking-wide p-5">
                Your Anthems
            </h1>
            </div>
        </div>

        {/* scattered cards */}
        {cards.map((card, i) => {
            const isActive = activeIndex === i;
            // if there's an active card, any card with zIndex > active's zIndex should fade
            const activeZ = activeIndex !== null ? cards[activeIndex]?.zIndex ?? -1 : -1;
            const isAboveActive = activeIndex !== null && card.zIndex > activeZ;

            const computedOpacity = isActive ? 1 : isAboveActive ? 0.22 : 1;
            const computedZIndex = isActive ? 2000 : card.zIndex + 1; // ensure active is on top

            return (
            <div
                key={card.id}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex((prev) => (prev === i ? null : prev))}
                onClick={() => handleClick(i)} // for mobile tap to toggle
                className="absolute transition-all duration-300 ease-out cursor-pointer"
                style={{
                top: card.top,
                left: card.left,
                transform: `rotate(${card.rotate}deg)`,
                zIndex: computedZIndex,
                opacity: computedOpacity,
                }}
            >
                <div className="w-28 h-40 sm:w-32 sm:h-44 md:w-36 md:h-52 lg:w-40 lg:h-56 bg-white shadow-2xl rounded-xl overflow-hidden relative">
                <img src={card.image} alt={card.caption} className="w-full h-full object-cover" />
                {card.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs sm:text-sm p-1 text-center font-medium font-['Caveat_Brush']">
                    {card.caption}
                    </div>
                )}
                </div>
            </div>
            );
        })}
    </div>
    );
};

export default MusicCard;
