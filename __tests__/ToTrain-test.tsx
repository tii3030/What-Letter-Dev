/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import ToTrain from '../src/screens/ToTrain/ToTrain'

 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<ToTrain />).toJSON();
    expect(tree).toMatchSnapshot();
});