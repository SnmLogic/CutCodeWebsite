import React from "react";
import winlogo from "../../Assets/windows.png";

export default function DownloadMain() {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-full h-40 overflow-hidden">
                <img
                  alt="testimonial"
                  class="w-40 h-40 p-2 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-white"
                  src="https://th.bing.com/th/id/OIP.7s2t4hDFEq6d1dL7ItHiWgAAAA?pid=ImgDet&rs=1"
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                For Windows
              </h2>
              <p class="leading-relaxed text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                quae quod minus? Deserunt eligendi libero quod veniam non cumque
                deleniti quam, eveniet facere laboriosam vel itaque iusto a
                distinctio placeat.
              </p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Download
              </button>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-40 overflow-hidden">
                <img
                  alt="testimonial"
                  class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://th.bing.com/th/id/OIP.7FcBoMFn-VZkzqC6bmfptgHaHa?pid=ImgDet&rs=1"
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                For Linux
              </h2>
              <p class="leading-relaxed text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, iure! Atque maiores quibusdam ipsum animi itaque sit,
                error sapiente obcaecati delectus reiciendis aut, quod soluta
                totam illo labore voluptatibus enim!
              </p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Download
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
