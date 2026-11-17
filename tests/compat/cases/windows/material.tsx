import { Text, View, type WindowsMaterial, signal } from "nsh";

export default function Material() {
  const backdrop = signal<WindowsMaterial | undefined>("blur");
  return (
    <View style={{ paddingTop: 64 }}>
      <Text>Blur material</Text>
      <View
        testID="backdrop-surface"
        windows={{ material: backdrop() }}
        macos={{ backdrop: { material: "hudWindow" } }}
        style={{ width: 120, height: 32, borderRadius: 12, backgroundColor: "#ffffff66" }}
      />
      <View testID="backdrop-clear" onPress={() => backdrop.set(undefined)}><Text>Clear backdrop</Text></View>
      <View testID="backdrop-set" onPress={() => backdrop.set("blur")}><Text>Set backdrop</Text></View>
    </View>
  );
}
