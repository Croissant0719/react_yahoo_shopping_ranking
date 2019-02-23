import { connect } from "react-redux";
import Ranking from "../components/Ranking";
import * as actions from "../actions/Ranking";

const mapStateToProps = (state, ownProps) => ({
  categoryId: ownProps.categoryId,

  // send category and ranking imformation
  category: state.Ranking.category,
  ranking: state.Ranking.ranking,
  error: state.Ranking.error,
});

const mapDispatchToProps = dispatch => ({
  // connect onMount and onUpdate to fetchRanking
  onMount(categoryId) {
    dispatch(actions.fetchRanking(categoryId));
  },
  onUpdate(categoryId) {
    dispatch(actions.fetchRanking(categoryId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ranking);
