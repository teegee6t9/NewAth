import { View, Text, StyleSheet } from 'react-native';

export default function WeekCalendar() {
  const jours = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const today = new Date();
  const todayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1;

  // Mois en cours (français)
  const mois = today.toLocaleDateString('fr-FR', { month: 'long' });

  const baseDate = new Date();
  const currentDay = todayIndex;

  const dates = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date();
    date.setDate(baseDate.getDate() - currentDay + i);
    return date;
  });

  return (
    <View style={styles.container}>
      {/* En-tête avec "Agenda : Avril" */}
      <View style={styles.header}>
        <Text style={styles.agenda}>Agenda :</Text>
        <Text style={styles.month}>{mois.charAt(0).toUpperCase() + mois.slice(1)}</Text>
      </View>

      {/* Ligne des jours */}
      <View style={styles.row}>
        {jours.map((jour, index) => {
          const isToday = index === todayIndex;
          return (
            <View key={index} style={styles.dayWrapper}>
              <View style={isToday ? styles.activeBubble : styles.bubble}>
                <Text style={[styles.jourText, isToday && styles.jourTextActive]}>
                  {jour}
                </Text>
                <Text style={[styles.dateText, isToday && styles.dateTextActive]}>
                  {dates[index].getDate()}
                </Text>
              </View>
            </View>
          );
        })}
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
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  agenda: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#193F9A',
  },
  month: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#193F9A',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  bubble: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  activeBubble: {
    backgroundColor: '#193f9a',
    borderRadius: 40,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jourText: {
    fontSize: 13,
    color: '#000',
    paddingTop: 7,
  },
  jourTextActive: {
    color: 'white',
    fontWeight: '500',
  },
  dateText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    paddingBottom: 7,
  },
  dateTextActive: {
    color: 'white',
    fontWeight: 'bold',
  },
});
