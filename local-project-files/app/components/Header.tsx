'use client'

import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false)
  const languageMenuRef = useRef<HTMLDivElement>(null)

  const languages = [
    {
      code: 'en',
      name: 'English',
      flag: (
        <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_290_4210)">
<path d="M-6.90039 0.911621H31.0996V23.9116H-6.90039V0.911621Z" fill="#1E50A0"/>
<path d="M15.0996 8.02522V9.91162H21.1328L31.0996 3.72622V0.911621H26.5639L15.0996 8.02522Z" fill="white"/>
<path d="M31.0996 0.911621H28.8318L15.0996 9.43342V9.91162H17.163L31.0996 1.26322V0.911621Z" fill="#D22F27"/>
<path d="M26.5645 23.9116H31.0996V21.0964L21.1334 14.9116H15.0996V16.7974L26.5645 23.9116Z" fill="white"/>
<path d="M31.0996 23.9116V22.5034L18.1112 14.9116H15.0996L30.4969 23.9116H31.0996Z" fill="#D22F27"/>
<path d="M10.0996 16.798V14.9116H3.68935L-6.90039 21.097V23.9116H-2.08121L10.0996 16.798Z" fill="white"/>
<path d="M-6.90039 23.9116H-4.4908L10.0996 15.3898V14.9116H7.90724L-6.90039 23.56V23.9116Z" fill="#D22F27"/>
<path d="M-2.08184 0.911621H-6.90039V3.72682L3.68872 9.91162H10.0996V8.02582L-2.08184 0.911621Z" fill="white"/>
<path d="M-6.90039 0.911621V2.31982L6.0886 9.91162H9.09961L-6.29769 0.911621H-6.90039Z" fill="#D22F27"/>
<path d="M-6.90039 8.91162H31.0996V14.9116H-6.90039V8.91162Z" fill="white"/>
<path d="M9.09961 0.911621H15.0996V23.9116H9.09961V0.911621Z" fill="white"/>
<path d="M-6.90039 10.9116H31.0996V13.9116H-6.90039V10.9116Z" fill="#D22F27"/>
<path d="M10.0996 0.911621H14.0996V23.9116H10.0996V0.911621Z" fill="#D22F27"/>
</g>
<defs>
<clipPath id="clip0_290_4210">
<rect x="0.0996094" y="0.411621" width="24" height="24" rx="12" fill="white"/>
</clipPath>
</defs>
</svg>

      )
    },
    {
      code: 'bg',
      name: 'Български',
      flag: (
      <svg width="2064" height="61" viewBox="0 0 2064 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.83496 14.3611H57.2107V46.4624H4.83496V14.3611Z" fill="#5C9E31"/>
<path d="M4.83496 35.4805H57.2107V46.4625H4.83496V35.4805Z" fill="#D22F27"/>
<path d="M4.83496 14.3611H57.2107V25.3431H4.83496V14.3611Z" fill="white"/>
<path d="M84.6658 14.3611H137.042V46.4624H84.6658V14.3611Z" fill="#1E50A0"/>
<path d="M110.097 22.6351L110.874 20.3584L111.543 22.6004L109.684 21.2496L112.023 21.193L110.097 22.6351ZM110.097 40.4656L110.874 38.189L111.543 40.4301L109.684 39.0802L112.023 39.0236L110.097 40.4656ZM102.484 26.967L103.26 24.6904L103.93 26.9316L102.07 25.5816L104.409 25.525L102.484 26.967ZM117.925 35.8819L118.701 33.6052L119.371 35.8473L117.512 34.4965L119.85 34.4399L117.925 35.8819ZM105.648 23.8583L106.424 21.5816L107.093 23.8228L105.234 22.4729L107.572 22.4163L105.648 23.8583ZM114.563 39.299L115.339 37.0232L116.008 39.2644L114.149 37.9136L116.488 37.8578L114.563 39.299ZM119.013 31.5499L119.79 29.2741L120.459 31.5153L118.599 30.1645L120.938 30.1087L119.013 31.5499ZM101.183 31.5499L101.959 29.2741L102.628 31.5153L100.77 30.1645L103.108 30.1087L101.183 31.5499ZM114.47 23.8363L115.246 21.5605L115.915 23.8017L114.057 22.4509L116.395 22.3951L114.47 23.8363ZM105.555 39.2779L106.332 37.0012L107.001 39.2432L105.141 37.8925L107.48 37.8359L105.555 39.2779ZM117.722 26.9366L118.497 24.66L119.167 26.902L117.308 25.5512L119.646 25.4946L117.722 26.9366ZM102.28 35.8515L103.056 33.5757L103.725 35.8169L101.866 34.4661L104.204 34.4103L102.28 35.8515Z" fill="#F1B31C" stroke="#F1B31C" stroke-width="0.475183" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M164.497 14.3611H216.872V46.4624H164.497V14.3611Z" fill="#D22F27"/>
<path d="M194.604 27.9197L197.182 31.3148L193.014 30.0206L197.181 28.7188L194.608 32.119L194.604 27.9197ZM186.706 37.7106C185.602 37.7072 184.514 37.4539 183.523 36.9697C182.532 36.4855 181.663 35.7829 180.983 34.9149C180.302 34.0468 179.827 33.0358 179.593 31.9577C179.359 30.8796 179.372 29.7625 179.632 28.6904C179.892 27.6182 180.391 26.6189 181.092 25.7673C181.794 24.9158 182.679 24.2343 183.681 23.774C184.684 23.3136 185.778 23.0865 186.88 23.1095C187.983 23.1326 189.067 23.4052 190.049 23.907C188.758 22.5865 187.103 21.6806 185.295 21.305C183.486 20.9295 181.607 21.1012 179.897 21.7983C178.187 22.4954 176.723 23.6863 175.693 25.2189C174.663 26.7516 174.112 28.5565 174.112 30.4033C174.112 32.2501 174.663 34.055 175.693 35.5877C176.723 37.1204 178.187 38.3112 179.897 39.0084C181.607 39.7055 183.486 39.8772 185.295 39.5016C187.103 39.126 188.758 38.2201 190.049 36.8996C189.014 37.4277 187.868 37.7028 186.706 37.7021V37.7106Z" fill="white" stroke="white" stroke-width="0.475183" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M244.327 14.3611H296.703V46.4624H244.327V14.3611Z" fill="#F1B31C"/>
<path d="M244.327 14.3611H262.068V46.4624H244.327V14.3611Z" fill="#1E50A0"/>
<path d="M278.963 14.3611H296.703V46.4624H278.963V14.3611Z" fill="#D22F27"/>
<path d="M324.158 14.3611H376.534V46.4624H324.158V14.3611Z" fill="#61B2E4"/>
<path d="M324.158 30.4116H376.534V46.4623H324.158V30.4116Z" fill="#FCEA2B"/>
<path d="M403.989 14.3611H456.365V46.4624H403.989V14.3611Z" fill="white"/>
<path d="M403.989 28.7222H456.365V32.1013H403.989V28.7222ZM403.989 21.7528H456.365V25.1319H403.989V21.7528ZM403.989 35.6915H456.365V39.0706H403.989V35.6915ZM403.989 42.2385H456.365V46.4624H403.989V42.2385ZM403.989 14.3611H456.365V18.5849H403.989V14.3611Z" fill="#1E50A0"/>
<path d="M403.989 14.3611H422.574V32.1013H403.989V14.3611Z" fill="#1E50A0"/>
<path d="M412.014 14.3611H415.393V32.946H412.014V14.3611Z" fill="white"/>
<path d="M403.989 21.7529H422.574V25.132H403.989V21.7529Z" fill="white"/>
<g clip-path="url(#clip0_290_4180)">
<path d="M472.596 18.9116H510.596V41.9116H472.596V18.9116Z" fill="#1E50A0"/>
<path d="M494.596 26.0252V27.9116H500.629L510.596 21.7262V18.9116H506.06L494.596 26.0252Z" fill="white"/>
<path d="M510.596 18.9116H508.328L494.596 27.4334V27.9116H496.659L510.596 19.2632V18.9116Z" fill="#D22F27"/>
<path d="M506.061 41.9116H510.596V39.0964L500.63 32.9116H494.596V34.7974L506.061 41.9116Z" fill="white"/>
<path d="M510.596 41.9116V40.5034L497.608 32.9116H494.596L509.993 41.9116H510.596Z" fill="#D22F27"/>
<path d="M489.596 34.798V32.9116H483.186L472.596 39.097V41.9116H477.415L489.596 34.798Z" fill="white"/>
<path d="M472.596 41.9116H475.006L489.596 33.3898V32.9116H487.404L472.596 41.56V41.9116Z" fill="#D22F27"/>
<path d="M477.415 18.9116H472.596V21.7268L483.185 27.9116H489.596V26.0258L477.415 18.9116Z" fill="white"/>
<path d="M472.596 18.9116V20.3198L485.585 27.9116H488.596L473.199 18.9116H472.596Z" fill="#D22F27"/>
<path d="M472.596 26.9116H510.596V32.9116H472.596V26.9116Z" fill="white"/>
<path d="M488.596 18.9116H494.596V41.9116H488.596V18.9116Z" fill="white"/>
<path d="M472.596 28.9116H510.596V31.9116H472.596V28.9116Z" fill="#D22F27"/>
<path d="M489.596 18.9116H493.596V41.9116H489.596V18.9116Z" fill="#D22F27"/>
</g>
<g clip-path="url(#clip1_290_4180)">
<path d="M508 14H560.376V46.1013H508V14Z" fill="#5C9E31"/>
<path d="M508 35.1191H560.376V46.1012H508V35.1191Z" fill="#D22F27"/>
<path d="M508 14H560.376V24.982H508V14Z" fill="white"/>
</g>
<path d="M569.834 14.3611H622.21V46.4624H569.834V14.3611Z" fill="#D22F27"/>
<path d="M569.834 14.3611H622.21V25.3431H569.834V14.3611Z" fill="white"/>
<path d="M569.834 25.3433H622.21V35.4805H569.834V25.3433Z" fill="#1E50A0"/>
<path d="M649.665 14.3611H702.041V46.4624H649.665V14.3611Z" fill="white"/>
<path d="M649.665 14.3611H702.041V25.3431H649.665V14.3611Z" fill="#D22F27"/>
<path d="M649.665 25.3433H702.041V35.4805H649.665V25.3433Z" fill="#1E50A0"/>
<path d="M668.25 39.7042C671.516 39.7042 674.164 37.0567 674.164 33.7908C674.164 30.525 671.516 27.8774 668.25 27.8774C664.984 27.8774 662.337 30.525 662.337 33.7908C662.337 37.0567 664.984 39.7042 668.25 39.7042Z" fill="white" stroke="#D22F27" stroke-width="0.950367" stroke-miterlimit="10"/>
<path d="M674.164 33.791V24.4985H662.337V33.791" fill="white"/>
<path d="M674.164 33.791V24.4985H662.337V33.791" stroke="#D22F27" stroke-width="0.950367" stroke-miterlimit="10"/>
<path d="M664.026 37.17L674.164 25.3433M672.474 37.17L662.337 25.3433" stroke="#D22F27" stroke-width="0.950367" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M668.25 27.8774V36.3251M664.027 32.1013H672.474" stroke="white" stroke-width="0.950367" stroke-miterlimit="10"/>
<path d="M668.25 19.4296C665.61 19.9559 664.027 20.7813 664.871 22.8087H671.629C672.474 20.7813 670.891 19.9559 668.25 19.4296ZM668.25 19.4296V17.7815" stroke="#FCEA2B" stroke-width="0.950367" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M729.496 14.3611H781.872V46.4624H729.496V14.3611Z" fill="#D22F27"/>
<path d="M737.944 14.3611H729.496L755.684 30.4117V28.7222L737.944 14.3611ZM737.944 46.4624H729.496L755.684 30.4117V32.1013L737.944 46.4624ZM773.424 14.3611H781.872L755.684 30.4117V28.7222L773.424 14.3611ZM773.424 46.4624H781.872L755.684 30.4117V32.1013L773.424 46.4624Z" fill="#F1B31C"/>
<path d="M753.15 46.4623H758.218L756.529 30.4116H754.839L753.15 46.4623Z" fill="#F1B31C"/>
<path d="M781.872 32.9461V27.8774L755.684 29.567V31.2565L781.872 32.9461ZM729.496 32.9461V27.8774L755.684 29.567V31.2565L729.496 32.9461Z" fill="#F1B31C"/>
<path d="M753.15 14.3611H758.218L756.529 30.4117H754.839L753.15 14.3611Z" fill="#F1B31C"/>
<path d="M755.684 36.3253C758.95 36.3253 761.598 33.6778 761.598 30.4119C761.598 27.1461 758.95 24.4985 755.684 24.4985C752.418 24.4985 749.771 27.1461 749.771 30.4119C749.771 33.6778 752.418 36.3253 755.684 36.3253Z" fill="#F1B31C" stroke="#D22F27" stroke-width="0.475183" stroke-miterlimit="10"/>
<path d="M809.327 14.3611H861.703V46.4624H809.327V14.3611Z" fill="#5C9E31"/>
<path d="M809.327 14.3611H861.703V25.3431H809.327V14.3611Z" fill="#D22F27"/>
<path d="M809.327 25.3433H861.703V35.4805H809.327V25.3433Z" fill="white"/>
<path d="M889.157 14.3611H941.533V46.4624H889.157V14.3611Z" fill="#F1B31C"/>
<path d="M889.157 25.3433H941.533V35.4805H889.157V25.3433Z" fill="#D22F27"/>
<path d="M968.988 14.3611H1021.36V46.4624H968.988V14.3611Z" fill="white"/>
<path d="M968.988 30.4116H1021.36V46.4623H968.988V30.4116Z" fill="#D22F27"/>
<path d="M1048.82 14.3611H1101.2V46.4624H1048.82V14.3611Z" fill="#5C9E31"/>
<path d="M1048.82 35.4805H1101.2V46.4625H1048.82V35.4805Z" fill="#D22F27"/>
<path d="M1048.82 14.3611H1101.2V25.3431H1048.82V14.3611Z" fill="white"/>
<path d="M1128.65 14.3611H1181.03V46.4624H1128.65V14.3611Z" fill="#1E50A0"/>
<path d="M1154.08 22.6351L1154.86 20.3584L1155.53 22.6004L1153.67 21.2496L1156.01 21.193L1154.08 22.6351ZM1154.08 40.4656L1154.86 38.189L1155.53 40.4301L1153.67 39.0802L1156.01 39.0236L1154.08 40.4656ZM1146.47 26.967L1147.24 24.6904L1147.91 26.9316L1146.05 25.5816L1148.39 25.525L1146.47 26.967ZM1161.91 35.8819L1162.69 33.6052L1163.35 35.8473L1161.5 34.4965L1163.83 34.4399L1161.91 35.8819ZM1149.63 23.8583L1150.41 21.5816L1151.08 23.8228L1149.22 22.4729L1151.56 22.4163L1149.63 23.8583ZM1158.55 39.299L1159.32 37.0232L1159.99 39.2644L1158.13 37.9136L1160.47 37.8578L1158.55 39.299ZM1163 31.5499L1163.77 29.2741L1164.44 31.5153L1162.58 30.1645L1164.92 30.1087L1163 31.5499ZM1145.17 31.5499L1145.94 29.2741L1146.61 31.5153L1144.75 30.1645L1147.09 30.1087L1145.17 31.5499ZM1158.45 23.8363L1159.23 21.5605L1159.9 23.8017L1158.04 22.4509L1160.38 22.3951L1158.45 23.8363ZM1149.54 39.2779L1150.32 37.0012L1150.98 39.2432L1149.13 37.8925L1151.46 37.8359L1149.54 39.2779ZM1161.71 26.9366L1162.48 24.66L1163.15 26.902L1161.29 25.5512L1163.63 25.4946L1161.71 26.9366ZM1146.26 35.8515L1147.04 33.5757L1147.71 35.8169L1145.85 34.4661L1148.19 34.4103L1146.26 35.8515Z" fill="#F1B31C" stroke="#F1B31C" stroke-width="0.475183" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1208.48 14.3611H1260.86V46.4624H1208.48V14.3611Z" fill="#D22F27"/>
<path d="M1238.59 27.9197L1241.17 31.3148L1237 30.0206L1241.17 28.7188L1238.59 32.119L1238.59 27.9197ZM1230.69 37.7106C1229.59 37.7072 1228.5 37.4539 1227.51 36.9697C1226.52 36.4855 1225.65 35.7829 1224.97 34.9149C1224.29 34.0468 1223.81 33.0358 1223.58 31.9577C1223.34 30.8796 1223.36 29.7625 1223.62 28.6904C1223.88 27.6182 1224.38 26.6189 1225.08 25.7673C1225.78 24.9158 1226.66 24.2343 1227.67 23.774C1228.67 23.3136 1229.76 23.0865 1230.86 23.1095C1231.97 23.1326 1233.05 23.4052 1234.03 23.907C1232.74 22.5865 1231.09 21.6806 1229.28 21.305C1227.47 20.9295 1225.59 21.1012 1223.88 21.7983C1222.17 22.4954 1220.71 23.6863 1219.68 25.2189C1218.65 26.7516 1218.1 28.5565 1218.1 30.4033C1218.1 32.2501 1218.65 34.055 1219.68 35.5877C1220.71 37.1204 1222.17 38.3112 1223.88 39.0084C1225.59 39.7055 1227.47 39.8772 1229.28 39.5016C1231.09 39.126 1232.74 38.2201 1234.03 36.8996C1233 37.4277 1231.85 37.7028 1230.69 37.7021V37.7106Z" fill="white" stroke="white" stroke-width="0.475183" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1288.31 14.3611H1340.69V46.4624H1288.31V14.3611Z" fill="#F1B31C"/>
<path d="M1288.31 14.3611H1306.05V46.4624H1288.31V14.3611Z" fill="#1E50A0"/>
<path d="M1322.95 14.3611H1340.69V46.4624H1322.95V14.3611Z" fill="#D22F27"/>
<path d="M1368.14 14.3611H1420.52V46.4624H1368.14V14.3611Z" fill="#61B2E4"/>
<path d="M1368.14 30.4116H1420.52V46.4623H1368.14V30.4116Z" fill="#FCEA2B"/>
<path d="M1447.97 14.3611H1500.35V46.4624H1447.97V14.3611Z" fill="white"/>
<path d="M1447.97 28.7222H1500.35V32.1013H1447.97V28.7222ZM1447.97 21.7528H1500.35V25.1319H1447.97V21.7528ZM1447.97 35.6915H1500.35V39.0706H1447.97V35.6915ZM1447.97 42.2385H1500.35V46.4624H1447.97V42.2385ZM1447.97 14.3611H1500.35V18.5849H1447.97V14.3611Z" fill="#1E50A0"/>
<path d="M1447.97 14.3611H1466.56V32.1013H1447.97V14.3611Z" fill="#1E50A0"/>
<path d="M1456 14.3611H1459.38V32.946H1456V14.3611Z" fill="white"/>
<path d="M1447.97 21.7529H1466.56V25.132H1447.97V21.7529Z" fill="white"/>
<path d="M1527.8 14.3611H1580.18V46.4624H1527.8V14.3611Z" fill="#1E50A0"/>
<path d="M1557.37 24.3767V27.0326H1565.97L1580.18 18.3239V14.3611H1573.71L1557.37 24.3767Z" fill="white"/>
<path d="M1580.18 14.3611H1576.95L1557.37 26.3594V27.0326H1560.31L1580.18 14.8561V14.3611Z" fill="#D22F27"/>
<path d="M1573.71 46.4626H1580.18V42.4989L1565.97 33.791H1557.37V36.4461L1573.71 46.4626Z" fill="white"/>
<path d="M1580.18 46.4626V44.4799L1562.74 33.791H1558.7L1579.37 46.4626H1580.18Z" fill="#D22F27"/>
<path d="M1550.61 36.447V33.791H1542.01L1527.8 42.4998V46.4626H1534.27L1550.61 36.447Z" fill="white"/>
<path d="M1527.8 46.4626H1531.04L1550.61 34.4643V33.791H1547.67L1527.8 45.9675V46.4626Z" fill="#D22F27"/>
<path d="M1534.27 14.3611H1527.8V18.3247L1542.01 27.0326H1550.61V24.3775L1534.27 14.3611Z" fill="white"/>
<path d="M1527.8 14.3611V16.3438L1545.25 27.0326H1549.29L1528.61 14.3611H1527.8Z" fill="#D22F27"/>
<path d="M1527.8 26.188H1580.18V34.6357H1527.8V26.188Z" fill="white"/>
<path d="M1549.77 14.3611H1558.22V46.4624H1549.77V14.3611Z" fill="white"/>
<path d="M1527.8 27.8774H1580.18V32.9461H1527.8V27.8774Z" fill="#D22F27"/>
<path d="M1551.46 14.3611H1556.53V46.4624H1551.46V14.3611Z" fill="#D22F27"/>
<path d="M1607.64 14.3611H1660.01V46.4624H1607.64V14.3611Z" fill="#D22F27"/>
<path d="M1607.64 14.3611H1660.01V25.3431H1607.64V14.3611Z" fill="white"/>
<path d="M1607.64 25.3433H1660.01V35.4805H1607.64V25.3433Z" fill="#1E50A0"/>
<path d="M1687.47 14.3611H1739.84V46.4624H1687.47V14.3611Z" fill="white"/>
<path d="M1687.47 14.3611H1739.84V25.3431H1687.47V14.3611Z" fill="#D22F27"/>
<path d="M1687.47 25.3433H1739.84V35.4805H1687.47V25.3433Z" fill="#1E50A0"/>
<path d="M1706.05 39.7042C1709.32 39.7042 1711.96 37.0567 1711.96 33.7908C1711.96 30.525 1709.32 27.8774 1706.05 27.8774C1702.79 27.8774 1700.14 30.525 1700.14 33.7908C1700.14 37.0567 1702.79 39.7042 1706.05 39.7042Z" fill="white" stroke="#D22F27" stroke-width="0.950367" stroke-miterlimit="10"/>
<path d="M1711.96 33.791V24.4985H1700.14V33.791" fill="white"/>
<path d="M1711.96 33.791V24.4985H1700.14V33.791" stroke="#D22F27" stroke-width="0.950367" stroke-miterlimit="10"/>
<path d="M1701.83 37.17L1711.96 25.3433M1710.27 37.17L1700.14 25.3433" stroke="#D22F27" stroke-width="0.950367" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M1706.05 27.8774V36.3251M1701.83 32.1013H1710.27" stroke="white" stroke-width="0.950367" stroke-miterlimit="10"/>
<path d="M1706.05 19.4296C1703.41 19.9559 1701.83 20.7813 1702.67 22.8087H1709.43C1710.27 20.7813 1708.69 19.9559 1706.05 19.4296ZM1706.05 19.4296V17.7815" stroke="#FCEA2B" stroke-width="0.950367" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1767.3 14.3611H1819.67V46.4624H1767.3V14.3611Z" fill="#D22F27"/>
<path d="M1775.74 14.3611H1767.3L1793.48 30.4117V28.7222L1775.74 14.3611ZM1775.74 46.4624H1767.3L1793.48 30.4117V32.1013L1775.74 46.4624ZM1811.22 14.3611H1819.67L1793.48 30.4117V28.7222L1811.22 14.3611ZM1811.22 46.4624H1819.67L1793.48 30.4117V32.1013L1811.22 46.4624Z" fill="#F1B31C"/>
<path d="M1790.95 46.4623H1796.02L1794.33 30.4116H1792.64L1790.95 46.4623Z" fill="#F1B31C"/>
<path d="M1819.67 32.9461V27.8774L1793.48 29.567V31.2565L1819.67 32.9461ZM1767.3 32.9461V27.8774L1793.48 29.567V31.2565L1767.3 32.9461Z" fill="#F1B31C"/>
<path d="M1790.95 14.3611H1796.02L1794.33 30.4117H1792.64L1790.95 14.3611Z" fill="#F1B31C"/>
<path d="M1793.48 36.3253C1796.75 36.3253 1799.4 33.6778 1799.4 30.4119C1799.4 27.1461 1796.75 24.4985 1793.48 24.4985C1790.22 24.4985 1787.57 27.1461 1787.57 30.4119C1787.57 33.6778 1790.22 36.3253 1793.48 36.3253Z" fill="#F1B31C" stroke="#D22F27" stroke-width="0.475183" stroke-miterlimit="10"/>
<path d="M1847.13 14.3611H1899.5V46.4624H1847.13V14.3611Z" fill="#5C9E31"/>
<path d="M1847.13 14.3611H1899.5V25.3431H1847.13V14.3611Z" fill="#D22F27"/>
<path d="M1847.13 25.3433H1899.5V35.4805H1847.13V25.3433Z" fill="white"/>
<path d="M1926.96 14.3611H1979.33V46.4624H1926.96V14.3611Z" fill="#F1B31C"/>
<path d="M1926.96 25.3433H1979.33V35.4805H1926.96V25.3433Z" fill="#D22F27"/>
<path d="M2006.79 14.3611H2059.16V46.4624H2006.79V14.3611Z" fill="white"/>
<path d="M2006.79 30.4116H2059.16V46.4623H2006.79V30.4116Z" fill="#D22F27"/>
<defs>
<clipPath id="clip0_290_4180">
<rect x="479.596" y="18.4116" width="24" height="24" rx="12" fill="white"/>
</clipPath>
<clipPath id="clip1_290_4180">
<rect x="522.603" y="18.4116" width="24" height="24" rx="12" fill="white"/>
</clipPath>
</defs>
</svg>

      )
    },
    {
      code: 'de',
      name: 'Deutsch',
      flag: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_290_4370)">
<path d="M11.9626 0.75C7.0501 0.75 2.8876 3.9 1.3501 8.25H22.5751C21.0376 3.9 16.8751 0.75 11.9626 0.75Z" fill="#3E4347"/>
<path d="M11.9626 23.25C16.8751 23.25 21.0376 20.1375 22.5751 15.75H1.3501C2.8876 20.1375 7.0501 23.25 11.9626 23.25Z" fill="#FFE62E"/>
<path d="M1.3499 8.25C0.937402 9.4125 0.712402 10.6875 0.712402 12C0.712402 13.3125 0.937402 14.5875 1.3499 15.75H22.5749C22.9874 14.5875 23.2124 13.3125 23.2124 12C23.2124 10.6875 22.9874 9.4125 22.5749 8.25H1.3499Z" fill="#ED4C5C"/>
</g>
<defs>
<clipPath id="clip0_290_4370">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

      )
    },
    {
      code: 'tr',
      name: 'Turkish',
      flag: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_290_4374)">
<path d="M-3.12427 0.101074H37.5003V25H-3.12427V0.101074Z" fill="#D22F27"/>
<path d="M20.2283 10.6181L22.228 13.2515L18.9951 12.2477L22.2267 11.238L20.2309 13.8753L20.2283 10.6181ZM14.1018 18.2123C13.2462 18.2097 12.4022 18.0132 11.6334 17.6376C10.8646 17.262 10.1908 16.7171 9.66283 16.0438C9.13481 15.3705 8.76623 14.5863 8.58477 13.7501C8.4033 12.9139 8.41368 12.0475 8.61512 11.2159C8.81656 10.3843 9.20382 9.60913 9.74781 8.94866C10.2918 8.2882 10.9784 7.75959 11.756 7.40253C12.5336 7.04548 13.382 6.86928 14.2375 6.88715C15.0929 6.90503 15.9332 7.11652 16.6952 7.50574C15.6938 6.4815 14.4099 5.77887 13.0074 5.48755C11.6049 5.19623 10.1474 5.32942 8.82092 5.87012C7.49445 6.41083 6.35917 7.33452 5.55999 8.52331C4.76081 9.7121 4.33398 11.1121 4.33398 12.5445C4.33398 13.9769 4.76081 15.3769 5.55999 16.5657C6.35917 17.7545 7.49445 18.6782 8.82092 19.2189C10.1474 19.7596 11.6049 19.8928 13.0074 19.6015C14.4099 19.3101 15.6938 18.6075 16.6952 17.5833C15.8921 17.9929 15.0033 18.2062 14.1018 18.2057V18.2123Z" fill="white" stroke="white" stroke-width="0.36857" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_290_4374">
<rect x="0.106934" y="0.411621" width="24" height="24" rx="12" fill="white"/>
</clipPath>
</defs>
</svg>

      )
    },
    {
      code: 'ru',
      name: 'Русский',
      flag: (
     <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_290_4387)">
<path d="M-21 -4H31.3758V28.1013H-21V-4Z" fill="#D22F27"/>
<path d="M-21 -4H31.3758V6.98202H-21V-4Z" fill="white"/>
<path d="M-21 6.98242H31.3758V17.1197H-21V6.98242Z" fill="#1E50A0"/>
</g>
<defs>
<clipPath id="clip0_290_4387">
<rect x="0.610596" y="0.411621" width="24" height="24" rx="12" fill="white"/>
</clipPath>
</defs>
</svg>

      )
    }
  ]

  const navigationItems = [
    { name: 'Огледи', href: '/viewings', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.13478 3.09499C8.65156 1.57821 10.5639 1.57821 12.0807 3.09499L17.4641 8.47832C18.3828 9.39707 18.3828 10.9362 17.4641 11.8549L16.6666 12.6524V16.6666C16.6666 17.1269 16.294 17.4999 15.8333 17.4999H12.4999C12.0396 17.4999 11.6666 17.1269 11.6666 16.6666V13.3333H8.33325V16.6666C8.33325 17.1269 7.96028 17.4999 7.49992 17.4999H4.16659C3.70622 17.4999 3.33325 17.1269 3.33325 16.6666V12.6524L2.53575 11.8549C1.61701 10.9362 1.61701 9.39707 2.53575 8.47832L7.91909 3.09499H7.13478Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { name: 'Продай', href: '/sell', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 6.66667V3.33333C7.5 2.8731 7.8731 2.5 8.33333 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333V11.6667C17.5 12.1269 17.1269 12.5 16.6667 12.5H13.3333M2.5 8.33333V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H11.6667C12.1269 17.5 12.5 17.1269 12.5 16.6667V8.33333C12.5 7.8731 12.1269 7.5 11.6667 7.5H3.33333C2.8731 7.5 2.5 7.8731 2.5 8.33333Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.83325 10.8333L7.49992 12.5L10.8333 9.16667" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { name: 'Купи', href: '/buy', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66659 8.33333V5.83333C6.66659 3.53215 8.53208 1.66667 10.8333 1.66667C13.1344 1.66667 14.9999 3.53215 14.9999 5.83333V8.33333M3.33325 8.33333H17.4999L16.6666 16.6667H4.16659L3.33325 8.33333Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { name: 'Наем', href: '/rent', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 7.5L10 2.5L17.5 7.5V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H13.3333V12.5H6.66667V17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V7.5Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.33325 10H11.6666" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { name: 'Услуги', href: '/services', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8333 1.66667L12.325 4.65833L15.8333 5.16667L13.3333 7.59167L13.925 11.075L10.8333 9.51667L7.74167 11.075L8.33333 7.59167L5.83333 5.16667L9.34167 4.65833L10.8333 1.66667Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 15L7.5 17.5L15 10" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { name: 'Помощ', href: '/help', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8.33333" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.57495 7.5C7.77087 6.94772 8.14831 6.48706 8.6441 6.18948C9.13989 5.8919 9.72375 5.77581 10.2925 5.85764C10.8613 5.93948 11.3816 6.21434 11.7697 6.63748C12.1578 7.06062 12.3904 7.60221 12.4291 8.16667C12.4291 10 9.92912 10.8333 9.92912 10.8333" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14.1667H10.0083" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { name: 'Блог', href: '/blog', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.83325 7.5H14.1666" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.83325 10.8333H14.1666" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.83325 14.1667H10" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { name: 'Контакти', href: '/contacts', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3333 14.0999V16.5999C18.3341 16.8319 18.2866 17.0618 18.1936 17.2744C18.1006 17.487 17.9643 17.6778 17.7933 17.8343C17.6222 17.9908 17.4204 18.1096 17.2005 18.1835C16.9806 18.2574 16.7473 18.2849 16.5166 18.2641C13.9523 17.9883 11.4891 17.1179 9.32497 15.7249C7.31151 14.4436 5.60445 12.7365 4.32497 10.7232C2.92831 8.55051 2.05893 6.07638 1.78747 3.50157C1.76671 3.27165 1.79394 3.03925 1.86707 2.81986C1.9402 2.60047 2.0579 2.39914 2.21307 2.22792C2.36824 2.05669 2.55756 1.91981 2.76841 1.82583C2.97926 1.73185 3.20745 1.68285 3.43747 1.68157H5.93747C6.32302 1.67776 6.69698 1.80754 6.9918 2.04742C7.28663 2.2873 7.48302 2.62338 7.54497 2.99324L8.18747 6.00824C8.2499 6.35362 8.20054 6.71066 8.04666 7.02376C7.89279 7.33686 7.64325 7.58665 7.33747 7.73324L6.22497 8.28991C7.38601 10.384 9.11936 12.1174 11.2133 13.2782L11.77 12.1657C11.9166 11.8599 12.1663 11.6104 12.4794 11.4565C12.7925 11.3026 13.1496 11.2533 13.495 11.3157L16.51 11.9582C16.8811 12.0206 17.2181 12.2178 17.4583 12.5135C17.6986 12.8092 17.8277 13.1844 17.8233 13.5699L18.3333 14.0999Z" stroke="#299393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> }
  ]

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close navigation menu on escape key
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsNavigationMenuOpen(false)
      }
    }

    if (isNavigationMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [isNavigationMenuOpen])

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen)
  }

  const toggleNavigationMenu = () => {
    setIsNavigationMenuOpen(!isNavigationMenuOpen)
  }

  const selectLanguage = (language: typeof languages[0]) => {
    console.log('Selected language:', language)
    setIsLanguageMenuOpen(false)
    // Add language switching logic here
  }

  const handleNavigation = (href: string) => {
    console.log('Navigate to:', href)
    setIsNavigationMenuOpen(false)
    // Add navigation logic here
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c6787c1a6a23650e94f00981e72c5ab2be70fb9f?width=306" 
              alt="Bulgarian Estates Logo" 
              className="logo"
            />
          </div>
          
          <div className="header-actions">
            <div className="language-selector" ref={languageMenuRef}>
              <button 
                className="action-button language-button" 
                aria-label="Language"
                onClick={toggleLanguageMenu}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 25" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M12 3.59537C10.22 3.59537 8.47991 4.12321 6.99987 5.11214C5.51983 6.10107 4.36628 7.50668 3.68509 9.15122C3.0039 10.7958 2.82567 12.6054 3.17294 14.3512C3.5202 16.097 4.37737 17.7007 5.63604 18.9593C6.89472 20.218 8.49836 21.0752 10.2442 21.4224C11.99 21.7697 13.7996 21.5915 15.4442 20.9103C17.0887 20.2291 18.4943 19.0755 19.4832 17.5955C20.4722 16.1155 21 14.3754 21 12.5954C21 10.2084 20.0518 7.91923 18.364 6.23141C16.6761 4.54358 14.387 3.59537 12 3.59537ZM19.46 11.8454H16.7C16.3507 9.43638 15.332 7.17386 13.76 5.31537C15.2678 5.68266 16.625 6.50741 17.6455 7.67652C18.666 8.84562 19.2998 10.3018 19.46 11.8454ZM8.81 13.3454H15.19C14.7271 15.7138 13.6238 17.9101 12 19.6954C10.3762 17.9101 9.27288 15.7138 8.81 13.3454ZM8.81 11.8454C9.27288 9.47689 10.3762 7.28063 12 5.49537C13.6238 7.28063 14.7271 9.47689 15.19 11.8454H8.81ZM10.24 5.31537C8.66798 7.17386 7.64932 9.43638 7.3 11.8454H4.54C4.70021 10.3018 5.33403 8.84562 6.35454 7.67652C7.37504 6.50741 8.73225 5.68266 10.24 5.31537ZM4.54 13.3154H7.3C7.64932 15.7244 8.66798 17.9869 10.24 19.8454C8.73666 19.4799 7.38264 18.6596 6.36258 17.4963C5.34251 16.3331 4.70606 14.8836 4.54 13.3454V13.3154ZM13.76 19.8454C15.332 17.9869 16.3507 15.7244 16.7 13.3154H19.46C19.3057 14.8643 18.6745 16.3271 17.6536 17.5021C16.6326 18.6771 15.2722 19.5063 13.76 19.8754V19.8454Z" 
                    fill="#299393"
                  />
                </svg>
              </button>
              
              {isLanguageMenuOpen && (
                <div className="language-menu">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className="language-option"
                      onClick={() => selectLanguage(language)}
                    >
                      <span className="flag-icon">{language.flag}</span>
                      <span className="language-name">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button className="action-button" aria-label="Search">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 25" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M16.893 17.5154L19.973 20.5954M19 12.0954C19 14.0845 18.2098 15.9921 16.8033 17.3987C15.3968 18.8052 13.4891 19.5954 11.5 19.5954C9.51088 19.5954 7.60322 18.8052 6.1967 17.3987C4.79018 15.9921 4 14.0845 4 12.0954C4 10.1062 4.79018 8.19859 6.1967 6.79207C7.60322 5.38554 9.51088 4.59537 11.5 4.59537C13.4891 4.59537 15.3968 5.38554 16.8033 6.79207C18.2098 8.19859 19 10.1062 19 12.0954Z" 
                  stroke="#299393" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            
            <button 
              className="action-button menu-button" 
              aria-label="Menu"
              onClick={toggleNavigationMenu}
            >
              <svg 
                width="22" 
                height="17" 
                viewBox="0 0 22 17" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.9375 1.59537H21.0625" stroke="#4F2C1D" strokeWidth="1.75" strokeLinecap="round"/>
                <path d="M0.9375 8.59537H21.0625" stroke="#4F2C1D" strokeWidth="1.75" strokeLinecap="round"/>
                <path d="M0.9375 15.5954H21.0625" stroke="#4F2C1D" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Menu Overlay */}
      {isNavigationMenuOpen && (
        <div className="navigation-overlay" onClick={() => setIsNavigationMenuOpen(false)}>
          <div className="navigation-menu" onClick={(e) => e.stopPropagation()}>
            <div className="navigation-header">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c6787c1a6a23650e94f00981e72c5ab2be70fb9f?width=306" 
                alt="Bulgarian Estates Logo" 
                className="navigation-logo"
              />
              <button 
                className="navigation-close"
                onClick={() => setIsNavigationMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <nav className="navigation-items">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className="navigation-item"
                  onClick={() => handleNavigation(item.href)}
                >
                  <span className="navigation-icon">{item.icon}</span>
                  <span className="navigation-text">{item.name}</span>
                  <svg className="navigation-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ))}
            </nav>

            <div className="navigation-footer">
              <div className="navigation-contact">
                <h4>Свържете се с нас</h4>
                <p>+359 888 123 456</p>
                <p>info@bulgarianestates.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
