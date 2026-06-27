import bioData from '../data/bio.json';

const BioCard = () => {
  return (
    <div className='card p-4 home-card shadow'>
      <div className='card-body'>
        <h2 className='card-title text-center mb-3'>{bioData.title}</h2>
        {bioData.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default BioCard;
