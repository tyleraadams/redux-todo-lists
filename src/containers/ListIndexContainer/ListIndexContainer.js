import ListIndex from '../../components/ListIndex/ListIndex';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const lists = state.result.map(listId => state.entities.lists[listId]);
  return {
    lists: lists
  };
};
const ListIndexContainer = connect(mapStateToProps)(ListIndex);

export default ListIndexContainer;