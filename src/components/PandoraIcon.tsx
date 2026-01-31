interface PandoraIconProps {
    fill?: string;
    stroke?: string;
    className?: string;
    size?: number;
    strokeWidth?: number;
}

export function PandoraIcon({
    fill = '#e1ab09',
    stroke = '#000000',
    className,
    size = 40,
    strokeWidth = 2
}: PandoraIconProps) {
    return (
        <svg
            viewBox="0 0 238 260"
            width={size}
            height={size * (260 / 238)}
            className={className}
        >
            <path id="Forma 1" fillRule="evenodd" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" d="m23.19 178.41c0 0 78.88-72.64 86.89-80.13 10.31-9.66 8.13-23.12 1.33-30.15-5.24-5.41-34.88-30.9-34.88-30.9l-53.34 45.12z" />
            <path id="Forma 1 copy" fillRule="evenodd" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" d="m23.19 82.08c0 0 78.88 72.65 86.89 80.14 10.31 9.66 8.13 23.12 1.33 30.15-5.24 5.4-34.88 30.9-34.88 30.9l-53.34-45.12z" />
            <path id="Forma 1 copy 2" fillRule="evenodd" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" d="m215.85 178.41c0 0-78.88-72.64-86.89-80.13-10.31-9.66-8.13-23.12-1.33-30.15 5.24-5.41 34.88-30.9 34.88-30.9l53.34 45.12z" />
            <path id="Forma 1 copy 3" fillRule="evenodd" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" d="m215.85 82.08c0 0-78.88 72.65-86.89 80.14-10.31 9.66-8.13 23.12-1.33 30.15 5.24 5.4 34.88 30.9 34.88 30.9l53.34-45.12z" />
        </svg>
    );
}

export default PandoraIcon;
