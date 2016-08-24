import React from "react";

export default class Header extends React.Component {

    render() {
        return (
            //JSX
            <header>Header { this.props.title } </header>
        );
    }
}