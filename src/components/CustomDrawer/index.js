import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props) {
    const { user, signOut } = useContext(AuthContext)
    return (
        <DrawerContentScrollView>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{ width: 100, height: 100 }}
                    resizeMode='contain'
                />

                <Text style={{ fontSize: 20, marginTop: 20, color: 'rgb(65, 64, 64)' }}>
                    Bem vindo(a)
                </Text>

                <Text
                    style={{ fontSize: 18, fontWeight: 500, color: 'rgb(65, 64, 64)', marginBottom: 14, paddingHorizontal: 20 }}
                    numberOfLines={1}
                >
                    {user && user.name}
                </Text>
            </View>

            <DrawerItemList {...props} />

            <DrawerItem
                {...props}
                label='Sair'
                labelStyle={{ color: '#ffffff'}}
                onPress={() => signOut()}
                style={{ 
                    backgroundColor: '#FF6347', 
                    marginVertical: 10 ,
                    marginHorizontal: 15,
                    borderRadius: 10
                }}
            />

        </DrawerContentScrollView>
    );
}