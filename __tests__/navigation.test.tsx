import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import * as ExpoRouter from 'expo-router';
import LoginScreen from '../app/(auth)/login';
import HomeScreen from '../app/(tabs)/index';
import Index from '../app/index';
import StoryScreen from '../app/story';

jest.mock('expo-router', () => {
  const actual = jest.requireActual('expo-router');
  const ReactNative = require('react-native');

  return {
    ...actual,
    useRouter: jest.fn(),
    useLocalSearchParams: jest.fn(),
    Redirect: ({ href }: {href: string}) => <ReactNative.Text testID="redirect-target">{href}</ReactNative.Text>,
  };
});

describe('navigation flows', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('dev entry redirects to tabs (Home)', () => {
    const { getByTestId } = render(<Index />);
    const redirect = getByTestId('redirect-target');
    expect(redirect.props.children).toBe('/(tabs)');
  });

  it('login button navigates to tabs shell', () => {
    const replace = jest.fn();
    (ExpoRouter.useRouter as jest.Mock).mockReturnValue({
      replace,
      push: jest.fn(),
      back: jest.fn(),
    });

    const { getByTestId } = render(<LoginScreen />);

    fireEvent.press(getByTestId('login-button'));

    expect(replace).toHaveBeenCalledWith('/(tabs)');
  });

  it('home button navigates to story with hardcoded campaignId', () => {
    const push = jest.fn();
    (ExpoRouter.useRouter as jest.Mock).mockReturnValue({
      push,
      replace: jest.fn(),
      back: jest.fn(),
    });

    const { getByText } = render(<HomeScreen />);

    fireEvent.press(getByText(/go to demo campaign/i));

    expect(push).toHaveBeenCalledWith({
      pathname: '/story',
      params: { campaignId: 'camp-1' },
    });
  });

  it('story screen shows campaignId from params', () => {
    (ExpoRouter.useLocalSearchParams as jest.Mock).mockReturnValue({ campaignId: 'camp-1' });

    const { getByText } = render(<StoryScreen />);

    expect(getByText(/Campaign ID: camp-1/)).toBeTruthy();
  });
});

