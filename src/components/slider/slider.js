import React, {useState, useRef, useEffect, useMemo} from "react";
import ReactDOM from "react-dom";
import "./slider.scss";

const Slider = ({children: items, buttonRef}) =>{

  // номер активного item
  const [activeItem, setActiveItem] = useState(0);
  // значение скролла
  const [scroll, setScroll] = useState(0);
  // начальные координаты, для свапа в разные стороны
  const [coord, setCoord] = useState(null);
  // максимальное значение до которого можно листать слайдер
  const maxActiveValue = items.length - 1;

  // реф на слайдерблок, необходим, для сброса скролла, при переключении табами с клавиатуры
  const sliderBlock = useRef();

  // создание slider-button
  let buttonCount = [];
  //расчет необходимого кол-ва
  buttonCount.length = Math.ceil(items.length / 4);
  buttonCount.fill(0);

  buttonCount = buttonCount.map((val, id) =>{
    // в зависимости от позиции скролла, навешиваем активный класс
    const className =
      ((scroll === ((id) * -1200))
        && (scroll > ((id + 1) * -1200))) ? `active` : ``;

    return <button
      type="button"
      className={className}
      onClick={() => sliderButtonHandler(id)}
      key={id}></button>;
  });

  // handler для переключения посредством slider-button
  const sliderButtonHandler = (id) =>{
    setScroll(id * -1200);
    setActiveItem(id * 4)
  }

  // обработчик для ввода с клавиатуры
  const controlButtonKeyUp = (evt, status) => evt.key === `Enter` && setItemAndScroll(evt, status);

  // общий обработчик, назначает номер активного item и позицию скролла, в зависимости от status, может листать слайдер как вперед, так и назад. При клике, если есть evt, снимает фокус
  const setItemAndScroll = (evt, status) =>{
    if (status){
      if (activeItem < maxActiveValue){
        setActiveItem((state) => ++state);
        setScroll((state) => state - 300);
      }
    }
    else {
      if (activeItem > 0){
        setActiveItem(activeItem - 1);
        setScroll(scroll + 300);
      }
    }

    evt?.type === `pointerup` && evt?.target.blur();
  }

  // handler для управления табом
  const TabHandler = (id, evt) =>{

    evt.preventDefault();
    // отменяем штатный скролл
    sliderBlock.current.scrollLeft = 0;

    setActiveItem(id);
    setScroll(id * -300);
  }

  // handler для свапов, назначает исходные координаты
  const onPointerDown  = (evt) =>{
    evt.preventDefault();
    setCoord(evt.clientX);
  }

  // handler для свапов, листает слайдер в нужную сторону, в зависимости от конечных координат
  const onPointerUp = (evt) =>{
    if (evt.clientX < coord){
      setItemAndScroll(undefined, true)
    }
    else {
      setItemAndScroll(setItemAndScroll(undefined, false));
    }
  }

  return (
    <div className="image-slider accent">
      <div className="image-slider__wrapper" ref={sliderBlock}>
        <ul className="image-slider__list" style={{
          transform: `translateX(${scroll}px)`
        }} onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
          {<SliderItems onClick={TabHandler}>{items}</SliderItems>}
        </ul>
      </div>

      <OuterControlButton containerRef={buttonRef}>
        <>
          <button
            type="button"
            onPointerUp={(evt) => setItemAndScroll(evt, false)}
            onKeyUp={(evt) =>{
              controlButtonKeyUp(evt, false)
            }}></button>
          <button
            className="right"
            type="button"
            onPointerUp={(evt) => setItemAndScroll(evt, true)}
            onKeyUp={(evt) =>{
              controlButtonKeyUp(evt, true)
            }}></button>
        </>
      </OuterControlButton>
      <div className="image-slider__buttons">
        {buttonCount}
      </div>
    </div>
  );
}

const SliderItems = ({children, onClick}) => children.map(({id, image, title, description}) =>(
  <li key={id}>
    <a href="#"
       className="image-slider__item"
       onFocus={(evt) => {
      onClick(id, evt);
    }}>
      <div className="image-slider__img-block">
        <img src={image} alt="Developer Photo"/>
      </div>
      <h4 className="image-slider__title">{title}</h4>
      <p className="image-slider__description">{description}</p>
    </a>
  </li>
));

// Портал для направляющих кнопок
const OuterControlButton = ({children, containerRef}) =>{

  const node = useMemo(() =>{
    const node = document.createElement(`div`);
    node.classList.add(`control-buttons`);
    return node;
  }, []);

  useEffect(() =>{
    containerRef.current.appendChild(node);
  });

  return ReactDOM.createPortal(
    children,
    node
  );
};

export default Slider;