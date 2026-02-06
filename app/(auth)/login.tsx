import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Chronicle AI</ThemedText>
      <ThemedText style={styles.subtitle}>
        Mock login screen. In a later sprint, this will be wired to Convex Auth or Clerk.
      </ThemedText>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin} testID="login-button">
        <ThemedText type="defaultSemiBold">Login</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 16,
  },
  subtitle: {
    textAlign: 'center',
  },
  loginButton: {
    marginTop: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 999,
  },
});

