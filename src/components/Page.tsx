import Container from "@mui/material/Container";
import Header from "components/Header";
import TOBOFooter from "./tobo/TOBOFooter";

interface Props {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>
        <Container
          sx={{
            padding: "0 !important",
            paddingTop: "100px !important",
            maxWidth: "unset !important",
          }}
        >
          {children}
        </Container>
      </main>
      <TOBOFooter />
    </>
  );
};

export default Page;
