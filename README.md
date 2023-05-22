# Simple facebook clone app

https://github.com/Min121e/simple-fb-clone/assets/97957887/d0e5ca34-6415-4446-bb05-05d302581fc9

Since I need to submit my app for review and receive approval from Facebook to be able to let other Facebook users to log in, I have provided a video in which I log in with my account.
Plus, facebook disabled temporarily the ability to create test users. 

Live page ( [simple-facebook-clone](https://precious-ganache-bba64a.netlify.app/) )

## Tools used

- Next JS
- Tailwind
- heroiconsv1
- NextAuth.js
- Firebase

## About the project

- Authentication: Users can sign in with their Facebook accounts using NextAuth.js. If the user's Facebook account is already signed in on their browser, they will be automatically redirected to the app.

- User Information: Once authenticated, the user's name and profile picture from Facebook will be displayed in the right section of the header and at the top of the sidebar.

- Posting: Users can create posts by typing in the input field and pressing enter. They can also choose to upload a picture by clicking on the "Photo/Video" tab below the input field. A mini preview of the selected picture will appear next to the input field. After entering a caption for the picture, the user can hit enter to create a post with a picture.

- Real-time Storage: Posts are stored in Firebase storage and displayed in real-time. The posts are shown in descending order based on their timestamps.

- Stories: Users can click on stories to view them. The selected story will be displayed, and users can close it by clicking on the cross icon.

- Logout: Users can log out by clicking on the logout icon in the header.

## Optimized Performance

- The app is designed to minimize waiting time for users. Posts are fetched from Firebase storage in real-time, allowing them to be displayed immediately after the page is rendered.

- Please note that this is a simplified version of Facebook and does not include all the features of the actual platform.
