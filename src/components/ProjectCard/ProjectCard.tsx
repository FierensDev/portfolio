import { useState } from "react";


interface ProjectCardProps {
  background: string;
}

export function ProjectCard({background}: ProjectCardProps) {

  return (
    <div className={`${background} w-full h-full rounded-lg grid grid-rows-[70px_1fr] px-2`}>
      
      <div className="grid grid-rows-[90%_1fr]">
        <div className="flex justify-between place-items-center text-white">
          <p className="text-[24px]">title</p>
          <div>arrow</div>
        </div>
        <div className="w-full h-[1px] bg-custom-gray"></div>
      </div>

        <div className="bg-white">
        </div>
    </div>
  );
}