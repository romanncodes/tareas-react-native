import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, 
          Text, 
          View,
          TextInput,
          Button
        } from 'react-native';

export default function App() {

  const [tarea, setTarea] = useState('');
  const [tareaList, setTareaList] = useState([])

  //setTarea('10') ===> tarea = '10'

  function tareaTextHandler(texto){
    setTarea(texto);
  }
  const tareaTextHandler2 = (texto)=>{
    setTarea(texto);
  }

  const tareaAddHandler=()=>{
    setTareaList( [
      ...tareaList, {text:tarea, id:Math.random().toString()} 
    ] )
  }
 // objeto={name:'Juan', age:40}

  return (
    <View style={styles.appContainer}>
      <View style={styles.headerContainer}> 
        <TextInput 
          style={styles.textInput}
          placeholder='ingrese tarea'
          onChangeText={tareaTextHandler} />
        <Button title='Agregar' />
      </View>
      <View style={styles.bodyContainer}>
        <Text>Lista de Tareas...{tarea}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'yellow',
    padding:16
  },
  bodyContainer:{
    flex:4,
    backgroundColor:'green'
  },
  textInput:{
    borderWidth:1,
    borderColor:'#dddddd',
    padding:8,
    width:'80%'
  }
});
