import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeTab from "./components/WelcomeTab";
import Contacs from "./components/Contacs";

const Tab=createBottomTabNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="welcome" component={WelcomeTab}/>
        <Tab.Screen name="contacts" component={Contacs}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}