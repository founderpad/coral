export type TOption = {
	readonly label: string;
	readonly value: string | number;
};

export const ALL_PRONOUNS: TOption[] = [
	{ label: 'She/Her', value: 'She/Her' },
	{ label: 'He/Him', value: 'He/Him' },
	{ label: 'They/Them', value: 'They/Them' },
	{ label: 'Custom', value: 'Custom' }
];

export const ALL_USER_OBJECTIVES: TOption[] = [
	{ label: 'Start a business', value: 'Start a business' },
	{ label: 'Join a business', value: 'Join a business' },
	{ label: 'Find a team', value: 'Find a team' },
	{ label: 'Collaborate on an idea', value: 'Collaborate on an idea' },
	{ label: 'Just browsing', value: 'Just browsing' }
];

export const ALL_MATCHMAKE_TYPES: TOption[] = [
	{ label: 'Co-Founder', value: 'Co-Founder' },
	{ label: 'Mentor', value: 'Mentor' },
	{ label: 'Entrepreneur', value: 'Entrepreneur' },
	{
		label: 'Interested in building a startup',
		value: 'Interested in building a startup'
	},
	{
		label: 'Interested in joining a startup',
		value: 'Interested in joining a startup'
	}
];

export const ALL_IDEA_CATEGORY_FIELDS: TOption[] = [
	{ label: 'Aerospace', value: 'Aerospace' },
	{ label: 'Agriculture', value: 'Agriculture' },
	{ label: 'Clothing', value: 'Clothing' },
	{ label: 'Construction', value: 'Construction' },
	{ label: 'Cryptocurrency', value: 'Cryptocurrency' },
	{ label: 'Education', value: 'Education' },
	{ label: 'Engineering', value: 'Engineering' },
	{ label: 'Entertainment', value: 'Entertainment' },
	{ label: 'Food & Drink', value: 'Food & Drink' },
	{ label: 'Gaming', value: 'Gaming' },
	{ label: 'Hospitality', value: 'Hospitality' },
	{ label: 'Manufacturing', value: 'Manufacturing' },
	{ label: 'Media', value: 'Media' },
	{ label: 'Medical', value: 'Medical' },
	{ label: 'Online', value: 'Online' },
	{ label: 'Professional Services', value: 'Professional Services' },
	{ label: 'Retail', value: 'Retail' },
	{ label: 'Technology', value: 'Technology' },
	{ label: 'Tourism', value: 'Tourism' },
	{ label: 'Transport', value: 'Transport' },
	{ label: 'Utilities', value: 'Utilities' },
	{ label: 'Other', value: 'Other' }
];

export const ALL_COUNTRIES: TOption[] = [
	{ label: 'Afghanistan', value: 'Afghanistan' },
	{ label: 'Albania', value: 'Albania' },
	{ label: 'Algeria', value: 'Algeria' },
	{ label: 'Andorra', value: 'Andorra' },
	{ label: 'Angola', value: 'Angola' },
	{ label: 'Antigua and Barbuda', value: 'Antigua and Barbuda' },
	{ label: 'Argentina', value: 'Argentina' },
	{ label: 'Armenia', value: 'Armenia' },
	{ label: 'Australia', value: 'Australia' },
	{ label: 'Austria', value: 'Austria' },
	{ label: 'Azerbaijan', value: 'Azerbaijan' },
	{ label: 'The Bahamas', value: 'The Bahamas' },
	{ label: 'Bahrain', value: 'Bahrain' },
	{ label: 'Bangladesh', value: 'Bangladesh' },
	{ label: 'Barbados', value: 'Barbados' },
	{ label: 'Belarus', value: 'Belarus' },
	{ label: 'Belgium', value: 'Belgium' },
	{ label: 'Belize', value: 'Belize' },
	{ label: 'Benin', value: 'Benin' },
	{ label: 'Bhutan', value: 'Bhutan' },
	{ label: 'Bolivia', value: 'Bolivia' },
	{ label: 'Bosnia and Herzegovina', value: 'Bosnia and Herzegovina' },
	{ label: 'Botswana', value: 'Botswana' },
	{ label: 'Brazil', value: 'Brazil' },
	{ label: 'Brunei', value: 'Brunei' },
	{ label: 'Bulgaria', value: 'Bulgaria' },
	{ label: 'Burkina Faso', value: 'Burkina Faso' },
	{ label: 'Burundi', value: 'Burundi' },
	{ label: 'Cabo Verde', value: 'Cabo Verde' },
	{ label: 'Cambodia', value: 'Cambodia' },
	{ label: 'Cameroon', value: 'Cameroon' },
	{ label: 'Canada', value: 'Canada' },
	{ label: 'Central African Republic', value: 'Central African Republic' },
	{ label: 'Chad', value: 'Chad' },
	{ label: 'Chile', value: 'Chile' },
	{ label: 'China', value: 'China' },
	{ label: 'Colombia', value: 'Colombia' },
	{ label: 'Comoros', value: 'Comoros' },
	{
		label: 'Congo, Democratic Republic of the',
		value: 'Congo, Democratic Republic of the'
	},
	{ label: 'Congo, Republic of the', value: 'Congo, Republic of the' },
	{ label: 'Costa Rica', value: 'Costa Rica' },
	{ label: 'Côte d’Ivoire', value: 'Côte d’Ivoire' },
	{ label: 'Croatia', value: 'Croatia' },
	{ label: 'Cuba', value: 'Cuba' },
	{ label: 'Cyprus', value: 'Cyprus' },
	{ label: 'Czech Republic', value: 'Czech Republic' },
	{ label: 'Denmark', value: 'Denmark' },
	{ label: 'Djibouti', value: 'Djibouti' },
	{ label: 'Dominica', value: 'Dominica' },
	{ label: 'Dominican Republic', value: 'Dominican Republic' },
	{ label: 'East Timor (Timor-Leste)', value: 'East Timor (Timor-Leste)' },
	{ label: 'Ecuador', value: 'Ecuador' },
	{ label: 'Egypt', value: 'Egypt' },
	{ label: 'El Salvador', value: 'El Salvador' },
	{ label: 'Equatorial Guinea', value: 'Equatorial Guinea' },
	{ label: 'Eritrea', value: 'Eritrea' },
	{ label: 'Estonia', value: 'Estonia' },
	{ label: 'Eswatini', value: 'Eswatini' },
	{ label: 'Ethiopia', value: 'Ethiopia' },
	{ label: 'Fiji', value: 'Fiji' },
	{ label: 'Finland', value: 'Finland' },
	{ label: 'France', value: 'France' },
	{ label: 'Gabon', value: 'Gabon' },
	{ label: 'The Gambia', value: 'The Gambia' },
	{ label: 'Georgia', value: 'Georgia' },
	{ label: 'Germany', value: 'Germany' },
	{ label: 'Ghana', value: 'Ghana' },
	{ label: 'Greece', value: 'Greece' },
	{ label: 'Grenada', value: 'Grenada' },
	{ label: 'Guatemala', value: 'Guatemala' },
	{ label: 'Guinea', value: 'Guinea' },
	{ label: 'Guinea-Bissau', value: 'Guinea-Bissau' },
	{ label: 'Guyana', value: 'Guyana' },
	{ label: 'Haiti', value: 'Haiti' },
	{ label: 'Honduras', value: 'Honduras' },
	{ label: 'Hungary', value: 'Hungary' },
	{ label: 'Iceland', value: 'Iceland' },
	{ label: 'India', value: 'India' },
	{ label: 'Indonesia', value: 'Indonesia' },
	{ label: 'Iran', value: 'Iran' },
	{ label: 'Iraq', value: 'Iraq' },
	{ label: 'Ireland', value: 'Ireland' },
	{ label: 'Israel', value: 'Israel' },
	{ label: 'Italy', value: 'Italy' },
	{ label: 'Jamaica', value: 'Jamaica' },
	{ label: 'Japan', value: 'Japan' },
	{ label: 'Jordan', value: 'Jordan' },
	{ label: 'Kazakhstan', value: 'Kazakhstan' },
	{ label: 'Kenya', value: 'Kenya' },
	{ label: 'Kiribati', value: 'Kiribati' },
	{ label: 'Korea, North', value: 'Korea, North' },
	{ label: 'Korea, South', value: 'Korea, South' },
	{ label: 'Kosovo', value: 'Kosovo' },
	{ label: 'Kuwait', value: 'Kuwait' },
	{ label: 'Kyrgyzstan', value: 'Kyrgyzstan' },
	{ label: 'Laos', value: 'Laos' },
	{ label: 'Latvia', value: 'Latvia' },
	{ label: 'Lebanon', value: 'Lebanon' },
	{ label: 'Lesotho', value: 'Lesotho' },
	{ label: 'Liberia', value: 'Liberia' },
	{ label: 'Libya', value: 'Libya' },
	{ label: 'Liechtenstein', value: 'Liechtenstein' },
	{ label: 'Lithuania', value: 'Lithuania' },
	{ label: 'Luxembourg', value: 'Luxembourg' },
	{ label: 'Madagascar', value: 'Madagascar' },
	{ label: 'Malawi', value: 'Malawi' },
	{ label: 'Malaysia', value: 'Malaysia' },
	{ label: 'Maldives', value: 'Maldives' },
	{ label: 'Mali', value: 'Mali' },
	{ label: 'Malta', value: 'Malta' },
	{ label: 'Marshall Islands', value: 'Marshall Islands' },
	{ label: 'Mauritania', value: 'Mauritania' },
	{ label: 'Mauritius', value: 'Mauritius' },
	{ label: 'Mexico', value: 'Mexico' },
	{
		label: 'Micronesia, Federated States of',
		value: 'Micronesia, Federated States of'
	},
	{ label: 'Moldova', value: 'Moldova' },
	{ label: 'Monaco', value: 'Monaco' },
	{ label: 'Mongolia', value: 'Mongolia' },
	{ label: 'Montenegro', value: 'Montenegro' },
	{ label: 'Morocco', value: 'Morocco' },
	{ label: 'Mozambique', value: 'Mozambique' },
	{ label: 'Myanmar (Burma)', value: 'Myanmar (Burma)' },
	{ label: 'Namibia', value: 'Namibia' },
	{ label: 'Nauru', value: 'Nauru' },
	{ label: 'Nepal', value: 'Nepal' },
	{ label: 'Netherlands', value: 'Netherlands' },
	{ label: 'New Zealand', value: 'New Zealand' },
	{ label: 'Nicaragua', value: 'Nicaragua' },
	{ label: 'Niger', value: 'Niger' },
	{ label: 'Nigeria', value: 'Nigeria' },
	{ label: 'North Macedonia', value: 'North Macedonia' },
	{ label: 'Norway', value: 'Norway' },
	{ label: 'Oman', value: 'Oman' },
	{ label: 'Pakistan', value: 'Pakistan' },
	{ label: 'Palau', value: 'Palau' },
	{ label: 'Panama', value: 'Panama' },
	{ label: 'Papua New Guinea', value: 'Papua New Guinea' },
	{ label: 'Paraguay', value: 'Paraguay' },
	{ label: 'Peru', value: 'Peru' },
	{ label: 'Philippines', value: 'Philippines' },
	{ label: 'Poland', value: 'Poland' },
	{ label: 'Portugal', value: 'Portugal' },
	{ label: 'Qatar', value: 'Qatar' },
	{ label: 'Romania', value: 'Romania' },
	{ label: 'Russia', value: 'Russia' },
	{ label: 'Rwanda', value: 'Rwanda' },
	{ label: 'Saint Kitts and Nevis', value: 'Saint Kitts and Nevis' },
	{ label: 'Saint Lucia', value: 'Saint Lucia' },
	{
		label: 'Saint Vincent and the Grenadines',
		value: 'Saint Vincent and the Grenadines'
	},
	{ label: 'Samoa', value: 'Samoa' },
	{ label: 'San Marino', value: 'San Marino' },
	{ label: 'Sao Tome and Principe', value: 'Sao Tome and Principe' },
	{ label: 'Saudi Arabia', value: 'Saudi Arabia' },
	{ label: 'Senegal', value: 'Senegal' },
	{ label: 'Serbia', value: 'Serbia' },
	{ label: 'Seychelles', value: 'Seychelles' },
	{ label: 'Sierra Leone', value: 'Sierra Leone' },
	{ label: 'Singapore', value: 'Singapore' },
	{ label: 'Slovakia', value: 'Slovakia' },
	{ label: 'Slovenia', value: 'Slovenia' },
	{ label: 'Solomon Islands', value: 'Solomon Islands' },
	{ label: 'Somalia', value: 'Somalia' },
	{ label: 'South Africa', value: 'South Africa' },
	{ label: 'Spain', value: 'Spain' },
	{ label: 'Sri Lanka', value: 'Sri Lanka' },
	{ label: 'Sudan', value: 'Sudan' },
	{ label: 'Sudan, South', value: 'Sudan, South' },
	{ label: 'Suriname', value: 'Suriname' },
	{ label: 'Sweden', value: 'Sweden' },
	{ label: 'Switzerland', value: 'Switzerland' },
	{ label: 'Syria', value: 'Syria' },
	{ label: 'Taiwan', value: 'Taiwan' },
	{ label: 'Tajikistan', value: 'Tajikistan' },
	{ label: 'Tanzania', value: 'Tanzania' },
	{ label: 'Thailand', value: 'Thailand' },
	{ label: 'Togo', value: 'Togo' },
	{ label: 'Tonga', value: 'Tonga' },
	{ label: 'Trinidad and Tobago', value: 'Trinidad and Tobago' },
	{ label: 'Tunisia', value: 'Tunisia' },
	{ label: 'Turkey', value: 'Turkey' },
	{ label: 'Turkmenistan', value: 'Turkmenistan' },
	{ label: 'Tuvalu', value: 'Tuvalu' },
	{ label: 'Uganda', value: 'Uganda' },
	{ label: 'Ukraine', value: 'Ukraine' },
	{ label: 'United Arab Emirates', value: 'United Arab Emirates' },
	{ label: 'United Kingdom', value: 'United Kingdom' },
	{ label: 'United States', value: 'United States' },
	{ label: 'Uruguay', value: 'Uruguay' },
	{ label: 'Uzbekistan', value: 'Uzbekistan' },
	{ label: 'Vanuatu', value: 'Vanuatu' },
	{ label: 'Vatican City', value: 'Vatican City' },
	{ label: 'Venezuela', value: 'Venezuela' },
	{ label: 'Vietnam', value: 'Vietnam' },
	{ label: 'Yemen', value: 'Yemen' },
	{ label: 'Zambia', value: 'Zambia' },
	{ label: 'Zimbabwe', value: 'Zimbabwe' }
];

export const EXPERIENCE_SKILLS = [
	'Business development',
	'Commercial',
	'Customer service',
	'Developer',
	'Finance',
	'Human resources',
	'Investment and fundraising',
	'Leadership',
	'Legal',
	'Marketing',
	'Operations',
	'Planning and strategy',
	'Product design and development',
	'Relationships and partnerships',
	'Sales',
	'Team building and management'
];

export const NUMBER_OF_STARTUPS: TOption[] = [
	{ label: 'No startups', value: 'No startups' },
	{ label: '1-5 startups', value: '1-5 startups' },
	{ label: '6-10 startups', value: '6-10 startups' },
	{ label: '10+ startups', value: '10+ startups' }
];

export const STARTUP_STATUS: TOption[] = [
	{ label: 'Exited the business', value: 'Exited the business' },
	{
		label: 'Involved part time',
		value: 'Involved part time'
	},
	{
		label: 'Involved full time',
		value: 'Involved full time'
	},
	{ label: 'Not involved in a startup', value: 'Not involved in a startup' }
];

export const AVAILABILITY_IN_HOURS: TOption[] = [
	{ label: '1-10 hours', value: '1-10 hours' },
	{ label: '11-20 hours', value: '11-20 hours' },
	{ label: '21-30 hours', value: '21-30 hours' },
	{ label: '31-40 hours', value: '31-40 hours' },
	{ label: '41+ hours', value: '41+ hours' }
];

export const REPORT_REASONS: TOption[] = [
	{
		label: 'Abusive or harmful content',
		value: 'Abusive or harmful content'
	},
	{ label: 'Sexualised content', value: 'Sexualised content' },
	{ label: 'Discrimination', value: 'Discrimination' },
	{ label: 'Hate speech', value: 'Hate speech' },
	{ label: 'Terrorism', value: 'Terrorism' },
	{ label: 'Spam', value: 'Spam' },
	{ label: 'Harrassment', value: 'Harrassment' }
];

export const ALL_IDEA_STATUSES: TOption[] = [
	{ label: 'New idea', value: 'New idea' },
	{ label: 'Building team', value: 'Building team' },
	{ label: 'Pre-launch', value: 'Pre-launch' },
	{ label: 'Launched', value: 'Launched' }
];

export const BY_IDEA_POPULARITY: TOption[] = [
	{ label: 'By most upvotes', value: 'upvotes' },
	{ label: 'By most comments', value: 'comments' }
];

export enum UserType {
	FOUNDER = 'FOUNDER',
	INVESTOR = 'INVESTOR',
	IDEAS = 'IDEAS',
	STARTUP = 'STARTUP',
	BRAINSTORM = 'BRAINSTORM'
}
