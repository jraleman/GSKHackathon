import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const suggestions = [
  {
    storyId: "storyEight",
    title: "Take it or Leave it",
    author: "Zeid",
    cover: "https://capspediatrics.com/images/vaccine-cartoon.png",
    description: "lorem ipsum",
    navigate: "/path/to/storyEight",
  },
  {
    storyId: "storyFive",
    title: "Tough Laughs",
    author: "Zeid",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTgtHKhiFooOzmsRehFMeeiskVeLnTIoXOf20fVv9GiIgMah9X",
    description: "lorem ipsum",
    navigate: "/path/to/storyFive",
  },
  {
    storyId: "storyFour",
    title: "The Adventures of the VaccineX",
    author: "Zeid",
    cover: "https://banner2.kisspng.com/20180311/xdw/kisspng-vaccination-vaccine-child-preventive-healthcare-di-baby-vaccination-cartoon-cartoon-5aa5c185ac9661.1590887415208124217069.jpg",
    description: "lorem ipsum",
    navigate: "/path/to/storyFour",
  },
  {
    storyId: "storyNine",
    title: "Vac-woman!",
    author: "Zeid",
    cover: "https://www.defeatdd.org/sites/default/files/Vaccine%20v%20rota.jpg",
    description: "lorem ipsum",
    navigate: "/path/to/storyNine",
  },
  {
    storyId: "storyOne",
    title: "VAC and Lola: Curing the Disease",
    author: "Jone Doe",
    cover: "https://previews.123rf.com/images/corbacserdar/corbacserdar1602/corbacserdar160200552/52766731-white-backround-vector-illustration-of-a-measles-kids.jpg",
    description: "lorem ipsum",
    navigate: "/path/to/storyOne",
  },
  {
    storyId: "storySeven",
    title: "Don't Slow Down!",
    author: "Zeid",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5pKpcpXadfk3zxOlHC2rjYRIbD3jyHqj_wlJhCZvDaOQxwyz",
    description: "lorem ipsum",
    navigate: "/path/to/storySeven",
  },
  {
    storyId: "storySix",
    title: "Balance the World",
    author: "Zeid",
    cover: "https://www.omsj.org/wp-content/uploads/vacla.jpg",
    description: "How the universe get its balance is all about 50/50",
    navigate: "/path/to/storySix",
  },
  {
    storyId: "storyTen",
    title: "Vaccines are friends, not enemies!",
    author: "Zeid",
    cover: "https://thedo.osteopathic.org/wp-content/uploads/2015/04/vaccines.png",
    description: "lorem ipsum",
    navigate: "/path/to/storyTen",
  },
  {
    storyId: "storyThree",
    title: "Curing the World",
    author: "Eugene",
    cover: "https://render.fineartamerica.com/images/rendered/default/poster/7.000/8.000/break/images/artworkimages/medium/1/polio-cartoon-1957-granger.jpg",
    description: "lorem ipsum",
    navigate: "/path/to/storyThree",
  },
  {
    storyId: "storyThree",
    title: "Curing the World",
    author: "Eugene",
    cover: "https://render.fineartamerica.com/images/rendered/default/poster/7.000/8.000/break/images/artworkimages/medium/1/polio-cartoon-1957-granger.jpg",
    description: "lorem ipsum",
    navigate: "/path/to/storyThree",
  }
];

/*
const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
];
*/



// Call API -> Parse Data -> Output suggestionsList
/*
function parseSuggestionData (data) {

  return ;
}
*/

function renderInput(inputProps) {
  const { classes, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: ref,
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.title, query);
  const parts = parse(suggestion.title, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.title;
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.title.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

class AutoSuggest extends React.Component {
  state = {
    value: '',
    suggestions: [],
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          classes,
          placeholder: this.props.placeholder,
          value: this.state.value,
          onChange: this.handleChange,
        }}
      />
    );
  }
}

AutoSuggest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoSuggest);
