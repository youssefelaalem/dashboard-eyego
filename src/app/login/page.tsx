"use client";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginSchema } from "@/validations/LoginSchema";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (values: LoginFormValues) => {
    if (values.email === "admin@email.com" && values.password === "123456") {
      localStorage.setItem("token", "dummyToken");
      router.push("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ values }) => {
          console.log("values", values);

          return (
            <Form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
              <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

              <div className="mb-4">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <div className="h-5 mt-1">
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="mb-4">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <div className="h-5 mt-1">
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 text-white p-2 rounded hover:bg-cyan-600"
              >
                Login
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
