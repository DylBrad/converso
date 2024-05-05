interface ThumbnailProps {
  title: string;
  thumb: string;
}
const Thumbnail: React.FC<ThumbnailProps> = ({ title, thumb }) => {
  return (
    <li className="thumb">
      <div
        className="thumb-image"
        style={{ backgroundImage: `url(${thumb})` }}
      />
      <div className="thumb-meta">
        <span>{title}</span>
      </div>
    </li>
  );
};

export default Thumbnail;
