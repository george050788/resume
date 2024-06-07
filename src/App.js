import AppRouter from './routers/AppRouter'
import { HashRouter } from 'react-router-dom'
import { Header, Nav, Social } from './component'
import { Home, About, Work, Skills, Contact } from './views'


function App () {
  return (

    // <BrowserRouter>
    //   <AppRouter></AppRouter>
    // </BrowserRouter>
    <>
      <HashRouter>
        <Header></Header>
        <Nav></Nav>
        <Social></Social>
        <Home></Home>
        <About></About>
        <Work></Work>
        <Skills></Skills>
        <Contact></Contact>
      </HashRouter>
    </>
  )
}

export default App
