const categories = [
  {
    id: 1,
    title: "Frequently Used",
    category: "Frequently",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 18.9583C14.9476 18.9583 18.9583 14.9475 18.9583 9.99999C18.9583 5.05244 14.9476 1.04166 10 1.04166C5.05245 1.04166 1.04167 5.05244 1.04167 9.99999C1.04167 14.9475 5.05245 18.9583 10 18.9583ZM10.4167 5.83332C10.4167 5.37309 10.0436 4.99999 9.58333 4.99999C9.1231 4.99999 8.75 5.37309 8.75 5.83332V10.4167C8.75 10.6599 8.8563 10.8911 9.04101 11.0494L11.9577 13.5494C12.3071 13.8489 12.8332 13.8084 13.1327 13.459C13.4322 13.1095 13.3918 12.5835 13.0423 12.2839L10.4167 10.0334V5.83332Z"
        />
      </svg>
    ),
  },

  {
    id: 2,
    title: "People",
    category: "People",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.875 10C2.875 6.06497 6.06497 2.875 10 2.875C13.935 2.875 17.125 6.06497 17.125 10C17.125 13.935 13.935 17.125 10 17.125C6.06497 17.125 2.875 13.935 2.875 10ZM10 0.875C4.9604 0.875 0.875 4.9604 0.875 10C0.875 15.0396 4.9604 19.125 10 19.125C15.0396 19.125 19.125 15.0396 19.125 10C19.125 4.9604 15.0396 0.875 10 0.875ZM6.44116 11.3719C6.83257 11.1332 7.34288 11.2556 7.58367 11.6449L7.58578 11.6482C7.58931 11.6536 7.59656 11.6646 7.60753 11.6803C7.62951 11.7119 7.66602 11.762 7.71691 11.8246C7.81939 11.9506 7.97592 12.122 8.18465 12.2931C8.60083 12.6344 9.20146 12.9584 10 12.9584C10.7985 12.9584 11.3992 12.6344 11.8154 12.2931C12.0241 12.122 12.1806 11.9506 12.2831 11.8246C12.334 11.762 12.3705 11.7119 12.3925 11.6803C12.4034 11.6646 12.4107 11.6538 12.4142 11.6484L12.4148 11.6473L12.4158 11.6458L12.4163 11.6449C12.6571 11.2556 13.1674 11.1332 13.5588 11.3719C13.9518 11.6115 14.0761 12.1242 13.8365 12.5172L13.8357 12.5185L13.8348 12.52L13.8327 12.5234L13.8272 12.5322L13.8114 12.5569C13.7986 12.5765 13.7815 12.6022 13.7599 12.6332C13.7167 12.6951 13.6556 12.7784 13.5763 12.876C13.4184 13.0702 13.1843 13.326 12.8722 13.5819C12.2467 14.0948 11.2848 14.625 10 14.625C8.7152 14.625 7.75334 14.0948 7.12785 13.5819C6.81575 13.326 6.58165 13.0702 6.42371 12.876C6.34439 12.7784 6.28325 12.6951 6.24013 12.6332C6.21854 12.6022 6.20138 12.5765 6.18863 12.5569L6.17279 12.5322L6.16733 12.5234L6.16521 12.52L6.16431 12.5185L6.1635 12.5172C5.9239 12.1242 6.04821 11.6115 6.44116 11.3719ZM13.75 7.91667C13.75 8.60702 13.1904 9.16667 12.5 9.16667C11.8096 9.16667 11.25 8.60702 11.25 7.91667C11.25 7.22631 11.8096 6.66667 12.5 6.66667C13.1904 6.66667 13.75 7.22631 13.75 7.91667ZM7.5 9.16667C8.19036 9.16667 8.75 8.60702 8.75 7.91667C8.75 7.22631 8.19036 6.66667 7.5 6.66667C6.80964 6.66667 6.25 7.22631 6.25 7.91667C6.25 8.60702 6.80964 9.16667 7.5 9.16667Z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Animals",
    category: "Animals",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.66667 9.27084C6.51958 9.27084 6.4393 9.32258 6.42261 9.33927C6.09718 9.66471 5.56954 9.66472 5.2441 9.33929C4.91865 9.01386 4.91864 8.48623 5.24407 8.16078C5.64404 7.76079 6.18876 7.60418 6.66667 7.60418C7.14458 7.60418 7.6893 7.76079 8.08928 8.16079C8.41471 8.48623 8.41469 9.01387 8.08924 9.3393C7.7638 9.66473 7.23616 9.66471 6.91073 9.33926C6.89404 9.32257 6.81376 9.27084 6.66667 9.27084Z" />
        <path d="M13.0893 9.33927C13.106 9.32258 13.1863 9.27084 13.3333 9.27084C13.4804 9.27084 13.5607 9.32257 13.5774 9.33926C13.9028 9.66471 14.4305 9.66473 14.7559 9.3393C15.0814 9.01387 15.0814 8.48623 14.7559 8.16079C14.356 7.76079 13.8112 7.60418 13.3333 7.60418C12.8554 7.60418 12.3107 7.76079 11.9107 8.16078C11.5853 8.48623 11.5853 9.01386 11.9108 9.33929C12.2362 9.66472 12.7638 9.66471 13.0893 9.33927Z" />
        <path d="M8.33334 11.0417C8.33334 11.7159 8.81828 12.2084 9.265 12.5189L9.25604 12.5321C9.22944 12.5708 9.1877 12.6287 9.13262 12.6963C9.01912 12.8356 8.86572 12.9955 8.68879 13.1194C8.51194 13.2432 8.34684 13.3067 8.19597 13.3151C8.06201 13.3225 7.86141 13.2919 7.58334 13.0833C7.21515 12.8072 6.69281 12.8818 6.41667 13.25C6.14053 13.6182 6.21515 14.1405 6.58334 14.4167C7.13859 14.8331 7.71925 15.0108 8.28842 14.9792C8.84067 14.9485 9.30056 14.7256 9.64456 14.4848C9.77477 14.3936 9.89343 14.2965 10 14.1994C10.1066 14.2965 10.2252 14.3936 10.3555 14.4848C10.6994 14.7256 11.1593 14.9485 11.7116 14.9792C12.2808 15.0108 12.8614 14.8331 13.4167 14.4167C13.7849 14.1405 13.8595 13.6182 13.5833 13.25C13.3072 12.8818 12.7849 12.8072 12.4167 13.0833C12.1386 13.2919 11.938 13.3225 11.804 13.3151C11.6532 13.3067 11.4881 13.2432 11.3112 13.1194C11.1343 12.9955 10.9809 12.8356 10.8674 12.6963C10.8123 12.6287 10.7706 12.5708 10.744 12.5321L10.735 12.5189C11.1817 12.2084 11.6667 11.7159 11.6667 11.0417C11.6667 10.625 11.25 10.2083 10.8333 10.2083C10.2083 10.2083 10 10.8333 10 10.8333C10 10.8333 9.79167 10.2083 9.16667 10.2083C8.75001 10.2083 8.33334 10.625 8.33334 11.0417Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.209 2.28396C7.55911 2.58406 7.86248 2.88218 8.09078 3.11971C9.29768 2.57122 10.7023 2.57122 11.9092 3.11971C12.1375 2.88218 12.4409 2.58406 12.791 2.28396C13.1812 1.94955 13.6467 1.59766 14.1452 1.32572C14.6345 1.05883 15.2199 0.833344 15.8333 0.833344C16.5813 0.833344 17.0779 1.27571 17.3568 1.77227C17.6151 2.23218 17.7268 2.79097 17.7787 3.28163C17.8744 4.18636 17.7933 5.15477 17.7403 5.63082C18.1232 6.25027 18.9583 7.84437 18.9583 10C18.9583 15.0436 15.0436 18.9583 10 18.9583C4.95643 18.9583 1.04167 15.0436 1.04167 10C1.04167 7.84437 1.87677 6.25027 2.25973 5.63082C2.20675 5.15477 2.12557 4.18636 2.2213 3.28163C2.27321 2.79097 2.38495 2.23218 2.64324 1.77227C2.92212 1.27571 3.41872 0.833344 4.16667 0.833344C4.78008 0.833344 5.36547 1.05883 5.85478 1.32572C6.35332 1.59766 6.81885 1.94955 7.209 2.28396ZM3.92944 5.56026C3.8831 5.18074 3.79381 4.25943 3.87871 3.457C3.92207 3.04723 4.00302 2.7547 4.09642 2.5884C4.12689 2.53414 4.14989 2.50935 4.1598 2.50012L4.16667 2.50001C4.38659 2.50001 4.68663 2.58703 5.05669 2.78888C5.41752 2.9857 5.78532 3.2588 6.12435 3.54939C6.46067 3.83767 6.75168 4.12845 6.95927 4.34824C7.06255 4.4576 7.14394 4.54806 7.1986 4.61011C7.2259 4.64111 7.24646 4.66492 7.25966 4.68035L7.27384 4.69702L7.27687 4.70063C7.54957 5.02739 8.02474 5.09617 8.37892 4.86005C9.34901 4.21333 10.651 4.21333 11.6211 4.86005C11.9754 5.09623 12.4509 5.02714 12.7235 4.70016L12.7262 4.69702L12.7404 4.68035C12.7536 4.66492 12.7741 4.64111 12.8014 4.61011C12.8561 4.54806 12.9375 4.4576 13.0407 4.34824C13.2483 4.12845 13.5393 3.83767 13.8757 3.54939C14.2147 3.2588 14.5825 2.9857 14.9433 2.78888C15.3134 2.58703 15.6134 2.50001 15.8333 2.50001L15.8402 2.50012C15.8501 2.50935 15.8731 2.53414 15.9036 2.5884C15.997 2.7547 16.0779 3.04723 16.1213 3.457C16.2062 4.25943 16.1169 5.18074 16.0706 5.56026C16.032 5.8761 16.1126 6.18172 16.2737 6.42994C16.5228 6.81367 17.2917 8.15329 17.2917 10C17.2917 14.1231 14.1231 17.2917 10 17.2917C5.87691 17.2917 2.70834 14.1231 2.70834 10C2.70834 8.15329 3.47716 6.81367 3.7263 6.42994C3.88744 6.18172 3.968 5.8761 3.92944 5.56026ZM4.1598 2.50012L4.1544 2.50041C4.1544 2.50041 4.15957 2.49933 4.16515 2.49554C4.16515 2.49554 4.16329 2.49687 4.1598 2.50012Z"
        />
      </svg>
    ),
  },

  {
    id: 4,
    title: "Food",
    category: "Food",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.99408 0.244079C9.31952 -0.0813585 9.84716 -0.0813599 10.1726 0.244076C11.0414 1.11286 11.1512 2.23544 11.092 3.02411C11.094 3.02319 11.0961 3.02226 11.0982 3.02133C11.1222 3.01064 11.1468 2.99969 11.172 2.98849C11.6874 2.75943 12.332 2.5 13.3333 2.5C14.7593 2.5 16.2485 2.97594 17.3246 4.11531C18.4132 5.2679 18.9723 6.98562 18.7459 9.24959C18.5232 11.4768 17.6407 13.7801 16.602 15.5296C16.0817 16.4058 15.5039 17.1744 14.9202 17.736C14.3743 18.2612 13.6744 18.75 12.9167 18.75C11.8969 18.75 11.3374 18.48 10.8886 18.2235C10.8636 18.2092 10.8396 18.1954 10.8165 18.1821C10.4982 17.9993 10.3544 17.9167 10 17.9167C9.64563 17.9167 9.50177 17.9993 9.18356 18.1821C9.16047 18.1954 9.13645 18.2092 9.11137 18.2235C8.66257 18.48 8.10316 18.75 7.08334 18.75C6.32561 18.75 5.62576 18.2612 5.07982 17.736C4.49612 17.1744 3.91827 16.4058 3.39805 15.5296C2.35928 13.7801 1.47687 11.4768 1.25414 9.24959C1.02774 6.98562 1.58686 5.2679 2.67541 4.11531C3.75149 2.97594 5.24077 2.5 6.66668 2.5C7.66798 2.5 8.31265 2.75943 8.82805 2.98849C8.85324 2.99969 8.87782 3.01064 8.90182 3.02133C9.09117 3.10569 9.24521 3.17431 9.38981 3.22551C9.40681 3.12504 9.42091 3.0172 9.42955 2.90484C9.47302 2.33977 9.37216 1.80067 8.99408 1.42259C8.66865 1.09715 8.66865 0.569517 8.99408 0.244079ZM3.8871 5.25969C3.20481 5.9821 2.72226 7.18105 2.91254 9.08374C3.10648 11.0232 3.89074 13.0949 4.83114 14.6787C5.3005 15.4692 5.79035 16.1068 6.2353 16.5349C6.71801 16.9992 7.00774 17.0833 7.08334 17.0833C7.73019 17.0833 8.00412 16.9367 8.28448 16.7765C8.31029 16.7617 8.33676 16.7464 8.36399 16.7306C8.71512 16.527 9.19272 16.25 10 16.25C10.8073 16.25 11.2849 16.527 11.636 16.7306C11.6633 16.7464 11.6897 16.7617 11.7155 16.7765C11.9959 16.9367 12.2698 17.0833 12.9167 17.0833C12.9923 17.0833 13.282 16.9992 13.7647 16.5349C14.2097 16.1068 14.6995 15.4692 15.1689 14.6787C16.1093 13.0949 16.8935 11.0232 17.0875 9.08375C17.2778 7.18105 16.7952 5.9821 16.1129 5.25969C15.4182 4.52406 14.4074 4.16667 13.3333 4.16667C12.668 4.16667 12.271 4.32391 11.8489 4.51151C11.8138 4.52708 11.7779 4.54327 11.7411 4.55988C11.315 4.75196 10.7648 5 10 5C9.23525 5 8.68502 4.75196 8.25894 4.55988C8.2221 4.54327 8.18619 4.52708 8.15115 4.51151C7.72905 4.32391 7.33205 4.16667 6.66668 4.16667C5.59259 4.16667 4.58186 4.52406 3.8871 5.25969Z"
        />
      </svg>
    ),
  },

  {
    id: 5,
    title: "Activities",
    category: "Activities",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 1.04166C5.05245 1.04166 1.04167 5.05244 1.04167 9.99999C1.04167 14.9475 5.05245 18.9583 10 18.9583C14.9476 18.9583 18.9583 14.9475 18.9583 9.99999C18.9583 5.05244 14.9476 1.04166 10 1.04166ZM2.73541 9.36729C3.05608 5.63646 6.18609 2.70832 10 2.70832C13.681 2.70832 16.7249 5.43592 17.2209 8.98024C17.2188 8.96531 17.2167 8.95039 17.2145 8.93548C15.2851 8.59716 13.9342 7.96407 12.9851 7.01494C12.036 6.06582 11.4029 4.71495 11.0646 2.78553C10.7171 2.7347 10.3616 2.70832 10 2.70832C9.78684 2.70832 9.57581 2.71752 9.36729 2.73544C9.72477 5.04533 10.4754 6.86232 11.8066 8.19346C13.1377 9.52459 14.9547 10.2753 17.2646 10.6327C16.9618 14.155 14.155 16.9618 10.6327 17.2646C10.2752 14.9547 9.52456 13.1377 8.19343 11.8066C6.8623 10.4754 5.0453 9.72477 2.73541 9.36729ZM8.93545 17.2145C8.59713 15.2851 7.96404 13.9342 7.01492 12.9851C6.0658 12.036 4.71492 11.4029 2.78549 11.0646C3.24994 14.2395 5.76048 16.7501 8.93545 17.2145Z"
        />
      </svg>
    ),
  },

  {
    id: 6,
    title: "Flags",
    category: "Flags",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.4302 1.29276C4.43024 1.29278 4.43016 1.29275 4.4302 1.29276L4.4349 1.29432L4.45351 1.30042C4.47043 1.30593 4.4962 1.31427 4.53002 1.32504C4.5977 1.34657 4.69744 1.37774 4.8228 1.41535C5.07393 1.49069 5.42575 1.59121 5.82712 1.69155C6.6487 1.89694 7.60761 2.08333 8.33334 2.08333C9.01802 2.08333 9.52848 1.91765 10.1532 1.70943L10.1781 1.70111C10.7982 1.49437 11.5311 1.25 12.5 1.25C13.4409 1.25 14.5654 1.48028 15.4105 1.69155C15.8424 1.79954 16.2198 1.90736 16.4895 1.98827C16.6245 2.02879 16.7331 2.06271 16.8087 2.08675C16.8465 2.09878 16.876 2.10834 16.8965 2.11503L16.9204 2.12287L16.9271 2.12508L16.93 2.12604C16.9301 2.12607 16.9302 2.1261 16.6667 2.91667L16.93 2.12604C17.2703 2.23946 17.5 2.55797 17.5 2.91667V12.9167C17.5 13.1845 17.3712 13.4361 17.1539 13.5927C16.9366 13.7493 16.6573 13.7919 16.4032 13.7072L16.3985 13.7057L16.3798 13.6996C16.3629 13.6941 16.3372 13.6857 16.3033 13.675C16.2357 13.6534 16.1359 13.6223 16.0106 13.5846C15.7594 13.5093 15.4076 13.4088 15.0062 13.3085C14.1847 13.1031 13.2257 12.9167 12.5 12.9167C11.8153 12.9167 11.3049 13.0823 10.6802 13.2906L10.6552 13.2989C10.0352 13.5056 9.3023 13.75 8.33334 13.75C7.39241 13.75 6.26799 13.5197 5.4229 13.3085C5.2748 13.2714 5.13313 13.2344 5.00001 13.1985V18.3333C5.00001 18.7936 4.62691 19.1667 4.16668 19.1667C3.70644 19.1667 3.33334 18.7936 3.33334 18.3333V2.08333C3.33334 1.81546 3.46211 1.56392 3.67942 1.4073C3.89668 1.2507 4.17612 1.20812 4.4302 1.29276ZM5.00001 11.4677C5.22897 11.5343 5.51286 11.613 5.82712 11.6915C6.6487 11.8969 7.60761 12.0833 8.33334 12.0833C9.01802 12.0833 9.52848 11.9177 10.1532 11.7094L10.1781 11.7011C10.7982 11.4944 11.5311 11.25 12.5 11.25C13.4409 11.25 14.5654 11.4803 15.4105 11.6915C15.5586 11.7286 15.7002 11.7656 15.8333 11.8015V3.5323C15.6044 3.46569 15.3205 3.38702 15.0062 3.30845C14.1847 3.10306 13.2257 2.91667 12.5 2.91667C11.8153 2.91667 11.3049 3.08235 10.6802 3.29057L10.6552 3.29889C10.0352 3.50563 9.3023 3.75 8.33334 3.75C7.39241 3.75 6.26799 3.51972 5.4229 3.30845C5.2748 3.27143 5.13313 3.23442 5.00001 3.19852V11.4677Z"
        />
      </svg>
    ),
  },

  {
    id: 7,
    title: "Places",
    category: "Places",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.40635 3.60313C4.9512 2.42263 6.13271 1.66666 7.43288 1.66666H12.5671C13.8672 1.66666 15.0487 2.42263 15.5936 3.60313L17.063 6.78679L18.794 5.9213C19.2056 5.71548 19.7062 5.88233 19.912 6.29398C20.1178 6.70563 19.951 7.20619 19.5393 7.41201L18.3244 8.01947C19.1072 8.73956 19.5102 9.80363 19.3749 10.886L18.75 15.8852V17.5C18.75 17.9602 18.3769 18.3333 17.9166 18.3333H14.5833C14.2009 18.3333 13.8676 18.0731 13.7748 17.7021L13.516 16.6667H6.48395L6.22509 17.7021C6.13234 18.0731 5.79902 18.3333 5.41664 18.3333H2.0833C1.62306 18.3333 1.24997 17.9602 1.24997 17.5V15.8852L0.625064 10.886C0.489772 9.80363 0.892779 8.73956 1.67554 8.01947L0.460624 7.41201C0.0489755 7.20619 -0.117878 6.70563 0.0879463 6.29398C0.293771 5.88233 0.794331 5.71548 1.20598 5.9213L2.93697 6.78679L4.40635 3.60313ZM4.63573 7.08332H15.3642L14.0803 4.30156C13.8079 3.71131 13.2171 3.33332 12.5671 3.33332H7.43288C6.7828 3.33332 6.19204 3.71131 5.91962 4.30156L4.63573 7.08332ZM16.4358 8.74999H3.56412L3.07516 9.04337C2.50926 9.38291 2.197 10.0244 2.27886 10.6792L2.9102 15.73C2.91449 15.7642 2.91664 15.7988 2.91664 15.8333V16.6667H4.76599L5.02485 15.6312C5.11759 15.2602 5.45091 15 5.8333 15H14.1666C14.549 15 14.8823 15.2602 14.9751 15.6312L15.2339 16.6667H17.0833V15.8333C17.0833 15.7988 17.0854 15.7642 17.0897 15.73L17.7211 10.6792C17.8029 10.0244 17.4907 9.38291 16.9248 9.04336L16.4358 8.74999ZM3.76131 11.113C3.83697 10.659 4.26633 10.3523 4.7203 10.428L7.2203 10.8447C7.67428 10.9203 7.98096 11.3497 7.9053 11.8037C7.82963 12.2576 7.40028 12.5643 6.9463 12.4887L4.4463 12.072C3.99233 11.9963 3.68564 11.567 3.76131 11.113ZM16.2386 11.113C16.3143 11.567 16.0076 11.9963 15.5536 12.072L13.0536 12.4887C12.5997 12.5643 12.1703 12.2576 12.0946 11.8037C12.019 11.3497 12.3257 10.9203 12.7796 10.8447L15.2796 10.428C15.7336 10.3523 16.163 10.659 16.2386 11.113Z"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },

  {
    id: 8,
    title: "Objects",
    category: "Objects",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.91666 7.49999C2.91666 3.62309 6.12309 0.416656 9.99999 0.416656C13.8769 0.416656 17.0833 3.62309 17.0833 7.49999C17.0833 9.5203 16.0807 10.862 15.2031 11.8383C15.024 12.0376 14.8627 12.2091 14.7155 12.3657C14.4762 12.6203 14.2739 12.8354 14.0924 13.0661C13.8143 13.4194 13.75 13.6189 13.75 13.75V17.5C13.75 18.6506 12.8173 19.5833 11.6667 19.5833H8.33332C7.18273 19.5833 6.24999 18.6506 6.24999 17.5V13.75C6.24999 13.6189 6.18564 13.4194 5.9076 13.0661C5.72605 12.8354 5.52383 12.6203 5.28447 12.3657C5.13727 12.2091 4.97602 12.0376 4.7969 11.8383C3.9193 10.862 2.91666 9.5203 2.91666 7.49999ZM9.99999 2.08332C7.04356 2.08332 4.58332 4.54356 4.58332 7.49999C4.58332 8.89634 5.24734 9.84631 6.03641 10.7242C6.1561 10.8573 6.28918 10.9994 6.42572 11.1451C6.70323 11.4414 6.99499 11.7528 7.21738 12.0354C7.56434 12.4764 7.91666 13.0477 7.91666 13.75V14.5833H12.0833V13.75C12.0833 13.0477 12.4356 12.4764 12.7826 12.0354C13.005 11.7528 13.2967 11.4414 13.5743 11.1451C13.7108 10.9994 13.8439 10.8573 13.9636 10.7242C14.7526 9.84631 15.4167 8.89634 15.4167 7.49999C15.4167 4.54356 12.9564 2.08332 9.99999 2.08332ZM12.0833 16.25H7.91666V17.5C7.91666 17.7301 8.10321 17.9167 8.33332 17.9167H11.6667C11.8968 17.9167 12.0833 17.7301 12.0833 17.5V16.25ZM7.49999 8.33332C7.49999 7.87309 7.87309 7.49999 8.33332 7.49999C8.89581 7.49999 9.37308 7.64301 9.75912 7.90037C9.84644 7.95858 9.92654 8.02093 9.99999 8.08616C10.0734 8.02093 10.1535 7.95858 10.2409 7.90037C10.6269 7.64301 11.1042 7.49999 11.6667 7.49999C12.1269 7.49999 12.5 7.87309 12.5 8.33332C12.5 8.79356 12.1269 9.16666 11.6667 9.16666C11.3958 9.16666 11.2481 9.23197 11.1654 9.28712C11.0774 9.34574 11.0084 9.42986 10.9537 9.53934C10.8973 9.65207 10.865 9.7749 10.848 9.87657C10.8399 9.92544 10.8361 9.96433 10.8345 9.98775C10.8338 9.99746 10.8335 10.0042 10.8333 10.0075V12.0833C10.8333 12.5436 10.4602 12.9167 9.99999 12.9167C9.53975 12.9167 9.16666 12.5436 9.16666 12.0833V10.0075C9.16653 10.0042 9.16621 9.99746 9.16552 9.98775C9.16385 9.96433 9.1601 9.92544 9.15195 9.87657C9.13501 9.7749 9.10267 9.65207 9.0463 9.53934C8.99156 9.42986 8.92254 9.34574 8.83462 9.28712C8.7519 9.23197 8.60417 9.16666 8.33332 9.16666C7.87309 9.16666 7.49999 8.79356 7.49999 8.33332Z"
        />
      </svg>
    ),
  },
];

export default categories;
