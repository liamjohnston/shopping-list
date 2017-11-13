import React from 'react';

class Favourite extends React.Component {
  constructor() {
    super();
    this.addFavourite = this.addFavourite.bind(this);
  }

  addFavourite(event) {
    const item = {
      name: event.target.innerHTML,
      got: false
    };

    //this.props.addItem(item);
    console.log(item);
    console.log('not built yet.......');
  }

  render() {
    return (
      <div className="favourite" onClick={this.addFavourite}>
        {this.props.favouriteName}
      </div>
    );
  }
}

export default Favourite;
