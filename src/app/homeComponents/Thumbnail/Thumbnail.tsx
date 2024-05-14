interface ThumbnailProps {
  id: number;
  title: string;
  thumb: string;
  handleClick: any;
}
const Thumbnail: React.FC<ThumbnailProps> = ({
  id,
  title,
  thumb,
  handleClick,
}) => {
  return (
    <li className="thumb" onClick={handleClick}>
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
