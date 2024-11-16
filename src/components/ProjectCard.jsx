import React from "react";
import { handleLinkClick } from "../data";

function ProjectCard({ thumbnail, techUsed, description, name, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col gap-4 shadow-md rounded-md p-4 ease-in-out duration-200 hover:scale-105 hover:shadow-xl"
      onClick={() => handleLinkClick(name)}
    >
      <div className="">
        <img
          className="rounded w-full object-cover"
          src={thumbnail}
          alt={`${name} thumbnail`}
        />
      </div>
      <div className="flex flex-col h-full gap-4">
        <p className="text-[#9E9E9E]">{techUsed}</p>
        <p className="opacity-90 tracking-wide">{description}</p>
        <p className="mt-auto font-bold text-xl">{name}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
