import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "../../navigations/TabNavigator";

class Analyze_GraphScreen extends Component {
  render() {
    return (
        <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Analyze_GraphScreen;
