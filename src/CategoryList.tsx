import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import data from './components/data.json'

export function CategoryList() {
  console.log(Object.keys(data)[0])
  return (
    <React.Fragment>
      <div>
        <main>
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li className="is-active">
                <Link to="/">
                  <span>Home</span>
                </Link>
                <Link to="PhotoList">
                  <span>PhotoList</span>
                </Link>
              </li>
            </ul>
          </nav>
          <section className="Landing">
            <div className="container">
              <h2 className="Pic-1">
                <Link to={`pandas`}>Panda #1.</Link>
              </h2>
              <p>{data.pandas.description}</p>
              <Link to={`XXX`}>
                <img
                  className="pic-1"
                  src={data.pandas.photos[0].imageURL}
                  alt={data.pandas.photos[0].title}
                />
              </Link>
            </div>

            <div className="container">
              <h2 className="Pic-2">
                <Link to={`/${Object.keys(data)[1]}`}>YYY</Link>
              </h2>
              <p>{data.pandas.description}</p>
              <Link to={`/${Object.keys(data)[1]}`}>
                <img
                  className="pic-2"
                  src={data.pandas.photos[1].imageURL}
                  alt={data.pandas.photos[1].title}
                />
              </Link>
            </div>
          </section>
        </main>

        {/* IMPORTANT: This Outlet element serves as a placeholder where the child components associated with nested routes will be rendered. */}
        <Outlet />
      </div>
    </React.Fragment>
  )
}
