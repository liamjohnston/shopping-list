import React from 'react';
import favourites from '../favourites';
import Favourite from './Favourite';
import { Link } from 'react-router';

class Favourites extends React.Component {
  componentWillMount() {
    const items = favourites.items;
    this.setState({ favourites: items });
  }

  render() {
    return (
      <div className="wrap">
        <div className="favourites-wrap">
          <h1>❤️ Favourites 🙌</h1>
          <p>[not built yet...]</p>
          <div className="favourites-list">
            {this.state.favourites.map(function(val) {
              return <Favourite key={val} favouriteName={val} />;
            })}
          </div>
        </div>
        <div className="text-center">
          <Link to="/" className="btn">
            Done
          </Link>
        </div>
      </div>
    );
  }
}

export default Favourites;
