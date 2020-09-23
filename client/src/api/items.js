export const getItems = async () => {
  const response = await fetch("http://localhost:3001/api");
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
};

export const postItem = async (item) => {
  const response = await fetch("http://localhost:3001/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
};
