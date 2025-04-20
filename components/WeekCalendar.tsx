import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function WeekCalendar() {
  const jours = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const [seances, setSeances] = useState([false, false, false, false, false, false, false]);

  const toggleSeance = (index: number) => {
    const newSeances = [...seances];
    newSeances[index] = !newSeances[index];
    setSeances(newSeances);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your plan</Text>
        <Text style={styles.subtitle}>Tap to plan</Text>
      </View>

      <View style={styles.row}>
        {jours.map((jour, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleSeance(index)}
            style={[
              styles.bulle,
              seances[index] ? styles.bulleActive : styles.bulleInactive,
            ]}
          >
            <Text style={styles.text}>{jour}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 16,
  },
  header: {
    marginBottom: 12,
    alignItems: 'center', // ⬅️ Centrage du texte
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#193F9A',
  },
  subtitle: {
    fontSize: 13,
    color: '#888',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bulle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bulleInactive: {
    backgroundColor: '#E0E0E0',
  },
  bulleActive: {
    backgroundColor: '#193F9A',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
