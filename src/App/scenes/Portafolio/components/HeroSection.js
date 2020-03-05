import React, { useContext } from 'react';
import { CallToAction } from '../../../components/buttons';
import { LocalizationContext } from '../../../contexts';
import { useFormModal } from '../hooks';

function AppHeader() {
   const firstName = 'Mario';
   const lastName = 'Medrano';
   const openFormModal = useFormModal();
   const { strings } = useContext(LocalizationContext);
   return (
      <header id="home" className="App-header">
         <div className="hero-ctn">
            <div className="hero-overlay" />
         </div>
         <div className="person-info">
            <h1>
               {firstName.toUpperCase()} <br /> {lastName.toUpperCase()}
            </h1>
            <h2>{strings.heroSection.role.toUpperCase()}</h2>
         </div>
         <div className="person-info">
            <img
               src="https://lh3.googleusercontent.com/xdoRebNJ-uI_RRL1Y62f7SWUWHzF1A_rIP0ndcjP8qGFdnvpFsE8EU0Hgwb3FZCFAqEuW9AQ5Uxq34ySlQPCCqSPr32tRMnbKKqF8Q0DoMvqvyPsjcB33R_KsWmv1ghvp6ZRl7RkACGCms6dPEbwqBVlXNAtbdseuS7o2wJVI5Orad8G8eHlw_4Nxdmn8VcsbKkIIj-eWvPygj4b_Y-5twUeFUzqja_aGtMrZXCU4iJ7KoW_-IK5gYKRxkRX9zxKxHQ7VPrCMITzRzLdPFoYjzpjGJdJbKCXexBSudnAH-Y-b_Wp6jdRLZQNTkCnMFg2RBaoA7RMIBNWTI-p0tHSG_nKHyB7wx1qATck8GvDfI0a07re1_CY5oYd1FWrzNYzRi6Ui-ALIxNdO5Y9-Kw9jvqQcLyZPJ3Kn29HY_fjUba0Kl0A6xBn2qKLhyTzRMsuRiaaNU4d_7tXg52Y1YEBXjnn28-Fd44W-n4s4vzxppa0SHdf8Zq9RFeyvPRP-soUrH9yaIcf2c9Pjif3a3s9bGXlFgHnnbtUszH-5R-GiKrnoEANG6I_SjU5Yi_C7EbAFXfpYapeSJp6mTWh3_tOf2BAqYcz2QfmMMqH4RxWddiRYupBWRXUzQRr3CERU4pBC0t29rVA99YajH0th3d3gGhNPXTt_j3RFJpi3Hqz-2ipBPtr5V_9bA=w1706-h1502-no"
               alt="Mario Medrano"
            />
            <CallToAction onClick={openFormModal}>
               {strings.common.buttons.contactMe.toUpperCase()}
            </CallToAction>
         </div>
      </header>
   );
}

export default AppHeader;
