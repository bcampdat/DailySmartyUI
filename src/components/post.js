import React, { Component } from "react";
import AnimateHeight from "react-animate-height";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
  }
  renderTopics() {
    let topics = this.props.starships.map((topic, index) => {
      return (
        <span className="post-topic" key={index}>
          {topic}
        </span>
      );
    });
    return topics;
  }

  // render() {
  //     return (
  //         <li className="recent-post">
  //             <div className="recent-post__title">
  //                 {this.props.name}
  //                 {/* {this.props.title}  en api delay smarty*/}
  //             </div>
  //             <div className="recent-post__topics">
  //                 {this.renderTopics()}
  //             </div>
  //         </li>
  //     )
  // }

  getNameForPostLink(str) {
    //     // https://swapi.dev/api/films/1/
    // let link = str.substring(str.indexOf("/api/") + 5, str.lastindexOf("/"));

    var n = str.lastIndexOf("/api/");
    var link = str.substring(n + 5, str.length);

    if (link.includes("/")) {
      link = link.replace("/", " ");
    }

    if (n + 1 == str.length) {
      link = str.slice(0, n);
      n = link.lastIndexOf("/");
      link = str.substring(n + 1, str.length - 1);
    }

    if (link.includes(".html")) {
      link = link.substring(0, link.length - 5);
    }
    if (link.includes(".htm")) {
      link = link.substring(0, link.length - 4);
    }

    return link;
  }

  // interface IFilm {
  //   title: string;
  //   episode_id: number;
  //   opening_crawl: string;
  //   director: string;
  //   producer: string;
  //   release_date: string;
  //   characters: string[];
  //   planets: string[];
  //   starships: string[];
  //   vehicles: string[];
  //   species: string[];
  //   created: string;
  //   edited: string;
  //   url: string;
  // }

  renderLinks() {
    let links = this.props.films.map((url, index) => {
      return (
        <div className="post-link" key={index}>
          <div className="post-link__box"></div>
          <div className="post-link__link">
            {/* <a href={url}>Useful Link #{url}</a> */}
            <a href={url}>{this.getNameForPostLink(url)}</a>
          </div>
        </div>
      );
    });
    if (links == 0) {
      return <div className="no-content">No Post Links</div>;
    }
    return links;
  }

  render() {
    if (this.props.type == "recent") {
      return (
        <li className="recent-post">
          <div className="recent-post__title">{this.props.name}</div>
          <div className="recent-post__topics">{this.renderTopics()}</div>
        </li>
      );
    } else if (this.props.type == "result") {
      return (
        // <li className="result-post">
        <li
          className="result-post"
          onMouseEnter={() => this.setState({ height: 70 })}
          onMouseLeave={() => this.setState({ height: 0 })}
        >
          <div className="result-post__topics">{this.renderTopics()}</div>
          <div className="result-post__title">
            {/* {this.props.name}
              </div>
              <div className="result-post__links">
                  {this.renderLinks()} */}
            {/* <a
              href={this.props.url_for_post}
              onMouseEnter={() => this.setState({ height: 70 })}
              onMouseLeave={() => this.setState({ height: 0 })}
            > */}
            <a href={this.props.films[0]}>{this.props.name}</a>
          </div>
          <AnimateHeight duration={500} height={this.state.height}>
            <div className="result-post__links">{this.renderLinks()}</div>
          </AnimateHeight>
        </li>
      );
    }
  }
}

export default Post;
