export type NavCardProps = {
    name: string;
    text: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    cardStyle?: React.CSSProperties;
    cardClassName?: string;
}