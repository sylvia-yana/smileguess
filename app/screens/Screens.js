/* Import Dependencies */
import React from 'react-native';
import { Actions, Scene, Modal } from 'react-native-router-flux';

/* Import transition screens */
import HomeScreen from './HomeScreen.js';
import GameScreen from './GameScreen.js';
import StatsScreen from './StatsScreen.js';
import DealerChangeScreen from './DealerChangeScreen';

/**
 * @desc scenes define transition screens
 * @param hideNavBar - hides navigation bar for select screen
 * @param type - defines how screen is added to the navigation pack
 * @param key - required, unique - used to call screen transitions
 * @param title - screen title in navigation bar
 */
const Screens = Actions.create(
  <Scene key="modal" component={Modal} >
    <Scene key="root">
      <Scene hideNavBar type="replace" key="showHomeScreen" initial component={HomeScreen} />
      <Scene
        type="push" key="showGameScreen" component={GameScreen} title="Your game!"
        onRight={() => Actions.showStatsScreen()} rightTitle="Stats"
      />
      <Scene
        type="push" key="showStatsScreen" component={StatsScreen} title="Game Stats"
      />
    </Scene>
  </Scene>
);

export default Screens;
