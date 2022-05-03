import React from 'react'

function Content() {
  return (
    <div>
      <h1 className="heading">Users</h1>
      <div className="container">
        <div className="card1 d-sm-flex justify-content-center">
          <figure className="figure1 p-4 m-2 border">
            <img></img>
            <figcaption>Figure1</figcaption>
            <button className="">View Details</button>
          </figure>
          <figure className="figure2 p-4 m-2 border">
            <img></img>
            <figcaption>Figure2</figcaption>
            <button>View Details</button>
          </figure>
          <figure className="figure3 p-4 m-2 border">
            <img></img>
            <figcaption>Figure3</figcaption>
            <button>View Details</button>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Content;
