import React from 'react'

const Meme = () => {
  
  const [text, setText] = React.useState({
    topText: "", bottomText:"", randomImage:"https://i.imgflip.com/1g8my4.jpg"
  })

  const [memeData, setMemeData] = React.useState({})


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
      .then(data => setMemeData(data.data.memes))
    }, [])


function findRandom() {
  return Math.floor(Math.random() * 99) 
}

  function newMemeImage(){
    setText((prev)=>{
      return {
      ...prev,
      randomImage: memeData[findRandom()].url
        }
    })
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
            <img src={text.randomImage} width="50%" alt="placeholder"/>
            <h2 className='meme-text top'>{text.topText}</h2>
            <h2 className='meme-text bottom'>{text.bottomText}</h2>
        </section>
      </main>
  )
}

export default Meme