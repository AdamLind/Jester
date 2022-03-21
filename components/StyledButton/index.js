import React from 'react'
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    const { type, content, onPress } = props;

    const backgroundColor = type === 'primary' ? '#FFFFFF' : '#ffec85'
    const textColor = type === 'primary' ? '#ffec85' : '#FFFFFF'
    const borderWidth = type === 'primary' ? null : 5
    

  return (
      <View style={styles.container}>
          <Pressable
            style={[styles.button, {backgroundColor: backgroundColor}, {borderWidth: borderWidth}, {borderColor: 'white'}]}
            onPress={() => onPress()}
          >
              <Text style={[styles.text, {color: textColor}]}>{content}</Text>
          </Pressable>
      </View>
  );
};

export default StyledButton;