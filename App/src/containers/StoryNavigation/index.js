import { connect } from 'react-redux';
import { pageIdInc, pageIdDec } from '../../actions';
import StoryNavigation from '../../components/StoryNavigation';

const mapDispatchToProps = {
  pageIdInc,
  pageIdDec
};

export default connect(
  null,
  mapDispatchToProps
)(StoryNavigation);
