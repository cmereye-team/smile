
<template>
  <div class="HeaderRight">
    <div class="header-top" v-if="isMobile === false">
      <!-- <a href="tel:3892 5099 ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="20"
            viewBox="0 0 17 20"
            fill="none"
          >
            <path
              d="M4.67878 7.6421C4.9418 7.00581 5.37664 7.11516 5.77453 6.37409C6.22088 5.54207 6.06975 4.65356 5.93611 3.83039C5.77338 2.84676 5.63969 2.06226 5.02065 1.6921C4.18356 1.19366 3.03302 1.81655 2.93922 1.86758C1.15986 2.86093 0.84235 5.92291 0.977809 7.58181C1.50648 14.207 10.8608 19.7576 13.8848 17.897C14.6118 17.4532 15.4878 16.2576 15.2547 15.322C15.1586 14.9239 14.6947 14.5768 13.7862 13.863C12.6011 12.9321 12.0012 12.4652 11.4415 12.6405C10.8979 12.8113 10.9689 13.3745 10.4134 13.6821C9.41384 14.2344 7.91694 13.1875 7.34773 12.7963C6.09666 11.9297 5.52253 10.8336 5.26106 10.31C4.81846 9.43333 4.3364 8.48699 4.68173 7.62722L4.67878 7.6421Z"
              stroke="#4570B6"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
        <div>3892 5099</div>
      </a> -->

      <a 
      :href="whatsappLink" 
     
     
      target="_blank" class="header-top-whatsapp">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M13.783 27.988C11.2976 27.9705 8.8122 27.2651 6.54192 25.8226C6.37921 25.7188 6.23943 25.7057 6.05816 25.7647C4.46602 26.279 2.8706 26.7846 1.27517 27.2913C1.18454 27.3197 1.07643 27.4038 0.995621 27.323C0.914813 27.2422 0.997805 27.1341 1.02838 27.0434C1.52852 25.5507 2.02429 24.0579 2.53753 22.5706C2.63035 22.303 2.6107 22.0988 2.4469 21.864C1.30793 20.2271 0.563187 18.4209 0.223573 16.4564C-0.34427 13.164 0.164605 10.0442 1.80698 7.12851C3.23642 4.5896 5.27519 2.68405 7.88946 1.40094C9.42482 0.648548 11.0454 0.201917 12.7522 0.0555884C15.4986 -0.179193 18.0975 0.327498 20.5316 1.61825C22.9122 2.88061 24.7784 4.68897 26.1314 7.0215C27.1088 8.70537 27.7083 10.5192 27.9114 12.452C28.2215 15.4136 27.6777 18.2135 26.2144 20.8168C24.7773 23.3732 22.732 25.2973 20.1003 26.5881C18.566 27.3405 16.9444 27.7882 15.2387 27.9345C14.8204 27.9705 14.4033 27.9727 13.7841 27.988H13.783ZM5.91183 10.2658C5.89436 11.3699 6.27765 12.4051 6.83021 13.3813C7.4734 14.5159 8.26511 15.5479 9.1136 16.5361C10.1805 17.7788 11.3817 18.8665 12.7696 19.7445C14.1608 20.6246 15.6918 21.1706 17.2632 21.6085C18.2242 21.8771 19.1895 21.8815 20.1221 21.4698C21.8158 20.7218 22.3269 19.8908 22.4 18.1698C22.411 17.9066 22.3105 17.7177 22.0692 17.5965C21.0274 17.0778 19.9889 16.5493 18.9198 16.0884C18.3815 15.8569 18.0866 15.953 17.7481 16.4313C17.4489 16.855 17.1464 17.2754 16.8111 17.6718C16.5502 17.9809 16.228 18.0966 15.8371 17.9732C15.6733 17.9219 15.5128 17.8531 15.3544 17.7854C13.1147 16.8266 11.4592 15.2181 10.2111 13.1564C9.99703 12.8037 10.0025 12.6093 10.2635 12.2871C10.5092 11.9836 10.7734 11.6953 11.0355 11.4048C11.4101 10.9898 11.5335 10.5574 11.2834 10.0092C10.8728 9.10723 10.5026 8.18667 10.139 7.26501C9.92932 6.73211 9.63667 6.35974 8.99675 6.4471C8.96181 6.45147 8.92468 6.43618 8.88864 6.43509C8.24982 6.42635 7.67651 6.55958 7.20258 7.04552C6.33553 7.93332 5.92384 8.99038 5.91183 10.2615V10.2658Z"
            fill="white"
          />
        </svg>
        <span> Whatsapp 預約 </span>
      </a>

      <nuxt-link to="/booking">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="26"
          viewBox="0 0 29 26"
          fill="none"
        >
          <path
            d="M2.08161 23.4361C2.96373 23.5786 3.83775 23.6203 4.72566 23.5044C5.42718 23.4141 6.10672 23.2461 6.78857 23.0782C7.04325 23.0156 7.26899 23.0492 7.50978 23.1697C9.14899 23.9886 10.8959 24.35 12.7191 24.2596C17.3659 24.0315 21.1224 20.7176 22.1446 16.5733C22.2951 15.9629 22.3403 15.3362 22.4155 14.7142C22.4387 14.5289 22.3831 14.427 22.1886 14.3505C21.2347 13.9764 20.6212 13.242 20.2114 12.3386C19.9104 11.6737 19.6233 10.9927 19.724 10.2259C19.7367 10.1286 19.6823 10.0209 19.6488 9.92008C19.1116 8.27879 18.5733 6.6375 18.0339 4.99737C17.609 3.70472 17.7815 2.50474 18.6011 1.41132C18.8963 1.0175 19.2772 0.718663 19.7367 0.543762C20.1952 0.368861 20.6559 0.189327 21.1398 0.093189C21.6237 -0.00294861 21.9883 0.141837 22.2025 0.490481C22.4097 0.825225 22.3947 1.27001 22.1666 1.58274C21.9258 1.91285 21.4211 2.10861 21.0391 2.0171C20.9546 1.99741 20.8654 1.97888 20.7925 1.93602C20.3989 1.70552 20.0933 1.85957 19.8166 2.1503C19.2598 2.73408 19.041 3.4221 19.2737 4.20047C19.8027 5.97612 20.4498 7.71355 21.0761 9.45561C21.1016 9.52742 21.1282 9.61545 21.1838 9.65831C21.5716 9.95714 21.6237 10.4112 21.7395 10.834C21.8541 11.2498 22.0659 11.6181 22.3055 11.9691C22.845 12.7614 23.8313 12.7822 24.4263 12.0282C24.7458 11.6228 24.9137 11.1525 25.0086 10.6556C25.0839 10.2583 25.1603 9.87838 25.5377 9.63978C25.6013 9.59924 25.6337 9.49731 25.6638 9.41854C26.2033 8.01354 26.7451 6.6097 27.2753 5.20123C27.4593 4.71243 27.5832 4.21089 27.5844 3.67808C27.5855 3.02828 27.3227 2.50011 26.9037 2.03563C26.6282 1.731 26.4568 1.70205 26.0794 1.85842C25.863 1.9476 25.6511 2.02984 25.4092 1.97077C24.8535 1.83409 24.4819 1.34066 24.5965 0.885456C24.762 0.232183 25.3455 -0.136151 25.9533 0.0468576C26.4302 0.189327 26.8145 0.514805 27.2544 0.734879C29.1206 1.6673 29.219 3.42094 28.7895 4.76803C28.3206 6.23789 27.787 7.68806 27.2892 9.14866C27.141 9.58418 27.0067 10.0197 26.9361 10.4842C26.7601 11.6355 26.3851 12.7127 25.5099 13.549C25.2043 13.8409 24.8581 14.0633 24.4611 14.1999C24.2955 14.2579 24.2492 14.3528 24.2376 14.5196C23.9158 18.9883 21.773 22.3149 17.9042 24.5295C15.7591 25.7573 13.416 26.1314 10.9804 25.9612C9.63404 25.8673 8.33749 25.5303 7.10807 24.9581C6.93096 24.8759 6.76541 24.8631 6.57788 24.9141C5.60662 25.1782 4.61452 25.338 3.60854 25.3206C2.85954 25.3079 2.10476 25.2731 1.37777 25.0473C1.1555 24.9778 0.942497 24.8874 0.753802 24.7496C-0.0264458 24.1751 -0.108638 23.1963 0.580156 22.4852C1.02932 22.0218 1.50048 21.5771 1.97511 21.1381C2.15339 20.9724 2.15686 20.8508 2.02373 20.6493C0.507225 18.3663 -0.151471 15.8447 0.0291207 13.1204C0.385673 7.77725 4.2163 3.36187 9.12121 2.15262C9.64562 2.02289 10.1781 1.92791 10.7153 1.87347C10.9213 1.85262 11.0371 1.77039 11.1471 1.60128C11.8718 0.491639 13.3593 0.303997 14.2785 1.19703C15.1548 2.04837 15.105 3.39662 14.1662 4.219C13.3257 4.95567 11.9204 4.78077 11.257 3.82403C11.0788 3.56689 10.8982 3.5275 10.6342 3.57268C6.8615 4.21437 4.12832 6.2877 2.61644 9.77066C1.049 13.3822 1.56299 16.8605 3.80765 20.0852C3.9512 20.2914 4.09243 20.4987 4.24755 20.6956C4.37142 20.8531 4.35174 20.9666 4.22556 21.123C3.63285 21.8643 2.93595 22.5048 2.2761 23.1813C2.20548 23.2531 2.10361 23.3064 2.08161 23.4373V23.4361Z"
            fill="white"
          />
        </svg>
        <span>
          {{ $t("home.headers.reservationServiceV2") }}
        </span>
      </nuxt-link>
      <div class="language">
        <div class="flex items-center nav-language-new group relative">
          <div class="nav-language-newV2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M20.8998 10.5228C20.9202 16.2664 16.2268 20.972 10.4122 20.95C4.70376 20.928 -0.0394135 16.2444 -0.000247449 10.407C0.0389186 4.64712 4.75435 0.0467371 10.4636 0.050001C16.2137 0.0532648 20.9365 4.76951 20.8998 10.5228ZM18.1051 10.8811C17.5551 10.8811 17.006 10.8762 16.456 10.8827C16.004 10.8884 16.0326 10.784 16.0162 11.3086C15.973 12.7194 15.7535 14.1008 15.3855 15.4594C15.3422 15.6177 15.3847 15.6805 15.5332 15.7221C16.3075 15.9367 17.0501 16.2329 17.7591 16.6099C17.897 16.6833 17.9721 16.6564 18.0627 16.5381C18.491 15.9833 18.8696 15.3974 19.1756 14.7658C19.7289 13.6235 20.0512 12.4191 20.136 11.1528C20.154 10.8843 20.1458 10.8802 19.8757 10.8802C19.285 10.8802 18.695 10.8802 18.1043 10.8802L18.1051 10.8811ZM2.78789 10.8811C2.16368 10.8811 1.53947 10.8819 0.914444 10.8802C0.796946 10.8802 0.713718 10.8949 0.732485 11.0467C0.762675 11.2882 0.774099 11.533 0.806737 11.7745C1.04745 13.5492 1.71816 15.1412 2.82705 16.5503C2.91844 16.6662 2.98943 16.6768 3.11427 16.6107C3.81926 16.2403 4.55363 15.9416 5.32226 15.7319C5.49688 15.6838 5.54094 15.621 5.48953 15.4366C5.09787 14.0192 4.88246 12.5734 4.8588 11.1022C4.85635 10.9382 4.81065 10.8762 4.6393 10.8786C4.02162 10.8868 3.40394 10.8819 2.78626 10.8819L2.78789 10.8811ZM18.0855 10.1304C18.7032 10.1304 19.3217 10.1279 19.9394 10.132C20.0862 10.1328 20.1548 10.0847 20.1393 9.93046C20.1189 9.7281 20.1164 9.5233 20.0895 9.32257C19.8463 7.53562 19.1895 5.92165 18.0725 4.49861C17.9688 4.36643 17.8962 4.33624 17.7428 4.42028C17.0672 4.78828 16.3524 5.06489 15.614 5.28112C15.3341 5.36353 15.3333 5.36516 15.4075 5.64259C15.6605 6.58094 15.8384 7.53235 15.9338 8.50008C15.9779 8.94641 15.9975 9.39274 16.0203 9.83989C16.035 10.1304 16.0489 10.1296 16.3328 10.1304C16.9171 10.1304 17.5005 10.1304 18.0847 10.1304H18.0855ZM2.7936 10.1304C3.39741 10.1304 4.00122 10.1238 4.60503 10.1344C4.79923 10.1377 4.86043 10.0765 4.86206 9.87987C4.86695 9.13327 4.94284 8.39238 5.05299 7.65393C5.15907 6.94894 5.30349 6.25293 5.49443 5.56671C5.52299 5.46308 5.56623 5.36516 5.39814 5.31865C4.5985 5.09671 3.82987 4.79154 3.09551 4.40396C2.98372 4.34521 2.91028 4.36969 2.83521 4.46516C2.19632 5.27622 1.68879 6.16073 1.33385 7.1309C1.00828 8.0203 0.804289 8.9358 0.74554 9.88477C0.733301 10.0814 0.770019 10.1353 0.96177 10.1328C1.57211 10.1247 2.18326 10.1296 2.7936 10.1296V10.1304ZM7.85174 10.8811C7.1802 10.8811 6.50785 10.8868 5.83632 10.8778C5.65354 10.8753 5.59479 10.9382 5.61029 11.1144C5.63151 11.3502 5.63559 11.5877 5.64783 11.8251C5.70903 13.0017 5.92362 14.1514 6.22553 15.2881C6.26306 15.4292 6.32426 15.4749 6.47032 15.4415C6.986 15.3248 7.50822 15.2415 8.03206 15.1706C8.63751 15.089 9.24621 15.0539 9.85573 15.0294C10.0401 15.022 10.076 14.9429 10.0752 14.7764C10.0695 13.555 10.0687 12.3335 10.0752 11.1128C10.076 10.9382 10.0295 10.8753 9.84676 10.8778C9.18175 10.8876 8.51674 10.8819 7.85174 10.8819V10.8811ZM10.8235 12.9291C10.8235 13.5329 10.8324 14.1375 10.8186 14.7414C10.8137 14.9527 10.8838 15.0376 11.0911 15.0376C11.3351 15.0376 11.5799 15.0433 11.823 15.0637C12.7018 15.1363 13.5757 15.2505 14.4382 15.4431C14.5491 15.4676 14.6144 15.4455 14.6479 15.3223C14.8584 14.5349 15.024 13.7402 15.1317 12.9316C15.2109 12.3326 15.2435 11.7305 15.2802 11.1283C15.2917 10.9439 15.2623 10.8753 15.0616 10.877C13.7307 10.8843 12.3999 10.8851 11.0691 10.877C10.8643 10.8753 10.8178 10.9496 10.8202 11.1373C10.8292 11.7345 10.8235 12.3318 10.8235 12.9291ZM7.84439 10.1304C8.5094 10.1304 9.17522 10.1255 9.84023 10.1336C10.0157 10.1353 10.0769 10.0822 10.076 9.90109C10.0695 8.67225 10.0687 7.44423 10.076 6.21539C10.0769 6.03099 10.0132 5.98285 9.84023 5.98693C9.30333 5.99835 8.77051 5.93552 8.23769 5.87759C7.64367 5.81313 7.05536 5.71684 6.47195 5.58792C6.35853 5.56263 6.27204 5.55447 6.23042 5.7095C5.86406 7.07052 5.64456 8.45276 5.61356 9.86355C5.60785 10.123 5.61519 10.1304 5.86814 10.1304C6.52662 10.1312 7.1851 10.1304 7.84358 10.1304H7.84439ZM13.0665 10.1304C13.7389 10.1304 14.4112 10.1304 15.0836 10.1304C15.1888 10.1304 15.3047 10.1353 15.2819 9.97779C15.237 9.6669 15.2704 9.35276 15.2403 9.0427C15.1342 7.95421 14.9677 6.87632 14.6772 5.82047C14.603 5.55039 14.6087 5.54957 14.3223 5.60832C13.2436 5.82945 12.1551 5.97713 11.0527 5.98774C10.8724 5.98937 10.8202 6.04975 10.821 6.22519C10.8267 7.44749 10.8275 8.6698 10.821 9.89211C10.8202 10.083 10.8887 10.1377 11.0707 10.1353C11.7365 10.1271 12.4015 10.132 13.0674 10.132L13.0665 10.1304ZM10.0728 3.03886C10.0728 2.38773 10.0728 1.73577 10.0728 1.08464C10.0728 0.815371 10.0663 0.810476 9.79535 0.883912C9.27885 1.02344 8.83823 1.29842 8.44983 1.65826C7.54575 2.49706 7.0064 3.56352 6.56578 4.69118C6.51356 4.825 6.58129 4.84866 6.69389 4.87232C7.73179 5.09019 8.77867 5.22156 9.84023 5.24114C10.0173 5.2444 10.0793 5.19463 10.0769 5.01267C10.0679 4.35419 10.0736 3.69653 10.0736 3.03805L10.0728 3.03886ZM10.0728 17.9758C10.0728 17.3173 10.0654 16.6597 10.0769 16.0012C10.0801 15.8037 10.0083 15.754 9.82799 15.7695C9.4502 15.8021 9.06997 15.8176 8.69218 15.8511C8.01003 15.9123 7.3336 16.0159 6.66288 16.1579C6.54538 16.1823 6.51683 16.224 6.5666 16.3349C6.63596 16.4891 6.68981 16.6507 6.75753 16.8066C7.15327 17.7221 7.63469 18.5845 8.36008 19.2854C8.77948 19.691 9.25682 20.01 9.83534 20.1495C10.0581 20.2034 10.0711 20.1952 10.072 19.9708C10.0728 19.3058 10.072 18.6408 10.072 17.9758H10.0728ZM10.8243 3.0201C10.8243 3.6851 10.8275 4.35011 10.8218 5.01512C10.8202 5.17831 10.87 5.24359 11.0438 5.24114C12.1053 5.22564 13.1514 5.08447 14.1909 4.87477C14.3288 4.84703 14.359 4.79889 14.3092 4.66997C13.9176 3.64838 13.4239 2.68555 12.6659 1.88265C12.231 1.42245 11.7267 1.06179 11.1066 0.88636C10.8406 0.811292 10.8251 0.819451 10.8251 1.08545C10.8251 1.73006 10.8251 2.37467 10.8251 3.0201H10.8243ZM10.8243 17.9554C10.8243 18.6204 10.8243 19.2846 10.8243 19.9496C10.8243 20.1944 10.8439 20.2091 11.0846 20.143C11.6974 19.9741 12.1984 19.6232 12.6349 19.1728C13.3946 18.3879 13.8792 17.4373 14.2742 16.4337C14.3713 16.1881 14.3696 16.1921 14.115 16.1375C13.1114 15.9229 12.0939 15.8274 11.0715 15.7703C10.8896 15.7605 10.8169 15.807 10.8202 16.002C10.83 16.6532 10.8243 17.3043 10.8243 17.9554ZM12.98 19.8697C13.0135 19.8729 13.0266 19.8786 13.038 19.8754C14.6732 19.4168 16.0946 18.5919 17.303 17.3981C17.4213 17.2814 17.3895 17.2333 17.2581 17.1705C16.6323 16.8718 15.9885 16.623 15.3235 16.4239C15.1554 16.3733 15.0836 16.4059 15.0297 16.5748C14.8094 17.2643 14.483 17.9032 14.0865 18.5078C13.7666 18.9958 13.3978 19.4446 12.9809 19.8697H12.98ZM7.89253 1.1646C7.84847 1.15726 7.8346 1.15073 7.82318 1.15399C6.19942 1.61991 4.78128 2.43913 3.57855 3.62799C3.46921 3.73651 3.47248 3.78547 3.61609 3.85319C4.24927 4.15102 4.89633 4.41049 5.57031 4.60306C5.72534 4.64712 5.79633 4.62672 5.85019 4.46108C6.07458 3.7667 6.40504 3.12209 6.80404 2.51094C7.11656 2.03278 7.47721 1.5938 7.89253 1.16542V1.1646ZM7.86724 19.8656C6.94276 18.8889 6.24674 17.7841 5.82734 16.512C5.78083 16.3708 5.69923 16.3871 5.59153 16.419C4.91183 16.6156 4.25417 16.8661 3.61772 17.177C3.45045 17.2586 3.48472 17.3141 3.59161 17.4177C4.12117 17.9285 4.69152 18.3863 5.31655 18.7746C6.11048 19.2683 6.96071 19.6322 7.86724 19.8664V19.8656ZM12.989 1.14012C13.0363 1.20948 13.0486 1.23396 13.0665 1.25273C13.9796 2.18618 14.6364 3.27631 15.0542 4.51004C15.1032 4.65446 15.1848 4.63651 15.29 4.60551C15.9559 4.41131 16.6021 4.16652 17.2287 3.86706C17.3993 3.78547 17.4001 3.72835 17.2712 3.60024C16.474 2.80468 15.5617 2.17639 14.5434 1.7015C14.0587 1.47548 13.5594 1.28455 12.989 1.14012Z"
                fill="#6D6E71"
              />
            </svg>
            <span v-if="$i18n.locale == 'hk'"  > 繁體中文 </span>
            <span v-if="$i18n.locale == 'cn'"  > 簡體中文 </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
            >
              <path d="M1 1L5.5 6L10 1" stroke="#6D6E71" />
            </svg>
          </div>

          <ul class="language-list">
            <li @click="handleLang('hk')" v-if="$i18n.locale != 'hk'">繁體中文</li>
            <li @click="handleLang('cn')" v-if="$i18n.locale != 'cn'">簡體中文</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div v-for="item in menuList" :key="item.id">
        <nuxt-link
          :to="item.path"
          :class="[item.childType ? 'child-menu' : '']"
          >{{ item.name }}</nuxt-link
        >
        <div :class="[item.childType ? 'child-menu-list' : '']">
          <div v-for="child in item.childList" :key="child.id">
            <nuxt-link :to="child.path == '' ? '/' : child.path">{{
              child.name
            }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMobile: false,
      whatsappLink:"https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-G01)%20%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5/%E7%9F%AF%E8%A6%96%E8%AC%9B%E5%BA%A7",
      menuList: [
        {
          id: 1,
          path: "",
          name: this.$t("home.headers.aboutSmile"),
          childType: true,
          childList: [
            {
              id: 1,
              path: "/group-profile",
              name: this.$t("home.headers.aboutSmileChild_1"),
            },
            {
              id: 2,
              path: "/our-medical-team",
              name: this.$t("home.headers.aboutSmileChild_2"),
            },
            {
              id: 3,
              path: "/medical-equipment",
              name: this.$t("home.headers.aboutSmileChild_3"),
            },
          ],
        },
        {
          id: 2,
          path: "",
          name: this.$t("home.headers.orthopedicServices"),
          childType: true,
          childList: [
            {
              id: 2,
              path: "/smilePro",
              name: this.$t("home.headers.orthopedicServicesChild_5"),
            },
            {
              id: 5,
              path: "/vision-correction-icl",
              name: this.$t("home.headers.orthopedicServicesChild_4"),
            },
            {
              id: 1,
              path: "/vision-correction/relex-smile",
              name: this.$t("home.headers.orthopedicServicesChild_1"),
            },
            {
              id: 3,
              path: "/vision-correction-presbyopia",
              name: this.$t("home.headers.orthopedicServicesChild_2"),
            },
            {
              id: 4,
              path: "/vision-correction-lasik",
              name: this.$t("home.headers.orthopedicServicesChild_3"),
            },
          ],
        },
        {
          id: 3,
          path: "/patient-info",
          name: this.$t("home.headers.diagnosisInstructions"),
          childType: true,
          childList: [
            {
              id: 1,
              name: this.$t("home.headers.diagnosisInstructionsChild_1"),
              path: "/patient-info",
            },
            {
              id: 1,
              name: this.$t("home.headers.diagnosisInstructionsChild_2"),
              path: "/flow-of-vision-correction",
            },
            {
              id: 1,
              name: this.$t("home.headers.diagnosisInstructionsChild_3"),
              path: "/post-corrective-care",
            },
          ],
        },
        {
          id: 4,
          path: "/fee",
          name: this.$t("home.headers.feeConsultation"),
          childType: false,
        },
        {
          id: 5,
          path: "",
          name: this.$t("home.headers.commonProblem"),
          childType: true,
          childList: [
            {
              id: 1,
              path: "/FreQuestions#faq-smile",
              name: this.$t("home.headers.commonProblemChild_1"),
            },
            {
              id: 2,
              path: "/FreQuestions#faq-lasik",
              name: this.$t("home.headers.commonProblemChild_2"),
            },
            {
              id: 3,
              path: "/FreQuestions#faq-icl",
              name: this.$t("home.headers.commonProblemChild_3"),
            },
            {
              id: 4,
              path: "/FreQuestions#faq-presbyopia",
              name: this.$t("home.headers.commonProblemChild_4"),
            },
          ],
        },
        {
          id: 7,
          path: "",
          name: this.$t("home.headers.feign"),
          childType: true,
          childList: [
            {
              id: 1,
              path: "/video",
              name: this.$t("home.headers.casesSharing"),
            },
            {
              id: 2,
              path: "/blog",
              name: this.$t("home.headers.feign_knowledge"),
            },
          ],
        },
        {
          id: 6,
          path: "/contact-us",
          name: this.$t("home.headers.contactUs"),
          childType: false,
        },
      ],
    };
  },
  methods: {
    handleLang(_type) {
      console.log("当前的语言类型： --->", this.$i18n.locale);
      if (this.$i18n.locale === _type) return;
      console.log("点击的语言类型： --->", _type);
      // console.log('路径打印',this.switchLocalePath(_type))
      let _path = this.switchLocalePath(_type);
      localStorage.setItem("lang", _type);
      console.log("准备跳转的路径： --->", _path);
      this.$router.push(_path);
      var _text = "";
      if (_type === "cn") {
        _text = "Microsoft YaHei";
      } else _text = "Noto Sans HK";
      console.log("准备设置的字体： ===>", _text);
      // console.log(document.documentElement.style)
      document.documentElement.style.setProperty("--font_family", _text); //var(--font_family)
      var htmlElement = document.documentElement;

      // 更改lang属性
      htmlElement.setAttribute("lang", "zh-CN");
    },
  },

  mounted() {
      //  console.log(this.$route.path);
      //  if (this.$route.path.includes("/vision-correction-icl")) {
   
      //   this.whatsappLink="https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-05)%20SMILE%20Pro%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2"
      // }
    // 获取屏幕宽度
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });

    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
@media screen and (min-width: 768px) {
  .language-list {
    position: absolute;
    background: #fff;
    z-index: 10;
    overflow: hidden;
    & > li {
      min-width: 80px;
      display: flex;
      justify-content: center;
  color: #6D6E71;
text-align: center;
font-family: "Noto Sans TC";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 1.8px;
    }
    & > li:hover {
     background: #4471b7;
     color: white;
    }
  }
  .HeaderRight {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .header-top {
    display: flex;
    & > div {
      display: flex;
      align-items: center;
      margin-left: 20px;
    }
    // & > a:nth-child(1) {
    //   display: flex;
    //   align-items: center;
    //   & > div:nth-child(1) {
    //     margin-right: 3px;
    //     display: flex;
    //     align-items: center;
    //   }
    //   color: #6d6e71;
    //   text-align: center;
    //   font-family: "Noto Sans HK";
    //   font-size: 20px;
    //   font-style: normal;
    //   font-weight: 400;
    //   line-height: normal;
    //   letter-spacing: 3px;
    // }
    .header-top-whatsapp {
      cursor: pointer;
      border-radius: 30px;
      background: #67ad5b;
      padding: 6px 24px 7px 21px;
      display: flex;
      align-items: center;
      gap: 5px;
      justify-content: space-between;
      span {
        letter-spacing: normal;
        color: #fff;
        text-align: center;
        font-family: "Noto Sans TC" !important;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
    & > a:nth-child(2) {
      margin-left: 16px;
      cursor: pointer;
      padding: 6px 31px 9px 26px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
         letter-spacing: normal;
      color: #fff;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      background: #4570b6;
      border-radius: 50px;
    }
    & > a:nth-child(2):hover {
      box-shadow: 0px 0px 5px 2px #adadad;
    }
  }

  .nav-language-newV2 {
    height: 100%;
    span {
        display: inline-block;
        margin-left: 8px;
        margin-right: 12px;
      color: #6d6e71;
      text-align: center;
      font-family: "Noto Sans TC";
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.8px;
    }
  }

  .header-bottom {
    display: flex;
    margin-top: 34px;
    & > div {
      margin-left: 25px;
      position: relative;
      a {
        width: 100%;
        display: block;
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 2.4px;
      }
    }
    & > div:hover {
      & > a {
        color: #4570b6;
        cursor: pointer;
      }
      .child-menu-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
  .child-menu {
    position: relative;
    color: #6d6e71;
    text-align: center;
    font-family: "Noto Sans TC";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2.4px;
    padding-bottom: 10px;
  }
  .child-menu::after {
    content: "";
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    width: 5px;
    height: 5px;
    background: #4570B6;
    border-radius: 50%;
  }
  .child-menu-list {
    display: none;
    position: absolute;
    background: #fff;
    width: max-content;
    & > div {
      & > a {
        display: block;
        padding: 20px 20px;
        width: 100%;
        box-sizing: border-box;
        text-align: left;
      }
    }
  }
  .child-menu-list {
    & > div {
      width: 100%;
    }
    a {
      color: #6d6e71;
      font-family: "Noto Sans TC";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 2.4px;
      text-align: left;
    }
    a:hover {
      color: #fff;
      background: #4471b7;
    }
  }
  .language {
    cursor: pointer;
    position: relative;
  }

  .language:hover {
    .language-list {
      position: absolute;
      top: 20px;
      display: flex;
      flex-direction: column;
    //   background: #fff;
      left: 17px;
    //   left: 50%;
    //   transform: translateX(-50%);
      & > div {
        padding: 10px 20px;
        width: max-content;
      }
      & > div:hover {
        background: #4471b7;
        color: #fff;
      }
    }
  }
  .language-list {
    display: none;
  }
}
@media screen and (max-width: 767px) {
  .HeaderRight {
    display: flex;
    width: 100%;
  }
}
</style>