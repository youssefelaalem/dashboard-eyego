"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/store/thunks/usersThunk";
import { useEffect, useMemo, useState } from "react";
import type { AppDispatch, RootState } from "@/store/store";
import { PuffLoader } from "react-spinners";
import {
  Box,
  Pagination,
  Stack,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { DeleteRounded, Edit } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TableComponent from "@/app/Components/TableComponent";
import debounce from "lodash.debounce";
import BasicSelect from "@/app/Components/BasicSelect";

const HEAD_LABELS = ["Full Name", "Email", "Role", "Phone"];
const FILTER_ARRAY = ["admin", "moderator","user"];
const SORT_OPTIONS = ["firstName", "lastName", "age", "email"];

export default function UserList() {
  const dispatch = useDispatch<AppDispatch>();
  const [searchName, setSearchName] = useState<string>("");
  const [filterName, setFilterName] = useState<string>("");
  const [sortName, setSortName] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const limit = 10;

  const debouncedSetSearchName = useMemo(
    () =>
      debounce((value: string) => {
        setSearchName(value);
      }, 300),
    []
  );

  useEffect(() => {
    return () => {
      debouncedSetSearchName.cancel();
    };
  }, [debouncedSetSearchName]);

  const { users, loading, error, total } = useSelector(
    (state: RootState) => state.users
  );

  const query = useMemo(
    () => ({
      limit,
      skip: (page - 1) * limit,
      search: searchName || "",
      filterRole: filterName || "",
      sortName: sortName || "",
    }),
    [limit, page, searchName, filterName, sortName]
  );
  useEffect(() => {
    dispatch(fetchUsers(query));
  }, [dispatch, query]);

  console.log("e", searchName);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <Box>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 bg-opacity-30">
          <PuffLoader color="#06b6d4" />
        </div>
      )}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#1f2937", mb: 3 }}
      >
        Employees List
      </Typography>
      <div className="block md:flex gap-10 justify-between items-center h-[30px] mb-20 md:mb-10">
        <div className=" flex items-center w-[200px] mb-5 gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
          <input
            type="text"
            placeholder="Name"
            className="p-2  bg-transparent outline-none"
            onChange={(e) => debouncedSetSearchName(e.target.value)}
          />
        </div>
        <div className="flex gap-4 justify-end">
          <BasicSelect
            className="w-[100%]"
            label="Role"
            arrItems={FILTER_ARRAY}
            filterName={filterName}
            setFilterName={setFilterName}
          />
          <BasicSelect
            className="w-[100%]"
            label="Sort"
            arrItems={SORT_OPTIONS}
            filterName={sortName}
            setFilterName={setSortName}
          />
        </div>
      </div>

      <TableComponent
        headlines={HEAD_LABELS}
        hasActions={true}
        rows={
          <>
            {users?.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell sx={{ color: "#1f2937" }}>
                  {`${user.firstName} ${user.lastName}`}
                </TableCell>
                <TableCell sx={{ color: "#4b5563" }}>{user.email}</TableCell>
                <TableCell sx={{ color: "#4b5563" }}>{user.role}</TableCell>
                <TableCell sx={{ color: "#4b5563" }}>{user.phone}</TableCell>
                <TableCell>
                  <Tooltip title="Delete" arrow>
                    <DeleteRounded
                      aria-label="Delete user"
                      sx={{ color: "#ef4444", cursor: "pointer", mx: 0.5 }}
                    />
                  </Tooltip>
                  <Tooltip title="Edit" arrow>
                    <Edit
                      aria-label="Edit user"
                      sx={{ color: "#3b82f6", cursor: "pointer", mx: 0.5 }}
                    />
                  </Tooltip>
                  <Tooltip title="View Details" arrow>
                    <VisibilityIcon
                      aria-label="View user details"
                      sx={{ color: "#10b981", cursor: "pointer", mx: 0.5 }}
                    />
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </>
        }
      />

     
      <Stack className="flex items-end mt-4" spacing={2}>
        <Pagination
          count={Math.ceil((total || 0) / limit)}
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    </Box>
  );
}
