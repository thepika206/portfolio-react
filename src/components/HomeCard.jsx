const HomeCard = () => {
  return (
    <div className='card p-3 home-card shadow'>
      <div className='card-body'>
        <h1 id='home-title'>👋 {"I'm Patrick"}</h1>
        <h4 className='column-centered-content'>
          Specializing in front-end development, I create responsive and user-friendly web
          applications using React, JavaScript, HTML, and CSS. I have a strong foundation in
          software engineering principles and a passion for agile methodologies.
        </h4>
      </div>
    </div>
  );
};

export default HomeCard;
