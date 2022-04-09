import React from 'react'
import myImage from './temp-bkg.png'


const Meme = () => {
  return (
    <main>
        <form>
          <input type='text' placeholder="Enter Top Text Here"></input>
          <input type='text' placeholder="Enter Bottom Text Here"></input>
        </form>
        <section id='meme'>
            <button>Get new Image</button>
            <img src={myImage} width="50%" alt="placeholder"></img>
        </section>
      </main>
  )
}

export default Meme