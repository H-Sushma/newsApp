import React, { Component } from 'react'
export default class NewsItem extends Component {
    render() {
   let {title,description,imageUrl,newsUrl}=this.props;

    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl? imageUrl :"https://images.moneycontrol.com/static-mcnews/2023/08/Moody_s-USA-Reuters.jpeg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
