import React from "react";
import { useSelector } from "react-redux";
import { getAchievements } from "../redux/selectors";

const AchievementItem = (props) => {
  const actualAchievements = useSelector(getAchievements);
  return (
    <div className={!actualAchievements[props.name] ? "achievement--disabled" : "achievement--enabled"}>
      <div className="achievement text-center">
        <h2 className="">{props.description}</h2>
      </div>
    </div>
  );
};
export default AchievementItem;
