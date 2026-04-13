import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Home = ({ email }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerCard}>
        <View style={styles.headerIconWrap}>
          <FontAwesome name="shopping-bag" size={24} color="#163172" />
        </View>
        <View style={styles.headerTextWrap}>
          <Text style={styles.headerEyebrow}>Storefront</Text>
          <Text style={styles.welcomeText}>Welcome back</Text>
          <Text style={styles.emailText}>{email || "No email provided"}</Text>
        </View>
      </View>

      <View style={styles.filterWrap}>
        <FontAwesome name="search" size={16} color="#6d7c9f" />
        <TextInput
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Filter products"
          placeholderTextColor="#8a94b2"
          style={styles.filterInput}
        />
      </View>

      {loading ? (
        <View style={styles.spinnerWrap}>
          <ActivityIndicator size="large" color="#0f3cc9" />
          <Text style={styles.loadingText}>Loading products...</Text>
        </View>
      ) : (
      <FlatList
        numColumns={2}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.listRow}
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No products match your filter.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image
              source={{ uri: item.image }}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text numberOfLines={2} style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </View>
        )}
      />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 72,
    paddingHorizontal: 16,
    backgroundColor: "#eef4ff"
  },
  headerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 18,
    shadowColor: "#163172",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4
  },
  headerIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dce8ff",
    marginRight: 14
  },
  headerTextWrap: {
    flex: 1
  },
  headerEyebrow: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#5b72ad",
    marginBottom: 6
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "800",
    color: "#163172"
  },
  emailText: {
    marginTop: 6,
    fontSize: 15,
    color: "#5f6f93"
  },
  filterWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8fbff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#d7def0",
    paddingHorizontal: 14,
    paddingVertical: 4,
    marginTop: 18
  },
  filterInput: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 12,
    fontSize: 16,
    color: "#10214d"
  },
  spinnerWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loadingText: {
    marginTop: 12,
    fontSize: 15,
    color: "#5f6f93"
  },
  list: {
    width: "100%",
    marginTop: 18
  },
  listContent: {
    paddingBottom: 24
  },
  listRow: {
    justifyContent: "space-between"
  },
  productCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2
  },
  productImage: {
    width: "100%",
    height: 150,
    marginBottom: 12
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
    minHeight: 42
  },
  productPrice: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0f3cc9"
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 48
  },
  emptyStateText: {
    fontSize: 15,
    color: "#62708f"
  },
});

export default Home;