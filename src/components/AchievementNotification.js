import React, { useEffect, useState } from "react";

const AchievementNotification = (props) => {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    if (props.name !== "") setIsOn(true);
    const timer = setTimeout(() => {
      setIsOn(false);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [props.name, setIsOn]);

  return (
    <div className="notification">
      {isOn ? (
        <p className="text-center text-warning notification__text">
          Otrzymałeś osiągnięcie <b>{props.name}!</b>
        </p>
      ) : null}
    </div>
  );
};
export default AchievementNotification;
