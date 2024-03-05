import React from 'react'
import { Route, Routes } from 'react-router-dom'

import DonatePage from '../pages/DonatePage'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/donate' element={<DonatePage />} />
    </Routes>
  )
}

export default MainRoutes
