import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import RootLayout from './layout';

// Mock next/font/google
vi.mock('next/font/google', () => ({
  Geist: () => ({
    variable: 'mock-geist-sans-variable',
    subsets: ['latin'],
  }),
  Geist_Mono: () => ({
    variable: 'mock-geist-mono-variable',
    subsets: ['latin'],
  }),
}));

// Mock @vercel/speed-insights/next
vi.mock('@vercel/speed-insights/next', () => ({
  SpeedInsights: () => <div data-testid="speed-insights" />,
}));

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const { getByText, getByTestId } = render(
      <RootLayout>
        <div data-testid="test-child">Hello World</div>
      </RootLayout>
    );

    // Verify child content is rendered
    expect(getByText('Hello World')).toBeInTheDocument();

    // Verify child is rendered via test id
    expect(getByTestId('test-child')).toBeInTheDocument();

    // Verify SpeedInsights is rendered
    expect(getByTestId('speed-insights')).toBeInTheDocument();
  });
});
