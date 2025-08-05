import { useEffect, useState } from "react"
import { getUserlist } from "../services/userServices"
import type { User } from "../interfaces/User"



export const useUsers=()=>{

const [usersList, setUsersList] = useState<User[]>([])

  const refreshUsers = () => {
    getUserlist().then(newFact => setUsersList(newFact))
  }

  // para recuperar la cita al cargar la página
  useEffect(refreshUsers, [])

  return { usersList, refreshUsers }

}