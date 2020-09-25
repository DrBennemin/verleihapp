export const getItems = async () => {
  const response = await fetch("/api/items");
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
};

export const getItem = async (id) => {
  const response = await fetch(`/api/items/${id}`);
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
};

export const postItem = async (item) => {
  const response = await fetch("/api/items", {
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
