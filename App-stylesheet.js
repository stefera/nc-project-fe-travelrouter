import { StyleSheet } from "react-native";
// import "inter-ui/inter.css";

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  topContainerMargin: {
    flex: 1,
    margin: 5,
  },
  textContainerMargin: {
    marginHorizontal: 5,
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
    marginHorizontal: 15,
  },
  containerScroller: {
    flexDirection: "column",
    flexWrap: "nowrap",
    paddingHorizontal: 10,
    minHeight: 300,
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

  halfPageContainerLeft: {
    padding: 10,
    width: "50%",
    alignItems: "left",
  },

  halfPageContainerRight: {
    padding: 10,
    width: "50%",
    alignItems: "right",
  },

  wrapperHorizontal: {
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    marginBottom: 12,
    marginTop: 12,
  },
  itemStyleHorizontal: {
    height: 400 - 450,
    width: 200 - 255,
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
  itemStyleHorizontalFull: {
    height: 70 - 80,
    width: "95%",
    padding: 10,
    margin: 5,
    shadowColor: "#D3D3D3",
    shadowOpacity: 0.5,
    shadowRadius: 0.1,
    shadowOffset: { width: 0.5, height: 0.8 },
    borderRadius: 10,
    borderWidth: 0.2,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
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
  h4center: {
    fontSize: 14,
    fontWeight: 600,
    justifyContent: "center",
    alignSelf: "center",
  },

  body: { fontSize: 16, fontWeight: 400 },
  small: { fontSize: 13, fontWeight: 300, color: "grey" },
  smallMarginVert: {
    fontSize: 14,
    fontWeight: 300,
    color: "grey",
    marginTop: 5,
  },

  smallMargin: {
    fontSize: 13,
    fontWeight: 300,
    color: "grey",
    marginLeft: 10,
    marginBottom: 20,
  },

  inputHeader: { fontSize: 14, fontWeight: 600 },
  inputHeaderMargin: {
    fontSize: 14,
    fontWeight: 600,
    marginLeft: 10,
  },
  inputHeaderPage3: {
    fontSize: 14,
    fontWeight: 600,
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginVertical: 20,
  },

  dateTimePicker: { marginLeft: 10, marginBottom: 15, marginRight: 10 },

  itemCard: {
    // boxShadow: 0,4,8,0,rgba(0,0,0,0.2),
    maxWidth: 250,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    backgroundColor: "#ffff",
    flexGrow: 1,
  },
  primaryButtonContainer: {
    height: 55,
    width: 150,
    marginVertical: 10,
    marginHorizontal: 8,
    borderWidth: 0,
    alignSelf: "center",
  },
  primaryButtonContainer2: {
    height: 55,
    width: 150,
    marginVertical: 10,
    marginHorizontal: 8,
    borderWidth: 0,
    alignSelf: "center",
  },
  primaryButton: {
    alignSelf: "center",
    justifyContent: "center",
    minHeight: 50,
    minWidth: 150,
    marginHorizontal: 8,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#307AFF",
  },

  secondaryButton: {
    alignSelf: "center",
    justifyContent: "center",
    minHeight: 50,
    minWidth: 150,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "",
  },

  tertiaryButton: {
    alignSelf: "center",
    justifyContent: "center",
    minHeight: 50,
    minWidth: 150,
    marginHorizontal: 5,
    borderWidth: 0,
    borderRadius: 15,
    backgroundColor: "#307AFF",
  },

  buttonGroupHolder: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    marginHorizontal: 15,
    alignSelf: "center",
  },
  buttonTitleText1: {
    color: "white",
    fontWeight: 500,
  },
  buttonTitleText2: {
    color: "black",
  },
});

export default styles;
