import React from 'react'
import css from './InfoCard.module.scss'
import { Link } from 'react-router-dom'
import DecorationArrow from 'components/DecorationArrow/DecorationArrow'
import Descriptor from 'components/Descriptor/Descriptor'
import Date from 'components/Date/Date'

const InfoCard = ({
  className,
  tag = 'li',
  label,
  date,
  url
}) => {
  const TagName = tag

  return (
    <TagName classNaem={className}>
      <Link className={css.link} to={url}>
        <Descriptor className={css.descriptor} label={label} />
        <Date className={css.date} label={date} />
        <DecorationArrow className={css.icon} />
      </Link>
    </TagName>
  )
}

export default InfoCard
