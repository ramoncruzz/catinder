/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Home, Chat, Profile} from '../src/pages';

import renderer from 'react-test-renderer';
jest.mock('react-native-card-stack-swiper');

it('renders correctly', () => {
  renderer.create(<Home />);
  renderer.create(<Chat />);
  renderer.create(<Profile />);
});
