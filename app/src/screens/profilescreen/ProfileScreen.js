import React from 'react';
import {View, SafeAreaView, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import profile from './profile.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Style';
import {useStores} from '../../stores/Store';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const {signStore} = useStores();

  React.useEffect(() => {
    signStore.isLoggedIn;
    return () => {
      signStore.isLoggedIn ? (
        <ProfileNotSign />
      ) : (
        <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
      );
    };
  }, [signStore]);
  return;
};

const ProfileNotSign = navigation => {
  const navi = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="menu"
          type="feather"
          size={24}
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.txtHeader}>PROFILE</Text>
        <Icon name="cart-plus" type="font-awesome" size={24} />
      </View>
      <Image source={profile} style={styles.img} />
      <View style={{marginVertical: 10}}>
        {data.map((v, i) => (
          <View style={styles.viewList} key={i}>
            <Icon name="lens" type="material" size={10} />
            <Text style={styles.txtList}>{v.title}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.txtSign}>And more than that just by Signing Up</Text>
      <TouchableOpacity
        style={styles.touchSign}
        onPress={() => navi.navigate('signUpNavigator')}>
        <Text style={styles.txtTouch}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <View style={styles.footer}>
        <Text style={styles.txtTouch}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.txtSignin}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const data = [
  {
    title: 'Create your profile',
  },
  {
    title: 'Manage your own wardrobe',
  },
  {
    title: 'Experience unlimited features',
  },
];

export default ProfileScreen;
