// import React from 'react'
// import StoryCard from './StoryCard'
// import billgates_profile_pic from '../assets/billgates_profile_pic.jpg'
// import jeff_bezos_profile_pic from '../assets/jeff_bezos_profile_pic.jpg'
// import taylorswift_profilepic from '../assets/taylorswift_profilepic.jpg'
// import Mark_Zuckerberg_profile_pic from '../assets/Mark_Zuckerberg_profile_pic.webp'
// import Elon_Musk_profile_pic from '../assets/Elon_Musk_profile_pic.jpg'

// import billgates_story from '../assets/billgates_story.jpg'
// import jeff_bezos_story from '../assets/jeff_bezos_story.jpg'
// import taylorswift_story from '../assets/taylorswift_story.jpg'
// import mark_zuckerberg_story from '../assets/mark_zuckerberg_story.jpg'
// import elon_musk_story from '../assets/elon_musk_story.webp'


// const stories = [
//     {
//         name: 'Taylor Swift',
//         src: taylorswift_story,
//         profile: taylorswift_profilepic
//     },
//     { 
//         name: 'Elon Musk',
//         src: elon_musk_story,
//         profile: Elon_Musk_profile_pic
//     },
//     {
//         name: 'Jeff Bezos',
//         src: jeff_bezos_story,
//         profile: jeff_bezos_profile_pic
//     },
//     {
//         name: 'Mark Zuckerberg',
//         src: mark_zuckerberg_story,
//         profile: Mark_Zuckerberg_profile_pic
//     },
//     {
//         name: 'Bill Gates',
//         src: billgates_story,
//         profile: billgates_profile_pic
//     }
// ]

// const Stories = () => {
//   return (
//     <div className='flex justify-center space-x-3 mx-auto'>
//         {stories.map(story => (
//             <StoryCard 
//                 key={story.src}
//                 name={story.name} 
//                 src={story.src} 
//                 profile={story.profile}
//             />
//         ))} 
//     </div>
//   )
// }

// export default Stories

import React, { useState } from 'react';
import StoryCard from './StoryCard';

import taylorswift_profilepic from '../assets/taylorswift_profilepic.jpg';
import elon_musk_profilepic from '../assets/Elon_Musk_profile_pic.jpg';
import jeff_bezos_profilepic from '../assets/jeff_bezos_profile_pic.jpg';
import mark_zuckerberg_profilepic from '../assets/Mark_Zuckerberg_profile_pic.webp';
import billgates_profilepic from '../assets/billgates_profile_pic.jpg';

import taylorswift_story from '../assets/taylorswift_profilepic.jpg';
import elon_musk_story from '../assets/elon_musk_story.webp';
import jeff_bezos_story from '../assets/jeff_bezos_story.webp';
import mark_zuckerberg_story from '../assets/mark_zuckerberg_story.jpg';
import billgates_story from '../assets/billgates_story.jpg';
import StoryViewer from './StoryViewer';

const stories = [
  {
    id: 1,
    name: 'Taylor Swift',
    src: taylorswift_story,
    profile: taylorswift_profilepic,
  },
  {
    id: 2,
    name: 'Elon Musk',
    src: elon_musk_story,
    profile: elon_musk_profilepic,
  },
  {
    id: 3,
    name: 'Jeff Bezos',
    src: jeff_bezos_story,
    profile: jeff_bezos_profilepic,
  },
  {
    id: 4,
    name: 'Bill Gates',
    src: billgates_story,
    profile: billgates_profilepic,
  },
  {
    id: 5,
    name: 'Mark Zuckerberg',
    src: mark_zuckerberg_story,
    profile: mark_zuckerberg_profilepic,
  },
  
];

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const openStoryViewer = (story) => {
    setSelectedStory(story);
  };

  const closeStoryViewer = () => {
    setSelectedStory(null);
  };

  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          story={story}
          openStoryViewer={openStoryViewer}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}

    {selectedStory && (
        <StoryViewer
          name={selectedStory.name}
          src={selectedStory.src}
          onClose={closeStoryViewer}
        />
    )}

    </div>
  );
};

export default Stories;
