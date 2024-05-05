import { getStoryblokApi } from "@storyblok/react";

const GetStory = async (name) => {
  const storyblokApi = getStoryblokApi();
  
  try {
    const response = await storyblokApi.get(`cdn/stories/${name}`);
    const story = response.data.story;
    return story;
  } catch (error) {
    console.error("Error fetching story:", error);
    return null;
  }
};

export default GetStory;
