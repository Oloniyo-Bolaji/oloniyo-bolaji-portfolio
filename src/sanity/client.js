 
 
 import { createClient } from "next-sanity";
 
 
 export const client = createClient({
    projectId: "sjwx5cw6",
    dataset: "production",
    apiVersion: "2025-06-26",
    useCdn: true,
  });

  