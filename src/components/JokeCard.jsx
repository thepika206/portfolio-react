import { useState, useEffect } from 'react';

const JokeCard = () => {
  const [joke, setJoke] = useState('Loading random joke...');
  const text =
    "I discovered a Chuck Norris Joke API and implemented it here as a reward for anyone that made it to the last page in my portfolio.  By refreshing your page, you'll see a different random joke.  Enjoy!";

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getRandomJoke = async () => {
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/random', { signal });
        const data = await response.json();
        const newJoke = data.value;
        setJoke(newJoke);
      } catch (error) {
        console.error(error);
      }
    };

    getRandomJoke();

    return () => controller.abort();
  }, []);

  return (
    <div className='card p-4 m-5 contact-card shadow'>
      <div className='card-body'>
        <h2 className='card-title text-center mb-3'>Just for Fun: Joke API</h2>
        <p>{text}</p>
        {joke && <p className='mb-5'>{joke}</p>}
        <p className='mb-0'>
          Credit: <a href='https://api.chucknorris.io/'>https://api.chucknorris.io/</a>
        </p>
      </div>
    </div>
  );
};

export default JokeCard;
