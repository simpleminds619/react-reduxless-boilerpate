import {selectors, actions} from '../../redux/reducer';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HomePage from './home.page';

const mapStoreToProps = (store) => {
    return {
        isLoading: selectors.getHomePageLoaded(store),
        welcomeMessage: selectors.getHomePageData(store)
    }
}
const mapActionsToProps = dispatch => bindActionCreators({
    toggleHomePageLoaded : actions.toggleHomePageLoaded
}, dispatch);

export default connect(mapStoreToProps, mapActionsToProps)(HomePage);