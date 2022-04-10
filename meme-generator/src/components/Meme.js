import React from 'react'
import myImage from './temp-bkg.png'


const Meme = () => {
  
  const [text, setText] = React.useState({
    topText: "", bottomText:""
  })

  const [memesData, setMemesData] = React.useState([])



  function textUpdate(e){
    setText((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value
        }
      }) 
    }

    React.useEffect(()=> {
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setMemesData(data.data.memes))
    })
  
// console.log(memesData)


  
  return (
    <main>
        <div id='form'>
          <div>
            <input  
              name='topText'
              type='text' 
              placeholder="Enter Top Text Here" 
              onChange={textUpdate}
              value={text.topText}
              className='form-input'
            />

            <input 
              name='bottomText'
              type='text' 
              placeholder="Enter Bottom Text Here" 
              onChange={textUpdate}
              value={text.bottomText}
              className='form-input'
            />
          </div>
           <button id='new-image'>Get new Image</button>
        </div>

        <section id='meme'>
            <img src={myImage} width="50%" alt="placeholder"/>
            <h2 className='meme-text top'>{text.topText}</h2>
            <h2 className='meme-text bottom'>{text.bottomText}</h2>
        </section>
      </main>
  )
}

export default Meme