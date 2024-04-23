import { susu, zoe } from '../../assets/images'
import styled, { css } from 'styled-components/macro'
import { FaInstagram } from 'react-icons/fa'
import { IoLogoWechat } from "react-icons/io5";

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 0.6rem;
  margin-top: 0.6rem;
  color: #5C8374;
`

const Instagram = styled(FaInstagram)`
  ${Icons};
  vertical-align: -6px;
`

const WeChat = styled(IoLogoWechat)`
  ${Icons};
  vertical-align: -6px;
`

export const ContactInfo = [
    {
      id: 1,
      name: "Susu",
      avatar: susu,
      alt: "susu_image",
      contact: [
        {
          id: 1,
          type: "WX",
          value: "susuwx",
        },
        {
          id: 2,
          type: "INS",
          value: "susuins",
        },
        {
          id: 3,
          type: "XHS",
          value: "susuxhs",
        },
      // {
      //   id: 4,
      //   qrCode: qrCode,
      // }
      ],
    },
    {
      id: 2,
      name: "Mary",
      avatar: susu,
      alt: "susu_image",
      contact: [
        {
          id: 1,
          type: "WX",
          value: "susuwx",
        },
        {
          id: 2,
          type: "INS",
          value: "susuins",
        },
        {
          id: 3,
          type: "XHS",
          value: "susuxhs",
        },
      // {
      //   id: 4,
      //   qrCode: qrCode,
      // }
      ],
    },
    {
      id: 3,
      name: "Zoe",
      avatar: zoe,
      alt: "zoe_image",
      contact: [
        {
          id: 1,
          type: "WX",
          value: "Zoe33su",
        },
        {
          id: 2,
          type: "INS",
          value: "byzoesu",
        },
        {
          id: 3,
          type: "XHS",
          value:"BYZOESU (4756625893)",
        },
        // {
        //   id: 4,
        //   qrCode: qrCode,
        // }
      ],
    },
  ]
