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

export const OTPVerification = (Code) => {
  const codeStr = Code.toString();
  if (codeStr !== '') {
    if (codeStr.length !== 6) {
      return ErrorMessages.CodeLengthError;
    } else {
      return '';
    }
  } else {
    return ErrorMessages.CodeEmpty;
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

export const ValidateCityField = (city) => {
  if (city !== undefined && city.length >= 3 && city.length <= 50) {
    return '';
  } else {
    return ErrorMessages.CityLengthInvalid;
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
