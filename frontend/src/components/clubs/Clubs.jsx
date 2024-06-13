import React from 'react';
import './Clubs.css';

const clubs = [
  { name: 'SCINTILLATE', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeBGrCgxvKUpxe_rNBWQZknZyrV3naBMSjQ&s', instagram: ' https://www.instagram.com/scintillatevnrvjiet/?hl=en' },
  { name: 'NRITYA TARANG', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnuD66P3WZd5GUv4EhvDFAQkgNL04od0aLw&s', instagram: 'https://www.instagram.com/nrithyatarang/?hl=en' },
  { name: 'CREATIVE ARTS', src: 'https://i.pinimg.com/280x280_RS/17/82/51/17825190cdbfc349b12170241cfc00af.jpg', instagram: ' https://www.instagram.com/creativearts_vnr/?hl=en' },
  { name: 'CRESENDO', src: 'https://yt3.googleusercontent.com/ZBnej3TzCdpd6kk_pjAwhCz1JLrLsjVq8o451WjEstF2RfuyGQzv25l8mO8hP6znu072sPf-LA=s900-c-k-c0x00ffffff-no-rj', instagram: ' https://www.instagram.com/crescendo_vnrvjiet/?hl=en' },
  { name: 'DRAMATRIX', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0KqDdedCHWnOq-Qnj42j-lA0BsHCmPVYGA&s', instagram: 'https://www.instagram.com/dramatrixatvnr/?hl=en' },
  { name: 'LIVEWIRE', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDh7523YWcoymLc4f8Ey0ZslSigBZvWfjxvg&s', instagram: 'https://www.instagram.com/livewire.crew/?hl=en' },
  { name: 'KRITHOMEDH', src: 'https://media.licdn.com/dms/image/D5603AQGy8fW5w7G5IA/profile-displayphoto-shrink_800_800/0/1700288572924?e=2147483647&v=beta&t=O6dl9fW3daq533V64M2jvY3XxsTQAfFw6dyPuQmasxw', instagram: 'https://www.instagram.com/krithomedh_vnrvjiet/?hl=en' },
  { name: 'NARMY', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDWluMmR8zQv08MVlb0xIkISe5tapH_goIvg&s', instagram: 'https://www.instagram.com/narmy.vnrvjiet/?hl=en' },
  { name: 'NSS', src:'https://pbs.twimg.com/profile_images/1553387118864371713/5qS0Mpz6_400x400.png', instagram: 'https://www.instagram.com/nss_vnrvjiet/?hl=en' },
  { name: 'VJ THEATRO', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwls67A7gdQJJ_A3lLukqK3kqXE3st8NXmIQ&s', instagram: 'https://www.instagram.com/vjteatro/?hl=en' },
  { name: 'VJ DATA QUESTERS', src:'https://media.licdn.com/dms/image/D560BAQELicbIgR6KGg/company-logo_200_200/0/1706321849549?e=2147483647&v=beta&t=axsiFGgdB8-VHljQyUEsrEk2jc2_eLlDJ7gI17Q1m6Q', instagram: 'https://www.instagram.com/vjdataquesters.club/?hl=en' },
  { name: 'VJ HACKSLASH', src:'https://media.licdn.com/dms/image/C560BAQFcRr9sFSA-XQ/company-logo_200_200/0/1662294763521?e=2147483647&v=beta&t=r9GlLxrAGR6TeQ1zAqw71Vnd51qWdqfQzewGcfnX3CI', instagram: 'https://www.instagram.com/vj_hackslash/?hl=en' },
  { name: 'VJ GARUDA VIGILANCE', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKT1BiNseVwPUMSSKktqrA2LC9X71AuIpAGQ&s', instagram: 'https://www.instagram.com/vjgarudavigilance/?hl=en' },
  { name: 'TURING HUT', src:'https://turinghut-final.netlify.app/logo.png', instagram: 'https://www.instagram.com/turing.hut/?hl=en' },
  { name: 'ART OF LIVING', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWE8lNsKgCqv_Btfi0sN_R5Bz7NNZuzWIzCw&s', instagram: 'https://www.instagram.com/vnr.aol.club/?hl=en' },
];

const chapters = [
  { name: 'ACM', src: 'https://vnrvjiet.acm.org/resources/css/img/main-logo.png', instagram: 'https://www.instagram.com/acm_vnrvjiet/?hl=en' },
  { name: 'ASME', src: 'https://media.licdn.com/dms/image/C4D0BAQGXCd0YN0k8hQ/company-logo_200_200/0/1652159342117/asme_vnrvjiet_logo?e=2147483647&v=beta&t=TACQjheeTjOkQ3gGmXN278Wb1a21K5gMKu-armph010', instagram: 'https://www.instagram.com/asme_vnrvjiet/?hl=en' },
  { name: 'CSI', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUx3YRP5sUMFFz7iMiHf91UyzYDmFca_3OTQ&s', instagram: 'https://www.instagram.com/csi_vnrvjiet/?hl=en' },
  { name: 'DIURNALIS', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3fvHF_CVoHS8kubW23zKxUsP0hIDfA0NUHA&s', instagram: 'https://www.instagram.com/diurnalis.tjc/?hl=en' },
  { name: 'GDSC', src: 'https://media.licdn.com/dms/image/D4E0BAQGuKy8o5V632w/company-logo_200_200/0/1709184120095?e=2147483647&v=beta&t=94y14mShpDSXLZBcVeIiqnHxHGJFW1tHsPPot-agfVM', instagram: 'https://www.instagram.com/gdsc.vnrvjiet/?hl=en' },
  { name: 'IEEE', src: 'https://media.licdn.com/dms/image/C4D0BAQH_ETuCbiDDdA/company-logo_200_200/0/1630573544012?e=2147483647&v=beta&t=ECakr0E6RGVCP3y0DHkd-ltJsZo99vHJ7Ey5Toj6_aQ', instagram: 'https://www.instagram.com/cea_ici_igbc/?hl=en' },
  { name: 'ICI', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40sU2A_vpxdprQ0qMO3r3Vdiz1S5oL0bPJQ&s', instagram: 'https://www.instagram.com/ieeevnrvjiet/?hl=en' },
  { name: 'IEI', src: 'https://media.licdn.com/dms/image/C560BAQHHjiPfqP30JQ/company-logo_200_200/0/1657712748586/ie_i_vnrvjiet_logo?e=2147483647&v=beta&t=8g0xgqcB7Ivzxx89hbJSG3Tlg-O9klp3VBfLz0aGg70', instagram: 'https://www.instagram.com/iei_vnrvjiet/?hl=en' },
  { name: 'ISOI', src: 'https://media.licdn.com/dms/image/C560BAQHCI_ngF8vlhw/company-logo_200_200/0/1669523825480?e=2147483647&v=beta&t=6bAguM-HcXjv5a1_H8MHrd411cWI3OnWvePdEuJHIqo', instagram: 'https://www.instagram.com/isoi.vnrvjiet/?hl=en' },
  { name: 'ISTE', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDa9cO-8oT1MIHW0azdJDIDF1aQi_1WWUfEg&s', instagram: 'https://www.instagram.com/iste_vnrvjiet/?hl=en' },
  { name: 'IETE', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxuqRDcxF2DftbG4IC8HiOnwp1yzdhQqP2ZA&s', instagram: 'https://www.instagram.com/iete_vnrvjiet/?hl=en' },
  { name: 'IUCEE', src: 'https://media.licdn.com/dms/image/D5603AQE_HMtvabHLTQ/profile-displayphoto-shrink_200_200/0/1677238498589?e=2147483647&v=beta&t=HR3KCRy-wO8DAdOSSlF5mgU38M_O-NF9cxozIjWmk4k', instagram: 'https://www.instagram.com/iucee_vnrvjiet/?hl=en' },
    ];

const ImageGrid = ({ items }) => {
  return (
    <div className="image-container">
      {items.map((item, index) => (
        <a href={item.instagram} target="_blank" rel="noopener noreferrer" key={index} className="image-item">
          <img src={item.src} alt={item.name} />
          <div className="caption">{item.name}</div>
        </a>
      ))}
    </div>
  );
};

function Clubs() {
  return (
    <div>
      <h1>Our Clubs</h1>
      <ImageGrid items={clubs} />

      <h1>Our Student Chapters</h1>
      <ImageGrid items={chapters} />
    </div>
  );
}

export default Clubs;