export default function validateInfo(form) {
  let errors = {};
  const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;

  // username
  if (!form.username.trim()) {
    errors.username = "Username required";
  }

  // email
  if (!form.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(form.email)) {
    errors.email = "Email address is invalid";
  }

  // password
  if (!form.password) {
    errors.password = "Password is required";
  } else if (form.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!form.confirmPassword) {
    errors.confirmPassword = "Password is required";
  } else if (form.confirmPassword !== form.password) {
    errors.confirmPassword = "Passwords do not match";
  }

	return errors;
}
