import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker'

const ProductScreen = () => {
  return (
    <View>
      <Text style={styles.title}>{product.title}</Text>
      {/*Image Corousel */}

      {/*Option Selector */}

      {/*Price */}
      <Text style={styles.price}>
        from ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </Text>
      {/*Description */}
      <Text style={styles.description}>
          {product.description}
      </Text>
      {/*Quantity Selector */}

      {/*Button */}
    </View>
  );
};

export default ProductScreen;
