import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import CustomDrawer from "../components/CustomDrawer";

const AppDrawer = createDrawerNavigator()

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerContent={ (props) => <CustomDrawer {...props} /> }
            screenOptions={{
                drawerPosition: "right",
                headerShown: false,

                drawerStyle: {
                    backgroundColor: 'rgb(247, 246, 246)',
                    paddingTop: 20
                },

                drawerItemStyle:{
                    marginVertical: 10,
                    marginHorizontal: 15,
                    borderRadius: 10
                },

                drawerActiveBackgroundColor: '#4169E1',
                drawerActiveTintColor: '#ffffff',

                drawerInactiveBackgroundColor: '#ffffff',
                drawerInactiveTintColor: 'rgb(65, 64, 64)'
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

            <AppDrawer.Screen
                name="Profile"
                component={Profile}
            />
        </AppDrawer.Navigator>
    )
}

export default AppRoutes