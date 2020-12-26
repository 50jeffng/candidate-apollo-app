import mongoose from 'mongoose';

export const SkillSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            trim: true,
            required: false,
        },

        type: {
            type: String,
            trim: true,
            required: false,
        },
    },
    // {
    //     collection: 'users',
    // }
);

SkillSchema.index({ name: 1, type: 1 });

export const Skill = mongoose.model('Skill', SkillSchema);