import React from "react";
import { blogs } from "../assets/data";

const Blog = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 mb-16 pt-16">
      {/* container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {blogs.slice(0, 4).map((blog) => (
          <div key={blog.id} className="relative">
            <img src={blog.image} alt="blogimage" className="rounded-xl" />
            {/* blog title */}
            <div>
              <p className="text-[14px] font-[500] mt-6">{blog.category}</p>
              <h5 className="pr-4 mb-1 text-[14px] md:text-[15px] mb-1 font-bold">{blog.title}</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita assumenda laborum impedit esse nam atque?</p>
              <button className="underline mt-2 text-[15px] font-[700]">Continue reading</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
