import { createContext, useState } from "react";
import api from '../services/api'
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({})

export default function AuthProvider({ children }){
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    const navigation = useNavigation()

    async function signUp(nome, email, password) {
        setLoading(true)

        try{
            const response = await api.post('/users', {
                name: nome,
                email: email,
                password: password
            })

            setLoading(false)

            navigation.goBack()

        }catch(err){
            console.log('erro ao cadastrar', err)
            setLoading(false)
        }
    }

    return(
        <AuthContext.Provider value={{ user, signUp, loading }}>
            { children }
        </AuthContext.Provider>
    )
}