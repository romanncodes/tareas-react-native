import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function TareaHeader(props) {
    const [tarea, setTarea] = useState('');
    //setTarea('10') ===> tarea = '10'

    function tareaTextHandler(texto) {
        setTarea(texto);
    }
    const tareaTextHandler2 = (texto) => {
        setTarea(texto);
    }

    function tareaAddHandler(){
        props.onAddTarea(tarea);
    }

    return (
        <View style={styles.headerContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='ingrese tarea'
                onChangeText={tareaTextHandler} />
            <Button title='Agregar' onPress={tareaAddHandler} />
        </View>
    );
}

export default TareaHeader;

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'yellow',
        padding: 16
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#dddddd',
        padding: 8,
        width: '80%'
    },
});