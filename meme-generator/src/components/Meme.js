import React from 'react'
import myImage from './temp-bkg.png'


const Meme = () => {
  const [text, setText] = React.useState({
    topText: "", bottomText:""
  })

  function textUpdate(e){
    setText((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value
        }
        
    }) 
  }
function test (){
  console.log(text)
}

  return (
    <main>
        <div>
          <input  
            name='topText'
            type='text' 
            placeholder="Enter Top Text Here" 
            onChange={textUpdate}
            value={text.topText}
          />

          <input 
            name='bottomText'
            type='text' 
            placeholder="Enter Bottom Text Here" 
            onChange={textUpdate}
            value={text.bottomText}
          />

           <button onClick={test}>Get new Image</button>

        </div>

        <section id='meme'>
            <img src={myImage} width="50%" alt="placeholder"/>
            <h2 className='meme-text'>TEST</h2>
        </section>
      </main>
  )
}

export default Meme