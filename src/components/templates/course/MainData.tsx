import { useFormikContext } from "formik";
import BaseInputField from "../../molecules/Form/BaseInputField";
import { InnerFormLayout } from "../../molecules/Form/InnerFormLayout";
import { Radio } from "../../molecules/Form/Radio";
import { t } from "i18next";
import DateInput from "../../molecules/Form/DateInput";
import SelectLevelCourses from "../../molecules/Select/SelectLevelCourses";
import SelectInstitute from "../../molecules/Select/SelectInstitute";
import SelectCategory from "../../molecules/Select/SelectCategory";

function MainData() {
  const { values, setFieldValue } = useFormikContext();
  console.log("🚀 ~ MainData ~ values:", values);

  return (
    <InnerFormLayout title={"Add"} showpopuptitle={true} scroll={true}>
      <div className="grid grid-cols-3 col-span-12 gap-3">
        <div className="flex col-span-1">
          <Radio
            checked={values?.online == "1"}
            label={`${t("online")}`}
            id="online"
            name="online"
            onChange={() => {
              setFieldValue("online", "1");
            }}
          />
          <Radio
            label={`${t("offline")}`}
            checked={values?.online == "0"}
            id="online"
            name="online"
            onChange={() => {
              setFieldValue("online", "0");
            }}
          />
        </div>
        <div className="flex col-span-2">
          <Radio
            checked={values?.live == "1"}
            label={`${t("available")}`}
            id="live"
            name="live"
            onChange={() => {
              setFieldValue("live", "1");
            }}
          />
          <Radio
            label={`${t("not available")}`}
            checked={values?.live == "0"}
            id="live"
            name="live"
            onChange={() => {
              setFieldValue("live", "0");
            }}
          />
        </div>
        <div>
          <BaseInputField
            label="title"
            name="title"
            placeholder="title"
            type="text"
          />
        </div>
        <div>
          <BaseInputField
            label="price"
            name="price"
            placeholder="price"
            type="text"
          />
        </div>
        <div>
          <BaseInputField
            label="price"
            name="price"
            placeholder="price"
            type="text"
          />
        </div>

        <div>
          <DateInput name="start_date" label="start date" />
        </div>
        <div>
          <DateInput name="end_date" label="end date" />
        </div>
        <div>
          <SelectLevelCourses name="level" placeholder="level" />
        </div>
        <div>
          <SelectInstitute name="institute_id" placeholder="institute" />
        </div>
        <div>
          <SelectCategory name="category_id" placeholder="categories" />
        </div>
        <div>
          <BaseInputField
            label="duration"
            name="duration"
            placeholder="duration"
            type="text"
          />
        </div>
      </div>
    </InnerFormLayout>
  );
}

export default MainData;
