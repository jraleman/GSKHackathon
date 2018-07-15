const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    marginBottom: 12,
    marginTop: 12
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
});

export default styles;
