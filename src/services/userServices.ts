export const getUserlist= async ()=>{
const res = await fetch('https://gorest.co.in/public/v2/users')
const data = await res.json()

return data
}

