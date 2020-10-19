import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2149031Navigator from '../features/BlankScreen2149031/navigator';
import Settings149014Navigator from '../features/Settings149014/navigator';
import Settings149011Navigator from '../features/Settings149011/navigator';
import UserProfile149004Navigator from '../features/UserProfile149004/navigator';
import Settings149003Navigator from '../features/Settings149003/navigator';
import Settings149001Navigator from '../features/Settings149001/navigator';
import SignIn2148999Navigator from '../features/SignIn2148999/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2149031: { screen: BlankScreen2149031Navigator },
Settings149014: { screen: Settings149014Navigator },
Settings149011: { screen: Settings149011Navigator },
UserProfile149004: { screen: UserProfile149004Navigator },
Settings149003: { screen: Settings149003Navigator },
Settings149001: { screen: Settings149001Navigator },
SignIn2148999: { screen: SignIn2148999Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
