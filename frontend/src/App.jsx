import React from 'react'
import Home from "./pages/home"
import './index.css'
import RootLayout from "./layout/layout"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './layout/Header';
import { ThemeProvider } from './context/themeContext';
import Practice from './pages/Practice';
import GenerateTest from './pages/GenerateTest';
import Test from './pages/Test';
import TestResults from './pages/TestResult';
import About from './pages/About';

function App() {
  return (
    <>
   <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/generate" element={<GenerateTest />} />
              <Route path="/test" element={<Test />} />
              <Route path="/test-results" element={<TestResults />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
