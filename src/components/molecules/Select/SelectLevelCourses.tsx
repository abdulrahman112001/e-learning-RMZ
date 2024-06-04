import { useFormikContext } from "formik";
import { t } from "i18next";
import { OptionType } from "../../../helpers";
import { SelectComp } from "../Form/Select";

type SelectLevelCourses_tp = {
  name: string;
  label?: string;
  placeholder?: string;
};
export default function SelectLevelCourses({
  name,
  label,
  placeholder,
}: SelectLevelCourses_tp) {
  const { values, setFieldValue } = useFormikContext<any>();

  const dataOptions = [
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Advanced", label: "Advanced" },
  ];
  const selectedValue = dataOptions?.find(
    (option: OptionType) => option?.value == values[name]
  );
  return (
    <div className="text-xs ">
      <SelectComp
        placeholder={placeholder ? placeholder : `${t("choose")}`}
        label={label}
        id="optionStatus"
        name={name}
        value={selectedValue}
        loadingPlaceholder={`${t("loading")}`}
        options={dataOptions}
        onChange={(option: OptionType) => setFieldValue(name, option?.value)}
      />
    </div>
  );
}
