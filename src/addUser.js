import React, {useState} from 'react';

const AddUser = props => {
    const initialFormState = {id:null, name:'', username:''}
    const [user, setUser] = useState(initialFormState)
    const handleInputs = event => {
        const {name, value} = event.target;
        setUser({...user, [name]:value})
    }
    const addUserForm = event => {
        event.preventDefault();
        props.addUser(user);
        setUser(initialFormState)
    }
    return(
        <form onSubmit={addUserForm}>
            <label htmlFor="">İsim</label>
            <input onChange={handleInputs} type="text" value={user.name} name='name' className='form-control'/>
            <br/>
            <label htmlFor="">Kuallanıcı Adı</label>
            <input onChange={handleInputs} type="text" value={user.username} name='username' className='form-control'/>
            <br/>
            <button type='submit' className='btn btn-success btn-sm'>Kullanıcı Ekle</button>
        </form>        
    )
}

export default AddUser;