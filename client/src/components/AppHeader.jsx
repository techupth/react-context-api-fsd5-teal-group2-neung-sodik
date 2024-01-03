import { useContext } from "react";
import { UserDataContext } from "../context/userDataContext";

function AppHeader() {
  const contextData = useContext(UserDataContext);

  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ </h2>

      <p>Username: {contextData.userDataState.username}</p>
      <p>Level: {contextData.userDataState.level}</p>
      <img src={contextData.userDataState.avatar} alt="User Avatar" />
    </div>
  );
}

export default AppHeader;
