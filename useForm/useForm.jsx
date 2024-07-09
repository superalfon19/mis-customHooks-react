import { useState } from "react"


const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({target})=>{
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value // propiedades computarizadas de los objetos name del name que esta utilizando y su value
        })
    }
    const onResetForm =()=>{
        setFormState(initialForm)
    }  
   return {
    ...formState, // se retorna la desestructuracion del objeto formState
       formState,
       onResetForm,
    onInputChange
  }
    
  
}

export default useForm