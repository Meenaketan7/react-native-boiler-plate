'use client';
import { vars } from 'nativewind';

export const config = {
	light: vars({
		'--color-base-card': '255 255 255', // #ffffff
		'--color-base-card-foreground': '24 24 27', // #18181b
		'--color-base-muted': '244 244 245', // #f4f4f5
		'--color-base-muted-foreground': '113 113 123', // #71717b
		'--color-base-background': '248 250 252', // #f8fafc
		'--color-base-border': '226 232 240', // #e2e8f0
		'--color-base-primary': '43 127 255', // #2b7fff
		'--color-base-secondary': '219 234 254', // #dbeafe
		'--color-base-primary-foreground': '255 255 255', // #ffffff
		'--color-base-secondary-foreground': '43 127 255', // #2b7fff
		'--color-base-destructive': '254 242 242', // #fef2f2
		'--color-base-destructive-foreground': '231 0 11', // #e7000b
		'--color-base-warning': '255 251 235', // #fffbeb
		'--color-base-warning-foreground': '254 154 0', // #fe9a00
		'--color-base-info': '236 254 255', // #ecfeff
		'--color-base-info-foreground': '0 184 219', // #00b8db
		'--color-base-success': '236 253 245', // #ecfdf5
		'--color-base-success-foreground': '0 188 125', // #00bc7d
		'--color-base-neutral': '244 244 245', // #f4f4f5
		'--color-base-neutral-foreground': '82 82 92', // #52525c
		'--color-base-accent-pink': '253 242 248', // #fdf2f8
		'--color-base-accent-pink-foreground': '246 51 154', // #f6339a
		'--color-base-accent-orange': '255 237 212', // #ffedd4
		'--color-base-accent-orange-foreground': '255 105 0', // #ff6900
		'--color-base-accent-purple': '250 245 255', // #faf5ff
		'--color-base-accent-purple-foreground': '173 70 255', // #ad46ff
		'--color-base-accent-teal': '240 253 250', // #f0fdfa
		'--color-base-accent-teal-foreground': '0 187 167', // #00bba7
		'--color-base-white': '255 255 255', // #ffffff
		'--color-base-black': '0 0 0', // #000000
		'--color-base-transparent': '0 0 0 / 0', // #00000000
		'--color-base-accent-blue': '239 246 255', // #eff6ff
		'--color-base-accent-blue-foreground': '43 127 255', // #2b7fff
		'--color-alpha-90': '255 255 255 / 0.1', // #ffffff19
		'--color-alpha-80': '255 255 255 / 0.2', // #ffffff33
		'--color-alpha-70': '255 255 255 / 0.3', // #ffffff4c
		'--color-alpha-40': '255 255 255 / 0.6', // #ffffff99
		'--color-alpha-50': '255 255 255 / 0.5', // #ffffff7f
		'--color-alpha-30': '255 255 255 / 0.69', // #ffffffb2
		'--color-alpha-20': '255 255 255 / 0.8', // #ffffffcc
		'--color-alpha-60': '255 255 255 / 0.4', // #ffffff66
		'--color-alpha-10': '255 255 255 / 0.89', // #ffffffe5
		'--color-base-accent-blue-background': '22 36 86', // #162456
		'--color-base-card-hover': '241 245 249', // #f1f5f9
		'--color-base-accent-orange-foreground-process': '255 137 4', // #ff8904
		'--color-base-accent-orange-process': '255 247 237', // #fff7ed
		//Blue
		'--color-blue-1': '245 249 255', // #F5F9FF
		'--color-blue-2': '200 222 255', // #C8DEFF
		'--color-blue-3': '155 195 255', // #9BC3FF
		'--color-blue-4': '106 168 255', // #6EA8FF
		'--color-blue-5': '65 141 255', // #418DFF
		'--color-blue-6': '27 118 255', // #1B76FF
		'--color-blue-7': '0 92 231', // #005CE7
		'--color-blue-8': '0 74 186', // #004ABA
		'--color-blue-9': '0 56 141', // #00388D
		'--color-blue-10': '0 38 96', // #002660
		//Red
		'--color-red-1': '254 242 242', // #FEF2F2
		'--color-red-2': '254 226 226', // #FEE2E2
		'--color-red-3': '254 202 202', // #FECACA
		'--color-red-4': '252 165 165', // #FCA5A5
		'--color-red-5': '248 113 113', // #F87171
		'--color-red-6': '248 113 113', // #F87171
		'--color-red-7': '220 38 38', // #DC2626
		'--color-red-8': '185 28 28', // #B91C1C
		'--color-red-9': '153 27 27', // #991B1B
		'--color-red-10': '127 17 17', // #7F1D1D
		//Text
		'--color-text-primary': '10 10 10', // #0A0A0A
		'--color-text-secondary': '93 93 93', // #5D5D5D
		'--color-text-tertiary': '136 136 136', // #888888
		'--color-text-quaternary': '209 209 209', // #D1D1D1
		'--color-text-light-solid': '246 246 246', // #F6F6F6
		'--color-text-headline': '10 10 10', // #0A0A0A
		'--color-text-label': '93 93 93', // #5D5D5D
		'--color-text-disabled': '209 209 209', // #D1D1D1
		'--color-text-placeholder': '209 209 209', // #D1D1D1

		//Primary
		'--color-primary-0': '179 179 179',
		'--color-primary-50': '153 153 153',
		'--color-primary-100': '128 128 128',
		'--color-primary-200': '115 115 115',
		'--color-primary-300': '102 102 102',
		'--color-primary-400': '82 82 82',
		'--color-primary-500': '51 51 51',
		'--color-primary-600': '41 41 41',
		'--color-primary-700': '31 31 31',
		'--color-primary-800': '13 13 13',
		'--color-primary-900': '10 10 10',
		'--color-primary-950': '8 8 8',

		/* Secondary  */
		'--color-secondary-0': '253 253 253',
		'--color-secondary-50': '251 251 251',
		'--color-secondary-100': '246 246 246',
		'--color-secondary-200': '242 242 242',
		'--color-secondary-300': '237 237 237',
		'--color-secondary-400': '230 230 231',
		'--color-secondary-500': '217 217 219',
		'--color-secondary-600': '198 199 199',
		'--color-secondary-700': '189 189 189',
		'--color-secondary-800': '177 177 177',
		'--color-secondary-900': '165 164 164',
		'--color-secondary-950': '157 157 157',

		/* Tertiary */
		'--color-tertiary-0': '255 250 245',
		'--color-tertiary-50': '255 242 229',
		'--color-tertiary-100': '255 233 213',
		'--color-tertiary-200': '254 209 170',
		'--color-tertiary-300': '253 180 116',
		'--color-tertiary-400': '251 157 75',
		'--color-tertiary-500': '231 129 40',
		'--color-tertiary-600': '215 117 31',
		'--color-tertiary-700': '180 98 26',
		'--color-tertiary-800': '130 73 23',
		'--color-tertiary-900': '108 61 19',
		'--color-tertiary-950': '84 49 18',

		/* Error */
		'--color-error-0': '254 233 233',
		'--color-error-50': '254 226 226',
		'--color-error-100': '254 202 202',
		'--color-error-200': '252 165 165',
		'--color-error-300': '248 113 113',
		'--color-error-400': '239 68 68',
		'--color-error-500': '230 53 53',
		'--color-error-600': '220 38 38',
		'--color-error-700': '185 28 28',
		'--color-error-800': '153 27 27',
		'--color-error-900': '127 29 29',
		'--color-error-950': '83 19 19',

		/* Success */
		'--color-success-0': '228 255 244',
		'--color-success-50': '202 255 232',
		'--color-success-100': '162 241 192',
		'--color-success-200': '132 211 162',
		'--color-success-300': '102 181 132',
		'--color-success-400': '72 151 102',
		'--color-success-500': '52 131 82',
		'--color-success-600': '42 121 72',
		'--color-success-700': '32 111 62',
		'--color-success-800': '22 101 52',
		'--color-success-900': '20 83 45',
		'--color-success-950': '27 50 36',

		/* Warning */
		'--color-warning-0': '255 249 245',
		'--color-warning-50': '255 244 236',
		'--color-warning-100': '255 231 213',
		'--color-warning-200': '254 205 170',
		'--color-warning-300': '253 173 116',
		'--color-warning-400': '251 149 75',
		'--color-warning-500': '231 120 40',
		'--color-warning-600': '215 108 31',
		'--color-warning-700': '180 90 26',
		'--color-warning-800': '130 68 23',
		'--color-warning-900': '108 56 19',
		'--color-warning-950': '84 45 18',

		/* Info */
		'--color-info-0': '236 248 254',
		'--color-info-50': '199 235 252',
		'--color-info-100': '162 221 250',
		'--color-info-200': '124 207 248',
		'--color-info-300': '87 194 246',
		'--color-info-400': '50 180 244',
		'--color-info-500': '13 166 242',
		'--color-info-600': '11 141 205',
		'--color-info-700': '9 115 168',
		'--color-info-800': '7 90 131',
		'--color-info-900': '5 64 93',
		'--color-info-950': '3 38 56',

		/* Typography */
		'--color-typography-0': '254 254 255',
		'--color-typography-50': '245 245 245',
		'--color-typography-100': '229 229 229',
		'--color-typography-200': '219 219 220',
		'--color-typography-300': '212 212 212',
		'--color-typography-400': '163 163 163',
		'--color-typography-500': '140 140 140',
		'--color-typography-600': '115 115 115',
		'--color-typography-700': '82 82 82',
		'--color-typography-800': '64 64 64',
		'--color-typography-900': '38 38 39',
		'--color-typography-950': '23 23 23',

		/* Outline */
		'--color-outline-0': '253 254 254',
		'--color-outline-50': '243 243 243',
		'--color-outline-100': '230 230 230',
		'--color-outline-200': '221 220 219',
		'--color-outline-300': '211 211 211',
		'--color-outline-400': '165 163 163',
		'--color-outline-500': '140 141 141',
		'--color-outline-600': '115 116 116',
		'--color-outline-700': '83 82 82',
		'--color-outline-800': '65 65 65',
		'--color-outline-900': '39 38 36',
		'--color-outline-950': '26 23 23',

		/* Background */
		'--color-background-0': '255 255 255',
		'--color-background-50': '246 246 246',
		'--color-background-100': '242 241 241',
		'--color-background-200': '220 219 219',
		'--color-background-300': '213 212 212',
		'--color-background-400': '162 163 163',
		'--color-background-500': '142 142 142',
		'--color-background-600': '116 116 116',
		'--color-background-700': '83 82 82',
		'--color-background-800': '65 64 64',
		'--color-background-900': '39 38 37',
		'--color-background-950': '18 18 18',

		/* Background Special */
		'--color-background-error': '254 241 241',
		'--color-background-warning': '255 243 234',
		'--color-background-success': '237 252 242',
		'--color-background-muted': '247 248 247',
		'--color-background-info': '235 248 254',

		/* Focus Ring Indicator  */
		'--color-indicator-primary': '55 55 55',
		'--color-indicator-info': '83 153 236',
		'--color-indicator-error': '185 28 28',
	}),
	dark: vars({
		'--color-base-card': '15 23 43', // #0f172b
		'--color-base-card-foreground': '250 250 250', // #fafafa
		'--color-base-muted': '39 39 42', // #27272a
		'--color-base-muted-foreground': '159 159 169', // #9f9fa9
		'--color-base-background': '9 9 11', // #09090b
		'--color-base-border': '49 65 88', // #314158
		'--color-base-primary': '43 127 255', // #2b7fff
		'--color-base-secondary': '28 57 142', // #1c398e
		'--color-base-primary-foreground': '255 255 255', // #ffffff
		'--color-base-secondary-foreground': '81 162 255', // #51a2ff
		'--color-base-destructive': '70 8 9', // #460809
		'--color-base-destructive-foreground': '231 0 11', // #e7000b
		'--color-base-warning': '70 25 1', // #461901
		'--color-base-warning-foreground': '254 154 0', // #fe9a00
		'--color-base-info': '5 51 69', // #053345
		'--color-base-info-foreground': '0 184 219', // #00b8db
		'--color-base-success': '0 44 34', // #002c22
		'--color-base-success-foreground': '0 188 125', // #00bc7d
		'--color-base-neutral': '39 39 42', // #27272a
		'--color-base-neutral-foreground': '212 212 216', // #d4d4d8
		'--color-base-accent-pink': '81 4 36', // #510424
		'--color-base-accent-pink-foreground': '246 51 154', // #f6339a
		'--color-base-accent-orange': '68 19 6', // #441306
		'--color-base-accent-orange-foreground': '255 105 0', // #ff6900
		'--color-base-accent-purple': '60 3 102', // #3c0366
		'--color-base-accent-purple-foreground': '173 70 255', // #ad46ff
		'--color-base-accent-teal': '2 47 46', // #022f2e
		'--color-base-accent-teal-foreground': '0 187 167', // #00bba7
		'--color-base-white': '255 255 255', // #ffffff
		'--color-base-black': '0 0 0', // #000000
		'--color-base-transparent': '0 0 0 / 0', // #00000000
		'--color-base-accent-blue': '22 36 86', // #162456
		'--color-base-accent-blue-foreground': '81 162 255', // #51a2ff
		'--color-alpha-90': '9 9 11 / 0.1', // #09090b19
		'--color-alpha-80': '9 9 11 / 0.2', // #09090b33
		'--color-alpha-70': '9 9 11 / 0.3', // #09090b4c
		'--color-alpha-60': '9 9 11 / 0.4', // #09090b66
		'--color-alpha-50': '9 9 11 / 0.5', // #09090b7f
		'--color-alpha-40': '9 9 11 / 0.6', // #09090b99
		'--color-alpha-30': '9 9 11 / 0.69', // #09090bb2
		'--color-alpha-20': '9 9 11 / 0.8', // #09090bcc
		'--color-alpha-10': '9 9 11 / 0.89', // #09090be5
		'--color-base-accent-blue-background': '22 36 86', // #162456
		'--color-base-card-hover': '15 23 43', // #0f172b
		'--color-base-accent-orange-foreground-process': '255 137 4', // #ff8904
		'--color-base-accent-orange-process': '68 19 6', // #441306
		//Blue
		'--color-blue-1': '0 20 51', // #001433
		'--color-blue-2': '0 38 96', // #002660
		'--color-blue-3': '0 56 141', // #00388D
		'--color-blue-4': '0 74 186', // #004ABA
		'--color-blue-5': '0 92 231', // #005CE7
		'--color-blue-6': '27 118 255', // #1B76FF
		'--color-blue-7': '65 141 255', // #418DFF
		'--color-blue-8': '106 168 255', // #6EA8FF
		'--color-blue-9': '155 195 255', // #9BC3FF
		'--color-blue-10': '200 222 255', // #C8DEFF
		// Red
		'--color-red-1': '69 10 10', // #450A0A
		'--color-red-2': '127 17 17', // #7F1D1D
		'--color-red-3': '153 27 27', // #991B1B
		'--color-red-4': '185 28 28', // #B91C1C
		'--color-red-5': '220 38 38', // #DC2626
		'--color-red-6': '248 113 113', // #F87171
		'--color-red-7': '248 113 113', // #F87171
		'--color-red-8': '252 165 165', // #FCA5A5
		'--color-red-9': '254 202 202', // #FECACA
		'--color-red-10': '254 226 226', // #FEE2E2
		// Text
		'--color-text-primary': '246 246 246', // #F6F6F6
		'--color-text-secondary': '209 209 209', // #D1D1D1
		'--color-text-tertiary': '136 136 136', // #888888
		'--color-text-quaternary': '93 93 93', // #5D5D5D
		'--color-text-light-solid': '246 246 246', // #F6F6F6
		'--color-text-headline': '246 246 246', // #F6F6F6
		'--color-text-label': '209 209 209', // #D1D1D1
		'--color-text-disabled': '93 93 93', // #5D5D5D
		'--color-text-placeholder': '93 93 93', // #5D5D5D

		'--color-primary-0': '166 166 166',
		'--color-primary-50': '175 175 175',
		'--color-primary-100': '186 186 186',
		'--color-primary-200': '197 197 197',
		'--color-primary-300': '212 212 212',
		'--color-primary-400': '221 221 221',
		'--color-primary-500': '230 230 230',
		'--color-primary-600': '240 240 240',
		'--color-primary-700': '250 250 250',
		'--color-primary-800': '253 253 253',
		'--color-primary-900': '254 249 249',
		'--color-primary-950': '253 252 252',

		/* Secondary  */
		'--color-secondary-0': '20 20 20',
		'--color-secondary-50': '23 23 23',
		'--color-secondary-100': '31 31 31',
		'--color-secondary-200': '39 39 39',
		'--color-secondary-300': '44 44 44',
		'--color-secondary-400': '56 57 57',
		'--color-secondary-500': '63 64 64',
		'--color-secondary-600': '86 86 86',
		'--color-secondary-700': '110 110 110',
		'--color-secondary-800': '135 135 135',
		'--color-secondary-900': '150 150 150',
		'--color-secondary-950': '164 164 164',

		/* Tertiary */
		'--color-tertiary-0': '84 49 18',
		'--color-tertiary-50': '108 61 19',
		'--color-tertiary-100': '130 73 23',
		'--color-tertiary-200': '180 98 26',
		'--color-tertiary-300': '215 117 31',
		'--color-tertiary-400': '231 129 40',
		'--color-tertiary-500': '251 157 75',
		'--color-tertiary-600': '253 180 116',
		'--color-tertiary-700': '254 209 170',
		'--color-tertiary-800': '255 233 213',
		'--color-tertiary-900': '255 242 229',
		'--color-tertiary-950': '255 250 245',

		/* Error */
		'--color-error-0': '83 19 19',
		'--color-error-50': '127 29 29',
		'--color-error-100': '153 27 27',
		'--color-error-200': '185 28 28',
		'--color-error-300': '220 38 38',
		'--color-error-400': '230 53 53',
		'--color-error-500': '239 68 68',
		'--color-error-600': '249 97 96',
		'--color-error-700': '229 91 90',
		'--color-error-800': '254 202 202',
		'--color-error-900': '254 226 226',
		'--color-error-950': '254 233 233',

		/* Success */
		'--color-success-0': '27 50 36',
		'--color-success-50': '20 83 45',
		'--color-success-100': '22 101 52',
		'--color-success-200': '32 111 62',
		'--color-success-300': '42 121 72',
		'--color-success-400': '52 131 82',
		'--color-success-500': '72 151 102',
		'--color-success-600': '102 181 132',
		'--color-success-700': '132 211 162',
		'--color-success-800': '162 241 192',
		'--color-success-900': '202 255 232',
		'--color-success-950': '228 255 244',

		/* Warning */
		'--color-warning-0': '84 45 18',
		'--color-warning-50': '108 56 19',
		'--color-warning-100': '130 68 23',
		'--color-warning-200': '180 90 26',
		'--color-warning-300': '215 108 31',
		'--color-warning-400': '231 120 40',
		'--color-warning-500': '251 149 75',
		'--color-warning-600': '253 173 116',
		'--color-warning-700': '254 205 170',
		'--color-warning-800': '255 231 213',
		'--color-warning-900': '255 244 237',
		'--color-warning-950': '255 249 245',

		/* Info */
		'--color-info-0': '3 38 56',
		'--color-info-50': '5 64 93',
		'--color-info-100': '7 90 131',
		'--color-info-200': '9 115 168',
		'--color-info-300': '11 141 205',
		'--color-info-400': '13 166 242',
		'--color-info-500': '50 180 244',
		'--color-info-600': '87 194 246',
		'--color-info-700': '124 207 248',
		'--color-info-800': '162 221 250',
		'--color-info-900': '199 235 252',
		'--color-info-950': '236 248 254',

		/* Typography */
		'--color-typography-0': '23 23 23',
		'--color-typography-50': '38 38 39',
		'--color-typography-100': '64 64 64',
		'--color-typography-200': '82 82 82',
		'--color-typography-300': '115 115 115',
		'--color-typography-400': '140 140 140',
		'--color-typography-500': '163 163 163',
		'--color-typography-600': '212 212 212',
		'--color-typography-700': '219 219 220',
		'--color-typography-800': '229 229 229',
		'--color-typography-900': '245 245 245',
		'--color-typography-950': '254 254 255',

		/* Outline */
		'--color-outline-0': '26 23 23',
		'--color-outline-50': '39 38 36',
		'--color-outline-100': '65 65 65',
		'--color-outline-200': '83 82 82',
		'--color-outline-300': '115 116 116',
		'--color-outline-400': '140 141 141',
		'--color-outline-500': '165 163 163',
		'--color-outline-600': '211 211 211',
		'--color-outline-700': '221 220 219',
		'--color-outline-800': '230 230 230',
		'--color-outline-900': '243 243 243',
		'--color-outline-950': '253 254 254',

		/* Background */
		'--color-background-0': '18 18 18',
		'--color-background-50': '39 38 37',
		'--color-background-100': '65 64 64',
		'--color-background-200': '83 82 82',
		'--color-background-300': '116 116 116',
		'--color-background-400': '142 142 142',
		'--color-background-500': '162 163 163',
		'--color-background-600': '213 212 212',
		'--color-background-700': '229 228 228',
		'--color-background-800': '242 241 241',
		'--color-background-900': '246 246 246',
		'--color-background-950': '255 255 255',

		/* Background Special */
		'--color-background-error': '66 43 43',
		'--color-background-warning': '65 47 35',
		'--color-background-success': '28 43 33',
		'--color-background-muted': '51 51 51',
		'--color-background-info': '26 40 46',

		/* Focus Ring Indicator  */
		'--color-indicator-primary': '247 247 247',
		'--color-indicator-info': '161 199 245',
		'--color-indicator-error': '232 70 69',
	}),
};
