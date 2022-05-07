import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BottomSheet } from "react-native-elements";

const ProductScreen = (props) => {
  const [filtersVisible, setFiltersVisible] = useState(false);

  return (
    <View>
      <Button onPress={() => setFiltersVisible(true)} title="Open Filters" />
      <BottomSheet
        containerStyle={styles.bottomSheet}
        isVisible={filtersVisible}
      >
        <Text>Hello Frotom sheetm bot</Text>
        <Button title="back" onPress={()=> setFiltersVisible(false)}/>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    backgroundColor: "#fff",
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductScreen;
