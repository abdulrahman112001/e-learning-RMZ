import { Box } from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import Actions from "../../molecules/Actions/Actions";

export const generateColumns = (
  page: number,
  refetch: any
): ColumnDef<any>[] => {
  return [
    {
      field: "name",
      flex: 0.2,
      headerName: "Name",
      renderCell: ({ row }: any) => {
        const { title } = row;
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              {title}
            </Box>
          </Box>
        );
      },
    },
    {
      field: "description",
      headerName: "description",
    },
    {
      field: "price",
      headerName: "price",
    },
    {
      field: "online",
      headerName: "online",
      renderCell: ({ row }: any) => {
        const { online } = row;
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              {online == 1 ? "online" : "offline"}
            </Box>
          </Box>
        );
      },
    },
    {
      field: "live",
      headerName: "live",
      renderCell: ({ row }: any) => {
        const { live } = row;
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              {live == 1 ? "live" : "not live"}
            </Box>
          </Box>
        );
      },
    },
    {
      field: "start_date",
      headerName: "start_date",
      renderCell: ({ row }: any) => {
        const { start_date } = row;
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              {start_date ? start_date : "-"}
            </Box>
          </Box>
        );
      },
    },
    {
      field: "end_date",
      headerName: "end_date",
      renderCell: ({ row }: any) => {
        const { end_date } = row;
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              {end_date ? end_date : "-"}
            </Box>
          </Box>
        );
      },
    },
    {
      field: "duration",
      headerName: "duration",
    },
    {
      field: "level",
      headerName: "level",
    },
    {
      header: `${t("Active")}`,
      accessorKey: "status",
      renderCell: ({ row }: any) => {
        const { end_date } = row;
        return <Actions />;
      },
    },
  ];
};
