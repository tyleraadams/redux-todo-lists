import ListIndex from '../../components/ListIndex/ListIndex';
import { connect } from 'react-redux';
import { getLists } from '../../reducers'

const mapStateToProps = (state, ownProps) => {
  const { lists } =  state;
  return {
    lists: getLists(lists)
  };
};

const ListIndexContainer = connect(mapStateToProps)(ListIndex);

export default ListIndexContainer;