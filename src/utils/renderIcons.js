import { TbMovie } from 'react-icons/tb';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { RiMovie2Fill } from 'react-icons/ri';
import { ImSearch } from 'react-icons/im';
import { FaRegSadCry } from 'react-icons/fa';

export function renderIcons(param, size) {
  switch (param) {
    case 'movie':
      return <TbMovie size={size} className="contact-form__icon" />;
    case 'back':
      return <IoMdArrowRoundBack size={size} className="contact-form__icon" />;
    case 'film':
      return <RiMovie2Fill size={size} className="contact-form__icon" />;
    case 'search':
      return <ImSearch size={size} className="contact-form__icon" />;
    case 'error':
      return <FaRegSadCry size={size} className="contact-form__icon" />;
    default:
      return <span>icon</span>;
  }
}
