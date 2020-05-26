import React, { useEffect, useRef, useState } from 'react'
import css from './ContentWithSidebar.module.scss'
import classnames from 'classnames'
import DoctorTopics from 'Pages/DoctorDetails/DoctorTopics/DoctorTopics'
import ScrollTriggers from 'components/ScrollTriggers/ScrollTriggers'
import { useSelector } from 'react-redux'
import SidePromo from 'components/SidePromo/SidePromo'

const SCROLL_TO_ELEMENT_OFFSET = 50

const ContentWithSidebar = ({
  className,
  data,
  sideData,
  page
}) => {
  const fontSize = useSelector(state => state.elastic.curFontSize)
  const [areWaypointsDisabled, setWaypointStatus] = useState(false)
  const refs = useRef({})

  const scrollTriggers = data && data.content
    ? data.content.map(section => ({
      label: section.title,
      type: section.type
    }))
    : []

  const [activeTab, setActiveTab] = useState(scrollTriggers[0].type)
  const createRef = (node, tab) => refs.current[tab] = node

  const handleClickTrigger = (waypoint) => {
    setWaypointStatus(true)
    setActiveTab(waypoint)

    const element = refs.current[waypoint]

    document.documentElement.scrollTo({
      // eslint-disable-next-line no-restricted-globals
      top: element.getBoundingClientRect().top + pageYOffset - SCROLL_TO_ELEMENT_OFFSET * fontSize / 10,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    document.addEventListener('wheel', () => {
      setWaypointStatus(false)
    })
  }, [])

  let content

  switch (page) {
    case 'doctor':
      content = (
        <DoctorTopics
          data={data.content}
          onEnterHandler={(type) => {
            if (areWaypointsDisabled) return

            setActiveTab(type)
          }}
          createRef={createRef}
        />
      )
      break;
    default:
      content = null
      break
  }

  return (
    <div className={classnames(css.wrapper, className)}>
      <div className={css.content}>
        { content }
      </div>
      <div className={css.stickyContainer}>
        <div className={css.sticky}>
          <ScrollTriggers
            activeTab={activeTab}
            list={scrollTriggers}
            onClick={(type) => handleClickTrigger(type)}
          />
          <SidePromo
            className={css.promo}
            materials={sideData.materials}
            ads={sideData.ads}
          />
        </div>
      </div>
    </div>

  )
}

export default React.memo(ContentWithSidebar)