<template>
  <div v-if="!isMobile" class="footer_new">
    <div class="main_footer">
      <div
        class="logo_footer"
        :style="{ minWidth: $i18n.locale == 'en' ? '250px' : '' }"
      >
        <nuxt-link :to="localePath('/')">
          <img
            class="foot_logo"
            src="../../../asset/image/common/Logo.svg"
            alt=""
          />
        </nuxt-link>
      </div>
      <div class="pathLink">
        <DetailOption :group="groupList" />
        <DetailOption :group="OrthopedicList" />
        <DetailOption :group="diagnosisInstructionsList" />
        <DetailOption :group="faq" />
        <DetailOption :group="contactUs" />
        <DetailOption :group="ophthalmicConsultation" />
        <DetailOption :group="reservationService" />
        <DetailOption :group="video" />
        <DetailOption :group="share" />
      </div>
      <div class="copyright">
        <div class="flex md:mb-5 justify-center items-center">
          <div class="iocn">
            <a href="">
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
          </div>
          <div class="iocn pc_icon">
            <a href="">
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
          </div>
          <div class="iocn">
            <a href="">
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
      </div>
      <div class="footer-bottom">
        <p>
          <span
            >©2024 {{ $t("home.footer.span1")
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
  </div>
  <div class="main_footer" v-else-if="isMobile">
    <div class="section flex justify-between">
      <div class="mb_footer_eng">
        <div
          class="logo_footer m-auto"
          :style="{ minWidth: $i18n.locale == 'en' ? '250px' : '' }"
        >
          <nuxt-link :to="localePath('/')">
            <img
              class="foot_logo"
              src="../../../asset/image/common/Logo.svg"
              alt=""
            />
          </nuxt-link>
        </div>
        <div class="mbMenu">
          <div v-if="$i18n.locale !== 'en'" class="pathLink">
            <!-- <DetailOption :group="groupList"  :pcOrMobile="'mobile'"  :dataSrc="'https://static.cmereye.com/imgs/2023/10/13909e2daa8b7abc.png'" />
            <DetailOption :group="OrthopedicList"  :pcOrMobile="'mobile'" :dataSrc="'https://static.cmereye.com/imgs/2023/10/9c07e8cd808db657.png'" />
            <DetailOption :group="diagnosisInstructionsList"  :pcOrMobile="'mobile'" :dataSrc="'https://static.cmereye.com/imgs/2023/10/1c9c69c68f3fa684.png'" />
            <DetailOption :group="faq"  :pcOrMobile="'mobile'" :dataSrc="'https://static.cmereye.com/imgs/2023/10/416a83e2af388473.png'" />
            <DetailOption :group="contactUs"  :pcOrMobile="'mobile'" :dataSrc="'https://static.cmereye.com/imgs/2023/10/9dbc6d0f3f0e770e.png'" />
            <DetailOption :group="ophthalmicConsultation"  :pcOrMobile="'mobile'" :dataSrc="'https://static.cmereye.com/imgs/2023/10/0252a55e616b5787.png'" />
            <DetailOption :group="reservationService" :pcOrMobile="'mobile'"  :dataSrc="'https://static.cmereye.com/imgs/2023/10/631190f31f38fc51.png'" />
            <DetailOption :group="video" :pcOrMobile="'mobile'" :dataSrc="'https://static.cmereye.com/imgs/2023/10/9a02ae9a288315f6.png'"  />
            <DetailOption :group="share" :pcOrMobile="'mobile'" :dataSrc="'https://static.cmereye.com/imgs/2023/10/82b23c1dc46ff323.png'" /> -->
            <DetailOption :group="groupList" />
            <DetailOption :group="OrthopedicList" />
            <DetailOption :group="diagnosisInstructionsList" />
            <DetailOption :group="faq" />
            <DetailOption :group="contactUs" />
            <DetailOption :group="ophthalmicConsultation" />
            <DetailOption :group="reservationService" />
            <DetailOption :group="video" />
            <DetailOption :group="share" />
            <div></div>
          </div>
          <div v-else class="pathLink">
            <!-- <DetailOption :group="groupList"  :pcOrMobile="'mobile'"  :dataSrc="'https://static.cmereye.com/imgs/2023/10/13909e2daa8b7abc.png'" />
            <DetailOption :group="OrthopedicList"  :pcOrMobile="'mobile'" :dataSrc="'https://static.cmereye.com/imgs/2023/10/9c07e8cd808db657.png'" />
            <DetailOption :group="diagnosisInstructionsList"  :pcOrMobile="'mobile'" :dataSrc="'https://static.cmereye.com/imgs/2023/10/1c9c69c68f3fa684.png'" />
            <DetailOption :group="faq"  :pcOrMobile="'mobile'" :dataSrc="'https://static.cmereye.com/imgs/2023/10/416a83e2af388473.png'" />
            <DetailOption :group="contactUs"  :pcOrMobile="'mobile'" :dataSrc="'https://static.cmereye.com/imgs/2023/10/9dbc6d0f3f0e770e.png'" />
            <DetailOption :group="ophthalmicConsultation"  :pcOrMobile="'mobile'" :dataSrc="'https://static.cmereye.com/imgs/2023/10/0252a55e616b5787.png'" />
            <DetailOption :group="reservationService" :pcOrMobile="'mobile'"  :dataSrc="'https://static.cmereye.com/imgs/2023/10/631190f31f38fc51.png'" />
            <DetailOption :group="video" :pcOrMobile="'mobile'" :dataSrc="'https://static.cmereye.com/imgs/2023/10/9a02ae9a288315f6.png'"  />
            <DetailOption :group="share" :pcOrMobile="'mobile'" :dataSrc="'https://static.cmereye.com/imgs/2023/10/82b23c1dc46ff323.png'" /> -->
            <DetailOption :group="groupList" />
            <DetailOption :group="ophthalmicConsultation" />
            <DetailOption :group="OrthopedicList" />
            <DetailOption :group="reservationService" />
            <DetailOption :group="diagnosisInstructionsList" />
            <DetailOption :group="video" />
            <DetailOption :group="faq" />
            <DetailOption :group="share" />
            <DetailOption :group="contactUs" />
            <div></div>
          </div>
          <div class="flex justify-center items-center m-auto">
            <div class="iocn">
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
            </div>
            <div class="iocn">
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
            </div>
            <div class="iocn">
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
        </div>
        <div class="footer-bottom m-auto">
          <p>
            <span
              >©2024 {{ $t("home.footer.span1")
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
    </div>
  </div>
</template>
<script>
import DetailOption from "@/components/commom/option/index.vue";
export default {
  components: {
    DetailOption,
  },
  data() {
    return {
      activeName: "1",
      groupList: {
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
      OrthopedicList: {
        main_nav: this.$t("home.headers.orthopedicServices"),
        link: "",
        child_list: [
          {
            child_item: this.$t("home.headers.orthopedicServicesChild_5"),
            link: "/smilePro",
          },
          {
            child_item: this.$t("home.headers.orthopedicServicesChild_1"),
            link: "/vision-correction/relex-smile",
          },
          {
            child_item: "CMER CLEAR-Vision",
            link: "/vision-correction-presbyopia",
          },
          // {
          //   child_item: this.$t("home.headers.orthopedicServicesChild_3"),
          //   link: "/vision-correction-lasik",
          // },
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
        link: "/fee",
      },
      video: {
        main_nav: this.$t("home.headers.videos"),
        link: "/video",
      },
      share: {
        main_nav: this.$t("home.headers.casesSharing"),
        link: "/video",
      },
      navList: [
        {
          main_nav: this.$t("home.headers.aboutSmile"),
          link: "#",
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
        {
          main_nav: this.$t("home.headers.orthopedicServices"),
          link: "#",
          child_list: [
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_1"),
              link: "/vision-correction/relex_smile",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_5"),
              link: "/smilePro",
            },
            {
              child_item: "CMER CLEAR-Vision",
              link: "/vision-correction-presbyopia/CLEAR_Vision",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_3"),
              link: "/vision-correction-lasik/LASIK",
            },
            {
              child_item: this.$t("home.headers.orthopedicServicesChild_4"),
              link: "/vision-correction-icl/ICL",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.diagnosisInstructions"),
          link: "#",
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
          link: "/FreQuestions",
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
        {
          main_nav: this.$t("home.headers.ophthalmicConsultation"),
          link: "#",
          child_list: [
            {
              child_item: this.$t("home.headers.ophthalmicConsultationChild_1"),
              link: "/ophthalmicInfo/shareVideos",
            },
            {
              child_item: this.$t("home.headers.ophthalmicConsultationChild_2"),
              link: "/ophthalmicInfo/mediaCov",
            },
          ],
        },
        {
          main_nav: this.$t("home.headers.reservationService"),
          link: "#",
          child_list: [
            {
              child_item: this.$t("home.headers.reservationServiceChild_1"),
              link: "/eye-checkup",
            },
            {
              child_item: this.$t("home.headers.reservationServiceChild_2"),
              link: "/ophthalmicInfo/AppointForm",
            },
          ],
        },
      ],
      isMobile: false,
    };
  },
  methods: {
    changeCollapse() {
      // console.log(this.activeName);
      if (this.activeName === 3) {
        this.$router.push({
          path: `/free`,
        });
      }
    },
  },
  mounted() {
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
//pc
@media screen and (min-width: 768px) {
  .pc_icon {
    margin: 0 24px;
  }

  .logo_footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
  }
  .pathLink {
    width: 780px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    & > div {
      padding: 15px 23px;
    }
  }
  .copyright {
    margin: auto;
  }
  .footer-bottom {
    margin: auto;
    background: #fff;
    padding: 15px 0;
    color: #6d6e71;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
    letter-spacing: 1.2px;
  }
  .footer_new {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
  }
  .main_footer .section .main_menu {
    display: grid;
    justify-items: start;
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 1fr);
  }

  .main_footer {
    background: url("https://static.cmereye.com/imgs/2023/08/dc5cf7af0b7775a9.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    padding: 2.4vw 0 0;
    position: relative;
    width: 120%;
    border-radius: 100% 100% 0 0;
    margin-left: -10%;

    & > div {
      max-width: 1280px;
      margin: auto;
    }
    & > .copyright {
      margin-top: 50px;
    }
    & > div:last-child {
      max-width: 100%;
    }
  }

  .mian_nav_text:hover,
  .mian_nav_text_child:hover {
    color: rgb(75, 75, 255) !important;
  }

  .mian_nav_text_eng {
    font-weight: 300 !important;
    font-size: 15px !important;
    line-height: 18px !important;
    letter-spacing: 0.2em !important;
    display: initial;
  }
}

@media screen and (max-width: 768px) {
  .mbMenu {
    .iocn {
      padding: 10px;
    }
  }

  ::v-deep .el-collapse-item__content {
    font-weight: 400;
    font-size: 19px;
    padding: 2vw;
    background-color: #f3fcfe;
    display: contents;

    div {
      background-color: #f3fdff !important;
    }
  }

  .mbMenu {
    padding-top: 20px;
  }

  .pathLink {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    margin-bottom: 30px;
    align-items: flex-start;
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      // width: 50%;
      flex: 1;
      margin-bottom: 15px;
      & > div:nth-child(1) {
        max-width: 22px;
        max-height: 21px;
        margin-right: 10px;
      }
    }
  }
  ::v-deep .el-collapse-item__header {
    font-weight: 400;
    font-size: 19px;
    height: 59px;
    background-color: #f3fdff;
    padding: 0 2vw;
    justify-content: center;
    text-align: center;
    display: flex;
  }
  .mb_footer_eng {
    background: url("https://static.cmereye.com/imgs/2023/08/c005b62af9cd22c1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 23px 29%;
    position: relative;
    width: 150%;
    border-radius: 100% 100% 0 0;
    & > div:nth-child(2) {
      & > div:nth-child(2) {
        padding: 0 15px;
      }
    }
  }
  .main_footer {
    // background: #f3fcfe;
    // padding-top: 5.5vw;
    margin-bottom: 100px;
    overflow: hidden;

    .section {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  .copyright {
    margin-top: 3vw;
    transform: scale(0.6);

    span {
      border-bottom: 1px solid;
    }
  }
  .foot_logo {
    margin: 23px auto;
  }
  .footer-bottom {
    margin: auto;
    background: #fff;
    padding: 15px;
    color: #6d6e71;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
    letter-spacing: 1.2px;
    // transform: scale(0.9);
    margin-left: -15px;
    margin-right: -15px;
    width: 100vw;
  }
}
</style>
