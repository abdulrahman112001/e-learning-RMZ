import { useFormikContext } from "formik";
import { useMutate } from "../../../@core/hooks";
import { notify } from "../../../@core/utils/toast";
import { InnerFormLayout } from "../../molecules/Form/InnerFormLayout";
import SelectInstitute from "../../molecules/Select/SelectInstitute";
import SelectRole from "../../molecules/Select/SelectRole";
import SelectUsers from "../../molecules/Select/SelectUsers";
import { t } from "i18next";
import { Button } from "../../atoms/buttons/Button";

function MainData() {
  const { values } = useFormikContext();
  const { mutate, isPending } = useMutate({
    endpoint: `user/assign_role/${values?.user_id}`,
    mutationKey: [`user/assign_role/${values?.user_id}`],
    onSuccess: () => {
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  return (
    <InnerFormLayout title={"Add"} showpopuptitle={true} scroll={true}>
      <div className="grid grid-cols-3 col-span-12 gap-3">
        <div className="col-sp">
          <SelectUsers name="user_id" label="instructors" />
        </div>
        <div className="col-sp">
          <SelectRole name="role" label="Role" />
        </div>
        <div className="col-s">
          <SelectInstitute name="institute_id" label="institute" />
        </div>
        <div>
          <Button
            type="submit"
            className="mx-5 mt-8 mr-auto"
            loading={isPending}
            action={() => mutate(values)}
          >
            {t("submit")}
          </Button>
        </div>
      </div>
    </InnerFormLayout>
  );
}

export default MainData;
