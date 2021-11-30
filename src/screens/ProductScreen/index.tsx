import React, {useState, useEffect}  from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import ImageCarousel from '../../components/ImageCarousel';
import Button from '../../components/Button';
import {Picker} from '@react-native-picker/picker'

const ProductScreen = () => {

  const [selectedOption, setSelectedOption] = useState(
    undefined,
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <View>
      <Text style={styles.title}>{product.title}</Text>

      {/*Image Corousel */}
      <ImageCarousel images = {product.images} />

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
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      {/*Button */}
      <Button
        text={'Add To Cart'}
        onPress={() => {
          console.warn('Add to cart');
        }}
        containerStyles={{backgroundColor: '#e3c905'}}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.warn('Buy now');
        }}
      />
    </View>
  );
};

export default ProductScreen;
