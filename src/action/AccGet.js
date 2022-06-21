import React, { Component } from 'react';

export default class AccGet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            erorr: null,
            isLoaded: false,
            key: '',
            arr: []
        };
    }

    componentDidMount() {
        fetch("")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        key: Object.keys(result)[0],
                        arr: result[key]
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
        console.log(key, arr);
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isLoaded) {
            return <p> Loading.. </p>
        } else {
            return (
                <>
                    <p key={items.name}>
                        {items[0]['strDrink']}
                        <img src={items[0]['strDrinkThumb']} alt="" />
                    </p>
                </>
            )
        }
    }
}