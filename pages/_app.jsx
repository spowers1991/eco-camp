import { storyblokInit, apiPlugin } from "@storyblok/react";

// A story that we set up for setting Global site data. e.g site tite and menu data.
import GetStory from '@/utils/GetStory'

// CSS
import '@/css/globals.css';

// Core Layout Components
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Storyblok Layout Template Components
import Page from "@/components/content_types/Page";
import Accomodation from "@/components/content_types/Accomodation";

// Blok Components
import Samples from "@/components/blocks/Samples";
import FullWidthSlider from "@/components/blocks/FullWidthSlider";
import ContentWithImageAside from "@/components/blocks/ContentWithImageAside"
import PostsGrid from "../components/blocks/PostsGrid";

// Initialise Storyblok and link components to the components in our Storyblok Stories.
const components = {
  page: Page,
  accomodation: Accomodation,
  samples: Samples,
  full_width_slider: FullWidthSlider,
  content_with_image_aside: ContentWithImageAside,
  posts_grid: PostsGrid,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN || "NULL",
  use: [apiPlugin],
  components,
});

function App({ Component, pageProps, globalSettings }) {
  return (
    <>
      <Header globalSettings={globalSettings}/>
        <Component {...pageProps} globalSettings={globalSettings} />
      <Footer />
    </>
  )
}

App.getInitialProps = async () => {
  const globalSettings = await GetStory('settings');
  return { globalSettings };
};

export default App;
