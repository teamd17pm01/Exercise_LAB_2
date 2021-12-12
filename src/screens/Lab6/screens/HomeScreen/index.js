import React, {useCallback} from 'react';
import {View, SafeAreaView, Text, StatusBar} from 'react-native';
import {SIZES} from '@utils/constants';

import styles from './index.styles';
import ButtonPoint from './layout/ButtonPoint';
import ButtonSection from './layout/ButtonSection';
import {useModels} from './index.viewModels';
import {LineDivider} from '@components/LineVerticalDevide';

export const HomeScreen = ({navigator}) => {
  const {state} = useModels();

  const renderHeader = useCallback(() => {
    return (
      <View style={styles.containerHeader}>
        <View style={{flex: 1}}>
          <View style={{marginRight: SIZES.padding}}>
            <Text style={styles.title}>Good Morning</Text>
            <Text style={styles.subTitle}>{state?.profile.userName}</Text>
          </View>
        </View>
        <ButtonPoint point={state?.profile?.point} />
      </View>
    );
  }, [state?.profile.userName, state?.profile?.point]);

  const renderButtonSection = useCallback(() => {
    return (
      <View style={styles.buttonSectionContainer}>
        <ButtonSection />
        <LineDivider />
        <ButtonSection />
        <LineDivider />
        <ButtonSection />
      </View>
    );
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        animated
        barStyle="light-content"
      />
      <View style={{height: 200}}>
        {renderHeader()}
        {renderButtonSection()}
      </View>
    </SafeAreaView>
  );
};
