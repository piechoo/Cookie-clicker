export const cost = (name, amount) => {
  switch (name) {
    case "cursor":
      return 10 + amount;
    case "grandma":
      return 100 + 10 * amount;
    case "mine":
      return 1000 + 100 * amount;
    case "factory":
      return 10000 + 1000 * amount;
    default:
      return 0;
  }
};
export const requirement = (name) => {
  switch (name) {
    case "cursor":
      return 4;
    case "grandma":
      return 7;
    case "mine":
      return 10;
    case "factory":
      return 13;
    default:
      return 0;
  }
};
