import React from 'react';
import './Clubs.css';

const clubs = [
  { name: 'SCINTILLATE', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeBGrCgxvKUpxe_rNBWQZknZyrV3naBMSjQ&s' },
  { name: 'NRITYA TARANG', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnuD66P3WZd5GUv4EhvDFAQkgNL04od0aLw&s' },
  { name: 'CREATIVE ARTS', src: 'https://i.pinimg.com/280x280_RS/17/82/51/17825190cdbfc349b12170241cfc00af.jpg' },
  { name: 'CRESENDO', src: 'https://yt3.googleusercontent.com/ZBnej3TzCdpd6kk_pjAwhCz1JLrLsjVq8o451WjEstF2RfuyGQzv25l8mO8hP6znu072sPf-LA=s900-c-k-c0x00ffffff-no-rj' },
  { name: 'DRAMATRIX', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0KqDdedCHWnOq-Qnj42j-lA0BsHCmPVYGA&s' },
  { name: 'LIVEWIRE', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDh7523YWcoymLc4f8Ey0ZslSigBZvWfjxvg&s' },
  { name: 'KRITHOMEDH', src: 'https://media.licdn.com/dms/image/D5603AQGy8fW5w7G5IA/profile-displayphoto-shrink_800_800/0/1700288572924?e=2147483647&v=beta&t=O6dl9fW3daq533V64M2jvY3XxsTQAfFw6dyPuQmasxw' },
  { name: 'NARMY', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDWluMmR8zQv08MVlb0xIkISe5tapH_goIvg&s' },
  { name: 'NSS', src:'https://pbs.twimg.com/profile_images/1553387118864371713/5qS0Mpz6_400x400.png'},
  { name: 'VJ THEATRO', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwls67A7gdQJJ_A3lLukqK3kqXE3st8NXmIQ&s'},
  { name: 'VJ DATA QUESTERS', src:'https://media.licdn.com/dms/image/D560BAQELicbIgR6KGg/company-logo_200_200/0/1706321849549?e=2147483647&v=beta&t=axsiFGgdB8-VHljQyUEsrEk2jc2_eLlDJ7gI17Q1m6Q'},
  { name: 'VJ HACKSLASH', src:'https://media.licdn.com/dms/image/C560BAQFcRr9sFSA-XQ/company-logo_200_200/0/1662294763521?e=2147483647&v=beta&t=r9GlLxrAGR6TeQ1zAqw71Vnd51qWdqfQzewGcfnX3CI'},
  { name: 'VJ GARUDA VIGILANCE', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKT1BiNseVwPUMSSKktqrA2LC9X71AuIpAGQ&s'},
  { name: 'TURING HUT', src:'https://turinghut-final.netlify.app/logo.png'},
  { name: 'ART OF LIVING', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWE8lNsKgCqv_Btfi0sN_R5Bz7NNZuzWIzCw&s'},
  { name: '', src:''},
];

const chapters = [
  { name: 'ACM', src: 'https://vnrvjiet.acm.org/resources/css/img/main-logo.png' },
  { name: 'ASME', src: 'https://media.licdn.com/dms/image/C4D0BAQGXCd0YN0k8hQ/company-logo_200_200/0/1652159342117/asme_vnrvjiet_logo?e=2147483647&v=beta&t=TACQjheeTjOkQ3gGmXN278Wb1a21K5gMKu-armph010' },
  { name: 'CSI', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUx3YRP5sUMFFz7iMiHf91UyzYDmFca_3OTQ&s' },
  { name: 'DIURNALIS', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3fvHF_CVoHS8kubW23zKxUsP0hIDfA0NUHA&s' },
  { name: 'GDSC', src: 'https://media.licdn.com/dms/image/D4E0BAQGuKy8o5V632w/company-logo_200_200/0/1709184120095?e=2147483647&v=beta&t=94y14mShpDSXLZBcVeIiqnHxHGJFW1tHsPPot-agfVM' },
  { name: 'IEEE', src: 'https://media.licdn.com/dms/image/C4D0BAQH_ETuCbiDDdA/company-logo_200_200/0/1630573544012?e=2147483647&v=beta&t=ECakr0E6RGVCP3y0DHkd-ltJsZo99vHJ7Ey5Toj6_aQ' },
  { name: 'ICI', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40sU2A_vpxdprQ0qMO3r3Vdiz1S5oL0bPJQ&s' },
  { name: 'IEI', src: 'https://media.licdn.com/dms/image/C560BAQHHjiPfqP30JQ/company-logo_200_200/0/1657712748586/ie_i_vnrvjiet_logo?e=2147483647&v=beta&t=8g0xgqcB7Ivzxx89hbJSG3Tlg-O9klp3VBfLz0aGg70' },
  { name: 'ISOI', src: 'https://media.licdn.com/dms/image/C560BAQHCI_ngF8vlhw/company-logo_200_200/0/1669523825480?e=2147483647&v=beta&t=6bAguM-HcXjv5a1_H8MHrd411cWI3OnWvePdEuJHIqo' },
  { name: 'ISTE', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDa9cO-8oT1MIHW0azdJDIDF1aQi_1WWUfEg&s' },
  { name: 'IETE', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxuqRDcxF2DftbG4IC8HiOnwp1yzdhQqP2ZA&s' },
  { name: 'IUCEE', src: 'https://media.licdn.com/dms/image/D5603AQE_HMtvabHLTQ/profile-displayphoto-shrink_200_200/0/1677238498589?e=2147483647&v=beta&t=HR3KCRy-wO8DAdOSSlF5mgU38M_O-NF9cxozIjWmk4k' },
  { name: '', src: '' },
];


const ImageGrid = ({ items }) => {
  return (
    <div className="image-container">
      {items.map((item, index) => (
        <div className="image-item" key={index}>
          <img src={item.src} alt={item.name} />
          <div className="caption">{item.name}</div>
        </div>
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