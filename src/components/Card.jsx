export default function ButtonCta({ children, className }) {
    return (
        <div
            className={`overflow-hidden rounded-lg border border-accent border-opacity-20 p-6 backdrop-blur ${className}`}
        >
            {children}
        </div>
    );
}
