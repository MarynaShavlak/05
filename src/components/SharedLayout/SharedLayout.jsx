import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, NavigationList, NavigationLink } from "./SharedLayout.styled";
import { Layout } from "components/Layout";

export const SharedLayout = () => {
  return (
    <Layout>
      
      <Header>
        <Container>
        <nav>
          <NavigationList>
            <li>
              <NavigationLink to="/">
                Home
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/movies">Movies</NavigationLink>
            </li>
          </NavigationList>
          </nav>
        </Container>
      </Header>
      {/* <Suspense fallback={<div>Loading page...</div>}> */}
      <Container>
         <Outlet />
      </Container>
       
      {/* </Suspense> */}
   
    </Layout>
    
  );
};