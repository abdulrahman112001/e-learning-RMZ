import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useFormikContext } from "formik";
import dayjs, { Dayjs } from "dayjs";

type DateInput_Tp = {
  name: string;
  label?: string;
};

function DateInput({ name, label }: DateInput_Tp) {
  const { values, setFieldValue } = useFormikContext<{ [key: string]: any }>();

  const handleDateChange = (newValue: Dayjs | null) => {
    const formattedDate = newValue ? newValue.format("YYYY-MM-DD") : null;
    setFieldValue(name, formattedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={label}
          value={values[name] ? dayjs(values[name]) : null}
          onChange={handleDateChange}
          format="YYYY-MM-DD"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default DateInput;
