import { memo, useLayoutEffect } from "react"
import { Button } from "../common/Button"
import { ServicesLink } from "./ServicesLink"
import { ServicesCard } from "./ServicesCard"
import { Icon } from "../common/Icon"
import { Tag } from "./Tag"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import './styles/Services.scss'

export const Services = memo(function Services() {
  // Пример анимации для карточек и блока с остальными услугами, находящимся под секцикй с карточками.

  // gsap.registerPlugin(ScrollTrigger)

  // useLayoutEffect(() => {
  //   const cardsArray = gsap.utils.toArray<HTMLElement>(".services-section__cards__card")

  //   gsap.to(cardsArray[0], {
  //     yPercent: 20,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".services-section__title-and-links",
  //       start: "bottom bottom",
  //       scrub: true
  //     }
  //   })

  //   gsap.to(cardsArray[1], {
  //     yPercent: -34,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".services-section__title-and-links",
  //       start: "bottom bottom",
  //       scrub: true
  //     }
  //   })

  //   gsap.to(cardsArray[2], {
  //     yPercent: 3,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".services-section__title-and-links",
  //       start: "bottom bottom",
  //       scrub: true
  //     }
  //   })

  //   gsap.to(".services-section__services", {
  //     yPercent: -200,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".services-section__cards",
  //       start: "top top",
  //       scrub: true
  //     }
  //   })
  // }, [])

  return (
    <div className="services-section">
      <div className="services-section__marquee">
        <span className="services-section__marquee__text">Место для экспертизы и творчества
          <Icon className="services-section__marquee__text__icon" name="arrow-right" />
        </span>

        <span className="services-section__marquee__text">Место для экспертизы и творчества
          <Icon className="services-section__marquee__text__icon" name="arrow-right" />
        </span>

        <span className="services-section__marquee__text">Место для экспертизы и творчества
          <Icon className="services-section__marquee__text__icon" name="arrow-right" />
        </span>

        <span className="services-section__marquee__text">Место для экспертизы и творчества
          <Icon className="services-section__marquee__text__icon" name="arrow-right" />
        </span>

        <span className="services-section__marquee__text">Место для экспертизы и творчества
          <Icon className="services-section__marquee__text__icon" name="arrow-right" />
        </span>
      </div>

      <div className="services-section__title-and-links">
        <h2 className="services-section__title-and-links__title">УСЛУГИ</h2>

        <div className="services-section__title-and-links__links-block">
          <div className="services-section__title-and-links__links-block__link">
            <ServicesLink title="Для бизнеса" />
          </div>

          <div className="services-section__title-and-links__links-block__link">
            <ServicesLink title="Для территории" />
          </div>
        </div>
      </div>

      <div className="services-section__cards">
        <ServicesCard
            className="services-section__cards__card"
            titleFirstWord="Исследования"
            titleSecondWord="анализ"
            iconName="gloube"
            subtitle="Хорошее начало."
            description="Комплексное погружение в контекст бизнеса, формирование цели и определение ключевых задач проекта"
          >
            <Tag text="Позиционирование" />
            <Tag text="Характер и ценности бренда" />
            <Tag text="Нейминг / слоган" />
            <Tag text="Логотип и фирменный стиль" />
            <Tag text="Брендбук" />
          </ServicesCard>

          <ServicesCard
            className="services-section__cards__card"
            titleFirstWord="Брендинг"
            titleSecondWord="айдентика"
            iconName="snowflake"
            subtitle="Единственный верный ход."
            description="Когда нужно отразить уникальный характер компании, ее ценности и  преимущества - все в запоминающихся образах для коммуникации с аудиторией"
          >
            <Tag text="Позиционирование" />
            <Tag text="Характер и ценности бренда" />
            <Tag text="Нейминг / слоган" />
            <Tag text="Логотип и фирменный стиль" />
            <Tag text="Брендбук" />
          </ServicesCard>

          <ServicesCard
            className="services-section__cards__card"
            titleFirstWord="Стратегия"
            titleSecondWord="продвижение"
            iconName="circle-arrow-up"
            subtitle="Правильное решение для роста."
            description="Когда пора заявить о себе и продумать все до мелочей: от стратегической цели до креативных постов в социальных сетях и публикаций в СМИ"
          >
            <Tag text="Позиционирование" />
            <Tag text="Характер и ценности бренда" />
            <Tag text="Нейминг / слоган" />
            <Tag text="Логотип и фирменный стиль" />
            <Tag text="Брендбук" />
          </ServicesCard>

          <div className="services-section__services">
            <ServicesLink hasDescription title="Разработка сайта" description="Когда пришла пора действовать, но не хватает самого главного" />
            <ServicesLink hasDescription title="Обучение" description="Когда ваша цель - лично во всем разобраться и стать экспертом" />
            <ServicesLink hasDescription title="Консультации" description="Когда хочется сделать своими руками, но остались важные вопросы" />
          </div>
      </div>

      <Button classname="all-services-button" text="Все услуги" />
      <Button classname="duscuss-task-button" hasGradientBackground text="Обсудить задачу" />
    </div>
  )
})