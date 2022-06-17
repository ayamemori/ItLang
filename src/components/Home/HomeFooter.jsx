import React, { Component } from 'react';

export default class HomeFooter extends Component {
    render() {
        return (
            <>
                <div className="footer bg-dark">
                    <p className="text-light">
                        Made by Rinako and Argentu. <br />
                        Special thanks to SeKaMo for the initial idea.
                    </p>

                    <small className="text-light text-muted">
                        ©2022. NEMK.
                    </small>
                </div>
            </>
        );
    }
}
