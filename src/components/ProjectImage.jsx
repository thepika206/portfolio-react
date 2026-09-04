const fallbackImage = '/images/no-image-available.png';

const ProjectImage = ({ src, alt, className }) => {
  return (
    <img
      src={src || fallbackImage}
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