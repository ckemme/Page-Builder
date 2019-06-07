import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import SideBar from './sideBar/SideBar'
import TemplatesPreview from './TemplatesPreview'
import { determineScreen, removeSelectedTemplates } from '../utils/utils'
import { theme } from '../utils/globalStyles'
import Banner from './templates/Banner'

const App = () => {
  const [screen, setScreen] = useState('desktop')
  const [selectedTemplates, setSelectedTemplates] = useState([Banner, Banner, Banner])
  const updateSelectedTemplates = (action, idx) => {
    let templates = [...selectedTemplates]
    let updatedTemplates
    if (action === 'remove') {
      updatedTemplates = removeSelectedTemplates(templates, idx)
    }
    setSelectedTemplates(updatedTemplates)
  }
  useEffect(() => {
    const updateScreen = () => {
      let width = window.innerWidth
      let screen = determineScreen(width)
      setScreen(screen)
    }
    // call function for initial run
    updateScreen()
    // add event listener
    window.addEventListener('resize', updateScreen)
    return () => window.removeEventListener('resize', updateScreen)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return (
    <ThemeProvider theme={theme}>
      <>
        <SideBar />
        <TemplatesPreview
          screen={screen}
          selectedTemplates={selectedTemplates}
          updateSelectedTemplates={updateSelectedTemplates}
        />
      </>
    </ThemeProvider>
  )
}

export default App
