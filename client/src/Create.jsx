import React from "react";
import axios from "axios";
import { useState } from "react";

function Create({ show }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const hTitle = (e) => setTitle(e.target.value);
  const hDescription = (e) => setDescription(e.target.value);

  async function save(event) {
    event.preventDefault();
    const data = { title, description };
    await axios
      .post("http://localhost:3000/Create", data)
      .then((res) => {
        console.log("RES: ", res.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    console.log(title);
    console.log(description);
    show(0);
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create A Card
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={save}
              method="POST"
            >
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={hTitle}
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="title"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={hDescription}
                  id="description"
                  className="bg-gray-50 min-h-52 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Submit
              </button>
              <button
                type="button"
                className="w-full text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => {
                  show(0);
                }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Create;
