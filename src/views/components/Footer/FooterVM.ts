import { footerFacebookIcon, footerInstaIcon, footerLinkedInIcon, footerTikTokIcon } from "@/assets/icons"



const FooterVM = () => {

    const links = [
        {
            img: footerFacebookIcon,
            title: "GDSC University of Boumerdes",
            link: "link"
        },
        {
            img: footerTikTokIcon,
            title: "gdscumbb",
            link: "link"
        },
        {
            img: footerInstaIcon,
            title: "gdscumbb",
            link: "link"
        },
        {
            img: footerLinkedInIcon,
            title: "GDSC University of Boumerdes",
            link: "link"
        },
    ]

    return { links }
}

export default FooterVM