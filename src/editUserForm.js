import React, {useState, useEffect} from 'react';
const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser)
    const handleInputs = event => {
        const {name, value} = event.target;
        setUser({...user, [name]:value})
    }
    const updateUser = event => {
        event.preventDefault();
        props.updateUser(user.id, user);
    }
    useEffect(() => {
        setUser(props.currentUser)
      }, [props])
    return(
        <form onSubmit={updateUser}>
            <label htmlFor="">İsim</label>
            <input onChange={handleInputs} type="text" value={user.name} name='name' className='form-control'/>
            <br/>
            <label htmlFor="">Kuallanıcı Adı</label>
            <input onChange={handleInputs} type="text" value={user.username} name='username' className='form-control'/>
            <br/>
            <button type='submit' className='btn btn-success btn-sm'>Kaydet</button>
        </form>        
    )
}

export default EditUserForm;