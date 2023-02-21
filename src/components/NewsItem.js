import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl , date ,source} = this.props;

        return (
                <div className='my-3'>
                    <div className="card">
                        <img src={imageUrl} className="card-img-top" alt="..." />
                        <div className="card-footer d-flex flex-column">
                            <small className="text-muted"><strong>Source:</strong> {!source? "Unknown" : source}</small>
                            <small className="text-muted"><strong>Date:</strong> {date}</small>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark" style={{ backgroundColor: "#123d5e", borderColor: "#123d5e" }}>Read More ...</a>
                        </div>
                    </div>
                </div>
        )
    }
}
