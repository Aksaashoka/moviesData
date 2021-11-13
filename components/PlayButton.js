import React, {PureComponent} from 'react';
import {Pressable} from 'react-native';
import {Icon} from 'react-native-vector-icons/MaterialIcons';
class PlayButton extends PureComponent {
  render() {
    return (
      <Pressable>
        <Icon name={'PlayCircleOutline'} size={30} />
      </Pressable>
    );
  }
}

export default PlayButton;
