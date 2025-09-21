/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

const ErrorPage = ({ reset, error }: any) => {
  console.log(error);
  return (
    <div>
      <h1>Something went wrong</h1>
      <h1>{error.message}</h1>
      <button
        onClick={() => reset()}
        type="button"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Reset
      </button>
    </div>
  );
};

export default ErrorPage;
