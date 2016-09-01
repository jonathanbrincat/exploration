import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, HashHistory } from "react-router";

//import Bootstrap from "../vendor/bootstrap-without-jquery/bootstrap3/bootstrap-without-jquery.min";

import Layout from "./_components/Layout";
import Featured from "./Featured";
import Archives from "./Archives";
import Settings from "./Settings";


const appReact = document.getElementById("app-react");

ReactDOM.render(
	<Router history={ HashHistory }>
		<Route path="/" component={ Layout }>
			<IndexRoute component={ Featured }></IndexRoute>
			<Route path="archives(/:article)" name="archives" component={ Archives }></Route>
			<Route path="settings" name="settings" component={ Settings }></Route>
		</Route>
	</Router>
, appReact);