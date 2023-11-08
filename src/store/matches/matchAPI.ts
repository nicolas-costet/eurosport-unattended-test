import {gql} from "@apollo/client";
import {apolloClient} from "../apollo.client";
const GET_MATCHES = gql`
  query GetMatches {
    matches {
       id
       players {
        id
        firstname
        lastname
        shortname
        country {
            picture {
                url
            }
        }
       }
       winner {
        id
       }
       startTime
       endTime
    }
  }
`;

export function fetchMatches() {
    return apolloClient.mutate({
        mutation: GET_MATCHES,
    });
}