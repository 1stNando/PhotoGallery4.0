import React from 'react'
import { Link } from 'react-router-dom'
import data from '../components/data.json'

export function PhotoListMiniatures() {
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
            <Link to={`/pandas`}>Pandas</Link>
          </li>
        </ul>
      </nav>
      <h3>{data.miniatures.title}</h3>
      <div className="pic-multiple">
        {data.miniatures.photos.map((photo, index) => {
          return (
            <>
              <Link to={`./${index}`} key={index}>
                <img src={photo.imageURL} alt={photo.title} key={index} />
              </Link>
            </>
          )
        })}
      </div>
    </div>
  )
}
