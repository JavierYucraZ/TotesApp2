import { BaseService } from "./../";

export const LoginService = async ({ ci, password }) => {
  console.log(ci, password);

  const body = {
    ci: ci,
    password: password,
  };

  const url =
    "https://thisismynewapptest.000webhostapp.com/App/movil/controllers/servicio.php?service=Login";

  try {
    const response = await BaseService(url, body);
    return response;
  } catch (error) {
    return error;
  }
};
