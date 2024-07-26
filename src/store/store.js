import { create } from "zustand";
import { client } from "../sanity/config";


const useStore = create((set) => ({
  projects : null,
  fetchprojects : async () => {
    try {
      const projects = await client.fetch(
        `*[_type == "project"] {slug , title , image {
        asset -> {url}
      } , 
        categories[] -> {
          title
        }
      }`
      );
      set({projects});
    } catch (e) {
      console.log(e);
    }
  },
  filterProjectsByCategory : (category) => {
    set({projects : projects.filter((project) => project.categories[0].title === category)});
  }
}));

export default useStore;