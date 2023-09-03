import InstagramIcon from '../../../assets/svgs/instagram.svg'

export function InstagramIconLink() {
  return (
    <a href="https://www.instagram.com" target='_blank'>
      <img src={InstagramIcon} alt="Instagram Icon" />
    </a>
  )
}