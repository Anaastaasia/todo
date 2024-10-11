    import React, { useState, useRef, useEffect } from 'react';
    import { Wrapper, SelectedColorButton, ColorOptions, ColorOption } from '../styles/PrioritySelector.styles';

    interface Props {
    selectedColor: 'red' | 'yellow' | 'green';
    onSelectColor: (color: 'red' | 'yellow' | 'green') => void;
    }

    const PrioritySelector: React.FC<Props> = ({ selectedColor, onSelectColor }) => {
    const [showOptions, setShowOptions] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowOptions(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
        document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleOptions = () => {
        setShowOptions((prev) => !prev);
    };

    const handleColorSelect = (color: 'red' | 'yellow' | 'green') => {
        onSelectColor(color);
        setShowOptions(false); // Закрываем панель после выбора цвета
    };

    return (
        <Wrapper ref={wrapperRef}>
        <SelectedColorButton selectedColor={selectedColor} onClick={toggleOptions} />
        {showOptions && (
            <ColorOptions>
            <ColorOption color="red" onClick={() => handleColorSelect('red')} />
            <ColorOption color="yellow" onClick={() => handleColorSelect('yellow')} />
            <ColorOption color="green" onClick={() => handleColorSelect('green')} />
            </ColorOptions>
        )}
        </Wrapper>
    );
    };

    export default PrioritySelector;
