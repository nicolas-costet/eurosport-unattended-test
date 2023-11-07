import {gql} from "@apollo/client";
import {apolloClient} from "../../app/apollo.client";
const GET_PLAYERS = gql`
  query GetPlayers {
    players {
       id
       firstname
       lastname
       shortname
       sex
       picture {
        url
       }
       country {
        picture {
            url
        }
        code
       }
       stats {
        rank
        points
        weight
        height
        age
       }
    }
  }
`;

export function fetchPlayers() {
    return apolloClient.mutate({
        mutation: GET_PLAYERS,
    });
}