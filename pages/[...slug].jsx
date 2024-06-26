import Layout from "@/components/layout/Layout"

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page({ story, globalSettings }) {
  story = useStoryblokState(story);

  const metadata = {
    title: story?.content?.meta_title ? story?.content?.meta_title : 'Vesuvio Eco Camp',
    description: story?.content?.meta_description ? story?.content?.meta_description : '',
    keywords: story?.content?.meta_keywords ? story?.content?.meta_keywords : '',
    no_index: story?.content?.meta_no_index? story?.content?.meta_no_index : 'index, follow',
    url: story?.slug,
    og_image:  story?.content?.meta_og_image.filename
  };

  return (
    <Layout metadata={metadata}>
      <StoryblokComponent story={story} blok={story.content} globalSettings={globalSettings}/> 
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home";

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

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/");

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }
    if (data.links[linkKey].slug != "settings") {
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
    }
  });

  return {
    paths: paths,
    fallback: false,
  };
}
