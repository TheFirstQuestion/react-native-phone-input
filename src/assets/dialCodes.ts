export interface DialCode {
  name: string;
  dialCode: string;
  countryCode: string;
  icon?: any;
  latitude: number;
  longitude: number;
}

const dialCodes: DialCode[] = [
  {
    countryCode: 'US',
    dialCode: '+1',
    icon: require('./flags/US.png'),
    latitude: 38,
    longitude: -97,
    name: 'United States',
  },
  {
    countryCode: 'CA',
    dialCode: '+1',
    icon: require('./flags/CA.png'),
    latitude: 60,
    longitude: -95,
    name: 'Canada',
  },
  {
    countryCode: 'RU',
    dialCode: '+7',
    icon: require('./flags/RU.png'),
    latitude: 60,
    longitude: 100,
    name: 'Russia',
  },
  {
    countryCode: 'KZ',
    dialCode: '+7',
    icon: require('./flags/KZ.png'),
    latitude: 48,
    longitude: 68,
    name: 'Kazakhstan',
  },
  {
    countryCode: 'EG',
    dialCode: '+20',
    icon: require('./flags/EG.png'),
    latitude: 27,
    longitude: 30,
    name: 'Egypt',
  },
  {
    countryCode: 'ZA',
    dialCode: '+27',
    icon: require('./flags/ZA.png'),
    latitude: -29,
    longitude: 24,
    name: 'South Africa',
  },
  {
    countryCode: 'GR',
    dialCode: '+30',
    icon: require('./flags/GR.png'),
    latitude: 39,
    longitude: 22,
    name: 'Greece',
  },
  {
    countryCode: 'NL',
    dialCode: '+31',
    icon: require('./flags/NL.png'),
    latitude: 52.5,
    longitude: 5.75,
    name: 'Netherlands',
  },
  {
    countryCode: 'BE',
    dialCode: '+32',
    icon: require('./flags/BE.png'),
    latitude: 50.8333,
    longitude: 4,
    name: 'Belgium',
  },
  {
    countryCode: 'FR',
    dialCode: '+33',
    icon: require('./flags/FR.png'),
    latitude: 46,
    longitude: 2,
    name: 'France',
  },
  {
    countryCode: 'ES',
    dialCode: '+34',
    icon: require('./flags/ES.png'),
    latitude: 40,
    longitude: -4,
    name: 'Spain',
  },
  {
    countryCode: 'HU',
    dialCode: '+36',
    icon: require('./flags/HU.png'),
    latitude: 47,
    longitude: 20,
    name: 'Hungary',
  },
  {
    countryCode: 'IT',
    dialCode: '+39',
    icon: require('./flags/IT.png'),
    latitude: 42.8333,
    longitude: 12.8333,
    name: 'Italy',
  },
  {
    countryCode: 'RO',
    dialCode: '+40',
    icon: require('./flags/RO.png'),
    latitude: 46,
    longitude: 25,
    name: 'Romania',
  },
  {
    countryCode: 'CH',
    dialCode: '+41',
    icon: require('./flags/CH.png'),
    latitude: 47,
    longitude: 8,
    name: 'Switzerland',
  },
  {
    countryCode: 'AT',
    dialCode: '+43',
    icon: require('./flags/AT.png'),
    latitude: 47.3333,
    longitude: 13.3333,
    name: 'Austria',
  },
  {
    countryCode: 'GB',
    dialCode: '+44',
    icon: require('./flags/GB.png'),
    latitude: 54,
    longitude: -2,
    name: 'United Kingdom',
  },
  {
    countryCode: 'JE',
    dialCode: '+44',
    icon: require('./flags/JE.png'),
    latitude: 49.21,
    longitude: -2.13,
    name: 'Jersey',
  },
  {
    countryCode: 'IM',
    dialCode: '+44',
    icon: require('./flags/IM.png'),
    latitude: 54.23,
    longitude: -4.55,
    name: 'Isle of Man',
  },
  {
    countryCode: 'GG',
    dialCode: '+44',
    icon: require('./flags/GG.png'),
    latitude: 49.5,
    longitude: -2.56,
    name: 'Guernsey',
  },
  {
    countryCode: 'DK',
    dialCode: '+45',
    icon: require('./flags/DK.png'),
    latitude: 56,
    longitude: 10,
    name: 'Denmark',
  },
  {
    countryCode: 'SE',
    dialCode: '+46',
    icon: require('./flags/SE.png'),
    latitude: 62,
    longitude: 15,
    name: 'Sweden',
  },
  {
    countryCode: 'NO',
    dialCode: '+47',
    icon: require('./flags/NO.png'),
    latitude: 62,
    longitude: 10,
    name: 'Norway',
  },
  {
    countryCode: 'PL',
    dialCode: '+48',
    icon: require('./flags/PL.png'),
    latitude: 52,
    longitude: 20,
    name: 'Poland',
  },
  {
    countryCode: 'DE',
    dialCode: '+49',
    icon: require('./flags/DE.png'),
    latitude: 51,
    longitude: 9,
    name: 'Germany',
  },
  {
    countryCode: 'PE',
    dialCode: '+51',
    icon: require('./flags/PE.png'),
    latitude: -10,
    longitude: -76,
    name: 'Peru',
  },
  {
    countryCode: 'MX',
    dialCode: '+52',
    icon: require('./flags/MX.png'),
    latitude: 23,
    longitude: -102,
    name: 'Mexico',
  },
  {
    countryCode: 'CU',
    dialCode: '+53',
    icon: require('./flags/CU.png'),
    latitude: 21.5,
    longitude: -80,
    name: 'Cuba',
  },
  {
    countryCode: 'AR',
    dialCode: '+54',
    icon: require('./flags/AR.png'),
    latitude: -34,
    longitude: -64,
    name: 'Argentina',
  },
  {
    countryCode: 'BR',
    dialCode: '+55',
    icon: require('./flags/BR.png'),
    latitude: -10,
    longitude: -55,
    name: 'Brazil',
  },
  {
    countryCode: 'CL',
    dialCode: '+56',
    icon: require('./flags/CL.png'),
    latitude: -30,
    longitude: -71,
    name: 'Chile',
  },
  {
    countryCode: 'CO',
    dialCode: '+57',
    icon: require('./flags/CO.png'),
    latitude: 4,
    longitude: -72,
    name: 'Colombia',
  },
  {
    countryCode: 'VE',
    dialCode: '+58',
    icon: require('./flags/VE.png'),
    latitude: 8,
    longitude: -66,
    name: 'Venezuela, Bolivarian Republic of',
  },
  {
    countryCode: 'MY',
    dialCode: '+60',
    icon: require('./flags/MY.png'),
    latitude: 2.5,
    longitude: 112.5,
    name: 'Malaysia',
  },
  // {
  //     countryCode: 'CC',
  //     dialCode: '+61',
  //     icon: require('./flags/CC.png'),
  //     latitude: -12.5,
  //     longitude: 96.8333,
  //     name: 'Cocos (Keeling) Islands',
  // },
  // {
  //     countryCode: 'CX',
  //     dialCode: '+61',
  //     icon: require('./flags/CX.png'),
  //     latitude: -10.5,
  //     longitude: 105.6667,
  //     name: 'Christmas Island',
  // },
  {
    countryCode: 'AU',
    dialCode: '+61',
    icon: require('./flags/AU.png'),
    latitude: -27,
    longitude: 133,
    name: 'Australia',
  },
  {
    countryCode: 'ID',
    dialCode: '+62',
    icon: require('./flags/ID.png'),
    latitude: -5,
    longitude: 120,
    name: 'Indonesia',
  },
  {
    countryCode: 'PH',
    dialCode: '+63',
    icon: require('./flags/PH.png'),
    latitude: 13,
    longitude: 122,
    name: 'Philippines',
  },
  {
    countryCode: 'NZ',
    dialCode: '+64',
    icon: require('./flags/NZ.png'),
    latitude: -41,
    longitude: 174,
    name: 'New Zealand',
  },
  {
    countryCode: 'SG',
    dialCode: '+65',
    icon: require('./flags/SG.png'),
    latitude: 1.3667,
    longitude: 103.8,
    name: 'Singapore',
  },
  {
    countryCode: 'TH',
    dialCode: '+66',
    icon: require('./flags/TH.png'),
    latitude: 15,
    longitude: 100,
    name: 'Thailand',
  },
  {
    countryCode: 'JP',
    dialCode: '+81',
    icon: require('./flags/JP.png'),
    latitude: 36,
    longitude: 138,
    name: 'Japan',
  },
  {
    countryCode: 'KR',
    dialCode: '+82',
    icon: require('./flags/KR.png'),
    latitude: 37,
    longitude: 127.5,
    name: 'Korea, Republic of',
  },
  {
    countryCode: 'VN',
    dialCode: '+84',
    icon: require('./flags/VN.png'),
    latitude: 16,
    longitude: 106,
    name: 'Viet Nam',
  },
  {
    countryCode: 'CN',
    dialCode: '+86',
    icon: require('./flags/CN.png'),
    latitude: 35,
    longitude: 105,
    name: 'China',
  },
  {
    countryCode: 'TR',
    dialCode: '+90',
    icon: require('./flags/TR.png'),
    latitude: 39,
    longitude: 35,
    name: 'Turkey',
  },
  {
    countryCode: 'IN',
    dialCode: '+91',
    icon: require('./flags/IN.png'),
    latitude: 20,
    longitude: 77,
    name: 'India',
  },
  {
    countryCode: 'PK',
    dialCode: '+92',
    icon: require('./flags/PK.png'),
    latitude: 30,
    longitude: 70,
    name: 'Pakistan',
  },
  {
    countryCode: 'AF',
    dialCode: '+93',
    icon: require('./flags/AF.png'),
    latitude: 33,
    longitude: 65,
    name: 'Afghanistan',
  },
  {
    countryCode: 'LK',
    dialCode: '+94',
    icon: require('./flags/LK.png'),
    latitude: 7,
    longitude: 81,
    name: 'Sri Lanka',
  },
  {
    countryCode: 'MM',
    dialCode: '+95',
    icon: require('./flags/MM.png'),
    latitude: 22,
    longitude: 98,
    name: 'Myanmar',
  },
  {
    countryCode: 'IR',
    dialCode: '+98',
    icon: require('./flags/IR.png'),
    latitude: 32,
    longitude: 53,
    name: 'Iran, Islamic Republic of',
  },
  {
    countryCode: 'MA',
    dialCode: '+212',
    icon: require('./flags/MA.png'),
    latitude: 32,
    longitude: -5,
    name: 'Morocco',
  },
  {
    countryCode: 'DZ',
    dialCode: '+213',
    icon: require('./flags/DZ.png'),
    latitude: 28,
    longitude: 3,
    name: 'Algeria',
  },
  {
    countryCode: 'TN',
    dialCode: '+216',
    icon: require('./flags/TN.png'),
    latitude: 34,
    longitude: 9,
    name: 'Tunisia',
  },
  {
    countryCode: 'LY',
    dialCode: '+218',
    icon: require('./flags/LY.png'),
    latitude: 25,
    longitude: 17,
    name: 'Libyan Arab Jamahiriya',
  },
  {
    countryCode: 'GM',
    dialCode: '+220',
    icon: require('./flags/GM.png'),
    latitude: 13.4667,
    longitude: -16.5667,
    name: 'Gambia',
  },
  {
    countryCode: 'SN',
    dialCode: '+221',
    icon: require('./flags/SN.png'),
    latitude: 14,
    longitude: -14,
    name: 'Senegal',
  },
  {
    countryCode: 'MR',
    dialCode: '+222',
    icon: require('./flags/MR.png'),
    latitude: 20,
    longitude: -12,
    name: 'Mauritania',
  },
  {
    countryCode: 'ML',
    dialCode: '+223',
    icon: require('./flags/ML.png'),
    latitude: 17,
    longitude: -4,
    name: 'Mali',
  },
  {
    countryCode: 'GN',
    dialCode: '+224',
    icon: require('./flags/GN.png'),
    latitude: 11,
    longitude: -10,
    name: 'Guinea',
  },
  {
    countryCode: 'CI',
    dialCode: '+225',
    icon: require('./flags/CI.png'),
    latitude: 8,
    longitude: -5,
    name: "Cote d'Ivoire",
  },
  {
    countryCode: 'BF',
    dialCode: '+226',
    icon: require('./flags/BF.png'),
    latitude: 13,
    longitude: -2,
    name: 'Burkina Faso',
  },
  {
    countryCode: 'NE',
    dialCode: '+227',
    icon: require('./flags/NE.png'),
    latitude: 16,
    longitude: 8,
    name: 'Niger',
  },
  {
    countryCode: 'TG',
    dialCode: '+228',
    icon: require('./flags/TG.png'),
    latitude: 8,
    longitude: 1.1667,
    name: 'Togo',
  },
  {
    countryCode: 'BJ',
    dialCode: '+229',
    icon: require('./flags/BJ.png'),
    latitude: 9.5,
    longitude: 2.25,
    name: 'Benin',
  },
  {
    countryCode: 'MU',
    dialCode: '+230',
    icon: require('./flags/MU.png'),
    latitude: -20.2833,
    longitude: 57.55,
    name: 'Mauritius',
  },
  {
    countryCode: 'LR',
    dialCode: '+231',
    icon: require('./flags/LR.png'),
    latitude: 6.5,
    longitude: -9.5,
    name: 'Liberia',
  },
  {
    countryCode: 'SL',
    dialCode: '+232',
    icon: require('./flags/SL.png'),
    latitude: 8.5,
    longitude: -11.5,
    name: 'Sierra Leone',
  },
  {
    countryCode: 'GH',
    dialCode: '+233',
    icon: require('./flags/GH.png'),
    latitude: 8,
    longitude: -2,
    name: 'Ghana',
  },
  {
    countryCode: 'NG',
    dialCode: '+234',
    icon: require('./flags/NG.png'),
    latitude: 10,
    longitude: 8,
    name: 'Nigeria',
  },
  {
    countryCode: 'TD',
    dialCode: '+235',
    icon: require('./flags/TD.png'),
    latitude: 15,
    longitude: 19,
    name: 'Chad',
  },
  {
    countryCode: 'CF',
    dialCode: '+236',
    icon: require('./flags/CF.png'),
    latitude: 7,
    longitude: 21,
    name: 'Central African Republic',
  },
  {
    countryCode: 'CM',
    dialCode: '+237',
    icon: require('./flags/CM.png'),
    latitude: 6,
    longitude: 12,
    name: 'Cameroon',
  },
  {
    countryCode: 'CV',
    dialCode: '+238',
    icon: require('./flags/CV.png'),
    latitude: 16,
    longitude: -24,
    name: 'Cape Verde',
  },
  {
    countryCode: 'ST',
    dialCode: '+239',
    icon: require('./flags/ST.png'),
    latitude: 1,
    longitude: 7,
    name: 'Sao Tome and Principe',
  },
  {
    countryCode: 'GQ',
    dialCode: '+240',
    icon: require('./flags/GQ.png'),
    latitude: 2,
    longitude: 10,
    name: 'Equatorial Guinea',
  },
  {
    countryCode: 'GA',
    dialCode: '+241',
    icon: require('./flags/GA.png'),
    latitude: -1,
    longitude: 11.75,
    name: 'Gabon',
  },
  {
    countryCode: 'CG',
    dialCode: '+242',
    icon: require('./flags/CG.png'),
    latitude: -1,
    longitude: 15,
    name: 'Congo',
  },
  {
    countryCode: 'CD',
    dialCode: '+243',
    icon: require('./flags/CD.png'),
    latitude: 0,
    longitude: 25,
    name: 'Congo, The Democratic Republic of the',
  },
  {
    countryCode: 'AO',
    dialCode: '+244',
    icon: require('./flags/AO.png'),
    latitude: -12.5,
    longitude: 18.5,
    name: 'Angola',
  },
  {
    countryCode: 'GW',
    dialCode: '+245',
    icon: require('./flags/GW.png'),
    latitude: 12,
    longitude: -15,
    name: 'Guinea-Bissau',
  },
  /*{
        countryCode: 'IO',
        dialCode: '+246',
        icon: require('./flags/IO.png'),
        latitude: -6,
        longitude: 71.5,
        name: 'British Indian Ocean Territory',
    },*/
  {
    countryCode: 'SC',
    dialCode: '+248',
    icon: require('./flags/SC.png'),
    latitude: -4.5833,
    longitude: 55.6667,
    name: 'Seychelles',
  },
  {
    countryCode: 'SD',
    dialCode: '+249',
    icon: require('./flags/SD.png'),
    latitude: 15,
    longitude: 30,
    name: 'Sudan',
  },
  {
    countryCode: 'RW',
    dialCode: '+250',
    icon: require('./flags/RW.png'),
    latitude: -2,
    longitude: 30,
    name: 'Rwanda',
  },
  {
    countryCode: 'ET',
    dialCode: '+251',
    icon: require('./flags/ET.png'),
    latitude: 8,
    longitude: 38,
    name: 'Ethiopia',
  },
  {
    countryCode: 'SO',
    dialCode: '+252',
    icon: require('./flags/SO.png'),
    latitude: 10,
    longitude: 49,
    name: 'Somalia',
  },
  {
    countryCode: 'DJ',
    dialCode: '+253',
    icon: require('./flags/DJ.png'),
    latitude: 11.5,
    longitude: 43,
    name: 'Djibouti',
  },
  {
    countryCode: 'KE',
    dialCode: '+254',
    icon: require('./flags/KE.png'),
    latitude: 1,
    longitude: 38,
    name: 'Kenya',
  },
  {
    countryCode: 'TZ',
    dialCode: '+255',
    icon: require('./flags/TZ.png'),
    latitude: -6,
    longitude: 35,
    name: 'Tanzania, United Republic of',
  },
  {
    countryCode: 'UG',
    dialCode: '+256',
    icon: require('./flags/UG.png'),
    latitude: 1,
    longitude: 32,
    name: 'Uganda',
  },
  {
    countryCode: 'BI',
    dialCode: '+257',
    icon: require('./flags/BI.png'),
    latitude: -3.5,
    longitude: 30,
    name: 'Burundi',
  },
  {
    countryCode: 'MZ',
    dialCode: '+258',
    icon: require('./flags/MZ.png'),
    latitude: -18.25,
    longitude: 35,
    name: 'Mozambique',
  },
  {
    countryCode: 'ZM',
    dialCode: '+260',
    icon: require('./flags/ZM.png'),
    latitude: -15,
    longitude: 30,
    name: 'Zambia',
  },
  {
    countryCode: 'MG',
    dialCode: '+261',
    icon: require('./flags/MG.png'),
    latitude: -20,
    longitude: 47,
    name: 'Madagascar',
  },
  {
    countryCode: 'RE',
    dialCode: '+262',
    icon: require('./flags/RE.png'),
    latitude: -21.1,
    longitude: 55.6,
    name: 'Réunion',
  },
  {
    countryCode: 'YT',
    dialCode: '+262',
    icon: require('./flags/YT.png'),
    latitude: -12.8333,
    longitude: 45.1667,
    name: 'Mayotte',
  },
  {
    countryCode: 'TF',
    dialCode: '+262',
    icon: require('./flags/TF.png'),
    latitude: -43,
    longitude: 67,
    name: 'French Southern and Antarctic Lands',
  },
  {
    countryCode: 'ZW',
    dialCode: '+263',
    icon: require('./flags/ZW.png'),
    latitude: -20,
    longitude: 30,
    name: 'Zimbabwe',
  },
  {
    countryCode: 'NA',
    dialCode: '+264',
    icon: require('./flags/NA.png'),
    latitude: -22,
    longitude: 17,
    name: 'Namibia',
  },
  {
    countryCode: 'MW',
    dialCode: '+265',
    icon: require('./flags/MW.png'),
    latitude: -13.5,
    longitude: 34,
    name: 'Malawi',
  },
  {
    countryCode: 'LS',
    dialCode: '+266',
    icon: require('./flags/LS.png'),
    latitude: -29.5,
    longitude: 28.5,
    name: 'Lesotho',
  },
  {
    countryCode: 'BW',
    dialCode: '+267',
    icon: require('./flags/BW.png'),
    latitude: -22,
    longitude: 24,
    name: 'Botswana',
  },
  {
    countryCode: 'SZ',
    dialCode: '+268',
    icon: require('./flags/SZ.png'),
    latitude: -26.5,
    longitude: 31.5,
    name: 'Swaziland',
  },
  {
    countryCode: 'KM',
    dialCode: '+269',
    icon: require('./flags/KM.png'),
    latitude: -12.1667,
    longitude: 44.25,
    name: 'Comoros',
  },
  {
    countryCode: 'SH',
    dialCode: '+290',
    icon: require('./flags/SH.png'),
    latitude: -15.9333,
    longitude: -5.7,
    name: 'Saint Helena, Ascension and Tristan Da Cunha',
  },
  {
    countryCode: 'ER',
    dialCode: '+291',
    icon: require('./flags/ER.png'),
    latitude: 15,
    longitude: 39,
    name: 'Eritrea',
  },
  {
    countryCode: 'AW',
    dialCode: '+297',
    icon: require('./flags/AW.png'),
    latitude: 12.5,
    longitude: -69.9667,
    name: 'Aruba',
  },
  {
    countryCode: 'FO',
    dialCode: '+298',
    icon: require('./flags/FO.png'),
    latitude: 62,
    longitude: -7,
    name: 'Faroe Islands',
  },
  {
    countryCode: 'GL',
    dialCode: '+299',
    icon: require('./flags/GL.png'),
    latitude: 72,
    longitude: -40,
    name: 'Greenland',
  },
  {
    countryCode: 'GI',
    dialCode: '+350',
    icon: require('./flags/GI.png'),
    latitude: 36.1833,
    longitude: -5.3667,
    name: 'Gibraltar',
  },
  {
    countryCode: 'PT',
    dialCode: '+351',
    icon: require('./flags/PT.png'),
    latitude: 39.5,
    longitude: -8,
    name: 'Portugal',
  },
  {
    countryCode: 'LU',
    dialCode: '+352',
    icon: require('./flags/LU.png'),
    latitude: 49.75,
    longitude: 6.1667,
    name: 'Luxembourg',
  },
  {
    countryCode: 'IE',
    dialCode: '+353',
    icon: require('./flags/IE.png'),
    latitude: 53,
    longitude: -8,
    name: 'Ireland',
  },
  {
    countryCode: 'IS',
    dialCode: '+354',
    icon: require('./flags/IS.png'),
    latitude: 65,
    longitude: -18,
    name: 'Iceland',
  },
  {
    countryCode: 'AL',
    dialCode: '+355',
    icon: require('./flags/AL.png'),
    latitude: 41,
    longitude: 20,
    name: 'Albania',
  },
  {
    countryCode: 'MT',
    dialCode: '+356',
    icon: require('./flags/MT.png'),
    latitude: 35.8333,
    longitude: 14.5833,
    name: 'Malta',
  },
  {
    countryCode: 'CY',
    dialCode: '+357',
    icon: require('./flags/CY.png'),
    latitude: 35,
    longitude: 33,
    name: 'Cyprus',
  },
  {
    countryCode: 'FI',
    dialCode: '+358',
    icon: require('./flags/FI.png'),
    latitude: 64,
    longitude: 26,
    name: 'Finland',
  },
  {
    countryCode: 'BG',
    dialCode: '+359',
    icon: require('./flags/BG.png'),
    latitude: 43,
    longitude: 25,
    name: 'Bulgaria',
  },
  {
    countryCode: 'LT',
    dialCode: '+370',
    icon: require('./flags/LT.png'),
    latitude: 56,
    longitude: 24,
    name: 'Lithuania',
  },
  {
    countryCode: 'LV',
    dialCode: '+371',
    icon: require('./flags/LV.png'),
    latitude: 57,
    longitude: 25,
    name: 'Latvia',
  },
  {
    countryCode: 'EE',
    dialCode: '+372',
    icon: require('./flags/EE.png'),
    latitude: 59,
    longitude: 26,
    name: 'Estonia',
  },
  {
    countryCode: 'MD',
    dialCode: '+373',
    icon: require('./flags/MD.png'),
    latitude: 47,
    longitude: 29,
    name: 'Moldova, Republic of',
  },
  {
    countryCode: 'AM',
    dialCode: '+374',
    icon: require('./flags/AM.png'),
    latitude: 40,
    longitude: 45,
    name: 'Armenia',
  },
  {
    countryCode: 'BY',
    dialCode: '+375',
    icon: require('./flags/BY.png'),
    latitude: 53,
    longitude: 28,
    name: 'Belarus',
  },
  {
    countryCode: 'AD',
    dialCode: '+376',
    icon: require('./flags/AD.png'),
    latitude: 42.5,
    longitude: 1.6,
    name: 'Andorra',
  },
  {
    countryCode: 'MC',
    dialCode: '+377',
    icon: require('./flags/MC.png'),
    latitude: 43.7333,
    longitude: 7.4,
    name: 'Monaco',
  },
  {
    countryCode: 'SM',
    dialCode: '+378',
    icon: require('./flags/SM.png'),
    latitude: 43.7667,
    longitude: 12.4167,
    name: 'San Marino',
  },
  {
    countryCode: 'VA',
    dialCode: '+379',
    icon: require('./flags/VA.png'),
    latitude: 41.9,
    longitude: 12.45,
    name: 'Holy See (Vatican City State)',
  },
  {
    countryCode: 'UA',
    dialCode: '+380',
    icon: require('./flags/UA.png'),
    latitude: 49,
    longitude: 32,
    name: 'Ukraine',
  },
  {
    countryCode: 'RS',
    dialCode: '+381',
    icon: require('./flags/RS.png'),
    latitude: 44,
    longitude: 21,
    name: 'Serbia',
  },
  {
    countryCode: 'ME',
    dialCode: '+382',
    icon: require('./flags/ME.png'),
    latitude: 42,
    longitude: 19,
    name: 'Montenegro',
  },
  {
    countryCode: 'XK',
    dialCode: '+383',
    icon: require('./flags/XK.png'),
    latitude: 42.67,
    longitude: 21.17,
    name: 'Kosovo, Republic of',
  },
  {
    countryCode: 'HR',
    dialCode: '+385',
    icon: require('./flags/HR.png'),
    latitude: 45.1667,
    longitude: 15.5,
    name: 'Croatia',
  },
  {
    countryCode: 'SI',
    dialCode: '+386',
    icon: require('./flags/SI.png'),
    latitude: 46,
    longitude: 15,
    name: 'Slovenia',
  },
  {
    countryCode: 'BA',
    dialCode: '+387',
    icon: require('./flags/BA.png'),
    latitude: 44,
    longitude: 18,
    name: 'Bosnia and Herzegovina',
  },
  {
    countryCode: 'MK',
    dialCode: '+389',
    icon: require('./flags/MK.png'),
    latitude: 41.8333,
    longitude: 22,
    name: 'Macedonia, The Former Yugoslav Republic of',
  },
  {
    countryCode: 'CZ',
    dialCode: '+420',
    icon: require('./flags/CZ.png'),
    latitude: 49.75,
    longitude: 15.5,
    name: 'Czech Republic',
  },
  {
    countryCode: 'SK',
    dialCode: '+421',
    icon: require('./flags/SK.png'),
    latitude: 48.6667,
    longitude: 19.5,
    name: 'Slovakia',
  },
  {
    countryCode: 'LI',
    dialCode: '+423',
    icon: require('./flags/LI.png'),
    latitude: 47.1667,
    longitude: 9.5333,
    name: 'Liechtenstein',
  },
  {
    countryCode: 'GS',
    dialCode: '+500',
    icon: require('./flags/GS.png'),
    latitude: -54.5,
    longitude: -37,
    name: 'South Georgia and the South Sandwich Islands',
  },
  {
    countryCode: 'FK',
    dialCode: '+500',
    icon: require('./flags/FK.png'),
    latitude: -51.75,
    longitude: -59,
    name: 'Falkland Islands (Malvinas)',
  },
  {
    countryCode: 'BZ',
    dialCode: '+501',
    icon: require('./flags/BZ.png'),
    latitude: 17.25,
    longitude: -88.75,
    name: 'Belize',
  },
  {
    countryCode: 'GT',
    dialCode: '+502',
    icon: require('./flags/GT.png'),
    latitude: 15.5,
    longitude: -90.25,
    name: 'Guatemala',
  },
  {
    countryCode: 'SV',
    dialCode: '+503',
    icon: require('./flags/SV.png'),
    latitude: 13.8333,
    longitude: -88.9167,
    name: 'El Salvador',
  },
  {
    countryCode: 'HN',
    dialCode: '+504',
    icon: require('./flags/HN.png'),
    latitude: 15,
    longitude: -86.5,
    name: 'Honduras',
  },
  {
    countryCode: 'NI',
    dialCode: '+505',
    icon: require('./flags/NI.png'),
    latitude: 13,
    longitude: -85,
    name: 'Nicaragua',
  },
  {
    countryCode: 'CR',
    dialCode: '+506',
    icon: require('./flags/CR.png'),
    latitude: 10,
    longitude: -84,
    name: 'Costa Rica',
  },
  {
    countryCode: 'PA',
    dialCode: '+507',
    icon: require('./flags/PA.png'),
    latitude: 9,
    longitude: -80,
    name: 'Panama',
  },
  /*{
        countryCode: 'PM',
        dialCode: '+508',
        icon: require('./flags/PM.png'),
        latitude: 46.8333,
        longitude: -56.3333,
        name: 'Saint Pierre and Miquelon',
    },*/
  {
    countryCode: 'HT',
    dialCode: '+509',
    icon: require('./flags/HT.png'),
    latitude: 19,
    longitude: -72.4167,
    name: 'Haiti',
  },
  {
    countryCode: 'GP',
    dialCode: '+590',
    icon: require('./flags/GP.png'),
    latitude: 16.25,
    longitude: -61.5833,
    name: 'Guadeloupe',
  },
  {
    countryCode: 'BO',
    dialCode: '+591',
    icon: require('./flags/BO.png'),
    latitude: -17,
    longitude: -65,
    name: 'Bolivia, Plurinational State of Bolivia',
  },
  {
    countryCode: 'GY',
    dialCode: '+592',
    icon: require('./flags/GY.png'),
    latitude: 5,
    longitude: -59,
    name: 'Guyana',
  },
  {
    countryCode: 'EC',
    dialCode: '+593',
    icon: require('./flags/EC.png'),
    latitude: -2,
    longitude: -77.5,
    name: 'Ecuador',
  },
  {
    countryCode: 'GF',
    dialCode: '+594',
    icon: require('./flags/GF.png'),
    latitude: 4,
    longitude: -53,
    name: 'French Guiana',
  },
  {
    countryCode: 'PY',
    dialCode: '+595',
    icon: require('./flags/PY.png'),
    latitude: -23,
    longitude: -58,
    name: 'Paraguay',
  },
  {
    countryCode: 'MQ',
    dialCode: '+596',
    icon: require('./flags/MQ.png'),
    latitude: 14.6667,
    longitude: -61,
    name: 'Martinique',
  },
  {
    countryCode: 'SR',
    dialCode: '+597',
    icon: require('./flags/SR.png'),
    latitude: 4,
    longitude: -56,
    name: 'Suriname',
  },
  {
    countryCode: 'UY',
    dialCode: '+598',
    icon: require('./flags/UY.png'),
    latitude: -33,
    longitude: -56,
    name: 'Uruguay',
  },
  {
    countryCode: 'AN',
    dialCode: '+599',
    icon: require('./flags/AN.png'),
    latitude: 12.25,
    longitude: -68.75,
    name: 'Netherlands Antilles',
  },
  {
    countryCode: 'TL',
    dialCode: '+670',
    icon: require('./flags/TL.png'),
    latitude: -8.55,
    longitude: 125.5167,
    name: 'Timor-Leste',
  },
  {
    countryCode: 'NF',
    dialCode: '+672',
    icon: require('./flags/NF.png'),
    latitude: -29.0333,
    longitude: 167.95,
    name: 'Norfolk Island',
  },
  /*{
        countryCode: 'HM',
        dialCode: '+672',
        icon: require('./flags/HM.png'),
        latitude: -53.1,
        longitude: 72.5167,
        name: 'Heard Island and McDonald Islands',
    },*/
  {
    countryCode: 'AQ',
    dialCode: '+672',
    icon: require('./flags/AQ.png'),
    latitude: -90,
    longitude: 0,
    name: 'Antarctica',
  },
  {
    countryCode: 'BN',
    dialCode: '+673',
    icon: require('./flags/BN.png'),
    latitude: 4.5,
    longitude: 114.6667,
    name: 'Brunei Darussalam',
  },
  {
    countryCode: 'NR',
    dialCode: '+674',
    icon: require('./flags/NR.png'),
    latitude: -0.5333,
    longitude: 166.9167,
    name: 'Nauru',
  },
  {
    countryCode: 'PG',
    dialCode: '+675',
    icon: require('./flags/PG.png'),
    latitude: -6,
    longitude: 147,
    name: 'Papua New Guinea',
  },
  {
    countryCode: 'TO',
    dialCode: '+676',
    icon: require('./flags/TO.png'),
    latitude: -20,
    longitude: -175,
    name: 'Tonga',
  },
  {
    countryCode: 'SB',
    dialCode: '+677',
    icon: require('./flags/SB.png'),
    latitude: -8,
    longitude: 159,
    name: 'Solomon Islands',
  },
  {
    countryCode: 'VU',
    dialCode: '+678',
    icon: require('./flags/VU.png'),
    latitude: -16,
    longitude: 167,
    name: 'Vanuatu',
  },
  {
    countryCode: 'FJ',
    dialCode: '+679',
    icon: require('./flags/FJ.png'),
    latitude: -18,
    longitude: 175,
    name: 'Fiji',
  },
  {
    countryCode: 'PW',
    dialCode: '+680',
    icon: require('./flags/PW.png'),
    latitude: 7.5,
    longitude: 134.5,
    name: 'Palau',
  },
  {
    countryCode: 'WF',
    dialCode: '+681',
    icon: require('./flags/WF.png'),
    latitude: -13.3,
    longitude: -176.2,
    name: 'Wallis and Futuna',
  },
  {
    countryCode: 'CK',
    dialCode: '+682',
    icon: require('./flags/CK.png'),
    latitude: -21.2333,
    longitude: -159.7667,
    name: 'Cook Islands',
  },
  {
    countryCode: 'NU',
    dialCode: '+683',
    icon: require('./flags/NU.png'),
    latitude: -19.0333,
    longitude: -169.8667,
    name: 'Niue',
  },
  {
    countryCode: 'WS',
    dialCode: '+685',
    icon: require('./flags/WS.png'),
    latitude: -13.5833,
    longitude: -172.3333,
    name: 'Samoa',
  },
  {
    countryCode: 'KI',
    dialCode: '+686',
    icon: require('./flags/KI.png'),
    latitude: 1.4167,
    longitude: 173,
    name: 'Kiribati',
  },
  {
    countryCode: 'NC',
    dialCode: '+687',
    icon: require('./flags/NC.png'),
    latitude: -21.5,
    longitude: 165.5,
    name: 'New Caledonia',
  },
  {
    countryCode: 'TV',
    dialCode: '+688',
    icon: require('./flags/TV.png'),
    latitude: -8,
    longitude: 178,
    name: 'Tuvalu',
  },
  {
    countryCode: 'PF',
    dialCode: '+689',
    icon: require('./flags/PF.png'),
    latitude: -15,
    longitude: -140,
    name: 'French Polynesia',
  },
  {
    countryCode: 'TK',
    dialCode: '+690',
    icon: require('./flags/TK.png'),
    latitude: -9,
    longitude: -172,
    name: 'Tokelau',
  },
  {
    countryCode: 'FM',
    dialCode: '+691',
    icon: require('./flags/FM.png'),
    latitude: 6.9167,
    longitude: 158.25,
    name: 'Micronesia, Federated States of',
  },
  {
    countryCode: 'MH',
    dialCode: '+692',
    icon: require('./flags/MH.png'),
    latitude: 9,
    longitude: 168,
    name: 'Marshall Islands',
  },
  {
    countryCode: 'EH',
    dialCode: '+732',
    icon: require('./flags/EH.png'),
    latitude: 24.5,
    longitude: -13,
    name: 'Western Sahara',
  },
  {
    countryCode: 'KP',
    dialCode: '+850',
    icon: require('./flags/KP.png'),
    latitude: 40,
    longitude: 127,
    name: "Korea, Democratic People's Republic of",
  },
  {
    countryCode: 'HK',
    dialCode: '+852',
    icon: require('./flags/HK.png'),
    latitude: 22.25,
    longitude: 114.1667,
    name: 'Hong Kong',
  },
  {
    countryCode: 'MO',
    dialCode: '+853',
    icon: require('./flags/MO.png'),
    latitude: 22.1667,
    longitude: 113.55,
    name: 'Macao',
  },
  {
    countryCode: 'KH',
    dialCode: '+855',
    icon: require('./flags/KH.png'),
    latitude: 13,
    longitude: 105,
    name: 'Cambodia',
  },
  {
    countryCode: 'LA',
    dialCode: '+856',
    icon: require('./flags/LA.png'),
    latitude: 18,
    longitude: 105,
    name: "Lao People's Democratic Republic",
  },
  {
    countryCode: 'PN',
    dialCode: '+870',
    icon: require('./flags/PN.png'),
    latitude: -24.7,
    longitude: -127.4,
    name: 'Pitcairn',
  },
  {
    countryCode: 'BD',
    dialCode: '+880',
    icon: require('./flags/BD.png'),
    latitude: 24,
    longitude: 90,
    name: 'Bangladesh',
  },
  {
    countryCode: 'TW',
    dialCode: '+886',
    icon: require('./flags/TW.png'),
    latitude: 23.5,
    longitude: 121,
    name: 'Taiwan',
  },
  {
    countryCode: 'MV',
    dialCode: '+960',
    icon: require('./flags/MV.png'),
    latitude: 3.25,
    longitude: 73,
    name: 'Maldives',
  },
  {
    countryCode: 'LB',
    dialCode: '+961',
    icon: require('./flags/LB.png'),
    latitude: 33.8333,
    longitude: 35.8333,
    name: 'Lebanon',
  },
  {
    countryCode: 'JO',
    dialCode: '+962',
    icon: require('./flags/JO.png'),
    latitude: 31,
    longitude: 36,
    name: 'Jordan',
  },
  {
    countryCode: 'SY',
    dialCode: '+963',
    icon: require('./flags/SY.png'),
    latitude: 35,
    longitude: 38,
    name: 'Syrian Arab Republic',
  },
  {
    countryCode: 'IQ',
    dialCode: '+964',
    icon: require('./flags/IQ.png'),
    latitude: 33,
    longitude: 44,
    name: 'Iraq',
  },
  {
    countryCode: 'KW',
    dialCode: '+965',
    icon: require('./flags/KW.png'),
    latitude: 29.3375,
    longitude: 47.6581,
    name: 'Kuwait',
  },
  {
    countryCode: 'SA',
    dialCode: '+966',
    icon: require('./flags/SA.png'),
    latitude: 25,
    longitude: 45,
    name: 'Saudi Arabia',
  },
  {
    countryCode: 'YE',
    dialCode: '+967',
    icon: require('./flags/YE.png'),
    latitude: 15,
    longitude: 48,
    name: 'Yemen',
  },
  {
    countryCode: 'OM',
    dialCode: '+968',
    icon: require('./flags/OM.png'),
    latitude: 21,
    longitude: 57,
    name: 'Oman',
  },
  {
    countryCode: 'PS',
    dialCode: '+970',
    icon: require('./flags/PS.png'),
    latitude: 32,
    longitude: 35.25,
    name: 'Palestinian Territory, Occupied',
  },
  {
    countryCode: 'AE',
    dialCode: '+971',
    icon: require('./flags/AE.png'),
    latitude: 24,
    longitude: 54,
    name: 'United Arab Emirates',
  },
  {
    countryCode: 'IL',
    dialCode: '+972',
    icon: require('./flags/IL.png'),
    latitude: 31.5,
    longitude: 34.75,
    name: 'Israel',
  },
  {
    countryCode: 'BH',
    dialCode: '+973',
    icon: require('./flags/BH.png'),
    latitude: 26,
    longitude: 50.55,
    name: 'Bahrain',
  },
  {
    countryCode: 'QA',
    dialCode: '+974',
    icon: require('./flags/QA.png'),
    latitude: 25.5,
    longitude: 51.25,
    name: 'Qatar',
  },
  {
    countryCode: 'BT',
    dialCode: '+975',
    icon: require('./flags/BT.png'),
    latitude: 27.5,
    longitude: 90.5,
    name: 'Bhutan',
  },
  {
    countryCode: 'MN',
    dialCode: '+976',
    icon: require('./flags/MN.png'),
    latitude: 46,
    longitude: 105,
    name: 'Mongolia',
  },
  {
    countryCode: 'NP',
    dialCode: '+977',
    icon: require('./flags/NP.png'),
    latitude: 28,
    longitude: 84,
    name: 'Nepal',
  },
  {
    countryCode: 'TJ',
    dialCode: '+992',
    icon: require('./flags/TJ.png'),
    latitude: 39,
    longitude: 71,
    name: 'Tajikistan',
  },
  {
    countryCode: 'TM',
    dialCode: '+993',
    icon: require('./flags/TM.png'),
    latitude: 40,
    longitude: 60,
    name: 'Turkmenistan',
  },
  {
    countryCode: 'AZ',
    dialCode: '+994',
    icon: require('./flags/AZ.png'),
    latitude: 40.5,
    longitude: 47.5,
    name: 'Azerbaijan',
  },
  {
    countryCode: 'GE',
    dialCode: '+995',
    icon: require('./flags/GE.png'),
    latitude: 42,
    longitude: 43.5,
    name: 'Georgia',
  },
  {
    countryCode: 'KG',
    dialCode: '+996',
    icon: require('./flags/KG.png'),
    latitude: 41,
    longitude: 75,
    name: 'Kyrgyzstan',
  },
  {
    countryCode: 'UZ',
    dialCode: '+998',
    icon: require('./flags/UZ.png'),
    latitude: 41,
    longitude: 64,
    name: 'Uzbekistan',
  },
  {
    countryCode: 'BS',
    dialCode: '+1242',
    icon: require('./flags/BS.png'),
    latitude: 24.25,
    longitude: -76,
    name: 'Bahamas',
  },
  {
    countryCode: 'BB',
    dialCode: '+1246',
    icon: require('./flags/BB.png'),
    latitude: 13.1667,
    longitude: -59.5333,
    name: 'Barbados',
  },
  {
    countryCode: 'AI',
    dialCode: '+1264',
    icon: require('./flags/AI.png'),
    latitude: 18.25,
    longitude: -63.1667,
    name: 'Anguilla',
  },
  {
    countryCode: 'AG',
    dialCode: '+1268',
    icon: require('./flags/AG.png'),
    latitude: 17.05,
    longitude: -61.8,
    name: 'Antigua and Barbuda',
  },
  {
    countryCode: 'VG',
    dialCode: '+1284',
    icon: require('./flags/VG.png'),
    latitude: 18.5,
    longitude: -64.5,
    name: 'Virgin Islands, British',
  },
  {
    countryCode: 'VI',
    dialCode: '+1340',
    icon: require('./flags/VI.png'),
    latitude: 18.3333,
    longitude: -64.8333,
    name: 'Virgin Islands, U.S.',
  },
  {
    countryCode: 'KY',
    dialCode: '+1345',
    icon: require('./flags/KY.png'),
    latitude: 19.5,
    longitude: -80.5,
    name: 'Cayman Islands',
  },
  {
    countryCode: 'BM',
    dialCode: '+1441',
    icon: require('./flags/BM.png'),
    latitude: 32.3333,
    longitude: -64.75,
    name: 'Bermuda',
  },
  {
    countryCode: 'GD',
    dialCode: '+1473',
    icon: require('./flags/GD.png'),
    latitude: 12.1167,
    longitude: -61.6667,
    name: 'Grenada',
  },
  /*{
        countryCode: 'UM',
        dialCode: '+1581',
        icon: require('./flags/UM.png'),
        latitude: 19.2833,
        longitude: 166.6,
        name: 'United States Minor Outlying Islands',
    },*/
  {
    countryCode: 'TC',
    dialCode: '+1649',
    icon: require('./flags/TC.png'),
    latitude: 21.75,
    longitude: -71.5833,
    name: 'Turks and Caicos Islands',
  },
  {
    countryCode: 'MS',
    dialCode: '+1664',
    icon: require('./flags/MS.png'),
    latitude: 16.75,
    longitude: -62.2,
    name: 'Montserrat',
  },
  {
    countryCode: 'MP',
    dialCode: '+1670',
    icon: require('./flags/MP.png'),
    latitude: 15.2,
    longitude: 145.75,
    name: 'Northern Mariana Islands',
  },
  {
    countryCode: 'GU',
    dialCode: '+1671',
    icon: require('./flags/GU.png'),
    latitude: 13.4667,
    longitude: 144.7833,
    name: 'Guam',
  },
  {
    countryCode: 'AS',
    dialCode: '+1684',
    icon: require('./flags/AS.png'),
    latitude: -14.3333,
    longitude: -170,
    name: 'AmericanSamoa',
  },
  {
    countryCode: 'LC',
    dialCode: '+1758',
    icon: require('./flags/LC.png'),
    latitude: 13.8833,
    longitude: -61.1333,
    name: 'Saint Lucia',
  },
  {
    countryCode: 'DM',
    dialCode: '+1767',
    icon: require('./flags/DM.png'),
    latitude: 15.4167,
    longitude: -61.3333,
    name: 'Dominica',
  },
  {
    countryCode: 'VC',
    dialCode: '+1784',
    icon: require('./flags/VC.png'),
    latitude: 13.25,
    longitude: -61.2,
    name: 'Saint Vincent and the Grenadines',
  },
  {
    countryCode: 'DO',
    dialCode: '+1849',
    icon: require('./flags/DO.png'),
    latitude: 19,
    longitude: -70.6667,
    name: 'Dominican Republic',
  },
  {
    countryCode: 'TT',
    dialCode: '+1868',
    icon: require('./flags/TT.png'),
    latitude: 11,
    longitude: -61,
    name: 'Trinidad and Tobago',
  },
  {
    countryCode: 'KN',
    dialCode: '+1869',
    icon: require('./flags/KN.png'),
    latitude: 17.3333,
    longitude: -62.75,
    name: 'Saint Kitts and Nevis',
  },
  {
    countryCode: 'JM',
    dialCode: '+1876',
    icon: require('./flags/JM.png'),
    latitude: 18.25,
    longitude: -77.5,
    name: 'Jamaica',
  },
  {
    countryCode: 'PR',
    dialCode: '+1939',
    icon: require('./flags/PR.png'),
    latitude: 18.25,
    longitude: -66.5,
    name: 'Puerto Rico',
  },
];

export default dialCodes;
