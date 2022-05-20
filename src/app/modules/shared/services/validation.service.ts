import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  val: boolean;

  constructor() { }

  nameValidation(event) {
    const charCode = event.keyCode;
    if (
      charCode == 32 ||
      charCode == 45 ||
      charCode == 44 ||
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122) ||
      charCode == 39 ||
      charCode == 46
    ) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  onlyChars(event) {
    const charCode = event.keyCode;
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  charnum(event) {
    const charCode = event.keyCode;
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122) ||
      (charCode >= 48 && charCode <= 57)
    ) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  allCaps(event) {
    event.target.value = event.target.value.toUpperCase();
  }

  firstCaps(string) {
    let stringArr = string.split(' ');
    stringArr = stringArr.map(
      (item) => item.charAt(0).toUpperCase() + item.slice(1)
    );
    return stringArr.join(' ');
  }

  onlyAlphabets(event) {
    const charCode = event.keyCode;
    if ((charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  onlyInteger(event) {
    const charCode = event.keyCode;
    if (charCode >= 48 && charCode <= 57) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  onlyIntegerAndAlphabet(event) {
    const charCode = event.keyCode;
    if ((charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }


  }

  onlyIntegerAndDecimal(event) {
    const charCode = event.keyCode;
    if ((charCode >= 48 && charCode <= 57) || charCode == 46) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  onlyAlphabetsAndSpace(event) {
    const charCode = event.keyCode;
    if ((charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122) || charCode == 32) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  titleCase(event) {
    if (event.target.value) {
      event.target.value = this.firstCaps(event.target.value);
    }
  }

  onlyIntegerAndSpace(event) {
    const charCode = event.keyCode;
    if ((charCode >= 48 && charCode <= 57) || charCode == 32) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  onlyIntegerAndDot(event) {
    const charCode = event.keyCode;
    if ((charCode >= 48 && charCode <= 57) || charCode == 46) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  camelize(str) {
    let value = str.toLowerCase();
    return value.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return " ";
      if (index === 0) return match.toUpperCase();
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }

}
