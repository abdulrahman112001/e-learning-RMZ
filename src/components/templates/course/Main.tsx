import { t } from "i18next";
import { useMemo, useState } from "react";
import { useFetch, useIsRTL, useMutate } from "../../../@core/hooks";
import { AddButton } from "../../atoms/AddButton";
import { ModalTemplate } from "../../molecules/Form/ModalTemplate";
import Table from "../../molecules/Form/table/Table";
import Add from "./Add";
import { generateColumns } from "./generateColumns";
import { notify } from "../../../@core/utils/toast";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isRTL = useIsRTL()



 
  const queryParams = {};
  const searchParams = new URLSearchParams(queryParams);
  const endpoint = `course?${searchParams.toString()}`;
  const { data , refetch } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
  });
  const columns = useMemo(
    () => generateColumns( refetch, setIsModalOpen),
    [isRTL]
  );


  return (
    <div>
      <div className="flex justify-end mb-4 items">
        <div>
          <AddButton
            action={() => {
              setIsModalOpen(true);
            }}
            addLabel={`${t("Add")}`}
          />
        </div>
      </div>
      <ModalTemplate
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <Add />
      </ModalTemplate>

      <Table columns={columns} rows={data?.data || []} />
    </div>
  );
}

export default Main;
