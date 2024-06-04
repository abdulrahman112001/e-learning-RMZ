import BaseInputField from "../../molecules/Form/BaseInputField";
import { InnerFormLayout } from "../../molecules/Form/InnerFormLayout";
import { DropFile } from "../../molecules/Form/files/DropFile";
import SelectUsers from "../../molecules/Select/SelectUsers";

function MainData() {
  return (
    <InnerFormLayout title={"Add"} showpopuptitle={true} scroll={true}>
      <div className="grid grid-cols-3 col-span-12 gap-2">
        <BaseInputField
          name="name"
          label="name"
          placeholder="name"
          type="text"
        />
        <BaseInputField
          name="vision"
          label="vision"
          placeholder="vision"
          type="text"
        />
        <BaseInputField
          name="mission"
          label="mission"
          placeholder="mission"
          type="text"
        />
        <SelectUsers name="user_id" placeholder="Users" />
        <div className="col-span-3">
          <DropFile name="image" />
        </div>
      </div>
    </InnerFormLayout>
  );
}

export default MainData;
