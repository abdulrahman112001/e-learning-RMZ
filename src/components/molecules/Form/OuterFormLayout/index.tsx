/////////// IMPORTS
///
import { ReactNode } from "react";

type OuterFormLayout_TP = {
  children: ReactNode;
  header?: string;
  submitComponent?: ReactNode;
  leftComponent?: ReactNode;
  className?: string;
};

export const OuterFormLayout = ({
  children,
  header,
  submitComponent,
  leftComponent,
  className,
}: OuterFormLayout_TP) => {
  return (
    <>
      <div className={`flex flex-col bg-white rounded-2xl  ${className}`}>
        {header ? (
          <>
            <div className="flex justify-endcenter">
              <h2 className="mb-8 text-2xl font-bold">{header}</h2>
              {leftComponent && leftComponent}
            </div>
          </>
        ) : (
          ""
        )}

        <div className="rounded-lg">{children}</div>
        <div className="flex py-3 general-button dark:bg-dark-tertiary">
          {!!submitComponent && submitComponent}
        </div>
      </div>
    </>
  );
};
