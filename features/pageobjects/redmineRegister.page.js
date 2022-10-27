class registerPage {
  generateName() {
    var length = 8,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
  get registerBtn() {
    return $('[class="register"]');
  }
  get usernameInput() {
    return $('[id="user_login"]');
  }
  get passwordInput() {
    return $('[id="user_password"]');
  }
  get confirmPasswordInput() {
    return $('[id="user_password_confirmation"]');
  }
  get firstnameInput() {
    return $('[id="user_firstname"]');
  }
  get lastnameInput() {
    return $('[id="user_lastname"]');
  }
  get emailInput() {
    return $('[id="user_mail"]');
  }
  get submitBtn() {
    return $('[name="commit"]');
  }
  get successNotification() {
    return $('[id="flash_notice"]');
  }
}

module.exports = new registerPage();
