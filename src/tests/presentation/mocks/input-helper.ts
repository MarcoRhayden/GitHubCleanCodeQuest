import { fireEvent, screen } from '@testing-library/react';

export const populateInput = (searchContent: string, inputId: string): void => {
  const input = screen.getByTestId(inputId);
  fireEvent.input(input, { target: { searchContent } });
};
