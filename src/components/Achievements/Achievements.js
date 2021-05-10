import React from "react";
import AchievementItem from "./AchievementItem";
import "./achievements.css";

const achievements = [
  {
    name: "firstHundred",
    description: "Zdobyłeś pierwsze 100 ciastek!",
  },
  {
    name: "grandmaHolik",
    description: "Masz 10 lub więcej babci. WOW ale duża rodzina !",
  },
  {
    name: "firstMilion",
    description: '"Chciałbym kiedyś zrobić sześć zer ..."  Ty już je zrobiłeś!',
  },
  {
    name: "fastClicker",
    description: "Udało ci się kliknąć 8 razy na sekundę! Ciekawe czy we wszsytkim jesteś tak szybki... ",
  },
];

const Achievements = () => {
  return (
    <div className="achievements--list mt-3">
      {achievements.map((achievement) => (
        <AchievementItem key={achievement.name} name={achievement.name} description={achievement.description} />
      ))}
    </div>
  );
};
export default Achievements;
