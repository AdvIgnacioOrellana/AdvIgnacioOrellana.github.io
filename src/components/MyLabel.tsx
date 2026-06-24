import "./styles.css";

interface IMyLabelProps {
  label: string;
  size?: "normal" | "h1" | "h2" | "h3";
  color?: "text-primary" | "text-secondary";
  fontColor?: string;
}

export const MyLabel: React.FC<IMyLabelProps> = ({
  label,
  size = "normal",
  color = "text-primary",
  fontColor = "",
}) => {
  return <div className={`${size} ${color}`} style={{ color: fontColor }}>{label}</div>;
};