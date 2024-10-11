
import ContextQuizProvider from "./components/context/contextQuizProvider"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import MainContent from "./components/layout/MainContent"



function App() {

  return (
    <div className="flex flex-col min-h-dvh bg-gradient-to-b from-70% from-background to-secondary">
      <Header />
      <ContextQuizProvider>
        <MainContent />
      </ContextQuizProvider>
      <Footer />
    </div>
  )
}

export default App
