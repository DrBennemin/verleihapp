export const getRentals = async () => {
  const response = await fetch("/api/rent");
  if (!response.ok) {
    throw response;
  }
  const result = await response.json();
  return result;
};

export const getRent = async (id) => {
  const response = await fetch(`/api/rent/${id}`);
  if (!response.ok) {
    throw response;
  }
  const result = await response.json();
  return result;
};

export const postRent = async (rent) => {
  const response = await fetch("/api/rent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rent),
  });
  if (!response.ok) {
    throw response;
  }
  const result = await response.json();
  return result;
};

export const deleteRent = async (id) => {
  const response = await fetch(`/api/rent/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw response;
  }
  const result = await response.json();
  return result;
};
