"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React from "react";

const profileImages = [
  "/images/default-blue.png",
  "/images/default-red.png",
  "/images/default-slate.png",
  "/images/default-green.png",
];
const Profile = () => {
  const router=useRouter()
  const { currentUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center pt-20">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who's watching?
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
          {profileImages.map((image, i) => (
            <div
            onClick={()=>router.push("/movies")}
             className="w-44 mx-auto cursor-pointer group">
              <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <img
                  draggable={false}
                  className="w-max h-max object-contain"
                  src={image}
                  alt=""
                />
              </div>
              <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                {i === 0 && currentUser
                  ? currentUser.displayName
                  : `Guest-${i + 1}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
