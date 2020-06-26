import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
let {width, height} = Dimensions.get('window');

const DrawerHomeScreen = ({props}) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        style={{backgroundColor: 'blue'}}
        color="red"
        label="1"
        onPress={() => navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  txt: {
    fontSize: 15,
    fontFamily: 'Optima',
  },
});
export default DrawerHomeScreen;
