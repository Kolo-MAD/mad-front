import { describe, test, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

vi.mock('$lib/paraglide/messages.js', () => ({
	description: vi.fn(() => 'Mad Website')
}));

describe('/+page.svelte', () => {
	test('should render h1', () => {
		render(Page);
		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
		expect(screen.getByText('Mad Website')).toBeInTheDocument();
	});
	test('should render h2', () => {
		render(Page);
		expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
		expect(screen.getByText('Example string for testing tailwind')).toBeInTheDocument();
	});

	test('should render language buttons', () => {
		render(Page);
		expect(screen.getByText('en')).toBeInTheDocument();
		expect(screen.getByText('pl')).toBeInTheDocument();
	});
});
