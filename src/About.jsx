import React from 'react'
import Card from './Card'

const About = () => {



    const user =  [{
        name : "Taleh",
        surname : "Haciyev",
        email : "aa@mal.ru",
        phoneNumber : "+994-444-22-11"} ,

        {
        name : "Taleh",
        surname : "Haciyev",
        email : "aa@mal.ru",
        phoneNumber : "994-444-22-11" },

        
        {
            name : "Taleh",
            surname : "Haciyev",
            email : "aa@mal.ru",
            phoneNumber : "994-444-22-11" },
        


    ]

       
    
        

  return (
    <div className='w-full h-[300px] flex items-center justify-between '>

        {user.map((user) => ( 

            <Card  user ={user}/>
        ))}


        
      
    </div>
  )
}

export default About
