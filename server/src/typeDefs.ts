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
    addCandidate(name: String!): Candidate
    deleteCandidate(id: ID!): Boolean!
    addSkill(name: String!): Skill
    deleteSkill(id: ID!): Boolean!
  }

  # type UpdateResponse {
  #   success: Boolean!
  #   message: String
  #   modified: Modification!
  # }

  type Modification {
    candidates: [Candidate]
    skills: [Skill]
  }

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

