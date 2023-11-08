import {ApolloClient, InMemoryCache} from "@apollo/client";
import {environment} from "../environments/environment";

export const apolloClient = new ApolloClient({
    uri: environment.REACT_APP_GRAPHQL_API_ENDPOINT,
    cache: new InMemoryCache(),
});
