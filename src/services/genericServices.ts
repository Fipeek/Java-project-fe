export const fetchWithPayload = (url: string, method: string, payload: any) => {
  console.log(payload);
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};
