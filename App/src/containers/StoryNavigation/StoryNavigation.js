import { connect } from 'react-redux';
import { pageIdInc, pageIdDec } from '../../actions';
import StoryNavigation from '../../components/StoryNavigation';

const mapStateToProps = state => ({
  pageId: state.page
});

const mapDispatchToProps = dispatch => ({
  pageIdInc1: () => dispatch(pageIdInc()),
  pageIdDec1: () => dispatch(pageIdDec())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryNavigation);
