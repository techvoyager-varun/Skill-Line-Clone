import './App.css'
import { DarkMode, ThemeProvider } from './context/ThemeContext'
import "./index.css"
import { Footer } from './pages/Footer'
import { Header } from './pages/Header'
import { Page3 } from './pages/Page3'
import { Page4grid } from './pages/Page4grid'
import { Page5 } from './pages/Page5'
import { Page6 } from './pages/Page6'
import { Pagetwo } from './pages/Pagetwo'



export const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Pagetwo />
      <Page3 />
      <Page4grid />
      <Page5 />
      <Page6 />
      <DarkMode />
      <Footer />
    </ThemeProvider>
  )
}