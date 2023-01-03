import React from 'react'
import '../CSS/Header.css'

export default function Header() {
    return (
        <header className='Header'>
            <img  className="Header--logo" src="/troll-face.png" alt='troll face meme logo' />
            <h2 className="Header--title" >Meme Generator</h2>
            <h4 className="Header--project" >React Course - Project 3</h4>
        </header>
    )
}
