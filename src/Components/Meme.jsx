import React from 'react'
import "../CSS/Meme.css"
import memesData from '../api/memesData'

export default function Meme() {

    const [memeUrl, setMemeUrl] = React.useState()

    function getMemeImg(){
        const memes = memesData.data.memes
        
        const randomMeme = memes[Math.floor(Math.random() * memes.length)]
      
        const url = randomMeme.url

        setMemeUrl(url)
        console.log(url)
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
                <img src={memeUrl} alt/>
            </figure>

        </main>
    )
}
