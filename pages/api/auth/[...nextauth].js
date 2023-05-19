import NextAuth from 'next-auth'
import { SessionProvider } from 'next-auth/react';
import FacebookProvider from 'next-auth/providers/facebook';


export default NextAuth ({
    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        // ... add more providers here
    ],
    session: {
        jwt: true,
    },
    theme: {
        colorScheme: 'dark', // "auto" | "dark" | "light"
      },
          secret: process.env.NEXTAUTH_SECRET

})


// import NextAuth from 'next-auth';
// import { SessionProvider } from 'next-auth/react';
// import FacebookProvider from 'next-auth/providers/facebook';

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     FacebookProvider({
//       clientId: process.env.FACEBOOK_CLIENT_ID,
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
//     }),
//     // ... add more providers here
//   ],
//   session: {
//     jwt: true,
//   },
// });
