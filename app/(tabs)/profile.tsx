import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useUser } from '@/hooks/useUser';

export default function ProfileScreen() {
  const [selectedTab, setSelectedTab] = useState<'badge' | 'stats' | 'details'>('badge');
  const { profileImage } = useUser();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Open settings')}>
          <Ionicons name="settings-sharp" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.profile}>
        <Image source={{ uri: profileImage || '' }} style={styles.avatar} />
        <Text style={styles.name}>Andy D</Text>
      </View>

      <View style={styles.statsBox}>
        <View style={styles.statItem}>
          <Ionicons name="star" size={20} color="white" />
          <Text style={styles.statLabel}>POINTS</Text>
          <Text style={styles.statValue}>590</Text>
        </View>
        <View style={styles.statItem}>
          <Ionicons name="globe" size={20} color="white" />
          <Text style={styles.statLabel}>WORLD RANK</Text>
          <Text style={styles.statValue}>#1438</Text>
        </View>
        <View style={styles.statItem}>
          <Ionicons name="stats-chart" size={20} color="white" />
          <Text style={styles.statLabel}>LOCAL RANK</Text>
          <Text style={styles.statValue}>#56</Text>
        </View>
      </View>

      <View style={styles.tabs}>
        {['badge', 'stats', 'details'].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab as any)} style={styles.tabButton}>
            <Text style={[styles.tabText, selectedTab === tab && styles.tabTextActive]}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
            {selectedTab === tab && <View style={styles.activeDot} />}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.tabContent}>
        {selectedTab === 'badge' && (
          <Text style={{ textAlign: 'center' }}>🎖️ Badges à débloquer (exemples à venir)</Text>
        )}
        {selectedTab === 'stats' && (
          <Text style={{ textAlign: 'center' }}>📊 Stats personnelles (à venir)</Text>
        )}
        {selectedTab === 'details' && (
          <Text style={{ textAlign: 'center' }}>🔍 Détails utilisateur (à venir)</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#755FE2',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 60,
  },
  profile: {
    alignItems: 'center',
    marginTop: 8,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  statsBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
    backgroundColor: '#624DCD',
    borderRadius: 16,
    paddingVertical: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: 'white',
    marginTop: 4,
  },
  statValue: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 2,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 12,
  },
  tabButton: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    color: '#aaa',
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#755FE2',
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#755FE2',
    marginTop: 4,
  },
  tabContent: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
});
