import { facebook, insta, printerest, twitch, twiter } from "@/assets/icons"

const reactWebsites = [
    {
        img: printerest, name: "printerest", link: "https://www.pinterest.com/"
    },
    {
        img: facebook, name: "facebook", link: "https://web.facebook.com"
    },
    {
        img: insta, name: "instagram", link: "https://www.instagram.com/"
    },
    {
        img: twitch, name: "Twitch", link: "https://www.twitch.tv/"
    },
    {
        img: twiter, name: "X", link: "https://twitter.com"
    },
]

const SocialsVM = () => {

    return { reactWebsites }
}

export default SocialsVM