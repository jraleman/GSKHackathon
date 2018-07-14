import React from 'react';
import StoryNavigationButton from '../StoryNavigationButton';

// export default class StoryNavigation extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {};
//     return ;
//   }

//   render () {
//     return (
//       <div>
//         <StoryNavigationButton
//           direction='left'
//           pageIdFunc={this.props.pageIdDec}
//         />
//         <StoryNavigationButton
//           direction='right'
//           pageIdFunc={this.props.pageIdInc}
//         />
//       </div>
//     );
//   }
// }

const StoryNavigation = ({ pageIdInc, pageIdDec, pageId }) => (
  <div>
    <StoryNavigationButton
      direction='left'
      pageIdFunc={pageIdDec}
      pageId={pageId}
    />
    <StoryNavigationButton
      direction='right'
      pageIdFunc={pageIdInc}
      pageId={pageId}
    />
  </div>
);

export default StoryNavigation;
