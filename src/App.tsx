import React from 'react'
import { Route, Routes } from 'react-router'
import { CategoryList } from './CategoryList'
import { PhotoList } from './PhotoList'

export function App() {
  return (
    <div className="main">
      <header>Hello, World HEADER </header>
      <main>
        <Routes>
          <React.Fragment>
            <Route path="/" element={<CategoryList />}></Route>
            <Route path="PhotoList" element={<PhotoList />}></Route>
          </React.Fragment>
        </Routes>
      </main>
    </div>
  )
}
