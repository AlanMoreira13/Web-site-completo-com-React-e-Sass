

// Pages
import AreasDeAtuacao from "./components/AreasDeAtuacao"
import Footer from "./components/Footer"
import Header from "./components/header"
import MainContent from "./components/MainContent"


function App() {

  return (
    <div className="App">
      <div className="appContainer">
        {/* <Header  /> */}
        <MainContent />
        <AreasDeAtuacao />
        <Footer />
    </div>
    </div>
  )
}

export default App
