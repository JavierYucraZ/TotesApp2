import { TestUser } from "./../../App/Model/index";

export const LoginService = ({ userName, password }) => {
  if (userName === TestUser.userName && password === TestUser.password) {
    console.log("Datos correctos");
  } else {
    console.log("Datos incorrectos");
  }
};
