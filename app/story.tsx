import { StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function StoryScreen() {
  const { campaignId } = useLocalSearchParams<{ campaignId?: string }>();

  const id =
    typeof campaignId === 'string'
      ? campaignId
      : Array.isArray(campaignId)
      ? campaignId[0]
      : undefined;

  if (!id) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle">No campaign selected</ThemedText>
        <ThemedText>Pass a campaignId query param to this screen.</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Campaign screen</ThemedText>
      <ThemedText style={styles.text}>Campaign ID: {id}</ThemedText>
      <ThemedText style={styles.text}>
        This is a placeholder story view. In later sprints it will render the Chronicle flow for
        this campaign.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 12,
  },
  text: {
    marginTop: 4,
  },
});

