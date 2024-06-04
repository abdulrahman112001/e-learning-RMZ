import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { useFetch } from "../../@core/hooks";
import { getInitials } from "../../@core/utils/get-initials";
import Table from "../../components/molecules/Form/table/Table";
import CustomAvatar from "../../components/molecules/avatar";

function Lesson() {
  const renderClient = (row: any) => {
    if (row?.avatar?.length) {
      return (
        <CustomAvatar src={row?.avatar} sx={{ mr: 3, width: 34, height: 34 }} />
      );
    } else {
      return (
        <CustomAvatar
          skin="light"
          color={row?.avatarColor || "primary"}
          sx={{ mr: 3, width: 34, height: 34, fontSize: "1rem" }}
        >
          {getInitials(row?.firstName ? row?.firstName : "John Doe")}
        </CustomAvatar>
      );
    }
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
            {renderClient(row)}
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
  const endpoint = `lesson?${searchParams.toString()}`;
  const { data } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
  });

  return (
    <div className="w-full">
      <Table columns={columns} rows={data?.data || []} />
    </div>
  );
}

export default Lesson;
