import React, {useState, useEffect}  from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker'

const ProductScreen = () => {

  const [selectedOption, setSelectedOption] = useState(
    undefined,
  );

  return (
    <View>
      <Text style={styles.title}>{product.title}</Text>
      {/*Image Corousel */}

      {/*Option Selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

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
