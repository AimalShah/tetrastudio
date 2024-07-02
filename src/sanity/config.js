import { createClient } from "@sanity/client"

export const client = createClient({
   projectId: "7ro4myqp", 
   dataset: "production", 
   apiVersion: "2024-03-11",
   useCdn: false, 
})