export const serializeJSON = (data) => {
  const jsonString = JSON.stringify(data, (key, value) =>
    typeof value === 'bigint' ? Number(value) : value
  );

  const jsonObject = JSON.parse(jsonString);

  return jsonObject;
};
