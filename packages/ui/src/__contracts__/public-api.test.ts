import * as api from '../index';

// The runtime exports of the package. Adding, renaming or removing one changes this snapshot,
// which makes the API change visible in review. Run `yarn test -u` and add a changeset.
it('exports exactly the public API', () => {
  expect(Object.keys(api).sort()).toMatchSnapshot();
});
