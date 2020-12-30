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

export const CANDIDATE = gql`
    query Candidate($id: ID!) {
        candidate (id: $id){
            id,
            name,
            description,
            skills{
                name    
            },
        }
    }
`;

export const SKILL = gql`
    query Skill ($id: ID!) {
        skill (id: $id){
            id,
            name,
            description,
            type,
        }
    }
`;