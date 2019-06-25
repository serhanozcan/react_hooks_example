import React from "react";
const UserTable = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">İsim</th>
          <th scope="col">Kullanıcı Adı</th>
          <th scope="col">İşlem</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => {
            return (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <button onClick={()=>props.editRow(user)} className="btn btn-primary btn-sm">Düzenle</button>
                  <button onClick={()=>props.deleteUser(user.id)} className="btn btn-danger btn-sm">Sil</button>
                </td>
              </tr>
            );
          })
        ) : (
          <div className="text-center">Sonuç Yok</div>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
