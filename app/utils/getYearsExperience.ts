export const getYearsExperience = () => {
  const startYear = 2010;
  const currentYear = new Date().getFullYear();

  return currentYear - startYear;
};
