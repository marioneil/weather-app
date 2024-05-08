// App.snapshot.test.js
import { create } from "react-test-renderer";

import App from "../App";

test("renders learn react link", () => {
  const tree = create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
