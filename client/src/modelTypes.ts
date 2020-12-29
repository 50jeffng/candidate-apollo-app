export type Candidate = {
    id: string, 
    name: string, 
    description: string, 
    skills: Array<string>
}

export type Skill = {
    id: string, 
    name: string, 
    description: string,
    type: string,
}