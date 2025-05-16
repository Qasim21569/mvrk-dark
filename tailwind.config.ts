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
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			poppins: ['Poppins', 'sans-serif'],
  			montserrat: ['Montserrat', 'sans-serif'],
  			playfair: ['Playfair Display', 'serif'],
  			sans: ['Poppins', 'Montserrat', 'sans-serif'],
  			heading: ['Montserrat', 'sans-serif'],
  			serif: ['Playfair Display', 'serif']
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			mvrk: {
  				'soft-cyan': '#D4F4F8',
  				'aqua-blue': '#63D7E4',
  				'teal': '#00BDC9',
  				'slate': '#67849C',
  				'navy-slate': '#4C5A6E',
  				'plum': '#7E4F6D',
  				'coral': '#FF5D78'
  			},
  			primary: {
  				DEFAULT: '#00BDC9',
  				foreground: '#ffffff'
  			},
  			secondary: {
  				DEFAULT: '#67849C',
  				foreground: '#ffffff'
  			},
  			accent: {
  				DEFAULT: '#FF5D78',
  				foreground: '#ffffff'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in-right': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(-20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			'gradient': {
  				'0%': { backgroundPosition: '0% 50%' },
  				'50%': { backgroundPosition: '100% 50%' },
  				'100%': { backgroundPosition: '0% 50%' },
  			},
            'shimmer': {
                '0%': { 
                    backgroundPosition: '-200% 0',
                },
                '100%': { 
                    backgroundPosition: '200% 0',
                }
            },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fade-in 0.5s ease-out',
  			'fade-in-right': 'fade-in-right 0.5s ease-out',
  			'gradient': 'gradient 8s ease infinite',
            'shimmer': 'shimmer 8s ease-in-out infinite',
  		},
  		backgroundSize: {
  			'200%': '200% 200%',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
