import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

const AuthStack = createNativeStackNavigator()

export default function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false,
                }}      
            />

            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerStyle:{
                        backgroundColor: '#3b3dbf',
                    },
                    headerTintColor: '#fff',
                    headerTitle: 'Voltar',
                }}
            />
        </AuthStack.Navigator>
    )
}