export const BaseService = async (url, body) => {
  const req = await fetch(url, {
    method: "POST",
    body: body,
  });

  try {
    const json = await req.json();
    return json;
  } catch (error) {
    console.log(req);
    return error;
  }
};
