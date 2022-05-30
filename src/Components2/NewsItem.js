import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      imgurl,
      newsUrl,
      author,
      date,
      source,
    } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-success"
            style={{ left: "81%", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            src={
              !imgurl
                ? "https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1164116703.jpg?w=602"
                : imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small class="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
