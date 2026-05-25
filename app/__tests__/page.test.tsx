import { render, screen } from '@testing-library/react';
import Home from '../page';

// Mock the dynamic import of CollaborativeEditor
jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => <div data-testid="collaborative-editor">Editor Mock</div>;
  return DynamicComponent;
});

describe('Home Page', () => {
  it('renders the header correctly', () => {
    render(<Home />);
    expect(screen.getByText('Collaborative Email Builder')).toBeInTheDocument();
    expect(screen.getByText('Preview')).toBeInTheDocument();
    expect(screen.getByText('Export HTML')).toBeInTheDocument();
  });

  it('renders the blocks sidebar', () => {
    render(<Home />);
    expect(screen.getByText('Blocks')).toBeInTheDocument();
    ['Text', 'Image', 'Button', 'Divider', 'Spacer', 'Social'].forEach((block) => {
      expect(screen.getByText(block)).toBeInTheDocument();
    });
  });

  it('renders the subject line input', () => {
    render(<Home />);
    expect(screen.getByLabelText('Email Subject Line')).toBeInTheDocument();
    const input = screen.getByLabelText('Email Subject Line');
    expect(input).toHaveValue('Your New Collaborative Marketing Campaign');
  });

  it('renders the collaborative editor mock', () => {
    render(<Home />);
    expect(screen.getByTestId('collaborative-editor')).toBeInTheDocument();
  });
});
