import { Form, Formik } from "formik";
import { OuterFormLayout } from "../../molecules/Form/OuterFormLayout";
import MainData from "./MainData";
import { t } from "i18next";
import { Button } from "../../atoms/buttons/Button";
import { useMutate } from "../../../@core/hooks";
import { notify } from "../../../@core/utils/toast";

function Add() {
  const { mutate, isPending } = useMutate({
    mutationKey: ["category"],
    endpoint: `category`,
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
        initialValues={{}}
        // validationSchema={validationSchema}
        onSubmit={(values: any) => mutate(values)}
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
