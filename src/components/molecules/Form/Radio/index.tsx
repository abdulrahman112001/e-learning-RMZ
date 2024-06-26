import { useIsRTL } from "../../../../@core/hooks"
import { Label } from "../../../atoms/Label"


type RadioProps_TP = {
  label: string
  name: string
  id: string
  className?: string
  disabled?: boolean
  checked?: boolean
}

type Props_TP = {
  [key: string]: any
}

export const Radio = ({
  label,
  name,
  id,
  className,
  disabled,
  defaultChecked,
  ...props
}: RadioProps_TP & Props_TP) => {
  const isRTL = useIsRTL()
  const marginClass = isRTL ? "ms-2" : "me-2"
  return (
    <div className="flex items-center justify-center px-2">
      <input
        id={id}
        {...props}

        {...{
          type: "radio",
          name,
          className: className,
          disabled,
          defaultChecked,
        }}

      />
      <Label htmlFor={id} className={marginClass}>
        {label}
      </Label>
    </div>
  )
}
