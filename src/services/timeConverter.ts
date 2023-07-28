const timeToMilliseconds = (
  time: number,
  unit: "minutes" | "hours" | "days"
): number => {
  const conversionFactors = {
    minutes: 60000,
    hours: 3600000,
    days: 86400000,
  };

  const factor = conversionFactors[unit];

  if (!factor) {
    throw new Error("Invalid unit. Please use 'minutes', 'hours', or 'days'.");
  }

  return time * factor;
};

export default timeToMilliseconds;
