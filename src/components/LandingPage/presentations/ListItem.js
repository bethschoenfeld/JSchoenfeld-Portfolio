import React, { Component } from "react";
import Proptypes from "prop-types";
import { Link } from "gatsby";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderDesc = this.renderDesc.bind(this);
    this.renderPic = this.renderPic.bind(this);
  }

  renderTitle = title => {
    if (title.length < 20) {
      return <h5 className="search-tile-title">{title}</h5>;
    }
    if (title.length < 35) {
      return <h5 className="search-tile-title long-title">{title}</h5>;
    }
    return <h5 className="search-tile-title longer-title">{title}</h5>;
  };

  renderDesc = desc => {
    if (desc.length > 150) {
      // eslint-disable-next-line no-param-reassign
      desc = desc.substring(0, 135);
      return <p className="tile-desc">{desc} ... read more</p>;
    }
    return <p className="tile-desc">{desc}</p>;
  };

  renderPic = movie => {
    if (movie.backdrop_path !== null) {
      return (
        <img
          className="tile-img"
          alt="img"
          src={`https://image.tmdb.org/t/p/w500//${movie.backdrop_path}`}
        />
      );
    }
    if (movie.poster_path !== null) {
      return (
        <img
          className="tile-img "
          alt="img"
          src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}
        />
      );
    }
    return (
      <img
        alt="img"
        className="tile-img"
        src="https://via.placeholder.com/280x160"
      />
    );
  };

  render() {
    const { movie } = this.props;
    return (
      <Link className="tile" to={`based-on`}>
        <div className="tile-img">{this.renderPic(movie)}</div>
        <div className=" photo-overlay">
          <div className="tile-text-container">
            <div className="playbtn-container">
              <button className="playBtn ">▶</button>
            </div>
            <>{this.renderTitle(movie.title)}</>
            <>{this.renderDesc(movie.overview)}</>
          </div>
        </div>
      </Link>
    );
  }
}

ListItem.propTypes = {
  movie: Proptypes.object
};
