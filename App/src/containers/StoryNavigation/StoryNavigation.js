import { connect } from 'react-redux';
import { pageIdInc, pageIdDec } from '../../actions';
import StoryNavigation from '../../components/StoryNavigation';

const mapStateToProps = state => ({
  pageId: state.page
});

const mapDispatchToProps = {
  pageIdInc,
  pageIdDec
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryNavigation);
