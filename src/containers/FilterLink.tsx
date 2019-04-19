import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState, FilterType } from "../types";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

interface FilterLinkProps {
  filter: FilterType;
}

const mapStateToProps = (state: AppState, ownProps: FilterLinkProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: FilterLinkProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
