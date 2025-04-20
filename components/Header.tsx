import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable, Dimensions, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'expo-router';
import { useUser } from '@/hooks/useUser';

const sports = ["Natation", "Basket", "Tennis", "Muscu", "Course à pied", "Triathlon", "Yoga"];
const { width } = Dimensions.get('window');

export default function Header() {
  const router = useRouter();
  const { profileImage } = useUser();

  const [selectedSport, setSelectedSport] = useState("Natation");
  const [modalVisible, setModalVisible] = useState(false);
  const rotation = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    setModalVisible(!modalVisible);
    Animated.timing(rotation, {
      toValue: modalVisible ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const handleSelectSport = (sport: string) => {
    setSelectedSport(sport);
    toggleDropdown();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => console.log('Settings')}>
        <Ionicons name="settings-sharp" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.dropdownWrapper}>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
          <Text style={styles.sportText}>{selectedSport}</Text>
          <Animated.View style={{ transform: [{ rotate }] }}>
            <Ionicons name="chevron-down" size={18} color="black" />
          </Animated.View>
        </TouchableOpacity>

        <Modal transparent={true} visible={modalVisible} animationType="none">
          <Pressable style={styles.overlay} onPress={toggleDropdown}>
            <View style={styles.dropdown}>
              {sports.map((sport, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSelectSport(sport)}
                  style={[
                    styles.dropdownItem,
                    sport === selectedSport && styles.dropdownItemActive,
                  ]}
                  disabled={sport === selectedSport}
                >
                  <Text
                    style={[
                      styles.dropdownItemText,
                      sport === selectedSport && styles.dropdownItemTextInactive,
                    ]}
                  >
                    {sport}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </Pressable>
        </Modal>
      </View>

      <TouchableOpacity onPress={() => router.push('/profile')}>
        <Image
          source={{ uri: profileImage || '' }}
          style={styles.avatar}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownWrapper: {
    position: 'relative',
    alignItems: 'center',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  sportText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  dropdown: {
    backgroundColor: 'white',
    marginTop: 110,
    marginHorizontal: width / 2 - 70,
    borderRadius: 8,
    paddingVertical: 8,
    width: 140,
    elevation: 5,
    zIndex: 999,
  },
  dropdownItem: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  dropdownItemActive: {
    backgroundColor: '#f0f0f0',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownItemTextInactive: {
    color: '#aaa',
    fontStyle: 'italic',
  },
});
