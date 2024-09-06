import {StyleSheet, View, Text, Pressable} from 'react-native'

function TareaItem (props){

    function deleteTarea(){
        props.onDeleteTarea(props.id)
    }

    return (
        <View style={styles.itemTarea}>
            <Pressable 
                android_ripple={{color:'#dddddd'}}
                onPress={deleteTarea}
                style={ ({pressed})=> pressed && styles.pressedItem }
                >
                <Text>
                    {props.id} - {props.text}
                </Text>
            </Pressable>
        </View>
    );

}

export default TareaItem;

const styles = StyleSheet.create({
    pressedItem:{
        opacity:0.5
    },
    itemTarea:{
        backgroundColor:'green',
        padding:8,
        margin:8
    }
});