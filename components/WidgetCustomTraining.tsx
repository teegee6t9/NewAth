import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WidgetCustomTraining({ style }: { style?: any }) {
  return (
    <TouchableOpacity onPress={() => console.log("Créer un entraînement personnalisé")}>
      <View style={[styles.card, style]}>
        <View style={styles.row}>
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.title} numberOfLines={2} adjustsFontSizeToFit>
              Entraînement libre
            </Text>
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
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 8,
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#193F9A',
    textAlign: 'center',
    flexWrap: 'wrap',
    paddingLeft: 12,
  },
});
