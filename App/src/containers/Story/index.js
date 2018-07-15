import { connect } from 'react-redux';
import Story from '../../components/Story';

const mapStateToProps = state => ({
  story: state.story
});

export default connect(
  mapStateToProps,
  {}
)(Story);
