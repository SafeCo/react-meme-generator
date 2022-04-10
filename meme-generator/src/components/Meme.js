import React from 'react'
import testData from './memepage.json'

const Meme = () => {
  
  const [text, setText] = React.useState({
    topText: "", bottomText:""
  })

  const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1g8my4.jpg")


  function textUpdate(e){
    setText((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value
        }
      }) 
    }

    // React.useEffect(()=> {
    //   fetch("./memepage.json")
    //   .then(res => res.json())
    //   .then(data => setMemesData(data.data.memes))
    // })
  
// console.log(memesData)
 // "https://api.imgflip.com/get_memes"

console.log(testData.data.memes[1])
console.log(findRandom())
function findRandom() {
  return Math.floor(Math.random() * 99) 
}

  function newMemeImage(){
    setMemeImage(testData.data.memes[findRandom()].url)
  }
  
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
           <button id='new-image' onClick={newMemeImage}>Get new Image</button>
        </div>

        <section id='meme'>
            <img src={memeImage} width="50%" alt="placeholder"/>
            <h2 className='meme-text top'>{text.topText}</h2>
            <h2 className='meme-text bottom'>{text.bottomText}</h2>
        </section>
      </main>
  )
}

export default Meme