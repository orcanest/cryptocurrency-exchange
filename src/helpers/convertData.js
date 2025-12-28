const covertData = (data, type) => {
  const covertedData = data[type].map((item) => {
    return {
      data: item[0],
      [type]: item[1],
    };
  });

  return covertedData;
};

export { covertData };
