import Header from './components/Header'
import Meme from './components/Meme'


function App() {
  function test (){
    console.log("working 2")
  }
  return (
    <div className="App">
        <Header/>
        <Meme onClick={test} />
    </div>
  );
}

export default App;
