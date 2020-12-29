import mongoose, { Query } from "mongoose";
import { Candidate } from "./models/candidate";
import { Skill } from "./models/skill";

// Provide resolver functions for your schema fields
export const resolvers = {
    Query: {
      candidates: async () => {return await Candidate.find();},
      candidate: async (_: unknown, {id}: {id: string}) => {
        if(!mongoose.Types.ObjectId.isValid(id)) return null;
        return await Candidate.findById(id, null, null, (err, doc) => {
          if(err) {
            console.error(err);
            return null;
          }
          return doc;
        });
      },
      skills: async () => {return await Skill.find();},
      skill: async (_: unknown, {id}: {id: string}) => {
        if(!mongoose.Types.ObjectId.isValid(id)) return null;
        return await Skill.findById(id, null, null, (err, doc) => {
          if(err) {
            console.error(err);
            return null;
          }
          return doc;
        });
      },
    },

    Mutation: {
      createCandidate: async (_: unknown, props: {name: string, description: string, isHired: boolean}) => {
        try {
          const candidate = new Candidate(props);
          const doc = await candidate.save();
          return doc;
        } catch(error) {
          console.error(error);
          return null;
        }
      },

      createSkill: async (_: unknown, props: {name: string, description: string, type: string}) => {
        try {
          const skill = new Skill(props);
          const doc = await skill.save();
          return doc;
        } catch(error) {
          console.error(error);
          return null;
        }
      },

      deleteCandidate: async (_: unknown, {id}: {id: string}) => {
        if(!mongoose.Types.ObjectId.isValid(id)) return false;
        try {
          const doc = await Candidate.findByIdAndDelete(id);
          if(!doc) return null;
          return doc;
        } catch(error) {
          console.error(error);
          return null;
        }
      },

      deleteSkill: async (_: unknown, {id}: {id: string}) => {
        if(!mongoose.Types.ObjectId.isValid(id)) return false;
        try {
          const doc = await Skill.findByIdAndDelete(id);
          if(!doc) return null;
          return doc;
        } catch(error) {
          console.error(error);
          return null;
        }
      },
    }
  };