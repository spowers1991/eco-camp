import Layout from "@/components/layout/Layout"

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story }) {
  story = useStoryblokState(story);

  const metadata = {
    title: 'Vesuvio Eco Camp',
    description: '.',
    keywords: '',
    no_index: 'index, follow',
    url: '',
    og_image: ''
  };

  return (
    <Layout metadata={metadata}>
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
}

export async function getStaticProps() {
  let slug = "home";

  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
