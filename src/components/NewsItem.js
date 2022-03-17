import React, { Component } from 'react'

export class NewItem extends Component {
  render() {

    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card" >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{left:'95%', zIndex:'1'}}>
              {source}
            </span>
          <img src={!imageUrl ? "https://static.india.com/wp-content/uploads/2022/01/whatsapp-2.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5> 
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
            <a rel="noopener" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewItem
