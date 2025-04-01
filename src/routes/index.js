import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';
import { View, ActivityIndicator } from 'react-native';

function Routes(){
    const { signed, loadingStorage } = useContext(AuthContext)

    if(loadingStorage){
        <View 
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f4ff'
        }}>
            <ActivityIndicator size='large' color='#131313'/>
        </View>
    }
    return (
     signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;