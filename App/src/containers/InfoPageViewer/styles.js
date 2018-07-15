const styles = theme => ({
  root: {
    flexGrow: 1,
    // paddingTop: 24,
    // paddingBottom: 24,
    marginLeft: 40,
    marginRight: 40
  },
  divisor: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginLeft: 40,
    marginRight: 40
    // paddingTop: 24,
    // paddingBottom: 24,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  faqDivider: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

export default styles;
