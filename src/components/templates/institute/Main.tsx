import { Box, Typography, styled } from "@mui/material";
import { t } from "i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../../@core/hooks";
import { AddButton } from "../../atoms/AddButton";
import { ModalTemplate } from "../../molecules/Form/ModalTemplate";
import Table from "../../molecules/Form/table/Table";
import Add from "./Add";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const LinkStyled = styled(Link)(({ theme }) => ({
    fontWeight: 400,
    fontSize: "0.8rem",
    cursor: "pointer",
    textDecoration: "none",
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  }));
  const columns = [
    {
      field: "name",
      flex: 0.2,
      headerName: "Name",
      renderCell: ({ row }: any) => {
        const { name } = row;
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <LinkStyled href="/apps/user/view/overview/">{name}</LinkStyled>
            </Box>
          </Box>
        );
      },
    },
    {
      field: "mission",
      headerName: "mission",
    },
    {
      field: "vision",
      headerName: "vision",
    },
  ];

  const queryParams = {};
  const searchParams = new URLSearchParams(queryParams);
  const endpoint = `institute?${searchParams.toString()}`;
  const { data } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
  });

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
