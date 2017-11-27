import React from 'react';
import Native, { View, Text, StyleSheet } from 'react-native';

const localStyle = StyleSheet.create({
    row: {
        marginBottom: 0,
        marginRight: 0,
        marginLeft: 0
    },
    container: {
        marginBottom: 20
    }
});

export default function render(styles) {

    
    const buttons = [
        {
            text: "Done",
            BackgroundColor: "#05A5D1",
            underlayColor: "#273539",
            onPress: this.onDonePressed.bind(this)
        }
    ];
    return (
        <View style={localStyle.container}>
            <Swipeout
                backgroundColor="#fff"
                right={buttons}
            >
                <View style={[baseStyle.container, localStyle.row]}>
                    <Text style={baseStyle.label}>{this.props.todo.task}</Text>
                </View>
            </Swipeout>
        </View>
    );

    // return (
    //     <View style={styles.container}>
    //         <Text style={styles.label}>{this.props.todo.task}</Text>

    //         <TouchableHighlight
    //             onPress={this.onDonePressed.bind(this)}
    //             style={styles.doneButton}
    //         >
    //             <Text>Done</Text>
    //         </TouchableHighlight>
    //     </View>
    // );
}