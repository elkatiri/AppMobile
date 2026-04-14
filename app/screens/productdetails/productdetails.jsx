
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!id) {
        setError("Product not found.");
        setLoading(false);
        return;
      }

      try {
        setError("");
        setLoading(true);

        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!response.ok) {
          throw new Error("Failed to load product details.");
        }

        const data = await response.json();
        setProductDetails(data);
      } catch (fetchError) {
        console.error("Error fetching product details:", fetchError);
        setError("Could not load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.centeredState}>
        <ActivityIndicator size="large" color="#0f3cc9" />
        <Text style={styles.stateText}>Loading product...</Text>
      </View>
    );
  }

  if (error || !productDetails) {
    return (
      <View style={styles.centeredState}>
        <Text style={styles.errorText}>{error || "Product not found."}</Text>
        <Pressable onPress={() => router.back()} style={styles.retryButton}>
          <Text style={styles.retryButtonText}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={16} color="#163172" />
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>

      <View style={styles.heroCard}>
        <Image
          source={{ uri: productDetails.image }}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.detailsCard}>
        <Text style={styles.productCategory}>{productDetails.category}</Text>
        <Text style={styles.productTitle}>{productDetails.title}</Text>
        <Text style={styles.productPrice}>${productDetails.price}</Text>

        <View style={styles.ratingRow}>
          <FontAwesome name="star" size={14} color="#f4b400" />
          <Text style={styles.ratingText}>
            {productDetails.rating?.rate ?? "N/A"} rating · {productDetails.rating?.count ?? 0} reviews
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.productDescription}>{productDetails.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 72,
    paddingHorizontal: 16,
    paddingBottom: 32,
    backgroundColor: "#eef4ff",
  },
  centeredState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#eef4ff",
  },
  stateText: {
    marginTop: 12,
    fontSize: 15,
    color: "#5f6f93",
  },
  errorText: {
    fontSize: 16,
    color: "#b42318",
    textAlign: "center",
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: "#163172",
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  retryButtonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#ffffff",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 15,
    fontWeight: "600",
    color: "#163172",
  },
  heroCard: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
    shadowColor: "#163172",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
  },
  detailsCard: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 20,
    shadowColor: "#163172",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
  },
  productImage: {
    width: "100%",
    height: 300,
  },
  productCategory: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#5b72ad",
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#163172",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0f3cc9",
    marginBottom: 14,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#5f6f93",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#163172",
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4a587c",
  },
});

export default ProductDetails;