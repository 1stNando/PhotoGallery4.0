import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../components/data.json'

export function Details() {
  const params = useParams<{
    categories: 'pandas' | 'miniatures'
    photoIndex: string
  }>()
  return (
    <div>
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <span className="icon">Home</span>
            </Link>
          </li>
          <li className="is-active">
            <Link to={`/${params.categories}`}>
              {data[params.categories!].title}
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="last-title">
        {data[params.categories!].photos[Number(params.photoIndex)].title}
      </h1>
      <img
        className="last"
        src={
          data[params.categories!].photos[Number(params.photoIndex)].imageURL
        }
      />
    </div>
  )
}
