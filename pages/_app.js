import GlobalStyles from "../styles/GlobalStyles";

function MyApp({Component, pageProps}) {
  const props = {
    ...pageProps,
    testProp: "Hallo",
  };
  return (
    <>
      <GlobalStyles />
      <Component {...props} />
    </>
  );
}

export default MyApp;
