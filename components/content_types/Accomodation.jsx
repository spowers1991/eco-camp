import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Index from "../blocks/accomodation/Index";

const Accomodation = ({ story, blok, globalSettings }) => (
  <main {...storyblokEditable(blok)} className={`font-roboto overflow-hidden pt-20`}>
    <Index story={story} globalSettings={globalSettings}/>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent story={story} blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Accomodation;
