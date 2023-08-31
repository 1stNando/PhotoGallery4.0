import React from 'react'
import { Route, Routes } from 'react-router'
import { CategoryList } from './pages/CategoryList'
import { PhotoListPandas } from './pages/PhotoListPandas'
import { PhotoListMiniatures } from './pages/PhotoListMiniatures'
import { Details } from './pages/Details'
//import { PhotoListPandas } from './PhotoListPandas'

// Define the type of structure our data will have, teaching the program what the data looks like in the JSON file.
export type PhotosType = {
  title: string
  description: string
  photos: { title: string; imageURL: string }[]
}

export function App() {
  return (
    <div>
      <header>
        <h1>Heading number one.</h1>
        <h2>A second heading.</h2>
      </header>

      <Routes>
        <Route path="/" element={<CategoryList />}>
          <Route path="pandas" element={<PhotoListPandas />} />
          <Route path="miniatures" element={<PhotoListMiniatures />} />
          <Route path="/:categories/:photoIndex" element={<Details />} />
          <Route path="*" element={'noMatch'} />
        </Route>
      </Routes>

      <footer>
        <p>Sentence space to link to my GitHub account.</p>
      </footer>
    </div>
  )
}
