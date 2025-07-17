import aboutSchema from "./about-schema";
import headerSchema from "./header-schema";
import resumeSchema from "./resume-schema";
const { default: projectsSchema } = require("./projects-schema");
const { default: techSchema } = require("./tech-schema");
import articlesSchema from "./articles-schema";


const schemas = [headerSchema, aboutSchema, techSchema, projectsSchema, resumeSchema, articlesSchema]


export default schemas