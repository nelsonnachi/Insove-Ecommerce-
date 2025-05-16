import React, { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* image */}
      <Link
        to={"/"}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex justify-center items-center p-2 bg-[#f5f5f5] overflow-hidden relative"
      >
        <img
          src={
            product.image.length > 1 && hovered
              ? product.image[1]
              : product.image[0]
          }
          alt="productimage"
          className="transition-all duration-300"
        />
      </Link>
      {/* info */}
      <div className="p-3">
        <h4 className="line-clamp-1 !py-0 text-[15px] font-[700]">
          {product.name}
        </h4>
        <div className="flex items-center justify-between">
          <p className="text-[14px] md:text-[15px] mb-1 font-bold text-[#585858]">
            {product.category}
          </p>
          <h5 className="text-[14px] md:text-[15px] mb-1 font-bold pr-2">
            ${product.price}.00
          </h5>
        </div>
        <p className="line-clamp-2">{product.description}</p>
      </div>
    </div>
  );
};

export default Item;
