import React from 'react'

export default function NewsItems(props) {
  return (
    <div className="card my-3" style={{width : '18rem'}}>
      <img src={props.urlToImage} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.url} className="btn btn-primary">Read more</a>
      </div>
    </div>
  )
}
