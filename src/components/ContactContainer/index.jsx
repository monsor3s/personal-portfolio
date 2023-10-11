import { Contact, EffectPaper, LinkContainer, LinkIcon, TitleContact, VideoBackground, WrapperContact, WrapperLinks } from "./style";
import imagePaper from "../../assets/paper.svg"
import videoBg from "../../assets/videoBg.mp4"
import { BsInstagram, BsLinkedin } from "react-icons/bs"
import { PiMicrosoftOutlookLogoBold } from "react-icons/pi"
import { RiTwitterXFill } from "react-icons/ri"

const style = {color: "white", fontSize: "2em"}

export default function ContactContainer() {
  return (
    <>
      <Contact>
        <EffectPaper src={imagePaper} alt="Effect paper"/>
        <VideoBackground src={videoBg} autoPlay loop muted />
        <WrapperContact>
          <TitleContact>let&apos;s go work together</TitleContact>
            <WrapperLinks>
              <LinkContainer>
                <LinkIcon href="https://www.linkedin.com/in/marlon-monsores-380408b2/" target="_blank">
                  <BsLinkedin style={style} />
                </LinkIcon>
              </LinkContainer>
              <LinkContainer>
                <LinkIcon href="mailto:marlonmonsores@live.com">
                  <PiMicrosoftOutlookLogoBold style={style} />
                </LinkIcon>
              </LinkContainer>
              <LinkContainer>
                <LinkIcon href="https://www.instagram.com/monsor3scode/" target="_blank">
                  <BsInstagram style={style} />
                </LinkIcon>
              </LinkContainer>
              <LinkContainer>
                <LinkIcon href="https://twitter.com/monsoresdev" target="_blank">
                  <RiTwitterXFill style={style} />
                </LinkIcon>
              </LinkContainer>
            </WrapperLinks>
        </WrapperContact>
      </Contact>
    </>
  )
}
