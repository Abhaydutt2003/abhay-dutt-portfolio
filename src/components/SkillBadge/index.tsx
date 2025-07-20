import "./index.css";

interface SkillBadgeProps {
  skill: string;
  size?: "large" | "medium" | "small" | "x-small" | "xx-small";
  className?: string;
}

const SkillBadge = ({
  skill,
  size = "medium",
  className = "",
}: SkillBadgeProps) => {
  return (
    <span
      className={`skill-badge skill-badge-size-${size} ${className}`}
      title={skill}
    >
      {skill}
    </span>
  );
};

export default SkillBadge;
