import { faker } from '@faker-js/faker';
import { fireEvent, screen } from '@testing-library/react';

export const populateInput = (
  searchContent = faker.string.alphanumeric(10),
  inputId: string,
): void => {
  const input = screen.getByTestId(inputId);
  fireEvent.input(input, { target: { searchContent } });
};
