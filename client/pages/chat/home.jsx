/* eslint-disable react/react-in-jsx-scope */
import {  useSelector } from "react-redux";

import EmptyChatContainer from "./components/empty-chat-container";
import ContactsContainer from "./components/contacts-container";
import ChatContainer from "./components/chat-container";
import PrivateRoute from '@/components/PrivateRoute';

const Home = () => {
  const { 
    selectedChatType,  
    isUploading,
    isDownloading,
    fileUploadProgress,
    fileDownloadProgress, } = useSelector(
    (state) => state.chat
  );

  return (
    <div className="flex h-[100vh] text-white overflow-hidden">
      {
        isUploading && (<div className="h-[100vh] w-[100vw] fixed top-0 z-10 left-0 bg-black/80 flex items-center justify-center flex-col gap-5 backdrop-blur-lg">
          <h5 className="text-5xl animate-pulse">Uploading File</h5>
          {fileUploadProgress}%
        </div>)
      }
      {
        isDownloading && (<div className="h-[100vh] w-[100vw] fixed top-0 z-10 left-0 bg-black/80 flex items-center justify-center flex-col gap-5 backdrop-blur-lg">
          <h5 className="text-5xl animate-pulse">Downloading File</h5>
          {fileDownloadProgress}%
        </div>)
      }
      <ContactsContainer />
      {selectedChatType === undefined ? (
        <EmptyChatContainer />
      ) : (
        <ChatContainer />
      )}
    </div>
  );
};

export default PrivateRoute(Home);
