import { useState, useEffect } from "react";

const useForm = (validateForm, action) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setErrors(validateForm(form));
		setIsSubmit(true);
  };

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmit) {
			action(form)
		}
	}, [errors])

  return { form, handleInputChange, handleSubmitForm, errors };
};

export default useForm;
