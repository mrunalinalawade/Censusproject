import { ErrorMessages } from "./ErrorMessage";


/************************************* Regex ***************************************************/
export const EMAILREGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PASSWORDREGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const DIGITREGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/;
export const ALPHANUMERIC_REGEX = /^[a-zA-Z0-9]*$/;
export const FULLNAME_REGEX = /^([A-Za-z][a-z]*\s?[A-Z][a-z]*)|([A-Za-z][a-z]*)$/;
export const name_REGEX = /^[a-zA-Z ]+$/;
export let DECIMAL_REGEX = /^\d*\.?\d*$/;
export let NUMBER_REGEX = /^\d*$/;
export let ALPHABET_SPACE_REGEX = /^[a-zA-Z ]*$/;
export let WEBSITE_REGEX = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
export let USERNAME_REGEX = /^[a-z0-9_]*$/;
export let USER_REGEX = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
export let alphabetic = /[a-zA-Z]/g;
export let PhoneRegex = /^([0-9]){10,20}$/;

/************************************* All Validations ***************************************************/
/****** EMAIL VALIDATION *****/
export const ValidateEmail = (email) => {
  if (email !== '') {
    if (EMAILREGEX.test(email)) {
      return '';
    } else {
      return ErrorMessages.EmailError;
    }
  } else {
    return ErrorMessages.EmailEmpty;
  }
};

/****** PASSWORD VALIDATION *****/
export const ValidatePassword = (password) => {
  if (password !== '') {
    if (PASSWORDREGEX.test(password)) {
      return '';
    } else {
      return ErrorMessages.PasswordError;
    }
  } else {
    return ErrorMessages.PasswordEmpty;
  }
};

export const ValidatePasswordlogin = (password) => {
  if (password !== '') {
    if (PASSWORDREGEX.test(password)) {
      return '';
    } else {
      return ErrorMessages.WrongPassword;
    }
  } else {
    return ErrorMessages.PasswordEmpty;
  }
};

/****** Validation ChangePassword *****/
export const ValidateChangePassword = (changepassword) => {
  if (changepassword !== '') {
    if (changepassword.length < 8) {
      return ErrorMessages.ChangePasswordbelow8;
    } else {
      if (PASSWORDREGEX.test(changepassword)) {
        return '';
      } else {
        return ErrorMessages.PasswordError;
      }
    }
  } else {
    return ErrorMessages.ChangepasswordEmpty;
  }
};

/****** Validation ConfirmPassword *****/
export const ValidateConfirmPassword = (ConfirmPassword, Password) => {
  if (ConfirmPassword !== '') {
    if (ConfirmPassword === Password) {
      return '';
    } else {
      return ErrorMessages.ConfirmPasswordMatch;
    }
  } else {
    return ErrorMessages.ConfirmPasswordEmpty;
  }
};

/****** Validation Fullname *****/
export const ValidateFullname = (fullname) => {
  if (fullname !== '') {
    if (fullname.length >= 2 && name_REGEX.test(fullname)) {
      return '';
    } else {
      if (fullname.length < 2) {
        return ErrorMessages.FullnameError;
      } else {
        return ErrorMessages.FullnameError1;
      }
    }
  } else {
    return ErrorMessages.FullnameEmpty;
  }
};

export const ValidateFirmemployername = (firm) => {
  if (firm !== '') {
    if (firm.length >= 2 && name_REGEX.test(firm)) {
      return '';
    } else {
      if (firm.length < 2) {
        return ErrorMessages.firmError;
      } else {
        return ErrorMessages.firmError1;
      }
    }
  } else {
    return ErrorMessages.firmEmpty;
  }
};

export const ValidateDesignation = (design) => {
  if (design !== '') {
    if (design.length >= 2 && name_REGEX.test(design)) {
      return '';
    } else {
      if (design.length < 2) {
        return ErrorMessages.designError;
      } else {
        return ErrorMessages.designError1;
      }
    }
  } else {
    return ErrorMessages.designEmpty;
  }
};


export const ValidateMiddlename = (mname) => {
  if (mname !== '') {
    if (mname.length >= 2 && name_REGEX.test(mname)) {
      return '';
    } else {
      if (mname.length < 2) {
        return ErrorMessages.mnameError;
      } else {
        return ErrorMessages.mnameError1;
      }
    }
  } else {
    return ErrorMessages.mnameEmpty;
  }
};
export const ValidateSurname = (sname) => {
  if (sname !== '') {
    if (sname.length >= 2 && name_REGEX.test(sname)) {
      return '';
    } else {
      if (sname.length < 2) {
        return ErrorMessages.snameError;
      } else {
        return ErrorMessages.snameError1;
      }
    }
  } else {
    return ErrorMessages.snameEmpty;
  }
};
// export const OTPVerification = (Code) => {
//   const codeStr = Code.toString();
//   if (codeStr !== '') {
//     if (codeStr.length !== 6) {
//       return ErrorMessages.CodeLengthError;
//     } else {
//       return '';
//     }
//   } else {
//     return ErrorMessages.CodeEmpty;
//   }
// };
export const OTPVerification = (Code) => {
  // Check if Code is null or undefined
  if (Code == null) {
    return ErrorMessages.CodeEmpty;  // Return an appropriate error message
  }

  const codeStr = Code.toString();

  // Check if the code string is not empty
  if (codeStr !== '') {
    // Check if the length of the code is exactly 6
    if (codeStr.length !== 6) {
      return ErrorMessages.CodeLengthError;
    } else {
      return '';  // No error if the length is correct
    }
  } else {
    return ErrorMessages.CodeEmpty;  // Handle empty code scenario
  }
};


export const NoFamily = (Code1) => {
  // Check if Code is null or undefined
  if (Code1 == null) {
    return ErrorMessages.CodeEmpty;  // Return an appropriate error message
  }

  const code1Str = Code1.toString();

  // Check if the code string is not empty
  if (code1Str !== '') {
    // Check if the length of the code is exactly 6
    if (code1Str.length >= 3) {
      return ErrorMessages.Code1LengthError;
    } else {
      return '';  // No error if the length is correct
    }
  } else {
    return ErrorMessages.Code1Empty;  // Handle empty code scenario
  }
};

export const ValidateMobileNo = (MobileNumber) => {
  if (MobileNumber !== '') {
    const NumberStr = MobileNumber.toString(); // Convert to string

    if (PhoneRegex.test(NumberStr)) {
      return '';
    } else {
      return ErrorMessages.PhoneNumberError;
    }
  } else {
    return ErrorMessages.PhoneNoEmpty;
  }
};

// export const ValidateCityField = (city) => {
//   if (city !== undefined && city.length >= 3 && city.length <= 50) {
//     return '';
//   } else {
//     return ErrorMessages.CityLengthInvalid;
//   }
// };

export const ValidateCityField = (city) => {
  // Check if city is a non-empty string and its length is between 3 and 50
  if (typeof city === 'string' && city.length >= 3 && city.length <= 50) {
    return '';  // No error
  } else {
    return ErrorMessages.CityLengthInvalid;  // Return error message
  }
};

export const ValidateaddressField = (address) => {
  // Check if city is a non-empty string and its length is between 3 and 50
  if (typeof address === 'string' && address.length >= 3 && address.length <= 100) {
    return '';  // No error
  } else {
    return ErrorMessages.AddressLengthInvalid;  // Return error message
  }
};

export const Validateaddress1Field = (address1) => {
  // Check if city is a non-empty string and its length is between 3 and 50
  if (typeof address1 === 'string' && address1.length >= 3 && address1.length <= 100) {
    return '';  // No error
  } else {
    return ErrorMessages.address1LengthInvalid;  // Return error message
  }
};


export const ValidatetalukaField = (taluka) => {
  // Check if city is a non-empty string and its length is between 3 and 50
  if (typeof taluka === 'string' && taluka.length >= 3 && taluka.length <= 50) {
    return '';  // No error
  } else {
    return ErrorMessages.talukaLengthInvalid;  // Return error message
  }
};
export const ValidatedistrictField = (district) => {
  // Check if city is a non-empty string and its length is between 3 and 50
  if (typeof district === 'string' && district.length >= 3 && district.length <= 50) {
    return '';  // No error
  } else {
    return ErrorMessages.districtLengthInvalid;  // Return error message
  }
};
export const ValidatestateField = (state) => {
  // Check if city is a non-empty string and its length is between 3 and 50
  if (typeof state === 'string' && state.length >= 3 && state.length <= 50) {
    return '';  // No error
  } else {
    return ErrorMessages.stateLengthInvalid;  // Return error message
  }
};
export const ValidateAddCategory = (Category) => {
  if (Category !== '' && Category !== null && Category !== undefined) {
    return '';
  } else {
    return ErrorMessages.CategoryError;
  }
};

export const ValidationMessgaeBox = (message) => {
  if (message === '' || message === null || message === undefined) {
    return ErrorMessages.EmptyMessage;
  } else if (message.length < 5) {
    return ErrorMessages.MessgaeLength;
  } else {
    return '';
  }
};
