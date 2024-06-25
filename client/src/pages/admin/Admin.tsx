import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  addUser,
  deleteUser,
  updateUser,
} from "../../store/reducers/ReducerUser";
import { useEffect } from "react";
import { User } from "../../interface";
export default function Admin() {
  // lấy dữ liệu về
  const getDate: any = useSelector((state) => state);
  // console.log(1111,getDate);
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(getUser());
  }, []);
  // hàm đi thêm mới user
  const addNewUser = () => {
    let newUser = {
      name: "thảo phương1234",
    };
    disPatch(addUser(newUser));
  };
  // hàm đi xóa user
  const handleDeleteUser = (id: number) => {
    disPatch(deleteUser(id));
  };

  //hàm cập nhật user

  const handleEditUser = (id: number) => {
    const userEdit = user.find((item: User) => item.id === id);
    if (userEdit) {
      setSelectedUserId(id);
      setInputValue(userEdit.name);
    }
  };

  const handleUpdate = () => {
    if (selectedUserId !== null) {
      dispatch(updateUser({ id: selectedUserId, name: inputValue }));
      setSelectedUserId(null);
      setInputValue("");
    }
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      Admin
      <h3>Cập nhật user</h3>
      <input type="text" onChange={handleChangeValue} value={inputValue} />
      <button onClick={handleUpdate} disabled={selectedUserId === null}>
        Cập nhật
      </button>
      {getDate.user.users.map((user: User) => (
        <li key={user.id}>
          {user.name}{" "}
          <button onClick={() => handleDeleteUser(user.id)}>xóa</button>
        </li>
      ))}
      <button onClick={addNewUser}>add User</button>
    </div>
  );
}
