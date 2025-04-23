import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function WidgetTrainingPath({ style }: { style?: any }) {
  const totalSteps = 6;
  const currentStep = 3;

  return (
    <TouchableOpacity onPress={() => console.log("Voir le plan d'entraînement")}>
      <View style={[styles.card, style]}>
        <Text style={styles.title} numberOfLines={2} adjustsFontSizeToFit>
          Plan d'entraînement
        </Text>
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
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#193F9A',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});
