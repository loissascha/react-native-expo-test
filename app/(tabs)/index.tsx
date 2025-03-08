import React from "react";
import { Text, View } from "react-native";
import "../../assets/global.css";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text className="text-2xl font-bold">
                Edit app/(tabs)/index.tsx to edit this screen.
            </Text>
        </View>
    );
}
