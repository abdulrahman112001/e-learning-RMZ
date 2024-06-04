import { useFormikContext } from "formik";
import { t } from "i18next";
import { useFetch } from "../../../@core/hooks";
import { OptionType } from "../../../helpers";
import { SelectComp } from "../Form/Select";

type SelectInstitute_tp = {
  name: string;
  label?: string;
  placeholder?: string;
};
export default function SelectInstitute({
  name,
  label,
  placeholder,
}: SelectInstitute_tp) {
  const { values, setFieldValue } = useFormikContext<any>();
  const { data } = useFetch<any>({
    queryKey: [`institute`],
    endpoint: `institute`,
    // enabled: !!values?.city_id,
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
