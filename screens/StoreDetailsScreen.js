import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function StoreDetailsScreen({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('SustainInfoScreen')}>
                <Text>hi</Text>
            </TouchableOpacity>
        </View>
    );
}
