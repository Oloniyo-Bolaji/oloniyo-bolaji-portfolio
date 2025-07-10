import {defineConfig} from 'sanity'
import {structureTool} from "sanity/structure"
import schemas from './src/sanity/schema';


const config = defineConfig({
  projectId: 'sjwx5cw6',
  dataset: 'production',
  title:'my portfolio',
  apiVersion:"2025-06-26",
  basePath:"/admin",
  schema: {types: schemas},
  plugins: [structureTool()],
})

export default config;