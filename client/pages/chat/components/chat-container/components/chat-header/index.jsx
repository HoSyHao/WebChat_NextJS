import { closeChat } from "@/Features/chatSlice";
import { getColor } from "@/lib/utils";
import { HOST } from "@/Utils/constants";
import { Avatar, AvatarImage } from "@/Components/ui/avatar";
import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const ChatHeader = () => {
  const dispatch = useDispatch();

  const { selectedChatData, selectedChatType } = useSelector(
    (state) => state.chat
  );

  return (
    <div className="h-[10vh] border-b-2 border-[#2f303b] flex items-center justify-between px-16 py-6">
      <div className="flex gap-5 items-center w-full justify-between">
        <div className="flex gap-3 items-center justify-center">
          <div className="w-12 h-12 relative">
            {selectedChatType === "contact" ? (
              <Avatar className="h-12 w-12 rounded-full overflow-hidden">
                {selectedChatData.image ? (
                  <AvatarImage
                    src={`${HOST}/${selectedChatData.image}`}
                    alt="profile"
                    className="object-cover w-full h-full bg-black rounded-full"
                  />
                ) : (
                  <div
                    className={`uppercase h-12 w-12 text-lg border-[1px] flex items-center justify-center rounded-full ${getColor(
                      selectedChatData.color
                    )}`}
                  >
                    {selectedChatData.firstName
                      ? selectedChatData.firstName.split("").shift()
                      : selectedChatData?.email?.split("").shift()}
                  </div>
                )}
              </Avatar>
            ) : (
              <div className="bg-[#ffffff22] h-10 w-10 items-center justify-center flex rounded-full">
                #
              </div>
            )}
          </div>
          <div>
            {selectedChatType === "channel" && selectedChatData.name}
            {selectedChatType === "contact" && selectedChatData.firstName
              ? `${selectedChatData.firstName} ${selectedChatData.lastName}`
              : selectedChatData.email}
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={() => dispatch(closeChat())}
            className="text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all"
          >
            <RiCloseFill className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;