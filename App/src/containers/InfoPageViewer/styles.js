const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 12,
    paddingBottom: 12,
    marginLeft: 40,
    marginRight: 40
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
});

export default styles;
