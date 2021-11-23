import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#d1d1d1',
      borderRadius: 10,
      backgroundColor: '#fff',
      marginVertical: 5,
    },
    image: {
      flex: 2,
      width: 150,
      height: 150,
      resizeMode: 'contain',
    },
    rightContainer: {
      padding: 10,
      flex: 3,
    },
    title: {
      fontSize: 18,
    },
    ratingsContainer: {
      flexDirection: 'row',
    },
    star: {
      margin: 2,
      marginVertical: 5,
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
  });

  export default styles; 