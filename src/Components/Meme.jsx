import React from 'react'
import "../CSS/Meme.css"

export default function Meme() {
    return (
        <main>
            <form className='form' >
                <input className='form--input' type="text" placeholder="Top Text" />
                <input className='form--input' type="text" placeholder="Bottom Text" />
                <button className='form--button' >Get a Meme 
                    <span className='form--reaction'  role="img" aria-label="meme">🤣</span>
                </button>
            </form>
        </main>
    )
}
