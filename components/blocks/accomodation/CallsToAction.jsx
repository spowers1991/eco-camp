import React from 'react';
import Button from '../../html_tags/Button';
import SocialIcons from './SocialIcons';

const CallsToAction = ({ story, globalSettings }) => {
  return ( 
    <div className='sm:flex flex-row w-full mr-auto'>
      <div className="px-6 lg:px-0 flex gap-x-3 mt-8">
        {story.content.button_1 &&
          <Button href="#" className="max-w-fit" color="green">
              {story.content.button_1.title ? story.content.button_1.title : story.content.button_1.cached_url}
          </Button>
        }
        {story.content.button_2 &&
          <Button href="#" className="max-w-fit" color="purple">
            {story.content.button_2.title ? story.content.button_2.title : story.content.button_2.cached_url}
          </Button> 
        }             
      </div>

      <div className='flex flex-row px-6 lg:px-0 mt-5 sm:mt-0 gap-x-3 ml-auto self-end'>
        <SocialIcons globalSettings={globalSettings} /> 
      </div>      
    </div>
  );
};

export default CallsToAction;
