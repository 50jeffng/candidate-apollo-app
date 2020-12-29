import { gql } from '@apollo/client';

export const CANDIDATES = gql`
    query { 
        candidates{
            id,
            name,
            description,
            skills{
                name    
            },
        }
    }
`;

export const SKILLS = gql`
    query {
        skills{
            id,
            name,
            description,
            type,
        }
    }
`;