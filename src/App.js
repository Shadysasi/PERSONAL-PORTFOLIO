import './App.css'
import {Component} from 'react'
import ScrollToTop from 'react-scroll-to-top'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Qualification from './components/Qualification'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import ThemeContext from './context/ThemeContext'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Header />
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
        <ScrollToTop />
        <Footer />
      </ThemeContext.Provider>
    )
  }
}

export default App
