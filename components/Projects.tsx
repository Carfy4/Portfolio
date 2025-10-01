import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects" className="py-8">
      <h2 className="text-white font-semibold text-center text-5xl pt-[15px] mb-3">
        PAST WORK
      </h2>
      <p className="tracking-[0.4em] text-center text-transparent font-light pb-6 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-lg">
        EXPLORE MY PROJECTS
      </p>
      <div className="container mx-auto 2xl px-4">
        <div className="flex-col flex md:flex-row mt-8 gap-4">
          <Link
            href="https://www.youtube.com/watch?v=OYb8c9xCcYs"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] md:flex-1 transition-all duration-300 hover:translate-x-2"
          >
            <div className="flex flex-row mb-6 h-full bg-white/5 rounded-xl p-3 border border-white/10 hover:border-white/30">
              <div className="flex-shrink-0">
                <video 
                  width={180}
                  height={180}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover rounded-lg"
                >
                  <source src="/videos/project1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-3 flex-1 min-h-[140px] flex flex-col justify-between">
                <div>
                  <p className="text-white font-bold text-xl mb-2">Maze Generation</p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Optimized procedural maze generation using parallel Luau, bitflags, and OOP.
                    Generates complex mazes using parallel Luau for speed, bitflags for memory efficiency, 
                    and OOP for clean architecture.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] md:flex-1 transition-all duration-300 hover:translate-x-2"
          >
            <div className="flex flex-row mb-6 h-full bg-white/5 rounded-xl p-3 border border-white/10 hover:border-white/30">
              <div className="flex-shrink-0">
                <video 
                  width={180}
                  height={180}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover rounded-lg"
                >
                  <source src="/projects/project2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-3 flex-1 min-h-[140px] flex flex-col justify-between">
                <p className="text-white font-bold text-xl">Project 2</p>
                <p className="text-gray-500 text-xs">
                  Coming soon...
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row gap-4">
          <Link
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] md:flex-1 transition-all duration-300 hover:translate-x-2"
          >
            <div className="flex flex-row mb-6 h-full bg-white/5 rounded-xl p-3 border border-white/10 hover:border-white/30">
              <div className="flex-shrink-0">
                <video 
                  width={180}
                  height={180}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover rounded-lg"
                >
                  <source src="/projects/project3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-3 flex-1 min-h-[140px] flex flex-col justify-between">
                <p className="text-white font-bold text-xl">Project 3</p>
                <p className="text-gray-500 text-xs">
                  Coming soon...
                </p>
              </div>
            </div>
          </Link>
          <Link
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] md:flex-1 transition-all duration-300 hover:translate-x-2"
          >
            <div className="flex flex-row mb-6 h-full bg-white/5 rounded-xl p-3 border border-white/10 hover:border-white/30">
              <div className="flex-shrink-0">
                <video 
                  width={180}
                  height={180}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover rounded-lg"
                >
                  <source src="/projects/project4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-3 flex-1 min-h-[140px] flex flex-col justify-between">
                <p className="text-white font-bold text-xl">Project 4</p>
                <p className="text-gray-500 text-xs">
                  Coming soon...
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;