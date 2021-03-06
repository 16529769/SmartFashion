import {Dimensions, StyleSheet} from 'react-native';
let {width, height} = Dimensions.get('window');
import styled from 'styled-components';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 20,
  },
  txtHeader: {
    fontFamily: 'optima',
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    resizeMode: 'contain',
    width: width - 20,
    height: height / 3,
  },
  txtList: {
    fontSize: 16,
    fontFamily: 'optima',
    marginLeft: 10,
  },
  viewList: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  txtSign: {
    fontSize: 14,
    fontFamily: 'optima',
    color: '#8A8A8A',
  },
  touchSign: {
    borderRadius: 10,
    borderWidth: 1,
    width: width / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#8A8A8A',
    padding: 10,
  },
  txtTouch: {
    fontFamily: 'optima',
    fontWeight: 'bold',
  },
  txAccount: {
    fontFamily: 'optima',
  },
  divider: {
    height: 1,
    width: width - 40,
    backgroundColor: '#8A8A8A',
  },
  txSign: {
    fontFamily: 'optima',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentList: {
    marginVertical: 10,
  },
  content: {
    marginTop: 10,
  },
  tabs: {},
  info: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bodyHeader: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
    justifyContent: 'space-around',
  },
  bodyFooter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataImage: {
    width: width / 5,
    height: height / 8,
  },
  btn: {
    backgroundColor: 'white',
    marginBottom: 10,
    borderColor: 'black',
  },
  txtEdit: {
    color: 'black',
    fontFamily: 'optima',
  },
  avatar: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  follower: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoFollower: {
    alignItems: 'center',
  },
});

const Info = styled.Text`
  font-family: optima;
  font-size: 16px;
  color: #616161;
  padding: 10px 0;
  text-align: center;
`;

const Divider = styled.View`
  height: 60px;
  border-width: 0.4px;
  border-color: #616161;
`;

export {Info, Divider};
