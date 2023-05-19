// // import Image from 'next/image'
// // import React from 'react'

// // const StoryCard = ({ name, src, profile}) => {
// //   return (
// //     <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
// //         <div className='absolute w-[40px] h-[40px]'>
// //             <Image
// //                 src={profile}
// //                 className="absolute opacity-0 w-full h-full object-cover lg:opacity-100 rounded-full z-50 border-4 border-blue-600"
// //             />
// //         </div>

// //         <div className=''>
// //             <Image
// //                 src={src}
// //                 className="absolute top-0 left-0 w-full h-full object-cover filter brightness-75 rounded-full lg:rounded-3xl"
// //             />
// //         </div>

// //         <p className='absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'>{name}</p>
// //     </div>
// //   )
// // }

// // export default StoryCard

// import React, { useState } from 'react';
// import StoryCard from './StoryCard';

// import taylorswift_profilepic from '../assets/taylorswift_profilepic.jpg';
// import elon_musk_profilepic from '../assets/Elon_Musk_profile_pic.jpg';
// import jeff_bezos_profilepic from '../assets/jeff_bezos_profile_pic.jpg';
// import mark_zuckerberg_profilepic from '../assets/Mark_Zuckerberg_profile_pic.webp';
// import billgates_profilepic from '../assets/billgates_profile_pic.jpg';

// import taylorswift_story from '../assets/taylorswift_story.jpg';
// import elon_musk_story from '../assets/elon_musk_story.webp';
// import jeff_bezos_story from '../assets/jeff_bezos_story.jpg';
// import mark_zuckerberg_story from '../assets/mark_zuckerberg_story.jpg';
// import billgates_story from '../assets/billgates_story.jpg';

// const stories = [
//   {
//     id: 1,
//     name: 'Taylor Swift',
//     src: taylorswift_story,
//     profile: taylorswift_profilepic,
//   },
//   {
//     id: 2,
//     name: 'Elon Musk',
//     src: elon_musk_story,
//     profile: elon_musk_profilepic,
//   },
//   {
//     id: 3,
//     name: 'Jeff Bezos',
//     src: jeff_bezos_story,
//     profile: jeff_bezos_profilepic,
//   },
//   {
//     id: 4,
//     name: 'Mark Zuckerberg',
//     src: mark_zuckerberg_story,
//     profile: mark_zuckerberg_profilepic,
//   },
//   {
//     id: 5,
//     name: 'Bill Gates',
//     src: billgates_story,
//     profile: billgates_profilepic,
//   },
// ];

// const Stories = () => {
//   const [selectedStory, setSelectedStory] = useState(null);

//   const openStoryViewer = (story) => {
//     setSelectedStory(story);
//   };

//   const closeStoryViewer = () => {
//     setSelectedStory(null);
//   };

//   return (
//     <div className='flex justify-center space-x-3 mx-auto'>
//       {stories.map((story) => (
//         <StoryCard
//           key={story.id}
//           story={story}
//           openStoryViewer={openStoryViewer}
//         />
//       ))}

//       {selectedStory && (
//         <StoryViewer story={selectedStory} onClose={closeStoryViewer} />
//       )}
//     </div>
//   );
// };

// export default Stories;


import React from 'react';
import Image from 'next/image'

const StoryCard = ({ story, openStoryViewer, name, src, profile }) => {

  return (
    <div
      className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'
      onClick={() => openStoryViewer(story)}
    >
      <div className='absolute w-[40px] h-[40px]'>
        <Image
          src={profile}
          alt={name}
          className='absolute opacity-0 w-full h-full object-cover lg:opacity-100 rounded-full z-50 border-4 border-blue-600'
        />
      </div>

      <div className=''>
        <Image
          src={src}
          alt={name}
          className='absolute top-0 left-0 w-full h-full object-cover filter brightness-75 rounded-full lg:rounded-3xl'
        />
      </div>

      <p className='absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'>
        {name}
      </p>
    </div>
  );
};

export default StoryCard;
