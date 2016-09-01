import React from "react";


export default class Article extends React.Component {

    render() {
    	const { title } = this.props;

        return (
            //JSX
            <div class="col-md-4">
            	<h2>{ title }</h2>
            	<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.</p>
            	<a href="#" class="btn btn-default">More Info</a>
            </div>
        );
    }
}