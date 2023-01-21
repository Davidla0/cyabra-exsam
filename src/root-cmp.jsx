import { AppHeader } from "./cmp/header/app-header";
import { AppFooter } from "./cmp/app-footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import routes from "./routes";


function RootCmp() {
  return <section className="grid-container full">
    <header className="app-header main-layout full">
      <AppHeader />
    </header>
    <main className="main-layout">
      <Routes>
        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
      </Routes>
    </main>
    <footer className="app-footer main-layout full">
      <AppFooter />
    </footer>
  </section>
}

export default RootCmp;
