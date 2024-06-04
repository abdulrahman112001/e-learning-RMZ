import { Form, Formik } from "formik";
import { useMutate } from "../../../@core/hooks";
import { notify } from "../../../@core/utils/toast";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../../../@core/context/auth-and-perm/AuthProvider";
import MainData from "./MainData";
import { CError_TP } from "../../../types";

interface LoginFormValues {
  useremail: string;
  userpassword: string;
}

interface LoginResponse {
  data: {
    token: string;
    User: {
      userfirstname: string;
    };
  };
}

function Main() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const { mutate } = useMutate<LoginResponse>({
    endpoint: "auth/login",
    mutationKey: ["login"],
    onSuccess: (data) => {
      console.log("🚀 ~ Main ~ data:", data)
      const token = data?.data?.data?.user?.token;
      Cookies.set("token", token, { expires: 7 });
      notify("success", `welcome ${data?.data?.data?.user?.name}`);
      login(data?.data?.data?.user);
      navigate("/");
    },
    onError: (err: CError_TP) => {
      notify("error", `${err?.response?.data?.message}`);
    },
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => mutate(values)}
      >
        <Form>
          <MainData />
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
