import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../actions';

function setVisibilityFilter ({ setFilter, listId, visibilityFilter }) {
  let input;
  return (
    <form onSubmit={ e => { e.preventDefault();
                            setFilter(input.value);
                          } }>
      <select name="visibility_filter" ref={node => input = node} defaultValue={visibilityFilter}>
        <option value="all">Show All</option>
        <option value="complete">Show Complete</option>
        <option value="incomplete">Show Incomplete</option>
      </select>
      <button type="submit">Set Filter</button>
    </form>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const { lists } = state;
  const visbilityFilter = lists[id].visibilityFilter;

  return {
    listId: id,
    visibilityFilter: visbilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    setFilter: filter => dispatch(setFilter(filter, id))
  }
};

const setVisibilityFilterContainer = connect(mapStateToProps, mapDispatchToProps)(setVisibilityFilter);

export default setVisibilityFilterContainer;