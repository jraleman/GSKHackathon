import React from 'react';
import TabNavbar from '../../components/TabNavbar';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import styles from './styles';

import InfoIcon from '@material-ui/icons/Info';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

class InfoPageViewer extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {};
    return ;
  }
  /*
  ** TODO: Export to a single component.
  */
  _ButtonAppBar = () => (
    <div className={this._classes.root}>
      <AppBar position='static'>
        <Toolbar style={{ selfAlign: 'center' }}>
          <Button color='inherit'>{ "Vaccine Basics" }</Button>
          <Button color='inherit'>{ "Infants/Children" }</Button>
          <Button color='inherit'>{ "Pre-Teens" }</Button>
          <Button color='inherit'>{ "Teens" }</Button>
          <Button color='inherit'>{ "Adults" }</Button>
          <Button color='inherit'>{ "Diseases" }</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
  render () {
    return (
      <div className={this._classes.root}>
        { <this._ButtonAppBar /> }
        { /* FAQ Container*/ }
        <div className={ this._classes.divisor }>
          <Paper
            className={ this._classes.paper }
            elevation={ 1 }
          >
            { /* Title Content*/ }
            <Typography
              variant='title'
              color='inherit'
              style={{ marginLeft: 12 }}
            >
              { "Frequently Asked Questions" }
            </Typography>

            { /* FAQ List */ }
            <List>
              { /* FAQ 1 */ }
               <ListItem>
                 <Avatar>
                   <ImageIcon />
                 </Avatar>
                <ListItemText
                  primary={ "Why are vaccinations important?" }
                  secondary={"Vaccinations protect your child against serious diseases by stimulating the immune system to create antibodies against certain bacteria or viruses"}
                />
               </ListItem>
               <li>
                 <Divider inset />
               </li>
               { /* FAQ 2 */ }
                <ListItem>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                 <ListItemText
                   primary={ "What diseases do vaccines protect against?" }
                   secondary={"Immunizing your baby with vaccines protects against serious viral diseases like measles, whooping cough, polio, tetanus, rotavirus, hepatitis A, hepatitis B, chickenpox, influenza, and others"}
                 />
                </ListItem>
                <li>
                  <Divider inset />
                </li>
                { /* FAQ 3 */ }
                 <ListItem>
                   <Avatar>
                     <ImageIcon />
                   </Avatar>
                  <ListItemText
                    primary={ "I don’t know anybody who has had these diseases. Why does my baby need these vaccines?" }
                    secondary={"While a few of these diseases have virtually disappeared because of vaccination, outbreaks of measles and whooping cough still occur in the U.S. Even if some diseases do completely disappear in the U.S., they are common in other parts of the world and are just a plane ride away. If we stop vaccinating against these diseases, many more people will become infected. Vaccinating your child will keep him or her safe."}
                  />
                 </ListItem>
                 <li>
                   <Divider inset />
                 </li>
                 { /* FAQ 4
                            TODO: Don't add "<li> <Divider inset /> </li>" at the end of the
                            last element of the list.
                   */ }
                  <ListItem>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                   <ListItemText
                     primary={ "Are there better ways to protect my baby against these diseases?" }
                     secondary={"No. Breastfeeding offers temporary immunity against some minor infections like colds, but it is not an effective means of protecting a child from the specific diseases prevented by vaccines. Likewise, vitamins won’t protect against the bacteria and viruses that cause these serious diseases. Chiropractic remedies, naturopathy, and homeopathy are totally ineffective in preventing vaccine-preventable diseases."}
                   />
                  </ListItem>
            </List>
        </Paper>
      </div>

      <div className={ this._classes.divisor }>
        <Paper
          className={ this._classes.paper }
          elevation={ 1 }
        >
          <Typography
            variant='title'
            color='inherit'
            style={{ marginLeft: 12 }}
          >
            { "Common Arguments Against Vaccines Demystified" }
          </Typography>

          <ol>
            <li>
              { 'Some parents think that getting the "natural" disease is preferable to "artificial" vaccination, leading to a "natural" immunity. Some even arrange chickenpox "parties" to ensure their child gets infected. It’s true that for some diseases, getting infected will lead to immunity, but the price paid for natural disease can include paralysis, brain injury, liver cancer, deafness, blindness, or even death. When you consider the seriousness of these risks, vaccination is definitely the better choice.' }
            </li>
          </ol>
          { /* FAQ Button */}
          <Button
            variant="contained"
            color="primary"
            className={ this._classes.button }
          >
            <Icon className={ this._classes.leftIcon }>
              <InfoIcon />
            </Icon>
            { "FAQ Common Questions" }
          </Button>
          { /* Arguments Button */ }
          <Button
            variant="contained"
            color="primary"
            className={ this._classes.button }
          >
            <Icon className={ this._classes.leftIcon }>
              <InfoIcon />
            </Icon>
            { "Common Arguments Against Vaccines" }
          </Button>


            <a href='https://medium.com/the-method/8-common-arguments-against-vaccines-5d45ad9c1e29'>
            http://www.vaccineinformation.org/faqs-common-questions/
            </a>
            <br />
            <a href='https://medium.com/the-method/8-common-arguments-against-vaccines-5d45ad9c1e29'>
            https://medium.com/the-method/8-common-arguments-against-vaccines-5d45ad9c1e29
            </a>


          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(InfoPageViewer);
