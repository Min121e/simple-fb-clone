import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login';

import { getSession } from 'next-auth/react';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase';



// import { SessionProvider } from "next-auth/react"
// import { Session } from "next-auth"


export default function Home( { session, posts }) {
  if(!session) return <Login /> ;

    return (
        <div className='h-screen bg-gray-100 overflow-hidden'>
          <Head>
            <title>Facebook</title>
          </Head>

          {/* Header */}
          <Header />

          <main className='flex'>

            <Sidebar />

            <Feed posts={posts} />

            <Widgets />
          </main>
        </div>
      )
}


export async function getServerSideProps(context) {
  // Get the user's session
  const session = await getSession(context);

  const postsCol = collection(db, 'posts');
  const q = query(postsCol, orderBy('timestamp', 'desc'));
  const postsSnapshot = await getDocs(q);
  
  const docs = postsSnapshot.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));



  return {
    props: {
      session,
      posts: docs
    }
  };
}
