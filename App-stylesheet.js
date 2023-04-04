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
  containerThree: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  preferenceHolder: {
    width: "31%",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#eee",
    padding: 10,
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
  h3: { fontSize: 20, fontWeight: 600, alignContent: "center" },
  h3Margin: {
    fontSize: 20,
    fontWeight: 600,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 5,
  },

  h4: { fontSize: 14, fontWeight: 600 },
  body: { fontSize: 16, fontWeight: "normal" },
  small: { fontSize: 13, fontWeight: 300, color: "grey" },
  smallMargin: {
    fontSize: 13,
    fontWeight: 300,
    color: "grey",
    marginLeft: 10,
    marginBottom: 20,
  },

  inputHeader: { fontSize: 14, fontWeight: 600 },
  inputHeaderMargin: { fontSize: 14, fontWeight: 600, marginLeft: 10 },

  dateTimePicker: { marginLeft: 10, marginVertical: 10 },

  itemCard: {
    // boxShadow: 0,4,8,0,rgba(0,0,0,0.2),
    maxWidth: 250,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    backgroundColor: "#ffff",
    flexGrow: 1,
  },

  primaryButton: {
    backgroundColor: "#ff000",
  },

  // preferenceCard: {
  //   width: "33.33%",
  //   aspectRatio: 1,
  //   borderWidth: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
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
