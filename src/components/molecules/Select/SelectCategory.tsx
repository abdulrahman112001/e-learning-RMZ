import { t } from "i18next";
import { useFetch } from "../../../@core/hooks";
import { OptionType } from "../../../helpers";
import { SelectComp } from "../Form/Select";
import { useFormikContext } from "formik";

type SelectCategory_tp = {
  name: string;
  label?: string;
  placeholder?: string;
};
export default function SelectCategory({
  name,
  label,
  placeholder,
}: SelectCategory_tp) {
  const { values, setFieldValue } = useFormikContext<any>();
  const { data } = useFetch<any>({
    queryKey: [`category`],
    endpoint: `category`,
  });

  const dataOptions = data?.data?.map((item: any) => ({
    value: item.id,
    label: item?.name,
  }));
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
