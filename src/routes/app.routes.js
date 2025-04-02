import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Register from "../pages/Register";

const AppDrawer = createDrawerNavigator()

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: '#fff',
                    paddingTop: 20
                },

                drawerActiveBackgroundColor: '#3b3dbf',
                drawerActiveTintColor: '#fff',

                drawerInactiveBackgroundColor: '#f0f2ff',
                drawerInactiveTintColor: '#121212'
            }}
        >
            <AppDrawer.Screen
                name="Home"
                component={Home}
            />

            <AppDrawer.Screen
                name="Register"
                component={Register}
            />
        </AppDrawer.Navigator>
    )
}

export default AppRoutes