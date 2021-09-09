import { ApolloProvider } from '@apollo/react-hooks';
import React from "react";
import ReactDOM from "react-dom";
import client from "./apllo";
import App from "./components/App";

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root"))
;
