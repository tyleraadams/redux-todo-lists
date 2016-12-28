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
        <option value="SHOW_ALL">Show All</option>
        <option value="SHOW_COMPLETE">Show Complete</option>
        <option value="SHOW_INCOMPLETE">Show Incomplete</option>
      </select>
      <button type="submit">Set Filter</button>
    </form>
  );
}

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps;
  const visibilityFilterId = state.entities.lists[id].visibilityFilter;
  const visibilityFilter = state.entities.visibilityFilters[visibilityFilterId];
  const visibilityFilterName = visibilityFilter.name;
  return {
    listId: id,
    visibilityFilter: visibilityFilterName
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    setFilter: (filter) => dispatch(setFilter(filter, id))
  }
};

const setVisibilityFilterContainer = connect(mapStateToProps, mapDispatchToProps)(setVisibilityFilter);

export default setVisibilityFilterContainer;