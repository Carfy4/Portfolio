import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[10px]">
        PAST WORK
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl">
        <div className="flex-col flex md:flex-row mt-7">
          <Link
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] md:flex-1 md:mr-4"
          >
            <div className="flex flex-row mb-5 h-full">
              <div className="flex-shrink-0">
                <Image
                  src=""
                  height={150}
                  width={150}
                  alt="Project 1"
                  className="object-cover"
                />
              </div>
              <div className="p-3 flex-1 min-h-[120px] flex flex-col">
                <p className="text-white font-semibold text-xl">Project 1</p>
                <p className="text-gray-500 text-[10px] flex-1">
                  Le
                </p>
              </div>
            </div>
          </Link>
          <Link
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] md:flex-1 md:ml-4"
          >
            <div className="flex flex-row mb-5 h-full">
              <div className="flex-shrink-0">
                <Image
                  src=""
                  height={150}
                  width={150}
                  alt="Project"
                  className="object-cover"
                />
              </div>
              <div className="p-3 flex-1 min-h-[120px] flex flex-col">
                <p className="text-white font-semibold text-xl">Project 2</p>
                <p className="text-gray-500 text-[10px] flex-1">
                  
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row">
          <Link
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] md:flex-1 md:mr-4"
          >
            <div className="flex flex-row mb-5 h-full">
              <div className="flex-shrink-0">
                <Image
                  src=""
                  height={150}
                  width={150}
                  alt="Project"
                  className="object-cover"
                />
              </div>
              <div className="p-3 flex-1 min-h-[120px] flex flex-col">
                <p className="text-white font-semibold text-xl">
                  Project 3
                </p>
                <p className="text-gray-500 text-[10px] flex-1">
                  
                </p>
              </div>
            </div>
          </Link>
          <Link
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] md:flex-1 md:ml-4"
          >
            <div className="flex flex-row mb-5 h-full">
              <div className="flex-shrink-0">
                <Image
                  src=""
                  height={150}
                  width={150}
                  alt="Project"
                  className="object-cover"
                />
              </div>
              <div className="p-3 flex-1 min-h-[120px] flex flex-col">
                <p className="text-white font-semibold text-xl">Project 4</p>
                <p className="text-gray-500 text-[10px] flex-1">
                  .
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
