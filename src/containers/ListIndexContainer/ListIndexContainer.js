import ListIndex from '../../components/ListIndex/ListIndex';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {

  const {lists} =  state;
  console.log(lists)
  return {
    lists
  };
};
const ListIndexContainer = connect(mapStateToProps)(ListIndex);

export default ListIndexContainer;