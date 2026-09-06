import { mediaUrl } from '../utilities/mediaUrl';

const fallbackImage = '/images/no-image-available.png';

const ProjectImage = ({ src, alt, className }) => {
  return (
    <img
      src={mediaUrl(src) || fallbackImage}
      alt={alt}
      className={className}
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = fallbackImage;
      }}
    />
  );
};

export default ProjectImage;
