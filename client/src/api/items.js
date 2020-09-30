export const getItems = async () => {
  const response = await fetch("/api/items");
  if (!response.ok) {
    throw response;
  }
  const result = await response.json();
  return result;
};

export const getItemsAvailable = async () => {
  const response = await fetch("/api/items?availability_like=lagernd");
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

export const deleteItem = async (id) => {
  const response = await fetch(`/api/items/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw response;
  }
  const result = await response.json();
  return result;
};

export const updateItem = async (id, content) => {
  const response = await fetch(`/api/items/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(content),
  });
  return response.ok;
};
