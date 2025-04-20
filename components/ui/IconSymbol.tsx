import React from 'react';
import { StyleProp, TextStyle, ViewStyle, OpaqueColorValue } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FontAwesome6 } from '@expo/vector-icons';
import { SymbolWeight } from 'expo-symbols';

// Liste des bibliothèques supportées
type IconSource = 'material' | 'fontawesome6';

// Ajoute ici les mappings
const MAPPING = {
  'house.fill': { lib: 'material', name: 'home' },
  'chevron.left.forwardslash.chevron.right': { lib: 'material', name: 'code' },
  'chevron.right': { lib: 'material', name: 'chevron-right' },
} as const;

export type IconSymbolName = keyof typeof MAPPING;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  const icon = MAPPING[name];

  if (!icon) return null;

  switch (icon.lib) {
    case 'material':
      return <MaterialIcons name={icon.name} size={size} color={color} style={style} />;
    default:
      return null;
  }
}
