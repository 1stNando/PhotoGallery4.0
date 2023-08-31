import React from 'react'
import { Link } from 'react-router-dom'
import data from '../components/data.json'

export function PhotoListPandas() {
  return (
    <div>
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to={`/miniatures`}>Miniatures</Link>
          </li>
        </ul>
      </nav>

      <h3>{data.pandas.title}</h3>
      <div className="pic-multiple">
        {data.pandas.photos.map((photo, index) => (
          <Link to={`./${index}`} key={index}>
            <img src={photo.imageURL} alt={photo.title} />
          </Link>
        ))}
      </div>
    </div>
  )
}
