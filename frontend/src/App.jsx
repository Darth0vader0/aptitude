import React from 'react'
import Home from "./pages/home"
import './index.css'
import RootLayout from "./layout/layout"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/home" element={<RootLayout><Home /></RootLayout>} />
        <Route path="/" element={<Navigate to="/home" replace />}> </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
