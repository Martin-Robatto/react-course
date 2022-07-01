import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'Martin@google.com'
    })

    const {username, email} = formState;

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
      console.log('useEffect called!');
    
      return () => {
        
      }
    }, []);
    

    return (
    <>
    <h1>Formulario simple</h1>
    <hr/>
    <input type="text"
    className='form-control'
    placeholder='Username'
    name='username'
    value={ username }
    onChange= { onInputChange }
    />

    <input type="email"
    className='form-control'
    placeholder='Martin@google.com'
    name='email'
    value={ email }
    onChange= { onInputChange }
    />

    </>
  )
}
