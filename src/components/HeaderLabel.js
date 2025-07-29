import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HeaderLabel = ({icon, label, href='', rel=null , target=null}) => {
  return (
  <span> <FontAwesomeIcon icon={icon} /> {href ?<a href={href} className="text-blue-600 underline" target={target}  rel={rel} >
            {label}
          </a> : label }
  </span>)
}

export default HeaderLabel