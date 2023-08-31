import React from 'react'
import { Link } from 'react-router-dom'

export function PhotoList() {
  return (
    <React.Fragment>
      <div className="main">
        <div className="top-section">
          <section>
            <p>Photo List!!</p>
          </section>
        </div>

        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="PhotoList">
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </nav>
        <section className="Landing">
          <div className="container">
            <h2 className="FirstPicture">
              <Link to={``}>Thing One.</Link>
            </h2>
            <p></p>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}
