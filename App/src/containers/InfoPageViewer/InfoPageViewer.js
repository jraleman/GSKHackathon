import React from 'react';
import TabNavbar from '../../components/TabNavbar';
import styles from './styles';
import { Tab } from '../../../node_modules/@material-ui/core';

// class InfoPageViewer extends React.Component {
//   constructor (props) {
//     super(props);
//     this._classes = this.props.classes;
//     this.state = {};
//     return ;
//   }
//   render () {
//     return (
//       <div className={ this._classes.root }>
//         <div style={{ textAlign: 'center' }}>
//           <p>{ "InfoPageViewer" }</p>
//         </div>
//         <TabNavbar />
//       </div>
//     );
//   }
// }

const InfoPageViewer = () => (
  <div>
    <TabNavbar />
  </div>
)

export default InfoPageViewer;
