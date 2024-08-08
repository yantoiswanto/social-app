import { View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenWrapper = ({ children, bgColor }: { children?: React.ReactNode, bgColor?: string }) => {

    const insets = useSafeAreaInsets();
    const paddingTop = insets.top > 0 ? insets.top + 5 : 30;
    return (
        <View style={{ backgroundColor: bgColor, flex: 1, paddingTop }}>
            {
                children
            }
        </View>
    )
}

export default ScreenWrapper