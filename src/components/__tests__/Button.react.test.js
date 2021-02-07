import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../shared/Button';

test('Button rendered', () => {
  const btn = renderer.create(<Button>invest</Button>);
  let tree = btn.toJSON();
  expect(tree).toMatchSnapshot();
});
