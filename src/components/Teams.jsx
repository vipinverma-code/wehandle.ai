import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";

const Teams = () => {
  return (
    <section className="flex flex-col items-center gap-10 px-4 sm:px-8 lg:px-16 xl:px-24 pt-24 pb-20 text-gray-800 dark:text-white">
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brand success"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 w-full max-w-6xl">
        {teamData.map((team, index) => (
          <div
            key={team.name}
            className="flex items-center gap-4 p-5 min-h-24 rounded-xl
            border border-gray-100 dark:border-gray-700
            bg-white dark:bg-gray-900
            shadow-lg shadow-gray-100 dark:shadow-white/5
            hover:-translate-y-1 hover:shadow-xl
            transition-all duration-300"
          >
            <img
              src={team.image}
              alt={team.name}
              className="w-14 h-14 rounded-full object-cover shrink-0"
              loading="lazy"
            />

            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-sm truncate">{team.name}</h3>

              <p className="text-xs opacity-60 mt-1 leading-relaxed">
                {team.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
