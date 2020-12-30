import {gql} from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  type Query {
    candidates: [Candidate!]!
    candidate(id: ID!): Candidate
    skills: [Skill!]!
    skill(id: ID!): Skill
  }

  type Mutation {
    createCandidate(name: String!, description: String, isHired: Boolean): Candidate
    deleteCandidate(id: ID!): Candidate
    createSkill(name: String!, description: String, type: String): Skill
    deleteSkill(id: ID!): Skill
  }

  # type UpdateResponse {
  #   success: Boolean!
  #   message: String
  #   modified: Modification!
  # }

  # type Modification {
  #   candidates: [Candidate]
  #   skills: [Skill]
  # }

  type Skill {
    id: ID!
    name: String!
    description: String
    type: String
  }

  type Candidate {
    id: ID!
    name: String!
    description: String
    skills: [Skill!]!
    isHired: Boolean
  }
`;

