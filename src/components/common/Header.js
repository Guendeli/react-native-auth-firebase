// import libs
import React from 'react';
import { Text, View } from 'react-native';

// make the compo
const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowOffset:{  width: 10,  height: 10},
        shadowColor: 'black',
        elevation: 5,
        position: 'relative',
        shadowRadius: 2,
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
}
// make it available
export {Header};