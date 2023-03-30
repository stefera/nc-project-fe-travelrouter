import { StyleSheet } from "react-native";
// import "inter-ui/inter.css";

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  container: {
    flex: 0.4,
    alignItems: "left",
    justifyContent: "center",
    marginVertical: 10,
    padding: 30,
  },
  dashboard: {
    justifyContent: "center",
    paddingTop: 50,
    flex: 0.33,
    backgroundColor: "#ffff",
    borderColor: "#ffff",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    minWidth: "100%",
    minHeight: 220,
    padding: 10,
    lineHeight: "2rem",
    shadowColor: "grey",
    shadowOpacity: 0.2,
    shadowRadius: 0.5,
    shadowOffset: { width: 0.3, height: 0.3 },
  },

  wrapperHorizontal: {
    height: 54,
    justifyContent: "center",
    color: "black",
    marginBottom: 12,
    marginTop: 12,
  },
  itemStyleHorizontal: {
    height: 250 - 450,
    maxWidth: 255,
    padding: 30,
    margin: 10,
    shadowColor: "#D3D3D3",
    shadowOpacity: 0.5,
    shadowRadius: 0.1,
    shadowOffset: { width: 0.5, height: 0.8 },
    borderRadius: 30,
    borderWidth: 0.2,
    textAlign: "center",
    justifyContent: "center",
  },
  backgroundImgHome: {
    opacity: 0.2,
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
  h1: { fontSize: 35, fontWeight: 600 },
  h2: { fontSize: 28, fontWeight: 600 },
  h3: { fontSize: 35, fontWeight: 600 },
  h4: { fontSize: 14, fontWeight: 600 },
  body: { fontSize: 16, fontWeight: "normal" },
  small: { fontSize: 13, fontWeight: 300, color: "grey" },

  itemCard: {
    // boxShadow: 0,4,8,0,rgba(0,0,0,0.2),
    maxWidth: 250,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    backgroundColor: "#ffff",
    flexGrow: 1,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  // .primaryButton{
  //   backgroundColor: #1143f8;
  //   color: white;
  //   font-weight: 600;
  //   border-radius: 8px;
  //   border-width: 1.5px;
  //   min-width: 100% ;
  //   min-height: 35px;
  //   margin-bottom: 5px;
  //   margin-top: 5px;
  // }
});

export default styles;
