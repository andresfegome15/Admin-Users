

const UsersList = ({users,userselect,deleteUser}) => {
console.log(users);
    return (
        <> {users.length > 0 && users.map(user=>(<ul className='item-user' key={user.id}>
            
                <li key={user.id}>
                    <h2 className='name-user'> {user.first_name} {user.last_name}</h2>
                    <p><b className='title-user'>Email </b><span>{user.email}</span></p>
                    <p><b className='title-user'>Birthday </b><span>{user.birthday}</span></p>
                    <button className='button-action' type='button' onClick={()=>userselect(user)}><i className="fa-solid fa-repeat"></i></button>
                    <button className='button-action' type='button' onClick={()=>deleteUser(user.id)}><i className="fa-solid fa-trash"></i></button>
                </li></ul>

            )) }{
                users.length === undefined && 
                users.id !== "" &&
                <ul className='item-user' key={users.id}>
                <li key={users.id}>
                    <h2 className='name-user'> {users.first_name} {users.last_name}</h2>
                    <p><b className='title-user'>Email </b><span>{users.email}</span></p>
                    <p><b className='title-user'>Birthday </b><span>{users.birthday}</span></p>
                    <button className='button-action' type='button' onClick={()=>userselect(users)}><i className="fa-solid fa-repeat"></i></button>
                    <button className='button-action' type='button' onClick={()=>deleteUser(users.id)}><i className="fa-solid fa-trash"></i></button>
                </li></ul>
            }</>
            
        
    );
};

export default UsersList;