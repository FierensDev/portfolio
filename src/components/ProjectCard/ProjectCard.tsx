import { useState } from "react";


interface ProjectCardProps {
  background: string;
}

export function ProjectCard({background}: ProjectCardProps) {

  return (
    <div className={`${background} w-full h-full rounded-lg`}>
      
    </div>
  );
}