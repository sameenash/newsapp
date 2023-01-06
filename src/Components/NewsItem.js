import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,date,author} = this.props; 
    return (
      <div className="my-3">
        <div className="card">
  <img src={imageUrl?imageUrl:"https://images.hindustantimes.com/tech/img/2022/12/07/1600x900/DSC_1680_1646205390518_1670390699311_1670390699311.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <div className="card-footer">
      <small className="text-muted">Last updated on {new Date(date).toGMTString()} by {author?author:'Unknown'} </small>
    </div>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
