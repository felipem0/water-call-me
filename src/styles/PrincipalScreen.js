import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerPrincipal: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  txtHeaderPrincipal: {
    fontSize: 25,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    color: '#7bcbd4',
  },
  txtShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: {width: -0.8, height: 0.8},
    textShadowRadius: 1,
  },
  txtIncremet: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  vwContentPrincipal: {
    height: 350,
    width: '85%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20%',
  },
  iconGear: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
  vwContentPie: {
    width: 200,
    height: 200,
    borderRadius: 100,
    elevation: 2,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtHistory: {
    fontSize: 18,
    color: '#FFFFFF',
    marginRight: 3,
  },
  vwBackWhite: {
    height: 170,
    width: 170,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    borderRadius: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtCenterPrincipal: {
    fontSize: 25,
    color: '#92E4ED',
  },
  vwHistory: (dms) => ({
    height: 55,
    width: dms,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 2,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderColor: '#31949e',
    backgroundColor: '#47bdc9',
  }),
  txtContentHistory: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  vwWater: {
    height: 413,
    alignItems: 'center',
  },
  savContent: {
    flex: 1,
    // backgroundColor: '#474747',
    backgroundColor: '#FFFFFF',
  },
  tchHeaderMenu: {
    width: 60,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  tchWater: {
    position: 'absolute',
    right: 12,
    bottom: 17,
    alignItems: 'center',
    borderRadius: 5,
  },
  ftlHistory: (hst) => ({
    flex: hst ? 0 : 1,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  txtEmpty: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FFFFFF',
    position: 'absolute',
    bottom: '28%',
  },
  vwEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  vwTxtCount: {
    position: 'absolute',
    right: 0.2,
    backgroundColor: '#31949e',
    paddingRight: 6,
    paddingLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFFFFF',
    bottom: -2,
    borderTopLeftRadius: 15,
  },
  txtCount: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  pieGraph: {
    borderRadius: 100,
  },
  vwHistoricIcon: {
    position: 'absolute',
    bottom: 3,
    paddingRight: 2,
    paddingLeft: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});