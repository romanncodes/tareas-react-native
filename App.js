import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, 
          Text, 
          View,
          TextInput,
          Button,
          FlatList
        } from 'react-native';

 import TareaItem from './components/TareaItem';  
 import TareaHeader from './components/TareaHeader';     

export default function App() {
  const [tareaList, setTareaList] = useState([])

  const tareaAddHandler=(tarea)=>{
    setTareaList( [
      ...tareaList, {text:tarea, id:Math.random().toString()} 
    ] )
  }

  const tareaDeleteHandler = (id)=>{
    setTareaList(
      tareaList.filter( (item) => item.id !== id)
    )
  }

 // objeto={name:'Juan', age:40}

  return (
    <View style={styles.appContainer}>
      
      <TareaHeader 
        onAddTarea={tareaAddHandler} 
        
        />

      <View style={styles.bodyContainer}>
        <FlatList
          data={tareaList}
          renderItem={ (obj) =>   
            <TareaItem 
              id={obj.item.id} 
              text={obj.item.text}
              onDeleteTarea={tareaDeleteHandler}
            />
          } //obj={item:x, index:n}
          keyExtractor={(item, index)=> item.id}
        />

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  bodyContainer:{
    flex:4,
    // backgroundColor:'green'
  },
  
 
});
