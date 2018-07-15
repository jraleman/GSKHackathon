import { connect } from 'react-redux';
import StoryPageViewer from '../../components/StoryPageViewer';

const mapStateToProps = state => ({
  story: state.story
});

export default connect(
  mapStateToProps,
  null
)(StoryPageViewer);
