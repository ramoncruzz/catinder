/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Home, Chat, Profile} from '../src/pages';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Home />);
  renderer.create(<Chat />);
  renderer.create(<Profile />);
});
