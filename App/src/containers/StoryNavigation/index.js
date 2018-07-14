import { connect } from 'react-redux';
import { pageIdInc, pageIdDec } from '../../actions';
import StoryNavigation from '../../components/StoryNavigation';

const mapStateToProps = state => ({
  pageId: state.page
});

// const mapDispatchToProps = dispatch => ({
//   pageIdInc: () => dispatch(pageIdInc),
//   pageIdDec: () => dispatch(pageIdDec)
// });

const mapDispatchToProps = {
  pageIdInc,
  pageIdDec
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryNavigation);
