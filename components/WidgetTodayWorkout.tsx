import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WidgetTodayWorkout({ style }: { style?: any }) {
  return (
    <TouchableOpacity onPress={() => console.log("Voir l'entraînement du jour")}>
      <View style={[styles.card, style]}>
        <Text style={styles.title}>Entraînement du jour</Text>
        <Text style={styles.subtitle}>Fractionnés – 30 min</Text>

        <View style={styles.row}>
          <Ionicons name="bicycle" size={20} color="#193F9A" />
          <Text style={styles.infoText}>Cyclisme</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    flex: 1,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#193F9A',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 8,
    color: '#555',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});
