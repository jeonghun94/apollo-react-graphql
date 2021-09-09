
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://movieql2.vercel.app/"  ,
    cache: new InMemoryCache(),
    resolvers: {
        Movie: {
            isLiked : () => false
        }
    }

});

export default client;