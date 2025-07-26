export const unwrapResponse = (res) => {
  if (res?.data?.data) return res.data.data;

  if (res?.data && typeof res.data === "object") return res.data;

  throw new Error("Unexpected response structure");
};

// thats why we are using return data.data everywhere in the frontend
// because the response from the backend is like this:
// {
//   "success": true,
//   "data": [ ...posts ] // ✅ actual posts array is inside `data`
// }
