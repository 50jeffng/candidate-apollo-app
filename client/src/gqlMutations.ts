import { gql } from '@apollo/client';

export const CREATE_CANDIDATE = gql`
    mutation CreateCandidate($name: String!, $description: String, $isHired: Boolean){ 
        createCandidate(name: $name, description: $description, isHired: $isHired){
            id,
            name,
            description,
            skills{
                name    
            },
        }
    }
`;

export const CREATE_SKILL = gql`
    mutation CreateSkill($name: String!, $description: String, $type: String){
        createSkill(name: $name, description: $description, type: $type){
            id,
            name,
            description,
            type,
        }
    }
`;

export const DELETE_CANDIDATE = gql`
    mutation DeleteCandidate($id: ID!){
        deleteCandidate(id: $id){
            id,
            name,
            description,
            skills{
                name    
            },
        }
    }
`;

export const DELETE_SKILL = gql`
    mutation DeleteSkill($id: ID!){
        deleteSkill (id: $id){
            id,
            name,
            description,
            type,
        }
    }
`;