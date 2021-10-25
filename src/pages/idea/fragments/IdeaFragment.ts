import gql from "graphql-tag";
import { useQueryParam } from "hooks/util";
import { cache } from "pages/_app";
import { TIdeas } from './../../../generated/api';

const useIdeaFragment = (): TIdeas => {
    const ideaId = useQueryParam('id');
    const result = cache.readFragment({
        id: `ideas:${ideaId}`, // The value of the idea's cache id
        fragment: gql`
            fragment IdeaFragment on ideas {
                id
                name
                description
                field
                mission_statement
                competitors
                team
                additional_information
                is_published
                user_id
                status
            }
        `
    }) as TIdeas;

    return result;
}

export default useIdeaFragment;