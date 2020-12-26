import mongoose from "mongoose";
import { Candidate } from "./models/candidate";
import { Skill } from "./models/skill";

// Provide resolver functions for your schema fields
export const resolvers = {
    Query: {
      candidates: async () => {return await Candidate.find();},
      candidate: async (_: unknown, {id}: {id: string}) => {if(mongoose.Types.ObjectId.isValid(id)) return await Candidate.findById(id);},
      skills: async () => {return await Skill.find();},
      skill: async (_: unknown, {id}: {id: string}) => {if(mongoose.Types.ObjectId.isValid(id)) return await Skill.findById(id);},
    },

    Mutation: {
      addCandidate: async (_: unknown, {name}: {name: string}) => {
        const candidate = new Candidate({name});
        try {
          const doc = await candidate.save();
          return doc;
        } catch(error) {
          throw new Error(error.message);
        }
      }
    }
  };