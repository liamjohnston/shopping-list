// import React from 'react';
//
// class Favourite extends React.Component {
//   constructor() {
//     super();
//     this.addFavourite = this.addFavourite.bind(this);
//     this.setOrder = this.setOrder.bind(this);
//   }
//
//   componentWillMount() {
//
//   }
//
//   addFavourite(event) {
//     const item = {
//       name: event.target.innerHTML,
//       got: false,
//       order: parseInt(event.target.dataset.order)
//     };
//
//     //this.props.addItem(item);
//     console.log(item);
//   }
//
//   setOrder(order) {
//     return {
//       order: order
//     };
//   }
//
//   render() {
//     return (
//       <div
//         className="favourite"
//         onClick={this.addFavourite}
//         style={this.setOrder(this.props.favouriteOrder)}
//         data-order={this.props.favouriteOrder}
//       >
//         {this.props.favouriteName}
//       </div>
//     );
//   }
// }
//
// export default Favourite;
