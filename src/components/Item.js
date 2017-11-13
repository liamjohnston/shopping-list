import React from 'react';

class Item extends React.Component {
  render() {
    const name = this.props.details.name;
    const got = this.props.details.got;
    return (
      <div className={`shopping-list-item got_${got}`}>
        <input
          type="checkbox"
          defaultChecked={got}
          id={this.props.index}
          onClick={() => this.props.toggleGot(this.props.index)}
        />
        <label htmlFor={this.props.index}>
          <span>{name}</span>
        </label>
        <button
          className="btn-delete"
          onClick={() => this.props.removeItem(this.props.index)}
        >
          &times;
        </button>
      </div>
    );
  }
}

export default Item;
