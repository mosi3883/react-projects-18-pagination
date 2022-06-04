const paginate = (followers) => {
  const itemsPerPage = 8;
  const maxPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = [];

  for (let i = 0; i < maxPages; i++) {
    const start = i * itemsPerPage;
    const end = start + itemsPerPage;
    newFollowers.push(followers.slice(start, end));
  }
  return newFollowers;
};

export default paginate;
