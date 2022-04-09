import myImage from './temp-bkg.png'


function App() {
  return (
    <div className="App">
      <header>
        <h1>Meme Generator</h1>
      </header>
      <main>
        <form>
          <input type='text' placeholder="Enter Top Text Here"></input>
          <input type='text' placeholder="Enter Bottom Text Here"></input>
        </form>
        <img src={myImage} width="50%" alt="placeholder"></img>
      </main>
      
    </div>
  );
}

export default App;
