import { useEffect, useState } from 'react';
import type { User } from '../interfaces/User'
import Popup from './Popup';

interface UsersListProps {

    users: User[]

}

const UsersList: React.FC<UsersListProps> = ({ users }) => {

const [showPopup, setShowPopup] = useState(false);
const [userDisplayed, setUserDisplayed] = useState<User | null>(null);
const [message, setMessage] = useState<string>("");

  useEffect(() => {
    console.log(userDisplayed)
   setMessage (`ID.\n ${userDisplayed?.id}` +
                    `Name.\n ${userDisplayed?.name}` + +
                    `Email.\n ${userDisplayed?.email}` +
                `Gender.\n ${userDisplayed?.gender}` +
            `Status.\n ${userDisplayed?.status}` )


  }, [userDisplayed])

  const alertUser =  (user:User) => {
   const message = (`ID. ${user?.id}\n` +
                    `Name. ${user?.name}\n` + +
                    `Email. ${user?.email}\n` +
                `Gender. ${user?.gender}\n` +
            `Status. ${user?.status}\n` )
            alert(message)
  }
    return (
        <div >


            <table width='100%'>
                <thead>
                    <tr>
                        
                        <th className='pointer' >Nombre</th>
                        <th className='pointer' >email</th>
                     
                        <th className='pointer' >status</th>
                    </tr>
                </thead>

                <tbody >
                    {
                        users && users.length>0 && users.map((user) => {
                            return (
                                <tr key={user.email}  onClick={() => {setShowPopup(true)
                                        setUserDisplayed(user)
                                    alertUser(user)}
                                    }>
                                   
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    
                                    <td>
                                        {user.status}
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {
                        users && users.length==0 && <tr><td>No results</td></tr>
                        
                        
                    }
                </tbody>
            </table>

{showPopup && (
        <Popup user={userDisplayed} onClose={() => setShowPopup(false)} />
      )}


        </div>
    )
}

export default UsersList
