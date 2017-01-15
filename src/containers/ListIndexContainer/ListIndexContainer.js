import ListIndex from '../../components/ListIndex/ListIndex';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {

  const { lists, result } =  state;
  const builtLists = result.map(id=>lists[id])
  // console.log('>>> ',lists, result)
  return {
    lists: builtLists
  };
};
const ListIndexContainer = connect(mapStateToProps)(ListIndex);

export default ListIndexContainer;