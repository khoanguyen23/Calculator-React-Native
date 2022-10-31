import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity,TextInput } from "react-native";
import Button from "./Button"
import Display from "./Display"

const Home = ({navigation}) => {
  const [resultText, setResultText] = useState("");
  const [calcText, setCalcText] = useState("");
  const [history,setHistory] = useState([]);
  onButtonClick = (text) => {
   setCalcText((calcText)=>calcText+String(text))
  };

   onOperationClick = (operation) => {
    let operations = ["DEL", "+", "-", "*", "/"];

    if (operation == "DEL") {
      let n = calcText.length;
      setCalcText(calcText.slice(0, n -1))
      return;
    }
    if (operation == "AC") {
      setResultText("");
      setCalcText(0);
      return;
    }
    if (operations.includes(resultText.toString().split("").pop())) return;
   setCalcText((calcText)=>calcText+String(operation))
  };


  return (
    <View style={styles.container}>
        <TextInput style={styles.calculationText}
        onChangeText = {newInput => setCalcText(newInput)}
        value = {calcText}
        />
   
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => onButtonClick(1)}
              style={styles.btn}
            >
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(2)}
              style={styles.btn}
            >
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(3)}
              style={styles.btn}
            >
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => onButtonClick(4)}
              style={styles.btn}
            >
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(5)}
              style={styles.btn}
            >
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(6)}
              style={styles.btn}
            >
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => onButtonClick(7)}
              style={styles.btn}
            >
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(8)}
              style={styles.btn}
            >
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(9)}
              style={styles.btn}
            >
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => onButtonClick(".")}
              style={styles.cout1}
            >
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(0)}
              style={styles.cout1}
            >
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCalcText(String(eval(calcText)))}
              style={styles.cout1 }
            >
              <Text style={styles.cout}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operations}>
          <TouchableOpacity
            onPress={() => onOperationClick("DEL")}
            style={styles.btn}
          >
            <Text style={styles.operationButton}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onOperationClick("AC")}
            style={styles.btn}
          >
            <Text style={styles.operationButton}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onOperationClick("+")}
            style={styles.btn}
          >
            <Text style={styles.operationButton}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onOperationClick("-")}
            style={styles.btn}
          >
            <Text style={styles.operationButton}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onOperationClick("/")}
            style={styles.btn}
          >
            <Text style={styles.operationButton}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onOperationClick("*")}
            style={styles.btn}
          >
            <Text style={styles.operationButton}>*</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'lightblue',
    padding: 8,
    paddingBottom: 14,
  },
  cout: {
    fontSize: 30,
    color: "black",
    padding : 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    
  },
  cout1 :{
     alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    fontSize: "30",
    flex: 3,
    backgroundColor: "lightgray",
    
  },
  calculationText: {
    flex: 3,
    fontSize: 50,
    backgroundColor : '#FFFFFF',
     justifyContent: 'flex-start',
    textAlign : 'right',
    margin: 10,
    color: 'black',
    borderRadius: 38,
  },
  number: {
    fontSize: 30,
    color: "black",
    padding : 30,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    fontSize: "30",
  },
  buttons: {
    flex: 7,
    flexDirection: "row",
  },
  numbers: {
    flex: 3,
    backgroundColor: "lightyellow",
    borderTopLeftRadius : 67,

  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  operations: {
    flex: 1,
    backgroundColor: "#FF9404",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopRightRadius : 67,
    borderBottomRightRadius : 67
  },
  operationButton: {
    fontSize: 30,
    color: "white",
  },
});

export default Home;