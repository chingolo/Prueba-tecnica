import { useEffect, useMemo, useState } from 'react'

import './App.css'
import { useUsers } from './hooks/UserState'
import UsersList from './components/UsersList'


const App = () => {

  const { usersList, refreshUsers } = useUsers()
  const [filterName , setFilterNane] = useState<string | null>(null)
    




  const filteredUsers = useMemo(() => {
  
    return filterName != null && filterName.length > 0
      ? usersList.filter(user => {
        return user.name.toLowerCase().includes(filterName.toLowerCase())
      })
      : usersList
  }, [usersList, filterName])



  return (
    <div >

      <input placeholder='Filtar por nombre' onChange={(e) => {
          setFilterNane(e.target.value)
        }} />


      <UsersList users={filteredUsers} ></UsersList>




    </div>
  )
}

export default App
