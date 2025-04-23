import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function SportPass() {
  const [progress] = useState(0.5); // 50% entre niveau 5 et 6

  return (
    <TouchableOpacity onPress={() => console.log('Naviguer vers le Pass de combat')}>
      <View style={styles.container}>
        <Text style={styles.title}>Sport Pass</Text>
        <Text style={styles.percentage}>{Math.round(progress * 100)}%</Text>
        
        <View style={styles.progressContainer}>
          <Text style={styles.level}>5</Text>
          <View style={styles.barBackground}>
            <View style={[styles.barForeground, { width: `${progress * 100}%` }]} />
          </View>
          <Text style={styles.level}>6</Text>
        </View>

        <Text style={styles.tapToView}>Tap to view</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#193F9A',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 40,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  percentage: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  barBackground: {
    flex: 1,
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 8,
  },
  barForeground: {
    height: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  level: {
    color: 'white',
    fontWeight: 'bold',
  },
  tapToView: {
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
    fontStyle: 'italic',
  },
});
