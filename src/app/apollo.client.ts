import {ApolloClient, InMemoryCache} from "@apollo/client";

export const apolloClient = new ApolloClient({
    uri: 'https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/',
    cache: new InMemoryCache(),
});
