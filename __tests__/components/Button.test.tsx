import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import { Button } from '../../src/components';

describe('components/Button', () => {
  it('should render match button ', async () => {
    const onpress = jest.fn();
    const testID = 'match';
    const {getByTestId} = render(<Button onPress={onpress} testID={testID} name='match' />);
  
    await fireEvent.press(getByTestId(testID));
    await fireEvent.press(getByTestId(testID));
    expect(onpress).toBeCalledTimes(2);
  });
  
  it('should render not match button ', async () => {
    const onpress = jest.fn();
    const testID = 'notMatch';
    const {getByTestId} = render(<Button onPress={onpress} testID={testID} name='notMatch' />);
  
    await fireEvent.press(getByTestId(testID));
    await fireEvent.press(getByTestId(testID));
    expect(onpress).toBeCalledTimes(2);
  });
});
