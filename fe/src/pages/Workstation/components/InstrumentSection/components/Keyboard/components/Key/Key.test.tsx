import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Key } from './Key';
import { Key as KeyData } from '../../../../../../AudioEngine/Synthesizer/keys';

const mockTriggerAttack = jest.fn();
const mockTriggerRelease = jest.fn();

describe('Key', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render the key with its key value', () => {
        const keyData: KeyData = {
        noteName: 'C4',
        key: 'a',
        hertz: 261.63,
        type: 'white',
        };

        const { getByText } = render(
            <Key
                keyData={keyData}
                triggerAttack={mockTriggerAttack}
                triggerRelease={mockTriggerRelease}
            />
        );
        const keyElement = getByText('a');
        expect(keyElement).toBeInTheDocument();
    });

    it('should trigger an attack when a key is pressed down', async () => {
        const keyData: KeyData = {
        noteName: 'C4',
        key: 'a',
        hertz: 261.63,
        type: 'white',
        };

    render(
        <Key
            keyData={keyData}
            triggerAttack={mockTriggerAttack}
            triggerRelease={mockTriggerRelease}
        />
    );
    fireEvent.keyDown(window, { key: 'a' });
    expect(mockTriggerAttack).toHaveBeenCalledTimes(1);
    expect(mockTriggerAttack).toHaveBeenCalledWith('C4');
    });

    it('should trigger a release when a key is released', () => {
        const keyData: KeyData = {
        noteName: 'C4',
        key: 'a',
        hertz: 261.63,
        type: 'white',
        };
        render(
            <Key
                keyData={keyData}
                triggerAttack={mockTriggerAttack}
                triggerRelease={mockTriggerRelease}
            />
        );
        fireEvent.keyDown(window, { key: 'a' });
        fireEvent.keyUp(window, { key: 'a' });
        expect(mockTriggerRelease).toHaveBeenCalledTimes(1);
        expect(mockTriggerRelease).toHaveBeenCalledWith('C4');
    });
});
