"use client";
import * as Yup from "yup";
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";

// Shape of form values
interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form className="flex flex-col gap-y-2 mx-auto w-48">
      <Field type="email" name="email" placeholder="email" className="border" />
      {touched.email && errors.email && (
        <div className="text-red-600 font-medium text-sm">{errors.email}</div>
      )}

      <Field
        type="password"
        name="password"
        placeholder="******"
        className="border"
      />
      {touched.password && errors.password && (
        <div className="text-red-600 font-medium text-sm">
          {errors.password}
        </div>
      )}

      <button
        className="border border-green-500 text-green-500 hover:bg-green-700 hover:text-green-200 transition font-medium w-24 self-center"
        type="submit"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </Form>
  );
};

// The type of props MyForm receives
interface MyFormProps {
  initialEmail?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      password: "",
    };
  },

  // Add a custom validation function (this can be async too!)
  validationSchema: Yup.object({
    email: Yup.string().email("not valid").required("Email required"),
    password: Yup.string()
      .min(10, "password has to be longer then 10 characters")
      .required("Password required"),
  }),

  handleSubmit: async (values) => {
    // do submitting things
    try {
      await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.log(error);
    }
  },
})(InnerForm);

// Use <MyForm /> wherevs
const FormLogin = () => (
  <div className="mt-10">
    <MyForm message="Sign up" />
  </div>
);

export default FormLogin;
