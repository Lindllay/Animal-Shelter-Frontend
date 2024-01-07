const formatDate = (date) => {
  if (!date) return;

  const locale = navigator.language;
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  return new Intl.DateTimeFormat(locale, options).format(new Date(date));
};

export default formatDate;
