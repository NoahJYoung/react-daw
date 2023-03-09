import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pad } from './Pad';

const mockTriggerAttack = jest.fn();

describe('Pad', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render the pad with its padKey value', () => {
    const { getByText } = render(
      <Pad
        padKey="a"
        index={0}
        triggerAttack={mockTriggerAttack}
      />
    );
    const padElement = getByText('a');
    expect(padElement).toBeInTheDocument();
  });

  it('should trigger an attack when a pad is pressed down', async () => {
    render(
      <Pad
        padKey="a"
        index={0}
        triggerAttack={mockTriggerAttack}
      />
    );

    fireEvent.keyDown(window, { key: 'a' });
    expect(mockTriggerAttack).toHaveBeenCalledTimes(1);
    expect(mockTriggerAttack).toHaveBeenCalledWith(0);
  });

  it('should not trigger an attack when a pad is pressed down repeatedly', async () => {
    render(
      <Pad
        padKey="a"
        index={0}
        triggerAttack={mockTriggerAttack}
      />
    );

    fireEvent.keyDown(window, { key: 'a' });
    fireEvent.keyDown(window, { key: 'a' });
    expect(mockTriggerAttack).toHaveBeenCalledTimes(1);
  });

  it('should not trigger an attack when a pad is already active', async () => {
    render(
      <Pad
        padKey="a"
        index={0}
        triggerAttack={mockTriggerAttack}
      />
    );

    fireEvent.keyDown(window, { key: 'a' });
    fireEvent.keyDown(window, { key: 'a' });
    expect(mockTriggerAttack).toHaveBeenCalledTimes(1);
  });

  it('should trigger a release when a pad is released', () => {
    render(
      <Pad
        padKey="a"
        index={0}
        triggerAttack={mockTriggerAttack}
      />
    );
    fireEvent.keyDown(window, { key: 'a' });
    fireEvent.keyUp(window, { key: 'a' });
    expect(mockTriggerAttack).toHaveBeenCalledTimes(1);
  });
});
