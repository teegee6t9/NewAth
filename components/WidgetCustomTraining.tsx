import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WidgetCustomTraining() {
  return (
    <TouchableOpacity onPress={() => console.log("Créer un entraînement personnalisé")}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Ionicons name="build" size={24} color="#193F9A" />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.title}>Entraînement libre</Text>
            <Text style={styles.description}>Crée ton propre entraînement avec les blocs de ton choix.</Text>
          </View>
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
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#193F9A',
  },
  description: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },
});
