import { TIndustry } from 'src/types/idea';

export const ALL_IDEA_CATEGORY_FIELDS: TIndustry[] = [
	{ label: 'Aerospace', value: 'Aerospace' },
	{ label: 'Agriculture', value: 'Agriculture' },
	{ label: 'Clothing', value: 'Clothing' },
	{ label: 'Construction', value: 'Construction' },
	{ label: 'Crypto', value: 'Crypto' },
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

export const mobileIdeaCategoryFields = () =>
	ALL_IDEA_CATEGORY_FIELDS.map((field) => (
		<option key={field.label} value={field.label}>
			{field.label}
		</option>
	));

export const ALL_COUNTRIES = [
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

export const mobileCountriesList = () =>
	ALL_COUNTRIES.map((country) => (
		<option key={country.value} value={country.value}>
			{country.value}
		</option>
	));

// export const ALL_COUNTRIES = [
// 	'Afghanistan',
// 	'Albania',
// 	'Algeria',
// 	'Andorra',
// 	'Angola',
// 	'Antigua and Barbuda',
// 	'Argentina',
// 	'Armenia',
// 	'Australia',
// 	'Austria',
// 	'Azerbaijan',
// 	'The Bahamas',
// 	'Bahrain',
// 	'Bangladesh',
// 	'Barbados',
// 	'Belarus',
// 	'Belgium',
// 	'Belize',
// 	'Benin',
// 	'Bhutan',
// 	'Bolivia',
// 	'Bosnia and Herzegovina',
// 	'Botswana',
// 	'Brazil',
// 	'Brunei',
// 	'Bulgaria',
// 	'Burkina Faso',
// 	'Burundi',
// 	'Cabo Verde',
// 	'Cambodia',
// 	'Cameroon',
// 	'Canada',
// 	'Central African Republic',
// 	'Chad',
// 	'Chile',
// 	'China',
// 	'Colombia',
// 	'Comoros',
// 	'Congo, Democratic Republic of the',
// 	'Congo, Republic of the',
// 	'Costa Rica',
// 	'Côte d’Ivoire',
// 	'Croatia',
// 	'Cuba',
// 	'Cyprus',
// 	'Czech Republic',
// 	'Denmark',
// 	'Djibouti',
// 	'Dominica',
// 	'Dominican Republic',
// 	'East Timor (Timor-Leste)',
// 	'Ecuador',
// 	'Egypt',
// 	'El Salvador',
// 	'Equatorial Guinea',
// 	'Eritrea',
// 	'Estonia',
// 	'Eswatini',
// 	'Ethiopia',
// 	'Fiji',
// 	'Finland',
// 	'France',
// 	'Gabon',
// 	'The Gambia',
// 	'Georgia',
// 	'Germany',
// 	'Ghana',
// 	'Greece',
// 	'Grenada',
// 	'Guatemala',
// 	'Guinea',
// 	'Guinea-Bissau',
// 	'Guyana',
// 	'Haiti',
// 	'Honduras',
// 	'Hungary',
// 	'Iceland',
// 	'India',
// 	'Indonesia',
// 	'Iran',
// 	'Iraq',
// 	'Ireland',
// 	'Israel',
// 	'Italy',
// 	'Jamaica',
// 	'Japan',
// 	'Jordan',
// 	'Kazakhstan',
// 	'Kenya',
// 	'Kiribati',
// 	'Korea, North',
// 	'Korea, South',
// 	'Kosovo',
// 	'Kuwait',
// 	'Kyrgyzstan',
// 	'Laos',
// 	'Latvia',
// 	'Lebanon',
// 	'Lesotho',
// 	'Liberia',
// 	'Libya',
// 	'Liechtenstein',
// 	'Lithuania',
// 	'Luxembourg',
// 	'Madagascar',
// 	'Malawi',
// 	'Malaysia',
// 	'Maldives',
// 	'Mali',
// 	'Malta',
// 	'Marshall Islands',
// 	'Mauritania',
// 	'Mauritius',
// 	'Mexico',
// 	'Micronesia, Federated States of',
// 	'Moldova',
// 	'Monaco',
// 	'Mongolia',
// 	'Montenegro',
// 	'Morocco',
// 	'Mozambique',
// 	'Myanmar (Burma)',
// 	'Namibia',
// 	'Nauru',
// 	'Nepal',
// 	'Netherlands',
// 	'New Zealand',
// 	'Nicaragua',
// 	'Niger',
// 	'Nigeria',
// 	'North Macedonia',
// 	'Norway',
// 	'Oman',
// 	'Pakistan',
// 	'Palau',
// 	'Panama',
// 	'Papua New Guinea',
// 	'Paraguay',
// 	'Peru',
// 	'Philippines',
// 	'Poland',
// 	'Portugal',
// 	'Qatar',
// 	'Romania',
// 	'Russia',
// 	'Rwanda',
// 	'Saint Kitts and Nevis',
// 	'Saint Lucia',
// 	'Saint Vincent and the Grenadines',
// 	'Samoa',
// 	'San Marino',
// 	'Sao Tome and Principe',
// 	'Saudi Arabia',
// 	'Senegal',
// 	'Serbia',
// 	'Seychelles',
// 	'Sierra Leone',
// 	'Singapore',
// 	'Slovakia',
// 	'Slovenia',
// 	'Solomon Islands',
// 	'Somalia',
// 	'South Africa',
// 	'Spain',
// 	'Sri Lanka',
// 	'Sudan',
// 	'Sudan, South',
// 	'Suriname',
// 	'Sweden',
// 	'Switzerland',
// 	'Syria',
// 	'Taiwan',
// 	'Tajikistan',
// 	'Tanzania',
// 	'Thailand',
// 	'Togo',
// 	'Tonga',
// 	'Trinidad and Tobago',
// 	'Tunisia',
// 	'Turkey',
// 	'Turkmenistan',
// 	'Tuvalu',
// 	'Uganda',
// 	'Ukraine',
// 	'United Arab Emirates',
// 	'United Kingdom',
// 	'United States',
// 	'Uruguay',
// 	'Uzbekistan',
// 	'Vanuatu',
// 	'Vatican City',
// 	'Venezuela',
// 	'Vietnam',
// 	'Yemen',
// 	'Zambia',
// 	'Zimbabwe'
// ];

// const availabilityOptions = () => (
// 	<>
// 		<option value={10}>1 - 10 hours</option>
// 		<option value={1120}>11 - 20 hours</option>
// 		<option value={2130}>21 - 30 hours</option>
// 		<option value={3140}>31 - 40 hours</option>
// 		<option value={40}>40+ hours</option>
// 	</>
// );

// export const AVAILABILITY_OPTIONS = [
// 	{ key: 10, value: '1 - 10 hours' },
// 	{ key: 1120, value: '11 - 20 hours' },
// 	{ key: 2130, value: '21 - 30 hours' },
// 	{ key: 3140, value: '31 - 40 hours' },
// 	{ key: 40, value: '40+ hours' }
// ];

// export const AVAILABILITY_OPTIONS = [
// 	{ key: 10, value: '1 - 10 hours' },
// 	{ key: 1120, value: '11 - 20 hours' },
// 	{ key: 2130, value: '21 - 30 hours' },
// 	{ key: 3140, value: '31 - 40 hours' },
// 	{ key: 40, value: '40+ hours' }
// ];

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

export const NUMBER_OF_STARTUPS = [
	{ label: 'No startups', value: 'No startups' },
	{ label: '1-5 startups', value: '1-5 startups' },
	{ label: '6-10 startups', value: '6-10 startups' },
	{ label: '10+ startups', value: '10+ startups' }
];

export const mobileNumberOfStartups = () =>
	NUMBER_OF_STARTUPS.map((startups) => (
		<option key={startups.value} value={startups.value}>
			{startups.value}
		</option>
	));

// export const STARTUP_STATUS = [
// 	{ key: 'exited', value: 'Exited the business' },
// 	{ key: 'parttime', value: 'Still involved part time in a startup' },
// 	{ key: 'fulltime', value: 'Still involved full time in a startup' },
// 	{ key: 'none', value: 'Not involved in a startup' }
// ];

export const STARTUP_STATUS = [
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

export const mobileStartupStatuses = () =>
	STARTUP_STATUS.map((status) => (
		<option key={status.value} value={status.value}>
			{status.value}
		</option>
	));

// export const AVAILABILITY_IN_HOURS = [
// 	{ key: '0110', value: '1-10 hours', min: 1, max: 10 },
// 	{ key: '1120', value: '11-20 hours', min: 11, max: 20 },
// 	{ key: '2130', value: '21-30 hours', min: 21, max: 30 },
// 	{ key: '3140', value: '31-40 hours', min: 31, max: 40 },
// 	{ key: '41', value: '41+ hours', min: 41 }
// ];

export const AVAILABILITY_IN_HOURS = [
	{ label: '1-10 hours', value: '1-10 hours', min: 1, max: 10 },
	{ label: '11-20 hours', value: '11-20 hours', min: 11, max: 20 },
	{ label: '21-30 hours', value: '21-30 hours', min: 21, max: 30 },
	{ label: '31-40 hours', value: '31-40 hours', min: 31, max: 40 },
	{ label: '41+ hours', value: '41+ hours', min: 41 }
];

export const mobileAvailabilityOptions = () =>
	AVAILABILITY_IN_HOURS.map((availability) => (
		<option key={availability.value} value={availability.value}>
			{availability.value}
		</option>
	));

// *

export const REPORT_REASONS = [
	{
		label: 'Abusive or harmful content',
		value: 'Abusive or harmful content'
	},
	{ label: 'Sexualised content', value: 'Sexualised content' },
	{ label: 'Discrimination', value: 'Sexualised content' },
	{ label: 'Hate speech', value: 'Hate speech' },
	{ label: 'Terrorism', value: 'Hate speech' },
	{ label: 'Spam', value: 'Hate speech' },
	{ label: 'Harrassment', value: 'Hate speech' }
];

export const mobileReportOptions = () =>
	REPORT_REASONS.map((reason) => (
		<option key={reason.value} value={reason.value}>
			{reason.value}
		</option>
	));

type IdeaStatus = {
	readonly label: string;
	readonly value: string;
};

export const ALL_IDEA_STATUSES: IdeaStatus[] = [
	{ label: 'New idea', value: 'New idea' },
	{ label: 'Building team', value: 'Building team' },
	{ label: 'Pre-launch', value: 'Pre-launch' },
	{ label: 'Launched', value: 'Launched' }
];

export const mobileIdeaStatuses = () =>
	ALL_IDEA_STATUSES.map((status) => (
		<option key={status.value} value={status.value}>
			{status.value}
		</option>
	));

export enum UserType {
	FOUNDER = 'FOUNDER',
	INVESTOR = 'INVESTOR',
	IDEAS = 'IDEAS',
	STARTUP = 'STARTUP',
	BRAINSTORM = 'BRAINSTORM'
}

export enum MenuActionType {
	EDIT,
	DELETE,
	REPORT
}

// Auth

export const PASSWORD_RESET = 'passwordReset';
