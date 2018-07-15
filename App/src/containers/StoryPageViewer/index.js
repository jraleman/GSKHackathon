import { connect } from 'react-redux';
import StoryPageViewer from '../../components/StoryPageViewer';
import { moveToPage } from '../../actions';

const mapStateToProps = state => ({
  story: state.story
});

const mapDispatchToProps = {
  moveToPage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryPageViewer);
