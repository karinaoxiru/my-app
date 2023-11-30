import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";

const App = () => {
  // Define the handleLogin function
  const handleLogin = () => {
    // Your login logic goes here
    console.log("Login button pressed");
  };

  // Use the useNavigation hook to get the navigation object
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <header>
          <h2>Facilitando seus envios</h2>
          <h5>Entregue ou envie</h5>
        </header>

        <div className="grid">
          <div className="wrapper"> 
            <TouchableOpacity style={styles.remetentebutton} onPress={handleLogin}>
              <Text style={styles.loginText}>Remetente 📦</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.viajantebutton} onPress={() => navigation.navigate('Feed')}>  
              <Text style={styles.loginText}>Viajante 🚗 </Text>
            </TouchableOpacity>
          </div>
        </div>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      backgroundColor: "#f0f0f0",
    },
    loginText: {
      textAlign: "center",
      marginVertical: 25,
      color: "#f0f8ff",
  
    },
    h5:{
      textAlign: "center",
    },
   
    grid: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      margin: 50,
    },
    gridItem: {
      width: "30%", // Ajuste conforme necessário
      height: 60, // Ajuste conforme necessário
      marginVertical: 10,
      backgroundColor: "lightgray",
      alignItems: "center",
      justifyContent: "center",
    },
    remetentebutton:{
      marginTop: 20,
      width: 300,
      backgroundColor: "#000000",
      paddingVertical: 12,
    },
    viajantebutton:{
      marginTop: 20,
      width: 300,
      backgroundColor: "#000000",
      paddingVertical: 12,
    }
    
});

export default App;
