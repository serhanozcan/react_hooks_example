import React, {useState} from 'react';
import UserTable from './tables/userList';
import AddUser from './addUser';
import EditUserForm from './editUserForm'
const App = () => {
    const UsersData = [
        {id:1, name:'Serhan', username:'serhanozcan'},
        {id:2, name:'Bahadır', username:'bahadirsenbay'},
        {id:3, name:'Eylül', username:'eylulozcan'}
    ]
    const [users, setUsers] = useState(UsersData);
    const addUser = user =>{
        user.id=users.length+1
        setUsers([...users, user])
    }
    const deleteUser = id => {
        setUsers(users.filter(user=>user.id != id))
    }
    const [editing, setEditing] = useState(false);
    const initialFormState = {id:null, name:'', username:''}
    const [currentUser, setCurrentUser] = useState(initialFormState);
    const editRow = user => {
        setEditing(true);
        setCurrentUser({id:user.id, name:user.name, username:user.username})
    }
    const updateUser = (id, updatedUser) => {
        setEditing(false);
        setUsers(users.map(user=>(user.id===id ? updatedUser:user)))
    }
    return(
            <div className="container mt-5">
                <h1>Kullanıcı Hooks</h1>
                <hr/>
                <div className="row">
                    {editing ? (
                        <div className="col-5">
                            <h3>Kullanıcı Düzenle</h3>
                            <EditUserForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ):(
                        <div className="col-5">
                            <h3>Kullanıcı Ekle</h3>
                            <AddUser addUser={addUser}/>
                        </div>
                    )}
                    
                    <div className="col-7">
                        <h3>Kullanıcı Listesi</h3>
                        <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
                    </div>
                </div>
            </div>
    )
};


export default App;