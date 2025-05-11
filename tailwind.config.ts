import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// WhatsApp inspired color palette 2025
				whatsapp: {
					DEFAULT: '#25D366',
					light: '#DCF8C6',
					dark: '#075E54',
					accent: '#34B7F1',
					teal: '#128C7E'
				},
				primary: {
					DEFAULT: '#25D366',
					foreground: '#FFFFFF',
					50: '#E9FBF0',
					100: '#D4F8E1',
					200: '#A9F1C2',
					300: '#7EE9A4',
					400: '#52E285',
					500: '#25D366',
					600: '#1FAA52',
					700: '#19823E',
					800: '#135C2C',
					900: '#0C351A'
				},
				secondary: {
					DEFAULT: '#00CC99',
					foreground: '#FFFFFF',
					50: '#E6FFF7',
					100: '#CCFFEF',
					200: '#99FFE0',
					300: '#66FFD1',
					400: '#33FFC2',
					500: '#00CC99',
					600: '#00A37A',
					700: '#007A5C',
					800: '#00523D',
					900: '#00291F'
				},
				teal: {
					DEFAULT: '#128C7E',
					light: '#25D366',
					dark: '#075E54'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				"accordion-up": {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				"fadeIn": {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				"slideDown": {
					from: { transform: 'translateY(-10px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' },
				},
				"slideUp": {
					from: { transform: 'translateY(10px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fadeIn": "fadeIn 0.5s ease-out",
				"slideDown": "slideDown 0.5s ease-out",
				"slideUp": "slideUp 0.5s ease-out",
			},
			boxShadow: {
				'soft': '0 4px 15px rgba(0,0,0,0.05)',
				'medium': '0 6px 25px rgba(0,0,0,0.1)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
