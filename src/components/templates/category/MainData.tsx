import BaseInputField from "../../molecules/Form/BaseInputField";
import { InnerFormLayout } from "../../molecules/Form/InnerFormLayout";

function MainData() {
  return (
    <InnerFormLayout title={"Add"} showpopuptitle={true} scroll={true}>
      <div className="grid grid-cols-3 col-span-12 gap-2">
        <div className="col-span-3">
          <BaseInputField
            name="name"
            label="name"
            placeholder="name"
            type="text"
          />
        </div>
      </div>
    </InnerFormLayout>
  );
}

export default MainData;
