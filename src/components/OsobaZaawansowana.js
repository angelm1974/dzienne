import React, { Component } from 'react'

export default class OsobaZaawansowana extends Component {
  static defaultProps = {
    obrazek: "https://art.ngfiles.com/thumbnails/374000/374601_full.png?f1555228582",
    opis: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "https://www.newgrounds.com/art/view/lilg/rick-and-morty-go-to-hell"
};

  render() {
    return (
        <div class="card">
        <img
          src={this.props.obrazek}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            {this.props.opis}
          </p>
          <a
            href={this.props.link}
            target="new"
            class="btn btn-primary"
          >
            Idź do strony
          </a>
        </div>
      </div>
    )
  }
}
