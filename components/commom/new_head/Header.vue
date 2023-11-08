<template>
  <div class="head_width">
    <div class="section_header px-0">
      <div class="header flex-between">
        <div class="left">
          <nuxt-link :to="localePath('/')">
            <img class="head_logo" src="@/asset/image/common/Logo.svg" alt=""
          /></nuxt-link>
        </div>
        <div class="mbShow mbHeaderBox mb_menu">
          <img
            src="../../../asset/image/common/lau.svg"
            class="mr-5"
            alt=""
            @click="langDrawer = true"
          />
          <div @click="drawer = true"><i></i><i></i><i></i></div>
        </div>
        <!-- <div class="right flex link_more link_pc_more">
          <ul class="social_list flex gap-4 md:gap-7">
            <li v-for="(socialInfoItem, index) in socialInfoList" :key="index">
              <a :href="socialInfoItem.link"
                ><img :src="socialInfoItem.img" alt=""
              /></a>
            </li>
          </ul>

          <ul class="language_list hidden items-center md:flex gap-4">
            <li v-for="(languageItme, index) in languageList" :key="index">
              <a class="text-base" href="">{{ languageItme.text }}</a>
            </li>
          </ul>
        </div> -->
      </div>
      <div class="md:flex items-center pcShow">
        <div
          class="nav_bar section hidden md:flex md:justify-between items-center"
        >
          <!-- gsap   移动动画-->
          <!-- gsap   移动动画 end-->
          <ul
            class="nav md:flex md:justify-around grid"
            :class="[$i18n.locale == 'en' ? 'gap-0 pl-8' : 'gap-8 pl-0']"
          >
            <div class="menu-line"></div>

            <li
              v-for="(navItem, index) in navList"
              :key="index"
              class="nav_item text-lg md:flex flex-col"
              :class="navItem.child_list.length !== 0 ? 'main_after' : ''"
            >
              <nuxt-link
                :to="localePath(navItem.link)"
                :class="
                  navItem.child_list.length !== 0
                    ? 'main_nav_after'
                    : 'main_nav'
                "
              >
                <div class="mian_nav_text font-black">
                  {{ navItem.main_nav }}
                </div>
              </nuxt-link>

              <ul
                :style="{ top: $i18n.locale == 'en' ? '36px' : '20px' }"
                class="child_nav flex flex-col"
                v-if="navItem.child_list.length > 0"
              >
                <li
                  v-for="(childItem, childIndex) in navItem.child_list"
                  :key="childIndex"
                >
                  <nuxt-link
                    :to="localePath(childItem.link)"
                    class="text-base"
                    >{{ `· ` + childItem.child_item }}</nuxt-link
                  >
                </li>
                <li></li>
              </ul>
            </li>
          </ul>
          <div class="new_header">
<!--            <a :href="localePath('/booking')" target="_blank" class="new_about"-->
<!--              >預約服務</a-->
<!--            >-->
            <div class="pcShow discounts-contact">
              <a :href="localePath('/booking')" target="_blank">
                <button class="link_more shadow-lg">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div class="flex items-center justify-evenly">
                    <div class="text-left">
                      <h3 class="text-xs font-normal text-center discounts-h3">
                        立&nbsp;即&nbsp;預&nbsp;約
                      </h3>
                    </div>
                  </div>
                </button>
              </a>
            </div>

            <div class="new_a_div">
              <a href="https://www.facebook.com/CMER.SMILE">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                >
                  <path
                    d="M26 13.5C26 6.04415 20.1797 0 13 0C5.82029 0 0 6.04415 0 13.5C0 20.2381 4.75389 25.8232 10.9688 26.836V17.4023H7.66797V13.5H10.9688V10.5258C10.9688 7.14234 12.9096 5.27344 15.879 5.27344C17.3009 5.27344 18.7891 5.53711 18.7891 5.53711V8.85938H17.1498C15.535 8.85938 15.0313 9.90009 15.0313 10.9688V13.5H18.6367L18.0604 17.4023H15.0313V26.836C21.2461 25.8232 26 20.2381 26 13.5Z"
                    fill="#4570B6"
                  />
                </svg>
              </a>
              <a href="https://www.instagram.com/cmer_smile/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <path
                    d="M13.5 2.43105C17.107 2.43105 17.5342 2.44687 18.9527 2.51016C20.2711 2.56816 20.983 2.78965 21.4576 2.97422C22.0852 3.2168 22.5387 3.51211 23.008 3.98145C23.4826 4.45605 23.7727 4.9043 24.0152 5.53184C24.1998 6.00645 24.4213 6.72363 24.4793 8.03672C24.5426 9.46055 24.5584 9.8877 24.5584 13.4895C24.5584 17.0965 24.5426 17.5236 24.4793 18.9422C24.4213 20.2605 24.1998 20.9725 24.0152 21.4471C23.7727 22.0746 23.4773 22.5281 23.008 22.9975C22.5334 23.4721 22.0852 23.7621 21.4576 24.0047C20.983 24.1893 20.2658 24.4107 18.9527 24.4688C17.5289 24.532 17.1018 24.5479 13.5 24.5479C9.89297 24.5479 9.46582 24.532 8.04727 24.4688C6.72891 24.4107 6.01699 24.1893 5.54238 24.0047C4.91484 23.7621 4.46133 23.4668 3.99199 22.9975C3.51738 22.5229 3.22734 22.0746 2.98477 21.4471C2.8002 20.9725 2.57871 20.2553 2.5207 18.9422C2.45742 17.5184 2.4416 17.0912 2.4416 13.4895C2.4416 9.88242 2.45742 9.45527 2.5207 8.03672C2.57871 6.71836 2.8002 6.00645 2.98477 5.53184C3.22734 4.9043 3.52266 4.45078 3.99199 3.98145C4.4666 3.50684 4.91484 3.2168 5.54238 2.97422C6.01699 2.78965 6.73418 2.56816 8.04727 2.51016C9.46582 2.44687 9.89297 2.43105 13.5 2.43105ZM13.5 0C9.83496 0 9.37617 0.0158203 7.93652 0.0791016C6.50215 0.142383 5.51602 0.374414 4.66172 0.706641C3.77051 1.05469 3.01641 1.51348 2.26758 2.26758C1.51348 3.01641 1.05469 3.77051 0.706641 4.65645C0.374414 5.51602 0.142383 6.49687 0.0791016 7.93125C0.0158203 9.37617 0 9.83496 0 13.5C0 17.165 0.0158203 17.6238 0.0791016 19.0635C0.142383 20.4979 0.374414 21.484 0.706641 22.3383C1.05469 23.2295 1.51348 23.9836 2.26758 24.7324C3.01641 25.4813 3.77051 25.9453 4.65645 26.2881C5.51602 26.6203 6.49688 26.8523 7.93125 26.9156C9.3709 26.9789 9.82969 26.9947 13.4947 26.9947C17.1598 26.9947 17.6186 26.9789 19.0582 26.9156C20.4926 26.8523 21.4787 26.6203 22.333 26.2881C23.2189 25.9453 23.973 25.4813 24.7219 24.7324C25.4707 23.9836 25.9348 23.2295 26.2775 22.3436C26.6098 21.484 26.8418 20.5031 26.9051 19.0688C26.9684 17.6291 26.9842 17.1703 26.9842 13.5053C26.9842 9.84023 26.9684 9.38145 26.9051 7.9418C26.8418 6.50742 26.6098 5.52129 26.2775 4.66699C25.9453 3.77051 25.4865 3.01641 24.7324 2.26758C23.9836 1.51875 23.2295 1.05469 22.3436 0.711914C21.484 0.379687 20.5031 0.147656 19.0688 0.084375C17.6238 0.0158203 17.165 0 13.5 0Z"
                    fill="#4570B6"
                  />
                  <path
                    d="M13.501 6.56543C9.67246 6.56543 6.56641 9.67148 6.56641 13.5C6.56641 17.3285 9.67246 20.4346 13.501 20.4346C17.3295 20.4346 20.4355 17.3285 20.4355 13.5C20.4355 9.67148 17.3295 6.56543 13.501 6.56543ZM13.501 17.9982C11.0172 17.9982 9.00273 15.9838 9.00273 13.5C9.00273 11.0162 11.0172 9.00176 13.501 9.00176C15.9848 9.00176 17.9992 11.0162 17.9992 13.5C17.9992 15.9838 15.9848 17.9982 13.501 17.9982Z"
                    fill="#4570B6"
                  />
                  <path
                    d="M22.3277 6.29131C22.3277 7.1878 21.6 7.91026 20.7088 7.91026C19.8123 7.91026 19.0898 7.18252 19.0898 6.29131C19.0898 5.39483 19.8176 4.67236 20.7088 4.67236C21.6 4.67236 22.3277 5.4001 22.3277 6.29131Z"
                    fill="#4570B6"
                  />
                </svg>
              </a>
              <a href="https://www.youtube.com/@cmersmileeyecenter6303">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="20"
                  viewBox="0 0 26 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.6163 1.44974C25.0197 1.87135 25.3094 2.39559 25.4564 2.97C26 5.09011 26 9.51136 26 9.51136C26 9.51136 26 13.9326 25.4564 16.0527C25.3094 16.6271 25.0197 17.1514 24.6163 17.573C24.2129 17.9946 23.7099 18.2988 23.1577 18.4551C21.125 19.0227 13 19.0227 13 19.0227C13 19.0227 4.875 19.0227 2.84227 18.4551C2.29009 18.2988 1.78713 17.9946 1.38373 17.573C0.980326 17.1514 0.690631 16.6271 0.543636 16.0527C0 13.9326 0 9.51136 0 9.51136C0 9.51136 0 5.09011 0.543636 2.97C0.690631 2.39559 0.980326 1.87135 1.38373 1.44974C1.78713 1.02813 2.29009 0.723939 2.84227 0.567614C4.875 0 13 0 13 0C13 0 21.125 0 23.1577 0.567614C23.7099 0.723939 24.2129 1.02813 24.6163 1.44974ZM17.1392 9.5113L10.3438 5.49658V13.526L17.1392 9.5113Z"
                    fill="#4570B6"
                  />
                </svg>
              </a>
            </div>
            <!-- <div>
              <img src="https://static.cmereye.com/imgs/2023/08/88c40669a540c35c.png" alt="+85260610511" />
            </div> -->
          </div>
          <nuxt-link
            style="display: none"
            :to="localePath('/booking')"
            class="text-base ll_box nav-bookingservice pcShow"
            >{{ $t("home.headers.reservationService") }}</nuxt-link
          >
          <div class="flex items-center nav-language-new group relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M13 0C10.4289 0 7.91543 0.762422 5.7776 2.19088C3.63976 3.61934 1.97351 5.64967 0.98957 8.02511C0.00563168 10.4005 -0.25181 13.0144 0.249797 15.5362C0.751405 18.0579 1.98953 20.3743 3.80761 22.1924C5.62569 24.0105 7.94208 25.2486 10.4638 25.7502C12.9856 26.2518 15.5994 25.9944 17.9749 25.0104C20.3503 24.0265 22.3806 22.3602 23.8091 20.2224C25.2376 18.0846 26 15.5712 26 13C26 9.55218 24.6303 6.24558 22.1924 3.80761C19.7544 1.36964 16.4478 0 13 0ZM24.1731 12.0763H19.2811C19.1579 8.02578 18.2137 4.55 16.77 2.42211C18.8011 3.1499 20.5796 4.44747 21.8925 6.15961C23.2054 7.87174 23.9972 9.92591 24.1731 12.0763ZM13 24.18C10.9474 24.18 8.72367 19.9926 8.5184 13.8758H17.4816C17.2832 20.02 15.0321 24.2074 13 24.2074V24.18ZM8.5184 12.0763C8.72367 5.95947 10.9748 1.7721 13 1.7721C15.0253 1.7721 17.2832 5.95947 17.4816 12.0763H8.5184ZM9.23686 2.42211C7.79318 4.58422 6.84894 8.02578 6.72578 12.0763H1.8337C2.01471 9.93074 2.80882 7.88245 4.1214 6.1756C5.43399 4.46875 7.2097 3.17532 9.23686 2.44946V2.42211ZM1.8337 13.8758H6.69842C6.82158 17.9263 7.76578 21.3679 9.20946 23.53C7.18788 22.7991 5.41842 21.5037 4.11105 19.7973C2.80368 18.0909 2.0133 16.0453 1.8337 13.9032V13.8758ZM16.77 23.53C18.2137 21.3679 19.1579 17.9263 19.2811 13.8758H24.1731C24.0014 16.0308 23.2116 18.0904 21.8985 19.8077C20.5854 21.525 18.8046 22.8269 16.77 23.5574V23.53Z"
                fill="#4570B6"
              />
            </svg>
            <ul
              class="nav-language-box absolute top-5 hidden group-hover:block -left-5"
            >
              <!-- <li><a href="###">繁</a> </li>
              <li><a href="###">简</a> </li> -->
              <!-- <li :class="$i18n.locale === 'hk' ? 'langBoxClass' : ''">
                <nuxt-link :to="switchLocalePath('hk')" class="w-full h-full block">繁</nuxt-link>
              </li>
              <li :class="$i18n.locale === 'cn' ? 'langBoxClass' : ''">
                <nuxt-link :to="switchLocalePath('cn')" class="w-full h-full block">简</nuxt-link>
              </li> -->
              <li @click="handleLang('hk')">
                繁
                <!-- <nuxt-link :to="switchLocalePath('hk')" class="w-full h-full block">繁</nuxt-link> -->
              </li>
              <li @click="handleLang('cn')">
                简
                <!-- <nuxt-link :to="switchLocalePath('cn')" class="w-full h-full block">简</nuxt-link> -->
              </li>
              <!-- <li @click="handleLang('en')"> -->
              <!-- Eng -->
              <!-- <nuxt-link :to="switchLocalePath('cn')" class="w-full h-full block">简</nuxt-link> -->
              <!-- </li> -->
            </ul>
          </div>
          <div class="menu_pc" @click="menuList = true">
            <div><i></i><i></i><i></i></div>
          </div>
        </div>
        <!-- 右边悬浮按钮 -->
        <div class="sidebar_contact">
          <div>
            <a :href="localePath('/icl-event')">
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="93"
                  height="60"
                  viewBox="0 0 93 60"
                  fill="none"
                >
                  <path
                    d="M5.90593 9.12586C6.37012 9.12586 6.74642 8.74709 6.74642 8.27985C6.74642 7.81261 6.37012 7.43384 5.90593 7.43384C5.44173 7.43384 5.06543 7.81261 5.06543 8.27985C5.06543 8.74709 5.44173 9.12586 5.90593 9.12586Z"
                    stroke="#4570B6"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M87.2193 51.7213C87.6835 51.7213 88.0598 51.3425 88.0598 50.8753C88.0598 50.4081 87.6835 50.0293 87.2193 50.0293C86.7552 50.0293 86.3788 50.4081 86.3788 50.8753C86.3788 51.3425 86.7552 51.7213 87.2193 51.7213Z"
                    stroke="#4570B6"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M46.4066 51.5642C58.4864 51.5642 68.279 41.7073 68.279 29.5483C68.279 17.3892 58.4864 7.53235 46.4066 7.53235C34.3267 7.53235 24.5341 17.3892 24.5341 29.5483C24.5341 41.7073 34.3267 51.5642 46.4066 51.5642Z"
                    stroke="#A6E1D6"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M77.153 3.87268C82.8997 10.8375 86.3594 19.7895 86.3594 29.5678C86.3594 39.3461 82.9388 48.1997 77.2312 55.1448"
                    stroke="#A6E1D6"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15.66 55.2433C9.91339 48.2785 6.45367 39.3265 6.45367 29.5482C6.45367 19.7699 9.8743 10.9163 15.5819 3.97119"
                    stroke="#A6E1D6"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M21.3284 30.3942C21.7926 30.3942 22.1689 30.0154 22.1689 29.5482C22.1689 29.0809 21.7926 28.7021 21.3284 28.7021C20.8642 28.7021 20.4879 29.0809 20.4879 29.5482C20.4879 30.0154 20.8642 30.3942 21.3284 30.3942Z"
                    stroke="#4570B6"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M71.4842 30.3942C71.9484 30.3942 72.3247 30.0154 72.3247 29.5482C72.3247 29.0809 71.9484 28.7021 71.4842 28.7021C71.02 28.7021 70.6437 29.0809 70.6437 29.5482C70.6437 30.0154 71.02 30.3942 71.4842 30.3942Z"
                    stroke="#4570B6"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M71.6407 3.9317C71.6407 3.9317 70.1357 5.87949 63.2162 5.87949C56.2968 5.87949 54.4204 3.87268 47.2273 3.87268C40.0342 3.87268 38.1577 5.87949 31.2383 5.87949C24.3189 5.87949 22.8138 3.9317 22.8138 3.9317"
                    stroke="#4570B6"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M71.6407 55.3023C71.6407 55.3023 70.1357 53.3545 63.2162 53.3545C56.2968 53.3545 54.4204 55.3613 47.2273 55.3613C40.0342 55.3613 38.1577 53.3545 31.2383 53.3545C24.3189 53.3545 22.8138 55.3023 22.8138 55.3023"
                    stroke="#4570B6"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M90.9136 47.6289C90.9136 47.6289 90.8745 47.5896 90.8354 47.5305C90.8159 47.4912 90.7768 47.4518 90.7572 47.4322C90.2295 46.7042 88.5289 44.0875 88.5289 39.9558C88.5289 35.0371 88.4116 29.5676 88.4116 29.5676C88.4116 29.5676 88.5289 24.0784 88.5289 19.1794C88.5289 15.0477 90.2295 12.431 90.7572 11.703C90.7768 11.6637 90.8159 11.644 90.8354 11.6046C90.894 11.5456 90.9136 11.5063 90.9136 11.5063V11.4866C91.5 10.6996 91.8518 9.71587 91.8518 8.65344C91.8518 6.01704 89.7212 3.8725 87.102 3.8725C67.9465 4.34469 58.7793 2.33788 58.7793 2.33788C55.5736 1.51154 51.2148 1 46.4259 1C41.637 1 37.2782 1.51154 34.0726 2.33788C34.0726 2.33788 24.9053 4.34469 5.74978 3.8725C3.13056 3.8725 1 6.01704 1 8.65344C1 9.71587 1.35184 10.6996 1.93823 11.4866V11.5063C1.93823 11.5063 1.97732 11.5456 2.01641 11.6046C2.03596 11.644 2.07505 11.6833 2.0946 11.703C2.62235 12.431 4.32289 15.0477 4.32289 19.1794C4.32289 24.098 4.44017 29.5676 4.44017 29.5676C4.44017 29.5676 4.32289 35.0568 4.32289 39.9558C4.32289 44.0875 2.62235 46.7042 2.0946 47.4322C2.07505 47.4715 2.03596 47.4912 2.01641 47.5305C1.95778 47.5896 1.93823 47.6289 1.93823 47.6289V47.6486C1.35184 48.4356 1 49.4193 1 50.4817C1 53.1181 3.13056 55.2627 5.74978 55.2627C24.9053 54.7905 34.0726 56.7973 34.0726 56.7973C37.2782 57.6236 41.637 58.1352 46.4259 58.1352C51.2148 58.1352 55.5736 57.6236 58.7793 56.7973C58.7793 56.7973 67.9465 54.7905 87.102 55.2627C89.7212 55.2627 91.8518 53.1181 91.8518 50.4817C91.8518 49.4193 91.5 48.4356 90.9136 47.6289Z"
                    stroke="#4570B6"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div>
                <span>ICL<br />星級矯視講座</span>
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send/?phone=85260610511"
              target="_blank"
            >
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/10/8b12264e93b22e9c.png"
                  class="p-1"
                />
              </div>
              <div><span>了解更多</span></div>
            </a>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send/?phone=85260610511"
              target="_blank"
            >
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/10/09c8d2399ccf421a.png"
                  class="p-1"
                />
              </div>
              <div><span>快速預約</span></div>
            </a>
          </div>
          <div>
            <a :href="localePath('/divit')">
              <div class="divit-pc">
                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="79" viewBox="0 0 67 79" fill="none">
                  <g clip-path="url(#clip0_4326_2094)">
                    <path d="M0.822289 45.5136V65.1909L22.9747 77.7719L66.1777 52.0672V26.527L22.9747 0.822266L0.822289 13.4033V33.5246" stroke="#4570B6" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M0.822289 33.5247H22.2429V25.9761L42.4794 39.7412" stroke="#A6E1D6" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M0.822289 45.5136H22.2429V53.0622C28.9856 48.6219 35.7366 44.1815 42.4794 39.7494" stroke="#A6E1D6" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_4326_2094">
                      <rect width="67" height="78.5943" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div><span>了解<br /> Divit贏里數</span></div>
            </a>
          </div>
          <div>
            <a :href="localePath('/consumption-voucher')">
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/10/25ef70fdd54019c0.png"
                  class="p-1"
                />
              </div>
              <div><span>消費券優惠</span></div>
            </a>
          </div>
        </div>

        <!-- <div class="contact-coupon">
          <nuxt-link :to="'/charge-detail'">
            <div class="couponBox">
              <div class="couponBox-l">
                <img src="@/asset/image/common/Layer_1.png" alt="">
              </div>
              <div class="couponBox-r">
                <span>了解</span>
                <span>消費券優惠</span>
              </div>
            </div>
          </nuxt-link>
        </div> -->
      </div>
      <el-drawer
        class="drawers"
        :visible.sync="menuList"
        v-show="menuList"
        direction="ttb"
        :with-header="false"
        size="65%"
        :modal="false"
        :wrapperClosable="true"
      >
        <div>
          <div class="header header_drawer flex-between">
            <div class="left">
              <nuxt-link :to="localePath('/')">
                <img
                  class="head_logo"
                  src="@/asset/image/common/Logo.svg"
                  alt=""
              /></nuxt-link>
            </div>
            <div class="md:flex items-center pcShow">
              <div
                class="nav_bar section hidden md:flex md:justify-between items-center"
              >
                <div class="new_header">
                  <a href="tel: +85260610511" target="_blank" class="new_about"
                    >預約服務</a
                  >
                  <div class="new_a_div">
                    <a href="https://www.facebook.com/CMER.SMILE">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="27"
                        viewBox="0 0 26 27"
                        fill="none"
                      >
                        <path
                          d="M26 13.5C26 6.04415 20.1797 0 13 0C5.82029 0 0 6.04415 0 13.5C0 20.2381 4.75389 25.8232 10.9688 26.836V17.4023H7.66797V13.5H10.9688V10.5258C10.9688 7.14234 12.9096 5.27344 15.879 5.27344C17.3009 5.27344 18.7891 5.53711 18.7891 5.53711V8.85938H17.1498C15.535 8.85938 15.0313 9.90009 15.0313 10.9688V13.5H18.6367L18.0604 17.4023H15.0313V26.836C21.2461 25.8232 26 20.2381 26 13.5Z"
                          fill="#4570B6"
                        />
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/cmer_smile/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                      >
                        <path
                          d="M13.5 2.43105C17.107 2.43105 17.5342 2.44687 18.9527 2.51016C20.2711 2.56816 20.983 2.78965 21.4576 2.97422C22.0852 3.2168 22.5387 3.51211 23.008 3.98145C23.4826 4.45605 23.7727 4.9043 24.0152 5.53184C24.1998 6.00645 24.4213 6.72363 24.4793 8.03672C24.5426 9.46055 24.5584 9.8877 24.5584 13.4895C24.5584 17.0965 24.5426 17.5236 24.4793 18.9422C24.4213 20.2605 24.1998 20.9725 24.0152 21.4471C23.7727 22.0746 23.4773 22.5281 23.008 22.9975C22.5334 23.4721 22.0852 23.7621 21.4576 24.0047C20.983 24.1893 20.2658 24.4107 18.9527 24.4688C17.5289 24.532 17.1018 24.5479 13.5 24.5479C9.89297 24.5479 9.46582 24.532 8.04727 24.4688C6.72891 24.4107 6.01699 24.1893 5.54238 24.0047C4.91484 23.7621 4.46133 23.4668 3.99199 22.9975C3.51738 22.5229 3.22734 22.0746 2.98477 21.4471C2.8002 20.9725 2.57871 20.2553 2.5207 18.9422C2.45742 17.5184 2.4416 17.0912 2.4416 13.4895C2.4416 9.88242 2.45742 9.45527 2.5207 8.03672C2.57871 6.71836 2.8002 6.00645 2.98477 5.53184C3.22734 4.9043 3.52266 4.45078 3.99199 3.98145C4.4666 3.50684 4.91484 3.2168 5.54238 2.97422C6.01699 2.78965 6.73418 2.56816 8.04727 2.51016C9.46582 2.44687 9.89297 2.43105 13.5 2.43105ZM13.5 0C9.83496 0 9.37617 0.0158203 7.93652 0.0791016C6.50215 0.142383 5.51602 0.374414 4.66172 0.706641C3.77051 1.05469 3.01641 1.51348 2.26758 2.26758C1.51348 3.01641 1.05469 3.77051 0.706641 4.65645C0.374414 5.51602 0.142383 6.49687 0.0791016 7.93125C0.0158203 9.37617 0 9.83496 0 13.5C0 17.165 0.0158203 17.6238 0.0791016 19.0635C0.142383 20.4979 0.374414 21.484 0.706641 22.3383C1.05469 23.2295 1.51348 23.9836 2.26758 24.7324C3.01641 25.4813 3.77051 25.9453 4.65645 26.2881C5.51602 26.6203 6.49688 26.8523 7.93125 26.9156C9.3709 26.9789 9.82969 26.9947 13.4947 26.9947C17.1598 26.9947 17.6186 26.9789 19.0582 26.9156C20.4926 26.8523 21.4787 26.6203 22.333 26.2881C23.2189 25.9453 23.973 25.4813 24.7219 24.7324C25.4707 23.9836 25.9348 23.2295 26.2775 22.3436C26.6098 21.484 26.8418 20.5031 26.9051 19.0688C26.9684 17.6291 26.9842 17.1703 26.9842 13.5053C26.9842 9.84023 26.9684 9.38145 26.9051 7.9418C26.8418 6.50742 26.6098 5.52129 26.2775 4.66699C25.9453 3.77051 25.4865 3.01641 24.7324 2.26758C23.9836 1.51875 23.2295 1.05469 22.3436 0.711914C21.484 0.379687 20.5031 0.147656 19.0688 0.084375C17.6238 0.0158203 17.165 0 13.5 0Z"
                          fill="#4570B6"
                        />
                        <path
                          d="M13.501 6.56543C9.67246 6.56543 6.56641 9.67148 6.56641 13.5C6.56641 17.3285 9.67246 20.4346 13.501 20.4346C17.3295 20.4346 20.4355 17.3285 20.4355 13.5C20.4355 9.67148 17.3295 6.56543 13.501 6.56543ZM13.501 17.9982C11.0172 17.9982 9.00273 15.9838 9.00273 13.5C9.00273 11.0162 11.0172 9.00176 13.501 9.00176C15.9848 9.00176 17.9992 11.0162 17.9992 13.5C17.9992 15.9838 15.9848 17.9982 13.501 17.9982Z"
                          fill="#4570B6"
                        />
                        <path
                          d="M22.3277 6.29131C22.3277 7.1878 21.6 7.91026 20.7088 7.91026C19.8123 7.91026 19.0898 7.18252 19.0898 6.29131C19.0898 5.39483 19.8176 4.67236 20.7088 4.67236C21.6 4.67236 22.3277 5.4001 22.3277 6.29131Z"
                          fill="#4570B6"
                        />
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@cmersmileeyecenter6303">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="20"
                        viewBox="0 0 26 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M24.6163 1.44974C25.0197 1.87135 25.3094 2.39559 25.4564 2.97C26 5.09011 26 9.51136 26 9.51136C26 9.51136 26 13.9326 25.4564 16.0527C25.3094 16.6271 25.0197 17.1514 24.6163 17.573C24.2129 17.9946 23.7099 18.2988 23.1577 18.4551C21.125 19.0227 13 19.0227 13 19.0227C13 19.0227 4.875 19.0227 2.84227 18.4551C2.29009 18.2988 1.78713 17.9946 1.38373 17.573C0.980326 17.1514 0.690631 16.6271 0.543636 16.0527C0 13.9326 0 9.51136 0 9.51136C0 9.51136 0 5.09011 0.543636 2.97C0.690631 2.39559 0.980326 1.87135 1.38373 1.44974C1.78713 1.02813 2.29009 0.723939 2.84227 0.567614C4.875 0 13 0 13 0C13 0 21.125 0 23.1577 0.567614C23.7099 0.723939 24.2129 1.02813 24.6163 1.44974ZM17.1392 9.5113L10.3438 5.49658V13.526L17.1392 9.5113Z"
                          fill="#4570B6"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <nuxt-link
                  style="display: none"
                  :to="localePath('/booking')"
                  class="text-base ll_box nav-bookingservice pcShow"
                  >{{ $t("home.headers.reservationService") }}</nuxt-link
                >
                <div class="flex items-center nav-language-new group relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M13 0C10.4289 0 7.91543 0.762422 5.7776 2.19088C3.63976 3.61934 1.97351 5.64967 0.98957 8.02511C0.00563168 10.4005 -0.25181 13.0144 0.249797 15.5362C0.751405 18.0579 1.98953 20.3743 3.80761 22.1924C5.62569 24.0105 7.94208 25.2486 10.4638 25.7502C12.9856 26.2518 15.5994 25.9944 17.9749 25.0104C20.3503 24.0265 22.3806 22.3602 23.8091 20.2224C25.2376 18.0846 26 15.5712 26 13C26 9.55218 24.6303 6.24558 22.1924 3.80761C19.7544 1.36964 16.4478 0 13 0ZM24.1731 12.0763H19.2811C19.1579 8.02578 18.2137 4.55 16.77 2.42211C18.8011 3.1499 20.5796 4.44747 21.8925 6.15961C23.2054 7.87174 23.9972 9.92591 24.1731 12.0763ZM13 24.18C10.9474 24.18 8.72367 19.9926 8.5184 13.8758H17.4816C17.2832 20.02 15.0321 24.2074 13 24.2074V24.18ZM8.5184 12.0763C8.72367 5.95947 10.9748 1.7721 13 1.7721C15.0253 1.7721 17.2832 5.95947 17.4816 12.0763H8.5184ZM9.23686 2.42211C7.79318 4.58422 6.84894 8.02578 6.72578 12.0763H1.8337C2.01471 9.93074 2.80882 7.88245 4.1214 6.1756C5.43399 4.46875 7.2097 3.17532 9.23686 2.44946V2.42211ZM1.8337 13.8758H6.69842C6.82158 17.9263 7.76578 21.3679 9.20946 23.53C7.18788 22.7991 5.41842 21.5037 4.11105 19.7973C2.80368 18.0909 2.0133 16.0453 1.8337 13.9032V13.8758ZM16.77 23.53C18.2137 21.3679 19.1579 17.9263 19.2811 13.8758H24.1731C24.0014 16.0308 23.2116 18.0904 21.8985 19.8077C20.5854 21.525 18.8046 22.8269 16.77 23.5574V23.53Z"
                      fill="#4570B6"
                    />
                  </svg>
                  <ul
                    class="nav-language-box absolute top-5 hidden group-hover:block -left-5"
                  >
                    <li @click="handleLang('hk')">繁</li>
                    <li @click="handleLang('cn')">简</li>
                  </ul>
                </div>
                <div class="menu_pc_close" @click="menuList = false">
                  <span></span><span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="header_body">
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/10/224d72c8093ad89a.png"
                alt=""
              />
            </div>
            <div>
              <linkMenu />
            </div>
          </div>
        </div>
      </el-drawer>
      <el-drawer
        v-show="drawer"
        :visible.sync="drawer"
        :with-header="false"
        :modal="false"
        size="100%"
      >
        <div class="mb_menu_close">
          <div style="padding: 10px">
            <img class="head_logo" src="@/asset/image/common/Logo.svg" alt="" />
          </div>
          <div>
            <img
              src="../../../asset/image/common/Vector.png"
              class="mr-5"
              alt=""
              @click="langDrawer = true"
            />
            <div @click="drawer = false"><i></i><i></i></div>
          </div>
        </div>
        <div class="mb_menu_list">
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/08/6fad924059f2fcad.png"
              alt=""
            />
          </div>
          <div>
            <div class="mb_menu_style">
              <DetailOption
                :group="groupList"
                :pcOrMobile="'mobile'"
                :dataSrc="'https://static.cmereye.com/imgs/2023/10/13909e2daa8b7abc.png'"
              />

              <DetailOption
                :group="OrthopedicList"
                :pcOrMobile="'mobile'"
                :dataSrc="'https://static.cmereye.com/imgs/2023/10/9c07e8cd808db657.png'"
              />

              <DetailOption
                :group="diagnosisInstructionsList"
                :pcOrMobile="'mobile'"
                :dataSrc="'https://static.cmereye.com/imgs/2023/10/1c9c69c68f3fa684.png'"
              />

              <DetailOption
                :group="faq"
                :pcOrMobile="'mobile'"
                :dataSrc="'https://static.cmereye.com/imgs/2023/10/416a83e2af388473.png'"
              />

              <DetailOption
                :group="contactUs"
                :pcOrMobile="'mobile'"
                :dataSrc="'https://static.cmereye.com/imgs/2023/10/9dbc6d0f3f0e770e.png'"
              />

              <DetailOption
                :group="ophthalmicConsultation"
                :pcOrMobile="'mobile'"
                :dataSrc="'https://static.cmereye.com/imgs/2023/10/0252a55e616b5787.png'"
              />

              <DetailOption
                :group="reservationService"
                :pcOrMobile="'mobile'"
                :dataSrc="'https://static.cmereye.com/imgs/2023/10/631190f31f38fc51.png'"
              />

              <DetailOption
                :group="video"
                :pcOrMobile="'mobile'"
                :dataSrc="'https://static.cmereye.com/imgs/2023/10/9a02ae9a288315f6.png'"
              />

              <DetailOption
                :group="share"
                :pcOrMobile="'mobile'"
                :dataSrc="'https://static.cmereye.com/imgs/2023/10/82b23c1dc46ff323.png'"
              />
              <div style="minwidth: 140px"></div>
            </div>
          </div>
        </div>
        <div class="mb_menu_footer">
          <div>
            <nuxt-link :to="localePath('/')">
              <img
                class="foot_logo"
                src="../../../asset/image/common/Logo.svg"
                alt=""
              />
            </nuxt-link>
            <div>
              <a href="https://www.facebook.com/CMER.SMILE"
                ><img src="@/asset/image/common/fbook.png" alt=""
              /></a>
              <a href="https://www.instagram.com/cmer_smile/"
                ><img src="@/asset/image/common/ins.png" alt=""
              /></a>
              <a href="https://www.youtube.com/@cmersmileeyecenter6303"
                ><img src="@/asset/image/common/youtube.png" alt=""
              /></a>
            </div>
          </div>
          <div>
            <p>
              <span
                >©2023 {{ $t("home.footer.span1")
                }}{{ $t("home.footer.span2") }}</span
              >
              <span>
                <nuxt-link :to="localePath('/privacy-policy')">{{
                  $t("home.footer.span3")
                }}</nuxt-link>
              </span>
              |
              <span>
                <nuxt-link :to="localePath('/disclaimer')">{{
                  $t("home.footer.span4")
                }}</nuxt-link>
              </span>
            </p>
          </div>
        </div>
      </el-drawer>
      <el-drawer
        :visible.sync="langDrawer"
        v-show="langDrawer"
        direction="btt"
        :with-header="false"
        :modal="false"
        size="40%"
      >
        <div class="langBox-title">
          {{ $t("home.headers.togLang") }}
        </div>
        <div class="langBox">
          <nuxt-link
            :class="[
              'langBox-in',
              'text-center',
              $i18n.locale === 'hk' ? 'langBoxClass' : '',
            ]"
            :to="switchLocalePath('hk')"
          >
            <!-- <div> -->
            繁体
            <!-- </div> -->
          </nuxt-link>
          <nuxt-link
            :class="[
              'langBox-in',
              'text-center',
              $i18n.locale === 'cn' ? 'langBoxClass' : '',
            ]"
            :to="switchLocalePath('cn')"
          >
            <!-- <div> -->
            简体
            <!-- </div> -->
          </nuxt-link>
        </div>
      </el-drawer>
      <!-- gsap   指针动画-->
      <div class="ball"></div>
      <!-- gsap   指针动画 end-->
    </div>
  </div>

  <!-- </div> -->
</template>
<script>
import DetailOption from "@/components/commom/option/index.vue";
import linkMenu from "@/components/commom/option/index-link.vue";
// gsap plugins
import gsap from "gsap";

export default {
  styleResources: {
    scss: ["~/assets/css/base-style.scss"],
  },
  components: {
    DetailOption,
    linkMenu,
  },
  data() {
    return {
      openeds: ["1"],
      drawer: false,
      langDrawer: false,
      menuList: false,
      socialInfoList: [
        {
          link: "",
          img: require("@/asset/image/common/FB.svg"),
        },
        {
          link: "",
          img: require("@/asset/image/common/IG.svg"),
        },
        {
          link: "",
          img: require("@/asset/image/common/YT.svg"),
        },
      ],
      navList: [
        {
          main_nav: this.$t("home.headers.aboutSmile"),
          link: "",
          child_list: [
            {
              child_item: this.$t("home.headers.aboutSmileChild_1"),
              link: "/group-profile",
            },
            {
              child_item: this.$t("home.headers.aboutSmileChild_2"),
              link: "/our-medical-team",
            },
            {
              child_item: this.$t("home.headers.aboutSmileChild_3"),
              link: "/medical-equipment",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.orthopedicServices"),
          link: "",
          child_list: [
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_1"),
              link: "/vision-correction/relex-smile",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_5"),
              link: "/smilePro",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_2"),
              link: "/vision-correction-presbyopia",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_3"),
              link: "/vision-correction-lasik",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_4"),
              link: "/vision-correction-icl",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.diagnosisInstructions"),
          link: "",
          child_list: [
            {
              child_item: this.$t("home.headers.diagnosisInstructionsChild_1"),
              link: "/patient-info",
            },
            {
              child_item: this.$t("home.headers.diagnosisInstructionsChild_2"),
              link: "/flow-of-vision-correction",
            },
            {
              child_item: this.$t("home.headers.diagnosisInstructionsChild_3"),
              link: "/post-corrective-care",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.commonProblem"),
          link: "",
          child_list: [
            {
              child_item: this.$t("home.headers.commonProblemChild_1"),
              link: "/FreQuestions#faq-smile",
            },
            {
              child_item: this.$t("home.headers.commonProblemChild_2"),
              link: "/FreQuestions#faq-lasik",
            },
            {
              child_item: this.$t("home.headers.commonProblemChild_3"),
              link: "/FreQuestions#faq-icl",
            },
            {
              child_item: this.$t("home.headers.commonProblemChild_4"),
              link: "/FreQuestions#faq-presbyopia",
            },
          ],
        },
        // ⬇️ 眼科咨询
        // {
        //   main_nav: this.$t("home.headers.ophthalmicConsultation"),
        //   link: "",
        //   child_list: [
        //     {
        //       child_item: this.$t("home.headers.ophthalmicConsultationChild_1"),
        //       link: "/video",
        //     },
        //     {
        //       child_item: this.$t("home.headers.ophthalmicConsultationChild_2"),
        //       link: "/media",
        //     },
        // {
        //   child_item: this.$t("home.headers.ophthalmicConsultationChild_3"),
        //   link: "/wedding",
        // },
        // ],
        // },
        // ⬇️ 收费详情
        // {
        //   main_nav: this.$t("home.headers.feeConsultation"),
        //   link: "",
        //   child_list: [
        //     {
        //       child_item: this.$t("home.headers.feeConsultation"),
        //       link: "/charge-detail"
        //     },
        //     {
        //       child_item: this.$t("home.headers.consumptionVoucher"),
        //       link: "/consumption-voucher"
        //     },
        //     {
        //       child_item: this.$t("home.headers.consumptionDivit"),
        //       link: "/divit",
        //     },
        //   ],
        // },
        {
          main_nav: this.$t("home.headers.contactUs"),
          link: "/contact-us",
          child_list: [],
        },
        // {
        //   main_nav: "預約服務",
        //   link: "/booking",
        //   child_list: [],
        // },
      ],
      groupList: {
        main_nav: this.$t("home.headers.aboutSmile"),
        link: "",
        child_list: [
          {
            child_item: this.$t("home.headers.aboutSmileChild_1"),
            link: "/about-us/centre-introduction",
          },
          {
            child_item: this.$t("home.headers.aboutSmileChild_2"),
            link: "/about-us/medical-team",
          },
          {
            child_item: this.$t("home.headers.aboutSmileChild_3"),
            link: "/about-us/medical-equipment",
          },
        ],
      },
      OrthopedicList: {
        main_nav: this.$t("home.headers.orthopedicServices"),
        link: "",
        child_list: [
          {
            child_item: this.$t("home.headers.orthopedicServicesChild_1"),
            link: "/vision-correction/relex-smile",
          },
          {
            child_item: this.$t("home.headers.orthopedicServicesChild_5"),
            link: "/smilePro",
          },
          {
            child_item: "CMER CLEAR-Vision",
            link: "/vision-correction-presbyopia",
          },
          {
            child_item: this.$t("home.headers.orthopedicServicesChild_3"),
            link: "/vision-correction-lasik",
          },
          {
            child_item: this.$t("home.headers.orthopedicServicesChild_4"),
            link: "/vision-correction-icl",
          },
        ],
      },
      diagnosisInstructionsList: {
        main_nav: this.$t("home.headers.diagnosisInstructions"),
        link: "",
        child_list: [
          {
            child_item: this.$t("home.headers.diagnosisInstructionsChild_1"),
            link: "/Notice/eyeExam",
          },
          {
            child_item: this.$t("home.headers.diagnosisInstructionsChild_2"),
            link: "/Notice/techProcess",
          },
          {
            child_item: this.$t("home.headers.diagnosisInstructionsChild_3"),
            link: "/Notice/Followdiag",
          },
        ],
      },
      faq: {
        main_nav: this.$t("home.headers.commonProblem"),
        link: "",
        child_list: [
          {
            child_item: this.$t("home.headers.commonProblemChild_1"),
            link: "/FreQuestions#faq-smile",
          },
          {
            child_item: this.$t("home.headers.commonProblemChild_2"),
            link: "/FreQuestions#faq-lasik",
          },
          {
            child_item: this.$t("home.headers.commonProblemChild_3"),
            link: "/FreQuestions#faq-icl",
          },
          {
            child_item: this.$t("home.headers.commonProblemChild_4"),
            link: "/FreQuestions#faq-presbyopia",
          },
        ],
      },
      contactUs: {
        main_nav: this.$t("home.headers.contactUs"),
        link: "/contact-us",
      },
      ophthalmicConsultation: {
        main_nav: this.$t("home.headers.ophthalmicConsultation"),
        link: "/ophthalmicInfo/mediaCov",
      },
      reservationService: {
        main_nav: this.$t("home.headers.feeConsultation"),
        link: "/free",
      },
      video: {
        main_nav: "矯視資訊影片",
        link: "/video",
      },
      share: {
        main_nav: "個案分享",
        link: "/video",
      },
      actIndex: 0,
    };
  },
  created() {
    // this.handleSelect();
  },
  mounted() {
    this.pointinit();
    // console.log('i18n------->',this.$i18n.locale)

    // 获取菜单和菜单底部的横线元素
    const menu = document.querySelector(".nav ");
    const menuLine = document.querySelector(".menu-line");

    // 创建GSAP动画
    gsap.to(menuLine, {
      duration: 0.3,
      scaleX: 0,
      transformOrigin: "right",
      ease: "power1.inOut",
    });

    menu.addEventListener("mousemove", (e) => {
      // 获取鼠标在菜单中的位置
      const xPos = e.clientX - menu.offsetLeft;

      // 更新菜单底部横线的位置和宽度
      gsap.to(menuLine, {
        duration: 0.3,
        scaleX: 1,
        left: xPos,
        transformOrigin: "left",
        ease: "power1.inOut",
      });
    });

    menu.addEventListener("mouseleave", () => {
      // 鼠标离开菜单后，隐藏菜单底部横线
      gsap.to(menuLine, {
        duration: 0.3,
        scaleX: 0,
        transformOrigin: "right",
        ease: "power1.inOut",
      });
    });
    this.$nextTick(() => {
      if (process.browser) {
        new WOW({
          //可以添加自定义内容
          animateClass: "animate__animated",
          offset: 200,
        }).init();
      }
      this.taginits();
    });
  },
  methods: {
    pointinit() {
      // mousemove ball
      // 指针小球跟随效果
      gsap.set(".ball", { xPercent: -65, yPercent: -65 });
      const ball = document.querySelector(".ball");
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.35;
      const xSet = gsap.quickSetter(ball, "x", "px");
      const ySet = gsap.quickSetter(ball, "y", "px");

      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });
      gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
      });
      // 指针小球跟随效果 end
      // 指针小球hover效果  **
      const ahrefbtn = document.querySelectorAll("a");
      ahrefbtn.forEach((a) => {
        a.addEventListener("pointerenter", handleMouseEnter);
        a.addEventListener("pointerleave", handleMouseLeave);
      });
      function handleMouseEnter() {
        gsap.to(".ball", {
          duration: 0.3,
          scale: 3,
          opacity: 0,
          ease: "Power3.easeOut",
        });
      }
      function handleMouseLeave() {
        gsap.to(".ball", {
          duration: 0.3,
          scale: 1,
          opacity: 1,
          ease: "Power3.easeOut",
        });
      }
      // 指针小球hover效果 end **
      // mousemove ball end
    },

    handleSelect(index, indexPath) {
      // console.log("===", index, indexPath);
      this.actIndex = index;
    },
    handleLang(_type) {
      console.log("当前的语言类型： --->", this.$i18n.locale);
      if (this.$i18n.locale === _type) return;
      console.log("点击的语言类型： --->", _type);
      // console.log('路径打印',this.switchLocalePath(_type))
      let _path = this.switchLocalePath(_type);
      this.$router.push(_path);
      var _text = "";
      if (_type === "cn") {
        _text = "微软雅黑";
      } else _text = "Noto Sans HK";
      console.log("准备设置的字体： ===>", _text);
      // console.log(document.documentElement.style)
      document.documentElement.style.setProperty("--font_family", _text); //var(--font_family)
    },
    taginits() {
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          "gtm.start": new Date().getTime(),
          event: "gtm.js",
        });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-5M8VLLM");
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-FN8KFBR9XM");
    },
  },
};
</script>
<style lang="scss">
.ball {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  width: 20px;
  height: 20px;
  background-color: #f5f7fa;
  border-radius: 50%;
  mix-blend-mode: difference;
  left: 0;
  top: 0;
}

.nav {
  position: relative;
  z-index: 99;
}

.menu-line {
  height: 1px;
  width: 50px;
  background-color: #000;
  position: absolute;
  bottom: 5px;
  left: 0;
}

$active_gradient: #4570b6;

.langBoxClass {
  color: #fff !important;
  background: #4570b6 !important;
}

.langBox-title {
  color: #6d6e71;
  text-align: center;
  line-height: 40px;
}

.langBox {
  padding-top: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.langBox-in {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-bottom: 10px;
}

.langBox-in:first-child {
  margin-top: 40px;
}

.mbHeaderBox {
  display: flex;
  justify-content: center;
  align-items: center;
}

// pc
@media (min-width: 768px) {
  .divit-pc {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :deep(.el-drawer__body) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main_after .nuxt-link-active .mian_nav_text {
    color: #4570b6 !important;
  }

  .nav {
    display: flex;
    align-items: center;
  }
  .new_header {
    .discounts-contact {
      letter-spacing: 0.1em;
      cursor: pointer;
      z-index: 999;
      font-weight: 600;
      white-space: nowrap;
      display: flex;
      flex-direction: column;
      align-items: center;

      .link_more {
        outline: none;
        cursor: pointer;
        border: none;
        margin: 0;
        position: relative;
        display: inline-block;
        border-radius: 500px;
        overflow: hidden;
        background: #43619B;
      }

      .link_more:hover {
        animation: ani 8s linear infinite;
        border: none;
      }
      .discounts-h3 {
        text-align: center;
        width: fit-content;
        border-radius: 17px;
        color: #fff;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        //letter-spacing: 6.75px;
        padding: 10px 20px;
      }
      @keyframes ani {
        0% {
          background-position: 0%;
        }

        100% {
          background-position: 400%;
        }
      }

      .link_more::before,
      .link_more::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
      }

      .link_more div {
        position: relative;
        z-index: 10;
        transition: color 0.4s;
      }

      .link_more::before {
        content: "";
        background: linear-gradient(193deg,  #76C8E2 0%, #76C8E2 100%);

        width: 120%;
        left: -10%;
        transform: skew(30deg);
        transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
      }

      .link_more:hover::before {
        color: #09c09c;
        transform: translate3d(100%, 0, 0);
      }
    }
  }


  .ll_box {
    margin-left: 26px;
    background: #4570b6;
    border-radius: 0px;
    font-family: var(--font_family);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    /* identical to box height */
    padding: 12px 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.15em;
    color: #d9eaed;
    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .head_width {
    width: 100%;
    position: fixed;
    background: #fff;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .section_header {
    display: flex;
    max-width: 1280px;
    margin: 30px auto;
  }

  .link_pc_more {
    display: flex;
    align-items: center;
  }

  .head_logo {
    width: 220px;
    max-height: 80px;
  }

  .main_footer {
    .main_nav .mian_nav_text {
      font-family: var(--font_family);
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height, or 125% */

      letter-spacing: 0.1em;

      color: #6d6e71;
    }

    .child_menu {
      li a {
        font-family: var(--font_family);
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        /* identical to box height, or 120% */

        letter-spacing: 0.2em;

        color: #6d6e71;
      }
    }
  }

  .mian_nav_text {
    font-family: var(--font_family), sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height, or 156% */

    letter-spacing: 0.2em;

    color: #6d6e71;
    text-align: center;
    min-height: 50px;
    display: flex;
    align-items: center;
  }

  .main_after {
    .nuxt-link-exact-active {
      background: #6d6e71 !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
      text-fill-color: transparent !important;
    }
  }

  .child_nav {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.137);

    li:hover a {
      background: #4570b6;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    a {
      font-family: var(--font_family), sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 25px;
      /* identical to box height, or 156% */

      letter-spacing: 0.2em;

      color: #444343;
    }

    .nuxt-link-exact-active {
      background: #4570b6 !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }
  }

  .nav {
    transition: all 0.5s ease-in;

    .nav_item {
      transition: all 0.5s ease-in;
      position: relative;

      .child_nav {
        position: absolute;
        top: 10px;
      }
    }

    .nav_item:hover .child_nav {
      display: block;
    }
  }

  .main_nav_after {
    .mian_nav_text {
      letter-spacing: 0.2em;
      transition: all 0.5s;
    }

    // ::after {
    //   display: inline-block;
    //   margin-left: 0.255em;
    //   vertical-align: 0.255em;
    //   content: "";
    //   border-top: 0.3em solid;
    //   border-right: 0.3em solid transparent;
    //   border-bottom: 0;
    //   border-left: 0.3em solid transparent;
    // }
  }

  .main_nav {
    .mian_nav_text {
      letter-spacing: 0.2em;
      transition: all 0.5s;
    }
  }

  .child_nav {
    display: none;
    overflow: hidden;
    transition: width 0.5s ease-in;
    white-space: nowrap;

    margin-top: 13px;
    margin-left: 0;
    margin-right: 1vw;
    padding: 10px;
    /* background: #fff; */
    text-align: left;
    list-style: none;

    li {
      margin: 5px 0;
    }
  }

  .sidebar_contact {
    position: fixed;
    right: 8%;
    letter-spacing: 0.1em;
    bottom: 16%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
      a {
        color: #4570b6;
        text-align: center;
        text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
        font-size: 17px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: 3.4px;
        img {
          width: 50%;
          margin: auto;
        }
      }
    }

    & > div:nth-child(even) {
      padding: 30px 0;
    }

    & > div:last-child {
      a > div:nth-child(2) {
        max-width: 80px;
        text-align: center;
        margin: auto;
      }
    }
  }

  .nav-language {
    z-index: 99;
  }

  .nav-language-box {
    // width: 100px;
    li {
      width: 70px;
      display: block;
      height: 40px;
      line-height: 40px;
      background: #fff;
      color: #000;
      text-align: center;
    }

    li:hover {
      color: #fff;
      background: #4570b6;
    }
  }
  .new_header {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;

    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      padding: 0 10px;
    }
  }
  .new_a_div {
    display: flex;
    align-items: center;
    flex-direction: row;
    & > a {
      padding: 0 10px;
    }
  }

  .new_about {
    border-radius: 17px;
    background: #76c8e2;
    color: #fff;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 6.75px;
    margin: 0 20px;
    padding: 10px 20px;
  }

  .menu_pc {
    width: 46px;
    height: 46px;
    background: #4570b6;
    border-radius: 43px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div {
      & > i {
        display: inline-block;
        width: 50%;
        display: flex;
        flex-direction: column;
        margin: 6px auto;
        background: #fff;
        height: 2px;
        border-radius: 5px;
      }
    }
  }
  .menu_pc:hover {
    width: 52px;
    height: 52px;
    background: #4570b6;
    border-radius: 43px;
    transition: all 0.3s;
  }
  .menu_pc_close {
    margin-left: 10px;
    width: 41px;
    height: 41px;
    background: #4570b6;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & > span {
      display: inline-block;
      width: 28px;
      height: 3px;
      background: #fff;
      position: absolute;
      border-radius: 3px;
    }

    & > span:nth-child(1) {
      transform: rotate(-45deg);
    }

    & > span:nth-child(2) {
      transform: rotate(45deg);
    }
  }
  .contact_icl-r {
    top: calc(66% - 430px) !important;
    right: 10%;

    .link_more {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: linear-gradient(90deg, #09c09c 0%, #09c09c 100%) !important;
    }
    img {
      width: 60%;
      margin: auto;
    }
    .icl-r-size {
      color: #fff;
      text-align: center;
      font-family: "Inter";
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      letter-spacing: 3.4px;
    }
  }
  .contact_icl-r .link_more::before {
    background: linear-gradient(90deg, #98cec3 0%, #98cec3 100%) !important;
  }
}

// mb
@media (max-width: 768px) {
  .mb_menu_style {
    margin-top: 20px;
  }
  .foot_logo {
    max-width: 139px;
  }
  .mb_menu {
    display: flex;
    align-items: center;

    & > div:nth-child(2) {
      width: 41px;
      height: 41px;
      background: #4570b6;
      border-radius: 19px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > i {
        display: inline-block;
        width: 55%;
        height: 3px;
        background: #fff;
        border-radius: 3px;
      }

      & > i:nth-child(2) {
        margin: 5px 0;
      }
    }
  }
  :deep(.el-drawer) {
    background: palegoldenrod;
  }
  :deep(.el-drawer)::-webkit-scrollbar {
    width: 6px;
  }

  .mb_menu_close {
    padding: 0 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div:nth-child(2) {
      display: flex;
      align-items: center;

      & > div:nth-child(2) {
        width: 41px;
        height: 41px;
        background: #4570b6;
        border-radius: 19px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > i {
          display: inline-block;
          width: 55%;
          height: 3px;
          background: #fff;
          border-radius: 3px;
          position: relative;
        }

        & > i:nth-child(1) {
          transform: rotate(45deg);
          top: 1.5px;
        }

        & > i:nth-child(2) {
          transform: rotate(-45deg);
          top: -1.5px;
        }
      }
    }
  }

  .mb_menu_list {
    & > div:nth-child(1) {
      margin: 12px 0;
      margin: 0 17px;
      display: flex;
      justify-content: center;
    }

    & > div:nth-child(2) {
      width: 85%;
      margin: auto;
      & > div:nth-child(1) {
        display: flex;
        flex-wrap: wrap;
        // padding-left: 20px;
        justify-content: center;
        align-items: flex-start;

        & > div {
          display: flex;
          align-items: flex-start;
          padding: 10px 0;
          justify-content: center;
          // max-width: 42%;
          flex: 1;

          & > div:nth-child(1) {
            min-width: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            // margin-right: 10px;
          }
        }

        // & > div:nth-child(odd) {
        //   margin-right: 20px;
        // }

        a {
          -webkit-tap-highlight-color: transparent;
        }
      }

      & > div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;

        & > a:nth-child(2) {
          margin: 0 24px;
        }
      }
    }
  }

  .mb_menu_footer {
    margin-bottom: 64px;

    & > div:nth-child(1) {
      padding: 25px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: url("https://static.cmereye.com/imgs/2023/08/d6f27536cde86418.png");
      background-size: 100%, 100%;
      background-repeat: no-repeat;
      & > div:nth-child(2) {
        margin-top: 24px;
        display: flex;
        align-items: center;
        & > a:nth-child(2) {
          margin: 0 12px;
        }
      }
    }

    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 42px;
      color: #6d6e71;
      text-align: center;
      font-size: 9px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      /* 222.222% */
      letter-spacing: 0.9px;
    }
  }

  .section_header {
    position: fixed;
    z-index: 99;
    background: #fff;
    width: 100%;
    margin-top: 0;
    padding-top: 0;
    top: 0;
    left: 0;
    right: 0;
  }

  .ball {
    display: none;
  }

  .sidebar_contact {
    display: none;
  }

  .el-menu-vertical-demo .el-menu-item a {
    display: block !important;
  }

  .link_more {
    display: none;
  }

  .menu_pc {
    display: none;
  }

  .drawers {
    display: none !important;
  }
}

.flex-between {
  @apply flex items-center justify-between;
}

.header {
  // width: 100vw;
  margin: 0 auto;

  .right {
    .social_list {
      position: relative;
      margin-right: 130px;

      &::before,
      &::after {
        content: "";
        position: absolute;
        border-top: 2px #dfdfdf solid;
      }
    }

    .language_list {
      padding: 0 18px;
      border-left: 2px solid #dfdfdf;
      border-right: 2px solid #dfdfdf;
      height: 45px;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    img {
      width: 5vw;
    }
  }
}

@media (min-width: 768px) {
  .header {
    // margin: 20px auto;
    margin-left: 0;
    display: flex;
    align-items: center;
    align-content: center;

    .right {
      .social_list {
        margin-right: 130px;
        position: relative;

        &::before,
        &::after {
          width: 100px;
          height: 0;
        }

        &::before {
          left: -130px;
          top: 10px;
        }

        &::after {
          right: -130px;
          top: 10px;
        }

        img {
          width: 1.5vw;
        }
      }
    }
  }

  .header_drawer {
    margin: 0 auto;
    max-width: 1280px;
    padding: 30px 0 !important;
  }

  .header_body {
    display: flex;
    max-width: 1280px;
    margin: auto;
    margin-top: 114px;
    justify-content: space-between;

    & > div:nth-child(1) {
      flex: 1;
      margin-right: 60px;
    }
    & > div:nth-child(2) {
      flex: 1;
    }
    // & > div:nth-child(2) {
    //   flex: 1;
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;

    //   & > div:nth-child(1) {
    //     display: flex;
    //     flex-wrap: wrap;
    //     justify-content: center;

    //     & > div {
    //       min-width: 230px;
    //       padding: 20px 0;
    //       border-bottom: 1px solid #6d6e7180;
    //       display: flex;
    //       align-items: flex-start;

    //       & > div:nth-child(1) {
    //         margin-right: 20px;
    //         display: flex;
    //         align-items: center;
    //         justify-content: center;
    //         min-width: 38px;
    //       }
    //     }

    //     & > div:nth-child(odd) {
    //       margin-right: 42px;
    //     }
    //   }

    //   & > div:nth-child(2) {
    //     display: flex;
    //     align-items: center;
    //     margin-top: 40px;

    //     a:nth-child(2) {
    //       margin: 0 24px;
    //     }
    //   }
    // }
  }
}

@media screen and (max-width: 768px) {
  // 移动端
  .header {
    min-height: 18vw;
    margin: 3vw !important;
  }

  .link_more {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
.contact:last-child {
  top: calc(66% + 120px);

  .link_more {
    div {
      text-align: center;
      align-items: center;

      img {
        width: 44px;
        height: 44px;
      }
    }
  }
}

.contact-coupon {
  width: 172px;
  height: 64px;
  position: fixed;
  top: calc(66% + 120px);
  right: 9%;
  // background: #4570B6;
  background: #6eb9db;
  border-radius: 32px;
  z-index: 999;
  overflow: hidden;

  .couponBox {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    // z-index: 1000;
    position: relative;

    &-l {
      img {
        width: 44px;
        height: 44px;
      }
    }

    &-r {
      color: #fff;

      span {
        display: block;
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 21px;
      }
    }
  }

  .couponBox:hover {
    animation: ani_coupon 8s linear infinite;
    border: none;
  }

  @keyframes ani_coupon {
    0% {
      background-position: 0%;
    }

    100% {
      background-position: 400%;
    }
  }

  .couponBox::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .couponBox::before {
    content: "";
    background: #4570b6;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  .couponBox:hover::before {
    color: #4570b6;
    transform: translate3d(100%, 0, 0);
  }
}
</style>
