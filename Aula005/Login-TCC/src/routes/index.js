import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../pages/welcome/index';
import Signin from '../pages/SignIn/index';


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="welcome"
                component={Welcome}
            />

            <Stack.Screen
                name="SignIn"
                component={Signin}
            />
        </Stack.Navigator>
    );
}