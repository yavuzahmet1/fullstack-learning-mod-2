import React from "react";

const ProfileCard = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=1"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div className="flex mt-4 md:mt-6">
          <button className="btn-primary">Add friend</button>
          <button className="btn-secondary">Message</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
