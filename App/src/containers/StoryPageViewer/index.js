import { connect } from 'react-redux';
import StoryPageViewer from '../../components/StoryPageViewer';

const mapStateToProps = state => ({
  pageId: state.page
});

export default connect(
  mapStateToProps,
  null
)(StoryPageViewer);
