import { Form, Formik } from "formik";
import { OuterFormLayout } from "../../molecules/Form/OuterFormLayout";
import MainData from "./MainData";
import { useMutate } from "../../../@core/hooks";
import { notify } from "../../../@core/utils/toast";
import { Button } from "../../atoms/buttons/Button";
import { t } from "i18next";

function Add() {
  const { mutate, isPending } = useMutate({
    endpoint: `course`,
    mutationKey: [`course`],
    onSuccess: () => {
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });
  return (
    <div>
      <Formik
        initialValues={{ user_id: "" }} // Add user_id to initialValues
        // validationSchema={validationSchema}
        onSubmit={(values: any) => mutate({})}
      >
        <Form>
          <OuterFormLayout
            header={""}
            submitComponent={
              <Button
                type="submit"
                className="mx-5 mt-8 ml-auto"
                loading={isPending}
              >
                {t("submit")}
              </Button>
            }
          >
            <MainData />
          </OuterFormLayout>
        </Form>
      </Formik>
    </div>
  );
}

export default Add;
