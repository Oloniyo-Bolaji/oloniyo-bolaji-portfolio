import aboutSchema from "./about-schema";
import headerSchema from "./header-schema";
import resumeSchema from "./resume-schema";
const { default: projectsSchema } = require("./projects-schema");
const { default: techSchema } = require("./tech-schema");



const schemas = [techSchema, projectsSchema, resumeSchema, aboutSchema, headerSchema]


export default schemas