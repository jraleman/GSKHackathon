import React from 'react';
import TabNavbar from '../../components/TabNavbar';
// import styles from './styles';
// import { Tab } from '../../../node_modules/@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flewGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const ButtonAppBar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position='static'>
      <Toolbar>
        {/* <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
          <MenuIcon />
        </IconButton> */}
        <Typography variant='title' color='inherit' className={classes.flex}>
        Info
        </Typography>
        <Button color='inherit'>Vaccine Basics</Button>
        <Button color='inherit'>Infants/Children</Button>
        <Button color='inherit'>Pre-Teens</Button>
        <Button color='inherit'>Teens</Button>
        <Button color='inherit'>Adults</Button>
        <Button color='inherit'>Diseases</Button>
      </Toolbar>
    </AppBar>
  </div>
);

const TopBarWrapper = withStyles(styles)(ButtonAppBar);

const InfoPageViewer = () => (
  <div>
    <TopBarWrapper />
    <InfoBody />
    {/* <TabNavbar /> */}
  </div>
);

const InfoBody = () => (
  <div>
    <h1>Frequently Asked Questions</h1>
    <br />
    <ul>
      <p>
        Why are vaccinations important?
      </p>
      <li>
        Vaccinations protect your child against serious diseases by stimulating the immune system to create antibodies against certain bacteria or viruses
      </li>
      <p>
      What diseases do vaccines protect against?
      </p>
      <li>
      Immunizing your baby with vaccines protects against serious viral diseases like measles, whooping cough, polio, tetanus, rotavirus, hepatitis A, hepatitis B, chickenpox, influenza, and others
      </li>
      <p>
      I don’t know anybody who has had these diseases. Why does my baby need these vaccines?
      </p>
      <li>
      While a few of these diseases have virtually disappeared because of vaccination, outbreaks of measles and whooping cough still occur in the U.S. Even if some diseases do completely disappear in the U.S., they are common in other parts of the world and are just a plane ride away. If we stop vaccinating against these diseases, many more people will become infected. Vaccinating your child will keep him or her safe.
      </li>
      <p>
      Are there better ways to protect my baby against these diseases?
      </p>
      <li>
      No. Breastfeeding offers temporary immunity against some minor infections like colds, but it is not an effective means of protecting a child from the specific diseases prevented by vaccines. Likewise, vitamins won’t protect against the bacteria and viruses that cause these serious diseases. Chiropractic remedies, naturopathy, and homeopathy are totally ineffective in preventing vaccine-preventable diseases.
      </li>
    </ul>
    <h1>
      Common Arguments Against Vaccines Demystified
    </h1>
    <ol>
      <li>
        Some parents think that getting the "natural" disease is preferable to "artificial" vaccination, leading to a "natural" immunity. Some even arrange chickenpox "parties" to ensure their child gets infected. It’s true that for some diseases, getting infected will lead to immunity, but the price paid for natural disease can include paralysis, brain injury, liver cancer, deafness, blindness, or even death. When you consider the seriousness of these risks, vaccination is definitely the better choice.
      </li>
    </ol>
    <a href='https://medium.com/the-method/8-common-arguments-against-vaccines-5d45ad9c1e29'>
    http://www.vaccineinformation.org/faqs-common-questions/
    </a>
    <br />
    <a href='https://medium.com/the-method/8-common-arguments-against-vaccines-5d45ad9c1e29'>
    https://medium.com/the-method/8-common-arguments-against-vaccines-5d45ad9c1e29
    </a>
  </div>
);

export default InfoPageViewer;
