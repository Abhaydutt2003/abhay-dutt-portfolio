import "./index.css";

interface AvatarProps {
  imageUrl: string;
  alt: string;
  className: string;
}

const Avatar = ({
  imageUrl,
  alt,
  className = "avatar-size-medium",
}: AvatarProps) => {
  return (
    <div id="avatar-ring" className={className}>
      <img src={imageUrl} alt={alt} className="avatar-img" />
    </div>
  );
};

export default Avatar;
