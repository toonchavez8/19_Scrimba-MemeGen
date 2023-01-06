import React from 'react'
import "../CSS/Meme.css"
import memesData from '../api/memesData'

export default function Meme() {

    // const [memeUrl, setMemeUrl] = React.useState("http://i.imgflip.com/1bij.jpg")
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemeImgs, setAllMemeImgs] = React.useState(memesData)

    
    function getMemeImg(){
        const memesArray = allMemeImgs.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
       const url = memesArray[randomNumber].url
         setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
         }))
    }

    return (
        <main>
            <div className='form' >
                <input className='form--input' type="text" placeholder="Top Text" />
                <input className='form--input' type="text" placeholder="Bottom Text" />
                <button className='form--button' 
                onClick={getMemeImg}
                >Get a Meme 
                    <span className='form--reaction'  role="img" aria-label="meme">🤣</span>
                </button>
            </div>
            <figure className='memeContainer'>
                <img src={meme.randomImg} alt="meme"/>
            </figure>

        </main>
    )
}
