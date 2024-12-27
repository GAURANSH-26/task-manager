import React from 'react';

const InputTask = ({onClose}) => {
  return (
    <div className="fixed top-0 left-0 bg-green-600 bg-opacity-70 h-screen w-full">
      <div className="fixed top-0 left-0 h-screen flex items-center justify-center w-full">
        <div className="bg-green-900 p-6 rounded-lg shadow-lg w-[90%] max-w-md">
          <h2 className="text-xl font-semibold text-white text-center mb-4">
            Add New Task
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-200 mb-1" htmlFor="task-title">
                Task Title
              </label>
              <input
                id="task-title"
                type="text"
                className="w-full p-2 border shadow border-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter task title"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-200 mb-1" htmlFor="task-desc">
                Task Description
              </label>
              <textarea
                id="task-desc"
                className="w-full p-2 border border-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                rows="3"
                placeholder="Enter task description"
              ></textarea>
            </div>
            <div className="flex justify-end space-x-4">
              <button
              onClick={onClose}
                type="button"
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Close
              </button>
              <button
                type="button"
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputTask;
