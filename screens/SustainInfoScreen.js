import * as React from 'react';
import { Text, View } from 'react-native';

export default function SustainInfoScreen() {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.replace('SustainInfoScreen')}>
                <Text>hi2</Text>
            </TouchableOpacity>
        </View>
    )
};