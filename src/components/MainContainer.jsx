import { Header } from "./Header";
import { ModelContainer } from "./ModelContainer";

export const MainContainer = () => {
  return (
    <div className="main-container">
      <Header />
      <ModelContainer />
      <div>Footer</div>
    </div>
  );
};
