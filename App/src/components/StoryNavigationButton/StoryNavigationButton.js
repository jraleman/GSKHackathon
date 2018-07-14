import React from 'react';

// export default class StoryNavigationButton extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {};
//     this.direction = props.direction;
//     this.pageIdFunc = props.pageIdFunc;
//     return ;
//   }

//   render () {
//     return (
//       <button onClick={this.pageIdFunc} >
//         { this.direction }
//       </button>
//     );
//   }
// }

const StoryNavigationButton = ({ direction, pageIdFunc }) => (
  <button onClick={pageIdFunc}>
    { direction }
  </button>
);

export default StoryNavigationButton;
