import React from 'react'
import "../CSS/Meme.css"

export default function Meme() {
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
    })

    const [getMemes, setGetMemes] = React.useState([])

    React.useEffect(() => {
        const getMemesData = async () => {
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            setGetMemes(data.data.memes)
        }
        getMemesData()
    }, [])

    
    function getMemeImg(){
        const memesArray = getMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
       const url = memesArray[randomNumber].url
         setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
         }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return (
        <main>
            <div className='form' >
                <input 
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                className='form--input' 
                type="text" 
                placeholder="Top Text"
                 />
                <input 
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                className='form--input' 
                type="text" 
                placeholder="Bottom Text" 
                />
                <button className='form--button' 
                onClick={getMemeImg}
                >Get a Meme 
                    <span className='form--reaction'  role="img" aria-label="meme">🤣</span>
                </button>
            </div>
            <figure className='memeContainer'>
                <img src={meme.randomImg} alt="meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </figure>
        </main>
    )
}




