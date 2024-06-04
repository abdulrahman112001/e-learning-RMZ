import { Box, Typography, styled } from "@mui/material";
import { t } from "i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../../@core/hooks";
import { AddButton } from "../../atoms/AddButton";
import { ModalTemplate } from "../../molecules/Form/ModalTemplate";
import Table from "../../molecules/Form/table/Table";
import Add from "./Add";
import Actions from "../../molecules/Actions/Actions";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userRoleObj: any = {
    Admin: { icon: "mdi:laptop", color: "error.main" },
    author: { icon: "mdi:cog-outline", color: "warning.main" },
    ser: { icon: "mdi:pencil-outline", color: "info.main" },
    maintainer: { icon: "mdi:chart-donut", color: "success.main" },
    User: { icon: "mdi:account-outline", color: "primary.main" },
  };

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
      field: "email",
      headerName: "Email",
    },
    {
      field: "Role",
      headerName: "Role",
      renderCell: ({ row }: any) => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& svg": { mr: 3, color: userRoleObj[row.Role]?.color },
            }}
          >
            <Typography
              noWrap
              sx={{ color: "text.secondary", textTransform: "capitalize" }}
            >
              {row?.role}
            </Typography>
          </Box>
        );
      },
    },

    {
      field: "ban",
      headerName: "ban",
      renderCell: ({ row }: any) => {
        return <Box>{row?.ban ? row?.ban : "-"}</Box>;
      },
    },
    {
      field: "Actions",
      headerName: "Actions",
      renderCell: ({ row }: any) => {
        return <Actions />;
      },
    },
  ];

  const queryParams = {
    role: "admin",
  };
  const searchParams = new URLSearchParams(queryParams);
  const endpoint = `user?${searchParams.toString()}`;
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
            addLabel={`${t("Assign Role")}`}
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
