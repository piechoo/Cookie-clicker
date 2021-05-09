import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAchievements, getClicks, getCookies, getMachines } from "../redux/selectors";

import { addAchievement } from "../redux/actions";
import AchievementNotification from "./AchievementNotification";

const AchievementsWatcher = () => {
  const [name, setName] = useState("");
  const actualAchievements = useSelector(getAchievements);
  const dispatch = useDispatch();
  const cookie = useSelector(getCookies);
  const clicks = useSelector(getClicks);
  const machines = useSelector(getMachines);
  useEffect(() => {
    if (cookie > 99 && !actualAchievements["firstHundred"]) {
      dispatch(addAchievement("firstHundred"));
      setName("Pierwsza stówka");
    }
    if (cookie >= 1000000 && !actualAchievements["firstMilion"]) {
      dispatch(addAchievement("firstMilion"));
      setName("Sześć zer");
    }
    if (machines["grandma"] > 9 && !actualAchievements["grandmaHolik"]) {
      dispatch(addAchievement("grandmaHolik"));
      setName("Babcioholik");
    }
    if (clicks > 7 && !actualAchievements["fastClicker"]) {
      dispatch(addAchievement("fastClicker"));
      setName("Szybki klikacz");
    }
    if (cookie === 0 && clicks === 0) setName("");
  }, [cookie, clicks, machines, actualAchievements]);

  return <AchievementNotification name={name} />;
};

export default AchievementsWatcher;
