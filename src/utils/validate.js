const checkValidateData = (email, password) => {
  const emailValidation =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const passpordValidation =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //   const nameValidation =
  //     /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(name);

  if (!emailValidation) return "Email ID is not valid";
  if (!passpordValidation) return "Password is not valid";
  //if (!nameValidation) return "Name is not valid";
  return null;
};

export default checkValidateData;
