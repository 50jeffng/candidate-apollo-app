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
      addCandidate: async (_: unknown, {name}: {name: string}) => {
        const candidate = new Candidate({name});
        try {
          const doc = await candidate.save();
          return doc;
        } catch(error) {
          throw new Error(error);
        }
      },

      addSkill: async (_: unknown, {name}: {name: string}) => {
        const skill = new Skill({name});
        try {
          const doc = await skill.save();
          return doc;
        } catch(error) {
          throw new Error(error);
        }
      },

      deleteCandidate: async (_: unknown, {id}: {id: string}) => {
        try {
          const doc = await Candidate.findByIdAndDelete(id);
          if(!doc) return false;
          return true;
        } catch(error) {
          console.error(error);
          return false;
        }
      },

      deleteSkill: async (_: unknown, {id}: {id: string}) => {
        try {
          const doc = await Candidate.findByIdAndDelete(id);
          if(!doc) return false;
          return true;
        } catch(error) {
          console.error(error);
          return false;
        }
      },
    }
  };