import Colors from "./colors";

const CommonStyles = {
  mainContainer: {
    flex: 1
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  flexContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: "100%"
  },
  flexPadding: { height: "45%" },
  flexCenterText: {
    borderTopColor: Colors.grey,
    borderTopWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "65%"
  },
  flexBottomButtons: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    width: "80%",
    marginBottom: 40,
    justifyContent: "flex-end"
  },
  lineDraw: {
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    width: 120,
    height: 1,
    marginTop: 20,
    marginBottom: 15
  }
};

export default CommonStyles;
