import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRef, useState } from 'react';

export default function HeroBanner() {
  const [visible, setVisible] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const closeBanner = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  };

  if (!visible) return null;

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <TouchableOpacity onPress={closeBanner} style={styles.closeButton}>
        <Ionicons name="close" size={25} color="white" />
      </TouchableOpacity>
      <Text style={styles.heroText}>Bienvenue 👋</Text>
      <Text style={styles.heroSubtext}>Prêt pour ton prochain entraînement ?</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#193F9A',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 24,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
  },
  heroText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  heroSubtext: {
    fontSize: 16,
    color: 'white',
    marginTop: 4,
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 10,
    padding: 4,
  },
});
