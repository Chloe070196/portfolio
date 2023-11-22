import './App.css'
import { Routes, Route} from 'react-router-dom'
import { useState } from 'react'


import TechStack from './components/TechStack'
import Projects from './components/Projects'
import About from './components/About'


function App() {
  const [display, setDisplay] = useState(null)

  const toggleDisplay = (e) => {
      setDisplay(e.target.value)
  }

  const renderDisplayAsSet = () => {
      if (display === null) {
        return <p>loading...</p>
      }

      if (display === 'display-projects') {
        return <Projects />
      }
      if (display === 'display-tech-stack') {
        return <TechStack />
      }
      if (display === 'display-about-me') {
        return <About />
      }
    
  }

  return (
    <>
      <section className='hero rectangular-container'>
        <h1>Hi there! I'm Chloé, a junior software developer</h1>
      </section>
      <main id='dashboard'>
        {/* toggles what is displayed in the view section */}
        <nav>
          <button value='display-projects' onClick={e => toggleDisplay(e)}/>
          <button value='display-tech-stack' onClick={e => toggleDisplay(e)}/>
          <button value='display-about-me' onClick={e => toggleDisplay(e)}/>
        </nav>
        <section>
          {renderDisplayAsSet()}   
        </section>
        <Routes>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
