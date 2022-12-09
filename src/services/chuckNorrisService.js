const BASE_URL = `https://api.chucknorris.io/jokes/`

//https://api.chucknorris.io/jokes/random
const getRandomJoke = async () =>{
  try {
    const res = await fetch(`${BASE_URL}/random?category=science`,{

    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}


export {
  getRandomJoke,
}