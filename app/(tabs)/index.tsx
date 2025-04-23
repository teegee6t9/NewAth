import { View, StyleSheet, ScrollView, Text } from 'react-native';
import HeroBanner from '../../components/HeroBanner';
import Header from '../../components/Header';
import SportPass from '../../components/SportPass';
import WeekCalendar from '../../components/WeekCalendar';
import WidgetTodayWorkout from '../../components/WidgetTodayWorkout';
import WidgetTrainingPath from '../../components/WidgetTrainingPath';
import WidgetCustomTraining from '../../components/WidgetCustomTraining';

export default function HomePage() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Bandeau de bienvenue fermable */}
      <HeroBanner />

      {/* Header sport + profil */}
      <Header />

      {/* Passe sportif */}
      <SportPass />

      {/* Calendrier de la semaine */}
      <WeekCalendar />

      {/* Section des widgets */}
      <View style={styles.programWrapper}>
        <Text style={styles.sectionTitle}>Your Program</Text>

        {/* Grand widget en haut */}
        <WidgetTodayWorkout style={styles.fullWidthBox} />

        {/* Deux petits widgets en ligne */}
        <View style={styles.row}>
          <WidgetTrainingPath style={styles.halfBox} />
          <WidgetCustomTraining style={styles.halfBox} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFF',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  programWrapper: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fullWidthBox: {
    width: '100%',
    borderRadius: 20,
    marginBottom: 16,
    paddingVertical: 35,
  },
  halfBox: {
    width: '90%',
    borderRadius: 16,
    minHeight: 120,
    justifyContent: 'center',
  },
   
});

