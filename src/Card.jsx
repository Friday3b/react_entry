import React from 'react'


const Card = ({user}) => {
  return (
    <div className='bg-blue-400' >

      <h3>Name :{user.name}</h3>
      <p>Surname :{user.surname}</p>
      <p>Email :{user.email}</p>
      <p>PhoneNumber :{user.phoneNumber}</p>


    </div>
  )
}

export default Card
