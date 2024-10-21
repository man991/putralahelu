import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  postListContainer:{
    backgroundColor: "#d3d3d3", 
    opacity: 0.3, 
    height: 4 
  },
  cardContainer: {
    width: "100%",
    height: "auto",
  },
  listContainer: {
    backgroundColor: "white",
    marginBottom: 5,
  },
  cardTopContaner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  cardTopLeftContaner: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  userIcon: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    overflow: "hidden",
  },
  userName: {
    fontWeight: "bold",
    fontSize: 14,
  },
  period: {
    fontSize: 10,
    color: "#d3d3d3",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 12,
  },
  contentContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#F1F1EF",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 500,
    resizeMode: "contain",
  },

  hashTagContainer: {
    flexDirection: "row",
    padding: 12,
    gap: 8,
    alignItems: "center",
  },
  hashTagText: {
    fontSize: 14,
  },

  dollarIcon: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    overflow: "hidden",
  },
  dotIcon: {
    width: 3,
    height: 3,
    borderRadius: 1000,
    backgroundColor: "#d3d3d3",
  },
  buttonCardContainer: {
    flexDirection: "row",
    paddingBottom: 20,
    paddingLeft: 12,
    justifyContent: "space-between",
  },
  voteGroupContainer:{
    flexDirection: "row", 
    gap: 12 
  }
});
