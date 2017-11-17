import React from 'react';

class AddItemForm extends React.Component {
  constructor() {
    super();
    this.createItem = this.createItem.bind(this);
  }

  createItem(event) {
    event.preventDefault();

    const item = {
      name: this.name.value,
      got: false,
      order: 200
    };

    this.props.addItem(item);
    this.itemForm.reset();
  }

  render() {
    return (
      <form
        ref={input => {
          this.itemForm = input;
        }}
        onSubmit={this.createItem}
        className="add-form"
      >
        <input
          ref={input => {
            this.name = input;
          }}
          type="text"
          placeholder="🍕 Add foodstuffs"
          className="form-field"
        />
        {/* &nbsp;&nbsp;
        <button className="btn" type="submit">
          Add item
        </button> */}
      </form>
    );
  }
}

export default AddItemForm;
