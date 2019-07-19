import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import App from "./component/App";
import {ApolloProvider} from "react-apollo-hooks";

const client = new ApolloClient({
    uri: "http://192.168.56.102:8080/v1/graphql"
});

const appRoot = <ApolloProvider client={client}><App/></ApolloProvider>;
ReactDOM.render(appRoot, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
