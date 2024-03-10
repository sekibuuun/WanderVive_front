const FormatDate = ({ date }) => {
  const yyyy = date.getFullYear();
  const mm = ('00' + (date.getMonth() + 1)).slice(-2);
  const dd = ('00' + date.getDate()).slice(-2);

  return `${yyyy}年${mm}月${dd}日`;
};

export { FormatDate };
