import { Link } from 'react-router-dom';

export default function ButtonSolid({ href, children, onlyStyle }) {
    const buttonStyle =
        'transform hover:scale-105 hover:from-accent transition-all inline-flex justify-center items-center tracking-widest rounded-full px-8 py-4 bg-gradient-to-b from-accent/70 to-transparent/50 font-light max-w-fit mx-auto';

    if (href) {
        return (
            <Link to={href} className={buttonStyle}>
                {children}
            </Link>
        );
    }

    if (onlyStyle) {
        return (
            <span to={href} className={buttonStyle}>
                {children}
            </span>
        );
    }

    return (
        <button type="button" className={buttonStyle}>
            {children}
        </button>
    );
}
