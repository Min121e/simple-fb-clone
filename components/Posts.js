// import React from 'react';
// import { useCollection } from 'react-firebase-hooks/firestore';
// import { getFirestore } from 'firebase/firestore';
// import { db, app } from '../firebase';
// import Post from './Post';

// const firestore = getFirestore(app);

// const Posts = () => {
//   const [realtimePosts, loading, error] = useCollection(
//     firestore.collection('posts').orderBy('timestamp', 'desc')
//   );

//   return (
//     <div>
//       {realtimePosts?.docs.map((post) => (
//         <Post
//           key={post.id}
//           name={post.data().name}
//           message={post.data().message}
//           email={post.data().email}
//           timestamp={post.data().timestamp}
//           image={post.data().image}
//           postImage={post.data().postImage}
//         />
//       ))}
//     </div>
//   );
// };

// export default Posts;


// import React from 'react';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
// import { collection, query, orderBy } from 'firebase/firestore';

// import { db } from '../firebase';
// import Post from './Post';

// const Posts = () => {
//     const postRefs = query(collection(db, 'posts'), orderBy('timestamp', 'desc'))

//     const [realtimePosts, loading, error] = useCollectionData(postsRef, { idField: 'id' });

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {realtimePosts.map((post) => (
//         <Post
//           key={post.id}
//           name={post.name}
//           message={post.message}
//           email={post.email}
//           timestamp={post.timestamp}
//           image={post.image}
//           postImage={post.postImage}
//         />
//       ))}
//     </div>
//   );
// };

// export default Posts;

import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import Post from './Post';

const Posts = ({ posts }) => {
  const postsCollection = collection(db, 'posts');
  const q = query(postsCollection, orderBy('timestamp', 'desc'));
  const [realtimePosts, loading, error] = useCollectionData(q, { idField: 'id' });

  // if (loading) {
  //   return <div>Wait lah....</div>;
  // }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {realtimePosts 
          ?
      realtimePosts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          message={post.message}
          email={post.email}
          timestamp={post.timestamp}
          image={post.image}
          postImage={post.postImage}
        />
      )) 
              : 
      (
        posts.map((post) => (
          <Post 
            key={post.id}
            name={post.name}
            message={post.message}
            email={post.email}
            timestamp={post.timestamp}
            image={post.image}
            postImage={post.postImage}
          />
        ))
      )}
    </div>
  );
};

export default Posts;
