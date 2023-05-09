import { Link } from 'react-router-dom';

export default function OutlineButton({ href, children, onlyStyle, className }) {
    const buttonStyle =
        'border border-accent/50 transform hover-hover:scale-105 hover-hover:from-accent from-accent transition-all inline-flex justify-center items-center tracking-widest rounded-full px-8 py-4 hover:bg-gradient-to-b from-accent/70 to-transparent/50 font-light max-w-fit mx-auto';

    if (href) {
        return (
            <Link to={href} className={`${buttonStyle} ${className}`}>
                {children}
            </Link>
        );
    }

    if (onlyStyle) {
        return (
            <span to={href} className={`${buttonStyle} ${className}`}>
                {children}
            </span>
        );
    }

    return (
        <button type="button" className={`${buttonStyle} ${className}`}>
            {children}
        </button>
    );
}
