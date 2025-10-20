import resumeSchema from "./resume-schema";
const { default: projectsSchema } = require("./projects-schema");
const { default: techSchema } = require("./tech-schema");
import articlesSchema from "./articles-schema";
import experienceSchema from "./experience-schema";


const schemas = [techSchema, projectsSchema, resumeSchema, articlesSchema, experienceSchema]


export default schemas