import StoryblokClient from "storyblok-js-client";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const Storyblok = new StoryblokClient({
  accessToken: publicRuntimeConfig.STORYBLOK_TOKEN,
  cache: {
    clear: "auto",
    type: "memory",
  },
});

const GetAllStories = async (contentType) => {
  
  try {
    const response = await Storyblok.get("cdn/stories", {
      content_type: contentType,
    });
    const stories = response.data.stories;
    return stories;
  } catch (error) {
    console.error("Error fetching stories:", error);
    return null;
  }
};

export default GetAllStories;
