/*eslint-enable*/
import React, { Component } from 'react';
import { showHomeHeader } from '../components/Home/HomeShow';

export default class NotFoundPage extends Component {
    render() {
        return (
            <>
                {showHomeHeader()}
                <div className="page404">
                    <div class="error">404</div>
                    <span class="info">File not found</span>
                    <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" class="static" />
                </div>
            </>
        );
    }
}
/*eslint-enable*/