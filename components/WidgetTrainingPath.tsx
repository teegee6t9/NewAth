import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function WidgetTrainingPath() {
  const totalSteps = 6;
  const currentStep = 3; // étape atteinte

  return (
    <TouchableOpacity onPress={() => console.log("Voir le plan d'entraînement")}>
      <View style={styles.card}>
        <Text style={styles.title}>Mon plan d'entraînement</Text>

        <View style={styles.path}>
          {[...Array(totalSteps)].map((_, index) => (
            <View key={index} style={styles.stepWrapper}>
              <View
                style={[
                  styles.circle,
                  index < currentStep && styles.circleCompleted,
                  index === currentStep && styles.circleActive,
                ]}
              />
              {index < totalSteps - 1 && <View style={styles.line} />}
            </View>
          ))}
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#193F9A',
  },
  path: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  circleCompleted: {
    backgroundColor: '#193F9A',
  },
  circleActive: {
    backgroundColor: '#FFA500',
  },
  line: {
    width: 24,
    height: 2,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
});
