import { View, StyleSheet, ScrollView } from 'react-native';
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

      {/* Composants de la page */}
      <SportPass />
      <WeekCalendar />
      <WidgetTodayWorkout />
      <WidgetTrainingPath />
      <WidgetCustomTraining />
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
});
