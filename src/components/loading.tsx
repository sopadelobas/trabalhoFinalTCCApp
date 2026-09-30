import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface LoadingProps {
  mensagem?: string;
}

export default function Loading({ mensagem = "A carregar..." }: LoadingProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#169BBA" />
      <Text style={styles.text}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Ou '#169BBA' se preferir fundo azul
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: "#169BBA",
    fontWeight: "600",
  },
});
