import { Link } from "react-router-dom";

interface CardProps {
    to: string;
    imageUrl: string;
    alt: string;
}

const LettersCard: React.FC<CardProps> = ({ to, imageUrl, alt }) => {
    return (
        <div className="p-2">
        <Link
            to={to}
            className="block w-32 h-32 cursor-pointer bg-white rounded-xl shadow-md overflow-hidden 
            transform transition-transform duration-300 hover:scale-110
            hover:ring-2 hover:ring-pink-400 hover:ring-offset-2
            hover:opacity-90"
        >
            <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full object-cover"
            />
        </Link>
        </div>
    );
};

export default LettersCard;
