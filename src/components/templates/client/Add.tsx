import { Form, Formik } from "formik";
import { OuterFormLayout } from "../../molecules/Form/OuterFormLayout";
import MainData from "./MainData";

function Add() {
  return (
    <div>
      <Formik
        initialValues={{ user_id: "" }} // Add user_id to initialValues
        // validationSchema={validationSchema}
        onSubmit={(values: any) => {}}
      >
        <Form>
          <OuterFormLayout header={""}>
            <MainData />
          </OuterFormLayout>
        </Form>
      </Formik>
    </div>
  );
}

export default Add;
