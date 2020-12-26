import mongoose from 'mongoose';

export const CandidateSchema = new mongoose.Schema(
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

        skills: {
            type: [mongoose.Schema.Types.ObjectId],
            required: true,
        },

        isHired: {
            type: Boolean,
            required: false,
        },
    },
    // {
    //     collection: 'users',
    // }
);

CandidateSchema.index({ name: 1 });

export const Candidate = mongoose.model('Candidate', CandidateSchema);