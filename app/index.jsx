import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import { useState } from "react";

export default function App() {
  const [actualNumber, setActualNumber] = useState();
  const [count, setCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  let screen = <StartGame setActualNumber={setActualNumber} />;
  if (actualNumber) {
    screen = (
      <GameScreen
        number={actualNumber}
        setGameOver={setGameOver}
        setCount={setCount}
      />
    );
  }
  const handlePress = () => {
    setActualNumber();
    setGameOver(false);
    setCount(0);

    screen = <StartGame />;
  };
  if (gameOver) {
    screen = (
      <GameOver handlePress={handlePress} number={actualNumber} count={count} />
    );
  }
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#bfbfff", "#002d68"]} style={styles.container}>
        <ImageBackground
          source={require("../assets/bg.png/")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.image}
        >
          <SafeAreaView>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: -31,
    flex: 1,
  },
  image: {
    opacity: 0.3,
  },
});
