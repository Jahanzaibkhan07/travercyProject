import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import Projects from "./components/Projects";
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <main className="py-3">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<Project />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
