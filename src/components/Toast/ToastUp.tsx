import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Toast from 'react-native-toast-message';


interface FooProps {
  type: string; // Type de toast (par exemple, 'success', 'error', 'info', etc.)
  message1: string; // Texte principal du toast
  message2: string; // Texte secondaire du toast
}

export function ToastUp(props: FooProps) {
  const showToast = () => {
    Toast.show({
      type: props.type,
      text1: props.message1,
      text2: props.message2,
    });
  }

  return (
    <TouchableOpacity onPress={showToast}>
      <Text>Show toast</Text>
    </TouchableOpacity>
  );
}
