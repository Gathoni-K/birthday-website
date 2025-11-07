import { useState, useEffect } from "react";

interface TypeWriterProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    cursor?: boolean;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
    text,
    speed = 70,
    delay = 0,
    className = "",
    cursor = true,
}) => {
    console.log("FULL TEXT PROP:", text, "LENGTH:", text.length);
    console.log("TEXT AS ARRAY:", text.split(''));
    const [displayedText, setDisplayedText] = useState("");
    const [typingDone, setTypingDone] = useState(false);

    useEffect(() => {
    setDisplayedText(""); // Reset on mount
    setTypingDone(false);
    
    console.log("Text received:", text); 
    
    const startTyping = setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
        console.log("i:", i, "text.length:", text.length, "char:", text[i]); 
        if (i < text.length) {
            setDisplayedText((prev) => prev + text[i]);
            i++;
            if (i === text.length) {
            clearInterval(interval);
            setTypingDone(true);
            }
        }
        }, speed);
        

        return () => clearInterval(interval);
    }, delay);
    
    return () => {
        clearTimeout(startTyping);
    };
    }, [text, speed, delay]);


    return (
        <span
        className={`font-[Great_Vibes] whitespace-pre-wrap wrap-break-word ${className || ""}`}
        >
            
        {displayedText}
        {cursor && !typingDone && (
            <span className="animate-pulse ml-px border-r-2 border-black">|</span>
        )}
        </span>
    );
};

export default TypeWriter;
