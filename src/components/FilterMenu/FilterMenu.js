import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { ArrowDown } from '../../assets/icons/arrowDown';

const FilterMenu = ({ initialOption = 0, options, onOptionSelected }) => {
  const [value, setValue] = useState(options && options[initialOption].label);
  const [isOpen, setIsOpen] = useState(false);
  const [focusId, setFocusId] = useState(-1);
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Handle clic outside
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Bind and unbind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (option, id) => {
    setFocusId(id);
    setValue(option.label);
    setIsOpen(false);

    if (onOptionSelected) {
      onOptionSelected(option);
    }
  };

  const handleKeyCode = (e) => {
    const keyCode = e.key;
    e.stopPropagation();

    const up = () => {
      const back = focusId === -1 ? -1 : focusId - 1;
      setFocusId(back);
      e.preventDefault();
    };

    const down = () => {
      const next = focusId === options.length - 1 ? focusId : focusId + 1;
      setFocusId(next);
      e.preventDefault();
    };

    const enter = () => {
      isOpen && handleChange(options[focusId], focusId);
      setIsOpen(true);
    };

    switch (keyCode) {
      case 'ArrowUp':
        return up();
      case 'ArrowDown':
        return down();
      case 'Enter':
        return enter();
      default:
        return null;
    }
  };

  return (
    <FilterMenuContainer ref={wrapperRef}>
      <DropdownContainer>
        <Dropdown
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => handleKeyCode(e)}
        >
          {value}
          <ArrowContainer isOpen={isOpen}>
            <ArrowDown size="12px" />
          </ArrowContainer>
        </Dropdown>
      </DropdownContainer>
      {options && options.length && (
        <FilterList isOpen={isOpen}>
          {options.map((option, idx) => (
            <Option
              className={idx === focusId ? 'focus' : ''}
              key={idx}
              onClick={() => handleChange(option, idx)}
              tabIndex="1"
              role="button"
            >
              {option.label}
            </Option>
          ))}
        </FilterList>
      )}
    </FilterMenuContainer>
  );
};

export default FilterMenu;

const FilterMenuContainer = styled.div`
  position: relative;
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Dropdown = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: black;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  margin-right: 4px;

  &:hover,
  &:focus,
  &:active {
    opacity: 0.7;
  }
`;

const ArrowContainer = styled.div`
  margin-left: 4px;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
      transition: transform 0.5s ease;
    `}
    ${({ isOpen }) =>
    !isOpen &&
    css`
      transform: rotate(0deg);
      transition: transform 0.5s ease;
    `}
`;

const FilterList = styled.ul`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  list-style: none;
  background: white;
  border: 1px solid black;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  padding: 12px 0px;
  margin: 0;
  width: max-content;
  max-height: 186px;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  right: 0;
  z-index: 1;
`;

const Option = styled.span`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;

  &.focus,
  &.selected {
    background-color: #8a8a8a;
  }

  &:hover:not(.selected) {
    background-color: #d4d4d4;
  }
`;
