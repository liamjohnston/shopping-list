import React from 'react';
import favourites from '../favourites';
//import Favourite from './Favourite';
import { Link } from 'react-router';

class Favourites extends React.Component {
  constructor() {
    super();

    this.selectFavourite = this.selectFavourite.bind(this);

    this.state = {
      favourites: favourites,
      selectedFavourites: {}
    };
  }

  setOrder(order) {
    return {
      order: order
    };
  }

  selectFavourite(event) {
    const selectedFavourite = {
      name: event.target.innerHTML,
      got: false,
      order: parseInt(event.target.dataset.order, 10)
    };

    event.target.classList.add('picked');

    const selectedFavourites = { ...this.state.selectedFavourites };

    const timestamp = Date.now();
    selectedFavourites[`item-${timestamp}`] = selectedFavourite;

    this.setState({ selectedFavourites });
  }

  render() {
    return (
      <div className="wrap">
        <div className="favourites-wrap">
          <h1>❤️ Favourites 🙌</h1>
          <div className="favourites-list">
            {Object.keys(this.state.favourites).map(key => (
              <div
                key={key}
                className="favourite"
                onClick={this.selectFavourite}
                data-order={this.state.favourites[key].order}
                style={this.setOrder(this.state.favourites[key].order)}
              >
                {this.state.favourites[key].name}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link
            to={{
              pathname: '/',
              state: this.state.selectedFavourites
            }}
            className="btn"
          >
            Add to list
          </Link>
        </div>
      </div>
    );
  }
}

export default Favourites;
