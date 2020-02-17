const parseDate = d => {
  const dateConfig = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return (new Date(d)).toLocaleDateString('en-US', dateConfig);
};

export default parseDate;
