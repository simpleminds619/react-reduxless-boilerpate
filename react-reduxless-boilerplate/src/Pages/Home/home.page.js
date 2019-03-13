import React, { PureComponent } from 'react';

class HomePage extends PureComponent {
    togglePageLoad = ()=>{
        this.props.toggleHomePageLoaded();
    }
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <p>{this.props.welcomeMessage.message}</p>
                <button onClick={this.togglePageLoad}> Toggle Me </button>
            </div>
        );
    }
}

export default HomePage;