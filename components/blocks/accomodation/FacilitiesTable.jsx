import React from 'react';
import Heading from "@/components/html_tags/Heading";

const FacilitiesTable = ({ story }) => {

    return (
        <div className="gap-8 lg:gap-16 pt-3">
            {story.content.Facilities.map((type, index) => (
                <div key={index} className={`${index === (story.content.Facilities.length - 1) ? 'pb-8 md:pb-0 pt-8' : 'py-8'} border-t border-[#ccc]`}>
                    <div className={`flex flex-row w-full items-center duration-1000`}>            
                        <Heading size="h4" className="w-full font-semibold cursor-pointer !mb-0 pb-2">
                            {type.type}
                        </Heading>
                    </div>
                    <div className='flex flex-row gap-4'>
                        {type.facilities.map((facility, index) => (
                            <div key={index} className="items-center gap-x-6">
                                <img className="w-[75px]" src="https://placehold.co/75x75" alt={`service-${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FacilitiesTable;
