import Image from 'next/legacy/image'
import React, { useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { db, collection, storage, addDoc, serverTimestamp, ref, getDownloadURL, uploadString  } from '../firebase'
import firebase from 'firebase/app';
import { doc, updateDoc } from 'firebase/firestore';


const InputBox = () => {

    const { data: session, status } = useSession()
    const inputRef = useRef(null)
    const filepickerRef = useRef(null)
    const [imageToPost, setImageToPost] = useState(null)

    // This works for text. doesn't work for image
    // const sendPost = (e) => {
    //   e.preventDefault();
    
    //   if (!inputRef.current.value) return;
    
    //   addDoc(collection(db, 'posts'), {
    //     message: inputRef.current.value,
    //     name: session.user.name,
    //     email: session.user.email,
    //     image: session.user.image,
    //     timestamp: serverTimestamp()
    //   })
    //     .then((docRef) => {
    //       if (imageToPost) {
    //         const uploadTask = uploadString(ref(storage, `posts/${docRef.id}`), imageToPost, 'data_url');
    
    //         removeImage();
    
    //         uploadTask.on('state_changed',
    //           null,
    //           (error) => {
    //             console.error(error);
    //           },
    //           () => {
    //             getDownloadURL(ref(storage, `posts/${docRef.id}`))
    //               .then((downloadURL) => {
    //                 return updateDoc(doc(db, 'posts', docRef.id), {
    //                   postImage: downloadURL
    //                 });
    //               })
    //               .catch((error) => {
    //                 console.error(error);
    //               });
    //           }
    //         );
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    
    //   inputRef.current.value = '';
    // };

const sendPost = async (e) => {
  e.preventDefault();

  if (!inputRef.current.value) return;

  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp()
    });

    if (imageToPost) {
      const storageRef = ref(storage, `posts/${docRef.id}`);
      const uploadTask = uploadString(storageRef, imageToPost, 'data_url');

      removeImage();

      uploadTask.then(async () => {
        const downloadURL = await getDownloadURL(storageRef);

        await updateDoc(doc(db, 'posts', docRef.id), {
          postImage: downloadURL
        });
      });
    }
  } catch (error) {
    console.error(error);
  }

  inputRef.current.value = '';
};

    
    


    const addImageToPost = (e) => {
        const reader = new FileReader()
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }
    
    const removeImage = () => {
        setImageToPost(null)
    }

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
        <div className='flex space-x-4 p-4 items-center'>
            <Image
                className='rounded-full'
                src={session.user.image}
                width={40}
                height={40}
                layout='fixed'    
            />
            <form className='flex flex-1'>
                <input
                    ref={inputRef}
                    className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' 
                    type="text" 
                    placeholder={`What's on your mind, ${session.user.name}?`}
                />
                <button 
                    type='submit'
                    hidden
                    // className='hidden' 
                    onClick={sendPost}>Submit
                </button>
            </form>

            {imageToPost && (
                <div onClick={removeImage} className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'>
                    <img className='h-10 object-contain' src={imageToPost} alt="" />
                    <p className='text-xs text-red-500 text-center'>Remove</p>
                </div>
            )}
        </div>

        <div className='flex justify-evenly p-3 border-t'>
            <div className='inputIcon'>
                <VideoCameraIcon className='h-7 text-red-500'/>
                <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
            </div>

            <div onClick={() => filepickerRef.current.click()} className='inputIcon'>
                <CameraIcon className='h-7 text-green-400'/>
                <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden/>
            </div>

            <div className='inputIcon'>
                <EmojiHappyIcon className='h-7 text-yellow-300'/>
                <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
            </div>
        </div>
    </div>
  )
}

export default InputBox