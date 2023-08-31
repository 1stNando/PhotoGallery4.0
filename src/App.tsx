import React from 'react'
import { Route, Routes } from 'react-router'
import { CategoryList } from './pages/CategoryList'
//import { PhotoListPandas } from './PhotoListPandas'

export function App() {
  return (
    <div className="main">
      <header>LANDING PAGE HEADER</header>
      <main>
        <Routes>
          <React.Fragment>
            <Route path="/" element={<CategoryList />}></Route>
            {/* <Route path="PhotoList" element={<PhotoList />}></Route> */}
          </React.Fragment>
        </Routes>
      </main>
    </div>
  )
}
