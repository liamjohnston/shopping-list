import React from 'react';
import { Link } from 'react-router';
import AddItemForm from './AddItemForm';
import Item from './Item';
import base from '../base';

const initialState = {
  items: {},
  isLoading: true
};

class App extends React.Component {
  constructor() {
    super();

    this.addItem = this.addItem.bind(this);
    this.clearList = this.clearList.bind(this);
    this.toggleGot = this.toggleGot.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this.state = initialState;
  }

  componentWillMount() {
    //The URL = the part in the firebase DB we care about.
    //The 'state' bit is the part of our state we care about.
    this.ref = base.syncState(`items`, {
      context: this,
      state: 'items',
      then() {
        this.setState({ isLoading: false });

        const curState = { ...this.state.items };
        const favs = this.props.location.state;
        const newState = { ...curState, ...favs };

        this.setState({ items: newState });
      }
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  clearList() {
    // //this.state = initialState;
    //hmm... seems 'destructive'?:
    this.setState({ items: null });
  }

  toggleGot(key) {
    const items = { ...this.state.items };

    items[key].got = !items[key].got;

    this.setState({
      items
    });
  }

  addItem(newItem) {
    //get state
    const items = { ...this.state.items };

    const timestamp = Date.now();
    items[`item-${timestamp}`] = newItem;

    //set state with new item
    this.setState(
      { items },
      //yuck... but really want dom elemewnt added before attmepting to scroll.
      //TODO: look into a better way. is there a lifecycle method on the add component?
      setTimeout(function() {
        window.scrollTo(0, document.body.scrollHeight);
      }, 100)
    );
  }

  removeItem(key) {
    const items = { ...this.state.items };
    items[key] = null; //firebase likes us to do it this way
    this.setState({ items });
  }

  render() {
    return (
      <div className="wrap">
        <div className="header-wrap">
          <button className="btn" onClick={this.clearList}>
            Clear
          </button>
          <h1>💰 Shoppy 🍕</h1>
          <Link to="/favourites" className="btn">
            Faves
          </Link>
        </div>
        <div className="shopping-list">
          {this.state.isLoading === true && <div className="loader" />}
          {Object.keys(this.state.items).map(key => (
            <Item
              key={key}
              index={key}
              order={this.state.items[key].order}
              details={this.state.items[key]}
              toggleGot={this.toggleGot}
              removeItem={this.removeItem}
            />
          ))}
        </div>
        {this.state.isLoading === false && (
          <div className="add-wrap">
            <AddItemForm addItem={this.addItem} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
